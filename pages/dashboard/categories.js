import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import DocumentPreview from '../../components/DocumentPreview';
import { mockDocuments, mockCategories } from '../../lib/mockData';
import { useUser } from '../../lib/UserContext';

export default function Categories() {
  const { user } = useUser();
  const [selectedCategory, setSelectedCategory] = useState(mockCategories[0]);

  // Get document counts by category
  const categoryCounts = mockCategories.reduce((acc, category) => {
    acc[category] = mockDocuments.filter(doc => 
      doc.category === category && 
      (doc.access.includes(user.role) || user.role === 'Admin')
    ).length;
    return acc;
  }, {});

  // Filter documents by selected category and user access
  const filteredDocuments = mockDocuments.filter(doc => 
    doc.category === selectedCategory && 
    (doc.access.includes(user.role) || user.role === 'Admin')
  );

  return (
    <Layout>
      <div className="md:flex md:items-center md:justify-between mb-6">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Browse by Category
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Category List */}
        <div className="lg:col-span-1">
          <div className="bg-white shadow rounded-lg overflow-hidden">
            <div className="p-4 sm:p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Categories</h3>
              <nav className="space-y-1" aria-label="Categories">
                {mockCategories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`w-full group flex items-center px-3 py-2 text-sm font-medium rounded-md ${
                      category === selectedCategory
                        ? 'bg-primary text-white'
                        : 'text-gray-600 hover:bg-gray-50'
                    }`}
                  >
                    <span className="truncate">{category}</span>
                    <span
                      className={`ml-auto inline-block py-0.5 px-2 text-xs rounded-full ${
                        category === selectedCategory
                          ? 'bg-primary-dark text-white'
                          : 'bg-gray-100 text-gray-600'
                      }`}
                    >
                      {categoryCounts[category]}
                    </span>
                  </button>
                ))}
              </nav>
            </div>
          </div>
        </div>

        {/* Document List */}
        <div className="lg:col-span-3">
          <div className="bg-white shadow rounded-lg p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-medium text-gray-900">
                {selectedCategory}
              </h3>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-primary-light text-primary">
                {filteredDocuments.length} document(s)
              </span>
            </div>

            {filteredDocuments.length > 0 ? (
              <div className="space-y-4">
                {filteredDocuments.map(doc => (
                  <DocumentPreview key={doc.id} document={doc} />
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="mt-2 text-sm font-medium text-gray-900">
                  No documents found
                </h3>
                <p className="mt-1 text-sm text-gray-500">
                  There are no accessible documents in this category
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
} 