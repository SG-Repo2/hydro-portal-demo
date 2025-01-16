import { useState, useEffect } from 'react';
import { useUser } from '../../lib/UserContext';
import Layout from '../../components/Layout/Layout';
import DocumentPreview from '../../components/DocumentPreview';
import UploadWidget from '../../components/UploadWidget';

export default function Dashboard() {
  const { user, loading: userLoading } = useUser();
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortBy, setSortBy] = useState('date'); // 'date', 'likes'

  const fetchDocuments = async () => {
    try {
      const response = await fetch('/api/documents/list');
      if (!response.ok) {
        throw new Error('Failed to fetch documents');
      }
      const data = await response.json();
      setDocuments(data);
    } catch (err) {
      setError('Failed to load documents');
      console.error('Fetch error:', err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, []);

  const handleUploadComplete = (newDocument) => {
    setDocuments(prev => [newDocument, ...prev]);
  };

  const sortedDocuments = [...documents].sort((a, b) => {
    if (sortBy === 'date') {
      return new Date(b.uploadDate) - new Date(a.uploadDate);
    }
    return (b.likes || 0) - (a.likes || 0);
  });

  if (userLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-900 mb-2">Access Denied</h2>
          <p className="text-gray-600">Please log in to access the dashboard.</p>
        </div>
      </div>
    );
  }

  return (
    <Layout>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="py-8">
          {/* Admin Section */}
          {user?.role === 'Admin' && (
            <div className="mb-8 space-y-6">
              <div className="bg-white shadow rounded-lg p-6">
                <h2 className="text-lg font-medium text-gray-900 mb-4">Admin Dashboard</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="text-primary font-medium">Total Documents</h3>
                    <p className="text-2xl font-bold">{documents.length}</p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="text-primary font-medium">Most Endorsed</h3>
                    <p className="text-2xl font-bold">
                      {documents.length > 0 ? Math.max(...documents.map(doc => doc.likes || 0)) : 0}
                    </p>
                  </div>
                  <div className="bg-primary-50 p-4 rounded-lg">
                    <h3 className="text-primary font-medium">Recent Uploads</h3>
                    <p className="text-2xl font-bold">
                      {documents.filter(doc => {
                        const uploadDate = new Date(doc.uploadDate);
                        const now = new Date();
                        const diffDays = (now - uploadDate) / (1000 * 60 * 60 * 24);
                        return diffDays <= 7;
                      }).length}
                    </p>
                  </div>
                </div>
              </div>
              
              <UploadWidget onUploadComplete={handleUploadComplete} />
            </div>
          )}

          {/* Documents Section */}
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Documents</h2>
              <div className="flex items-center space-x-4 w-full sm:w-auto">
                <label className="text-sm text-gray-500">Sort by:</label>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="mt-1 block w-full sm:w-auto pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
                >
                  <option value="date">Most Recent</option>
                  <option value="likes">Most Endorsed</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="text-center py-12">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                <p className="mt-4 text-gray-500">Loading documents...</p>
              </div>
            ) : error ? (
              <div className="text-center py-12">
                <div className="text-red-600 text-lg mb-2">⚠️ {error}</div>
                <button
                  onClick={fetchDocuments}
                  className="text-primary hover:text-primary-dark text-sm font-medium"
                >
                  Try Again
                </button>
              </div>
            ) : sortedDocuments.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg mb-2">No documents found</p>
                {user?.role === 'Admin' && (
                  <p className="text-sm text-gray-400">
                    Use the upload widget above to add some documents
                  </p>
                )}
              </div>
            ) : (
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {sortedDocuments.map((doc) => (
                  <DocumentPreview key={doc.id} document={doc} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 