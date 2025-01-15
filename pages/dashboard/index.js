import Layout from '../../components/Layout/Layout';
import DocumentPreview from '../../components/DocumentPreview';
import UploadWidget from '../../components/UploadWidget';
import { mockDocuments } from '../../lib/mockData';
import { useUser } from '../../lib/UserContext';

export default function Dashboard() {
  const { user } = useUser();

  // Filter documents based on user role
  const accessibleDocuments = mockDocuments.filter(
    doc => doc.access.includes(user.role) || user.role === 'Admin'
  );

  return (
    <Layout>
      <div className="md:flex md:items-center md:justify-between mb-6">
        <div className="flex-1 min-w-0">
          <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
            Dashboard
          </h2>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main content */}
        <div className="lg:col-span-2">
          <div className="bg-white shadow rounded-lg p-6 mb-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Documents</h3>
            <div className="space-y-4">
              {accessibleDocuments.map(doc => (
                <DocumentPreview key={doc.id} document={doc} />
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <UploadWidget />
          
          {/* Quick Stats */}
          <div className="bg-white shadow rounded-lg p-6 mt-6">
            <h3 className="text-lg font-medium text-gray-900 mb-4">Quick Stats</h3>
            <dl className="grid grid-cols-1 gap-5">
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Accessible Documents
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {accessibleDocuments.length}
                </dd>
              </div>
              <div className="px-4 py-5 bg-gray-50 shadow rounded-lg overflow-hidden sm:p-6">
                <dt className="text-sm font-medium text-gray-500 truncate">
                  Your Role
                </dt>
                <dd className="mt-1 text-3xl font-semibold text-gray-900">
                  {user.role}
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </Layout>
  );
} 