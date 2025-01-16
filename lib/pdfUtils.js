import * as pdfjsLib from 'pdfjs-dist';
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

// Initialize PDF.js worker
pdfjsLib.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjsLib.version}/pdf.worker.min.js`;

const THUMBNAIL_DIR = path.join(process.cwd(), 'public', 'thumbnails');

// Ensure thumbnail directory exists
if (!fs.existsSync(THUMBNAIL_DIR)) {
  fs.mkdirSync(THUMBNAIL_DIR, { recursive: true });
}

export async function generateThumbnail(pdfPath, thumbnailId) {
  try {
    // Load the PDF file
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const loadingTask = pdfjsLib.getDocument(data);
    const pdf = await loadingTask.promise;

    // Get the first page
    const page = await pdf.getPage(1);
    const viewport = page.getViewport({ scale: 1.0 });

    // Prepare canvas
    const canvas = new OffscreenCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');

    // Render PDF page to canvas
    await page.render({
      canvasContext: context,
      viewport: viewport
    }).promise;

    // Convert canvas to image buffer
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
    const buffer = Buffer.from(imageData.data);

    // Generate thumbnail using sharp
    const thumbnailPath = path.join(THUMBNAIL_DIR, `${thumbnailId}.png`);
    await sharp(buffer, {
      raw: {
        width: canvas.width,
        height: canvas.height,
        channels: 4
      }
    })
      .resize(800, 600, {
        fit: 'contain',
        background: { r: 255, g: 255, b: 255, alpha: 1 }
      })
      .png()
      .toFile(thumbnailPath);

    return `/thumbnails/${thumbnailId}.png`;
  } catch (error) {
    console.error('Error generating thumbnail:', error);
    return null;
  }
}

export async function isPDF(filePath) {
  try {
    const buffer = fs.readFileSync(filePath);
    // Check for PDF magic number (%PDF-)
    return buffer.toString('ascii', 0, 5) === '%PDF-';
  } catch (error) {
    console.error('Error checking PDF:', error);
    return false;
  }
} 