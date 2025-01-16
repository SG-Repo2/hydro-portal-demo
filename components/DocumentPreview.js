import { useState } from 'react';
import { useUser } from '../lib/UserContext';

const previewImages = {
  'Safety': '/images/previews/safety-preview.png',
  'Operations': '/images/previews/operations-preview.png',
  'Environmental': '/images/previews/environmental-preview.png',
  'Technical': '/images/previews/technical-preview.png',
  'Administrative': '/images/previews/administrative-preview.png',
  'Training': '/images/previews/training-preview.png',
};

export default function DocumentPreview({ document }) {
  const { user } = useUser();
  const [showPreview, setShowPreview] = useState(false);
  const [likes, setLikes] = useState(document.likes);
  const [hasLiked, setHasLiked] = useState(document.likedBy?.includes(user.id));
  const [isLoading, setIsLoading] = useState(false);
  
  const hasAccess = document.access.includes(user.role) || user.role === 'Admin';
  const previewImage = previewImages[document.category] || '/images/previews/default-preview.png';

  const handleLike = async () => {
    if (isLoading) return;
    
    setIsLoading(true);
    try {
      const response = await fetch('/api/documents/like', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          documentId: document.id,
          userId: user.id,
        }),
      });

      if (!response.ok) throw new Error('Failed to process like');
      
      const data = await response.json();
      setLikes(data.likes);
      setHasLiked(data.hasLiked);
    } catch (error) {
      console.error('Like error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div 
      className="group relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      onMouseEnter={() => hasAccess && setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
    >
      {/* Preview Image */}
      <div className="aspect-w-16 aspect-h-9 bg-gray-100">
        <img
          src={previewImage}
          alt={`Preview of ${document.title}`}
          className="object-cover w-full h-full rounded-t-xl"
        />
      </div>

      {/* Document Preview Overlay */}
      {showPreview && hasAccess && (
        <div className="absolute inset-0 bg-black bg-opacity-90 transition-opacity duration-300 flex items-center justify-center">
          <div className="p-4 w-full h-full">
            <iframe
              src={`/api/documents/preview/${document.id}`}
              className="w-full h-full rounded-lg shadow-lg"
              title={`Preview of ${document.title}`}
            />
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2 hover:line-clamp-none transition-all duration-200">
              {document.title}
            </h3>
            <p className="mt-1 text-sm text-gray-500 line-clamp-2">
              {document.description}
            </p>
          </div>
          <span className={`ml-4 inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
            hasAccess 
              ? 'bg-green-100 text-green-800'
              : 'bg-red-100 text-red-800'
          }`}>
            {hasAccess ? 'Access Granted' : 'No Access'}
          </span>
        </div>

        {/* Metadata Grid */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wide">Category</span>
            <span className="mt-1 text-sm font-medium text-gray-900">{document.category}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wide">File Type</span>
            <span className="mt-1 text-sm font-medium text-gray-900">{document.fileType.toUpperCase()}</span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wide">Upload Date</span>
            <span className="mt-1 text-sm font-medium text-gray-900">
              {new Date(document.uploadDate).toLocaleDateString()}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-xs text-gray-500 uppercase tracking-wide">Endorsements</span>
            <span className="mt-1 text-sm font-medium text-gray-900">{likes}</span>
          </div>
        </div>

        {/* Actions */}
        {hasAccess && (
          <div className="flex items-center justify-between pt-4 border-t border-gray-100">
            <div className="flex space-x-3">
              <button 
                className="inline-flex items-center px-3 py-2 border border-transparent text-sm font-medium rounded-lg shadow-sm text-white bg-primary hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary transition-colors duration-200"
                onClick={() => window.open(`/api/documents/download/${document.id}`, '_blank')}
              >
                <svg className="h-4 w-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download
              </button>
              <button
                onClick={handleLike}
                disabled={isLoading}
                className={`inline-flex items-center px-3 py-2 border text-sm font-medium rounded-lg transition-colors duration-200 ${
                  hasLiked
                    ? 'border-primary text-primary bg-primary-50 hover:bg-primary-100'
                    : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
                }`}
              >
                <svg
                  className={`h-4 w-4 mr-2 ${hasLiked ? 'text-primary' : 'text-gray-400'}`}
                  fill={hasLiked ? 'currentColor' : 'none'}
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                  />
                </svg>
                {isLoading ? '...' : hasLiked ? 'Endorsed' : 'Endorse'}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
} 