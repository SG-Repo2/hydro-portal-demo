import { mockDocuments } from '../../../lib/mockData';
import fs from 'fs';
import path from 'path';

// In-memory store for uploaded documents (in a real app, this would be a database)
let uploadedDocuments = [];

export default function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Combine mock documents with uploaded documents
    const allDocuments = [...mockDocuments, ...uploadedDocuments];
    
    // Sort by upload date (newest first)
    allDocuments.sort((a, b) => new Date(b.uploadDate) - new Date(a.uploadDate));

    res.status(200).json(allDocuments);
  } catch (error) {
    console.error('List error:', error);
    res.status(500).json({ error: 'Error fetching documents' });
  }
}

// Export for use in other API routes
export { uploadedDocuments }; 