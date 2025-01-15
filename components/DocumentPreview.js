import { useUser } from '../lib/UserContext';

export default function DocumentPreview({ document }) {
  const { user } = useUser();
  const hasAccess = document.access.includes(user.role) || user.role === 'Admin';

  return (
    <div className="bg-white shadow rounded-lg p-6 mb-4">
      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-medium text-gray-900">{document.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{document.description}</p>
        </div>
        <span className={`px-2 py-1 text-xs font-medium rounded ${
          hasAccess 
            ? 'bg-green-100 text-green-800'
            : 'bg-red-100 text-red-800'
        }`}>
          {hasAccess ? 'Access Granted' : 'No Access'}
        </span>
      </div>
      
      <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
        <div>
          <span className="text-gray-500">Category:</span>
          <span className="ml-2 text-gray-900">{document.category}</span>
        </div>
        <div>
          <span className="text-gray-500">File Type:</span>
          <span className="ml-2 text-gray-900">{document.fileType.toUpperCase()}</span>
        </div>
        <div>
          <span className="text-gray-500">Upload Date:</span>
          <span className="ml-2 text-gray-900">{new Date(document.uploadDate).toLocaleDateString()}</span>
        </div>
      </div>

      {hasAccess && (
        <div className="mt-4 flex space-x-3">
          <button className="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-primary hover:bg-primary-dark">
            View Document
          </button>
          <button className="inline-flex items-center px-3 py-2 border border-gray-300 text-sm leading-4 font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
            Download
          </button>
        </div>
      )}
    </div>
  );
} 