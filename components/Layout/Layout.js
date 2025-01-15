import { useUser } from '../../lib/UserContext';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Layout({ children }) {
  const { user, logout } = useUser();
  const router = useRouter();

  const navigation = [
    { name: 'Dashboard', href: '/dashboard' },
    { name: 'Documents', href: '/dashboard/documents' },
    { name: 'Categories', href: '/dashboard/categories' },
    { name: 'Search', href: '/dashboard/search' },
  ];

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <Link href="/dashboard">
                  <a className="text-primary-dark text-xl font-bold">Hydro Portal</a>
                </Link>
              </div>

              {/* Navigation */}
              <nav className="hidden md:ml-6 md:flex space-x-8">
                {navigation.map((item) => (
                  <Link key={item.name} href={item.href}>
                    <a className={`inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium ${
                      router.pathname === item.href
                        ? 'border-primary text-gray-900'
                        : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700'
                    }`}>
                      {item.name}
                    </a>
                  </Link>
                ))}
              </nav>
            </div>

            {/* User menu */}
            <div className="ml-6 flex items-center">
              <div className="flex items-center">
                <span className="text-sm text-gray-500 mr-4">
                  {user.name} ({user.role})
                </span>
                <button
                  onClick={logout}
                  className="text-sm text-gray-500 hover:text-gray-700"
                >
                  Logout
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main content */}
      <main>
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          {children}
        </div>
      </main>
    </div>
  );
} 