import { mockDocuments } from '../../../lib/mockData';
import { uploadedDocuments } from './list';

export default function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { documentId, userId } = req.body;

    if (!documentId || !userId) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Find document in either mock or uploaded documents
    const mockDoc = mockDocuments.find(doc => doc.id === documentId);
    const uploadedDoc = uploadedDocuments.find(doc => doc.id === documentId);
    const document = mockDoc || uploadedDoc;
    
    if (!document) {
      return res.status(404).json({ error: 'Document not found' });
    }

    // Initialize arrays if they don't exist
    if (!document.likedBy) document.likedBy = [];
    if (!document.likes) document.likes = 0;
    
    const hasLiked = document.likedBy.includes(userId);
    
    if (hasLiked) {
      // Unlike
      document.likedBy = document.likedBy.filter(id => id !== userId);
      document.likes = document.likedBy.length;
    } else {
      // Like
      document.likedBy.push(userId);
      document.likes = document.likedBy.length;
    }

    res.status(200).json({ 
      likes: document.likes,
      hasLiked: !hasLiked
    });
  } catch (error) {
    console.error('Like error:', error);
    res.status(500).json({ error: 'Error processing like' });
  }
} 