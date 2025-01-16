import { mockDocuments } from './mockData';

const STORAGE_KEY = 'hydro_portal_documents';

export function getAllDocuments() {
  if (typeof window === 'undefined') return mockDocuments;
  
  let storedDocs = localStorage.getItem(STORAGE_KEY);
  if (!storedDocs) {
    // Initialize with mock data
    localStorage.setItem(STORAGE_KEY, JSON.stringify(mockDocuments));
    return mockDocuments;
  }
  
  try {
    const docs = JSON.parse(storedDocs);
    // Ensure all documents have the required fields
    return docs.map(doc => ({
      ...doc,
      access: doc.access || ['Admin', 'Operations'],
      likes: doc.likes || 0,
      likedBy: doc.likedBy || [],
      tags: doc.tags || [],
    }));
  } catch (error) {
    console.error('Error parsing stored documents:', error);
    return mockDocuments;
  }
}

export function addDocument(document) {
  if (typeof window === 'undefined') return;
  
  const documents = getAllDocuments();
  // Ensure document has all required fields
  const newDocument = {
    ...document,
    access: document.access || ['Admin', 'Operations'],
    likes: document.likes || 0,
    likedBy: document.likedBy || [],
    tags: document.tags || [],
  };
  documents.push(newDocument);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
}

export function updateDocument(documentId, updates) {
  if (typeof window === 'undefined') return;
  
  const documents = getAllDocuments();
  const index = documents.findIndex(doc => doc.id === documentId);
  
  if (index !== -1) {
    documents[index] = { ...documents[index], ...updates };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(documents));
  }
}

export function deleteDocument(documentId) {
  if (typeof window === 'undefined') return;
  
  const documents = getAllDocuments();
  const filteredDocs = documents.filter(doc => doc.id !== documentId);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(filteredDocs));
}

export function likeDocument(documentId, userId) {
  if (typeof window === 'undefined') return;
  
  const documents = getAllDocuments();
  const document = documents.find(doc => doc.id === documentId);
  
  if (document) {
    const hasLiked = document.likedBy.includes(userId);
    if (hasLiked) {
      document.likes--;
      document.likedBy = document.likedBy.filter(id => id !== userId);
    } else {
      document.likes++;
      document.likedBy.push(userId);
    }
    
    updateDocument(documentId, document);
    return { likes: document.likes, hasLiked: !hasLiked };
  }
  
  return null;
}

export function clearDocuments() {
  if (typeof window === 'undefined') return;
  localStorage.removeItem(STORAGE_KEY);
} 