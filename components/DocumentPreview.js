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
  const [likes, setLikes] = useState(document.likes);
  const [hasLiked, setHasLiked] = useState(document.likedBy?.includes(user.id));
  const [isLoading, setIsLoading] = useState(false);
  const [isPreviewOpen, setIsPreviewOpen] = useState(false);
  
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

  const handleDownload = () => {
    window.open(`/api/documents/download/${document.id}`, '_blank');
  };

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300">
      {/* Preview Image with Quick Actions Overlay */}
      <div className="relative">
        <div className="aspect-w-16 aspect-h-9 bg-gray-100">
          <img
            src={previewImage}
            alt={`Preview of ${document.title}`}
            className="object-cover w-full h-full rounded-t-xl"
          />
        </div>
        
        {/* Quick Actions Overlay */}
        {hasAccess && (
          <div className="absolute inset-0 bg-black bg-opacity-0 hover:bg-opacity-50 transition-all duration-300 flex items-center justify-center gap-4 opacity-0 hover:opacity-100">
            <button
              onClick={handleDownload}
              className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all duration-200"
              title="Download Document"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
            </button>
            <button
              onClick={() => setIsPreviewOpen(true)}
              className="p-3 bg-white rounded-full hover:bg-primary hover:text-white transition-all duration-200"
              title="Preview Document"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </button>
          </div>
        )}
      </div>

      {/* Document Info */}
      <div className="p-6">
        {/* Header */}
        <div className="flex justify-between items-start mb-4">
          <div className="flex-1">
            <h3 className="text-lg font-semibold text-gray-900 line-clamp-2">
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
          <div className="flex items-center justify-end pt-4 border-t border-gray-100">
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
        )}
      </div>

      {/* Preview Modal */}
      {isPreviewOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" aria-labelledby="modal-title" role="dialog" aria-modal="true">
          <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
            <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
            <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">&#8203;</span>
            <div className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-5xl sm:w-full">
              <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mt-3 text-center sm:mt-0 sm:text-left w-full">
                    <div className="mt-2">
                      <iframe
                        src={`/api/documents/preview/${document.id}`}
                        className="w-full h-[80vh] rounded-lg"
                        title={`Preview of ${document.title}`}
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                <button
                  type="button"
                  className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                  onClick={() => setIsPreviewOpen(false)}
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
} 