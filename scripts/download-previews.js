const https = require('https');
const fs = require('fs');
const path = require('path');

const previewsDir = path.join(process.cwd(), 'public', 'images', 'previews');

// Ensure previews directory exists
if (!fs.existsSync(previewsDir)) {
  fs.mkdirSync(previewsDir, { recursive: true });
}

// Placeholder images from placehold.co
const previews = {
  'safety-preview.png': 'https://placehold.co/800x450/FF4444/FFFFFF/png?text=Safety+Document',
  'operations-preview.png': 'https://placehold.co/800x450/4444FF/FFFFFF/png?text=Operations+Document',
  'environmental-preview.png': 'https://placehold.co/800x450/44FF44/FFFFFF/png?text=Environmental+Document',
  'technical-preview.png': 'https://placehold.co/800x450/FF44FF/FFFFFF/png?text=Technical+Document',
  'administrative-preview.png': 'https://placehold.co/800x450/FFFF44/FFFFFF/png?text=Administrative+Document',
  'training-preview.png': 'https://placehold.co/800x450/44FFFF/FFFFFF/png?text=Training+Document',
  'default-preview.png': 'https://placehold.co/800x450/888888/FFFFFF/png?text=Document+Preview'
};

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const filePath = path.join(previewsDir, filename);
    const file = fs.createWriteStream(filePath);
    
    https.get(url, response => {
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        console.log(`Downloaded ${filename}`);
        resolve();
      });
    }).on('error', err => {
      file.close();
      fs.unlink(filePath, () => {
        reject(err);
      });
    });
  });
}

async function downloadAllPreviews() {
  console.log('Downloading preview images...');
  
  for (const [filename, url] of Object.entries(previews)) {
    try {
      await downloadImage(url, filename);
    } catch (error) {
      console.error(`Failed to download ${filename}:`, error);
    }
  }
  
  console.log('All preview images downloaded successfully!');
}

downloadAllPreviews(); 