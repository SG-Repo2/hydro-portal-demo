import { useState } from 'react';
import Layout from '../../components/Layout/Layout';
import DocumentPreview from '../../components/DocumentPreview';
import { mockDocuments, mockCategories } from '../../lib/mockData';
import { useUser } from '../../lib/UserContext';

export default function Search() {
  const { user } = useUser();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [dateRange, setDateRange] = useState('all');

  // Filter documents based on search criteria
  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = searchTerm === '' || 
      doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === '' || doc.category === selectedCategory;
    
    const matchesDate = dateRange === 'all' || (() => {
      const docDate = new Date(doc.uploadDate);
      const now = new Date();
      switch (dateRange) {
        case 'week':
          return (now - docDate) <= 7 * 24 * 60 * 60 * 1000;
        case 'month':
          return (now - docDate) <= 30 * 24 * 60 * 60 * 1000;
        case 'year':
          return (now - docDate) <= 365 * 24 * 60 * 60 * 1000;
        default:
          return true;
      }
    })();

    const hasAccess = doc.access.includes(user.role) || user.role === 'Admin';

    return matchesSearch && matchesCategory && matchesDate && hasAccess;
  });

  return (
    <Layout>
      <div className="md:flex md:items-center md:justify-between mb-6">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Search Documents
          </h2>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white shadow rounded-lg p-6 mb-6">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
          {/* Search Input */}
          <div className="col-span-2">
            <label className="block text-sm font-medium text-gray-700">
              Search
            </label>
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-primary focus:border-primary sm:text-sm"
              placeholder="Search by title or description..."
            />
          </div>

          {/* Category Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Category
            </label>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="">All Categories</option>
              {mockCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>
          </div>

          {/* Date Range Filter */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Date Range
            </label>
            <select
              value={dateRange}
              onChange={(e) => setDateRange(e.target.value)}
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-primary focus:border-primary sm:text-sm rounded-md"
            >
              <option value="all">All Time</option>
              <option value="week">Past Week</option>
              <option value="month">Past Month</option>
              <option value="year">Past Year</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-4">
        {filteredDocuments.length > 0 ? (
          <>
            <p className="text-sm text-gray-500">
              Found {filteredDocuments.length} document(s)
            </p>
            {filteredDocuments.map(doc => (
              <DocumentPreview key={doc.id} document={doc} />
            ))}
          </>
        ) : (
          <div className="text-center py-12">
            <h3 className="mt-2 text-sm font-medium text-gray-900">No documents found</h3>
            <p className="mt-1 text-sm text-gray-500">
              Try adjusting your search criteria
            </p>
          </div>
        )}
      </div>
    </Layout>
  );
} 