import formidable from 'formidable';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';
import { uploadedDocuments } from './list';

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

  try {
    const form = new formidable.IncomingForm({
      uploadDir,
      keepExtensions: true,
      maxFileSize: 10 * 1024 * 1024, // 10MB limit
    });

    const [fields, files] = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) reject(err);
        resolve([fields, files]);
      });
    });

    if (!files.file) {
      throw new Error('No file uploaded');
    }

    const file = files.file;
    const fileId = uuidv4();
    const fileExt = path.extname(file.originalFilename || '');
    const newFilename = `${fileId}${fileExt}`;
    const newPath = path.join(uploadDir, newFilename);

    // Rename the file to use UUID
    fs.renameSync(file.filepath, newPath);

    // Create document record
    const document = {
      id: fileId,
      title: fields.title || file.originalFilename,
      category: fields.category,
      description: fields.description || '',
      fileType: fileExt.substring(1),
      uploadDate: new Date().toISOString(),
      access: ['Admin', 'Operations'], // Default access for demo
      likes: 0,
      likedBy: [],
      filePath: `/uploads/${newFilename}`,
    };

    // Add to uploaded documents
    uploadedDocuments.push(document);

    res.status(200).json(document);
  } catch (error) {
    console.error('Upload error:', error);
    // Delete any partially uploaded file
    if (error.filepath && fs.existsSync(error.filepath)) {
      fs.unlinkSync(error.filepath);
    }
    res.status(500).json({ error: error.message || 'Error uploading file' });
  }
} 