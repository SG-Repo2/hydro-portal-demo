import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { generateThumbnail, isPDF } from '../../../lib/pdfUtils';

// Disable the default body parser to handle form data
export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.join(process.cwd(), 'public', 'uploads');

// Ensure upload directory exists
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  let uploadedFile = null;

  try {
    const form = new IncomingForm({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
      multiples: false,
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    const file = Array.isArray(files.file) ? files.file[0] : files.file;
    
    if (!file) {
      throw new Error('No file uploaded');
    }

    if (!fields.category) {
      throw new Error('Category is required');
    }

    uploadedFile = file;
    const fileId = uuidv4();
    const fileExt = path.extname(file.originalFilename || '');
    const newFilename = `${fileId}${fileExt}`;
    const newPath = path.join(uploadDir, newFilename);

    // Rename the file to use UUID
    fs.renameSync(file.filepath || file.path, newPath);

    // Generate thumbnail if it's a PDF
    let thumbnailUrl = null;
    if (await isPDF(newPath)) {
      thumbnailUrl = await generateThumbnail(newPath, fileId);
    }

    const category = String(fields.category).toLowerCase();
    
    // Create document record
    const document = {
      id: fileId,
      title: fields.title || file.originalFilename || file.name,
      category: fields.category,
      description: fields.description || '',
      fileType: fileExt.substring(1),
      uploadDate: new Date().toISOString(),
      access: ['Admin', 'Operations'], // Default access for demo
      likes: 0,
      likedBy: [],
      filePath: `/uploads/${newFilename}`,
      thumbnailUrl: thumbnailUrl || `/images/previews/${category}-preview.png`,
      tags: JSON.parse(fields.tags || '[]'),
    };

    // Return the document data as JSON
    res.status(200).json({ success: true, document });
  } catch (error) {
    console.error('Upload error:', error);
    // Delete any partially uploaded file
    if (uploadedFile && (uploadedFile.filepath || uploadedFile.path) && fs.existsSync(uploadedFile.filepath || uploadedFile.path)) {
      fs.unlinkSync(uploadedFile.filepath || uploadedFile.path);
    }
    res.status(500).json({ error: error.message || 'Error uploading file' });
  }
} 