<h1>Hydro Portal Demo</h1>

This is a proof-of-concept (POC) Next.js (React) application for a portal that enables Hydro employees to upload, manage, and access internal documents. It includes:

    Document uploading, thumbnail generation, and metadata tagging.
    Simple role-based access checks (Admin, Operations, etc.).
    A user login simulation with UserContext.
    Basic search and filtering capabilities.

    Note: For a production system, or a system requiring editorial workflows, advanced security, or robust content management, integration with a WordPress headless CMS (or similar) is recommended. See the Future Enhancements section for details.

<h2>Table of Contents</h2>

    Project Structure
    Key Features
    Getting Started
    Scripts and Tools
    Environment Variables
    Future Enhancements
    License

<h2>Project Structure</h2>

The project is organized as follows:

sg-repo2-hydro-portal-demo/
├── components/
│   ├── DocumentPreview.js      # Displays document info, preview, endorsements
│   ├── TagSelector.js          # Tag management UI
│   ├── UploadWidget.js         # Document upload form
│   └── Layout/
│       └── Layout.js           # Common page layout (header, footer)
├── lib/
│   ├── UserContext.js          # Basic user authentication context (mock)
│   ├── documentStorage.js      # Document data management in localStorage
│   ├── mockData.js             # Mock user, document, and tag data
│   └── pdfUtils.js             # Utilities for PDF thumbnail generation
├── pages/
│   ├── _app.js                 # App-level component (includes UserProvider)
│   ├── index.js                # Landing page (login form)
│   ├── api/
│   │   └── documents/
│   │       ├── like.js         # Endpoint for endorsing/liking a document
│   │       ├── list.js         # Endpoint to fetch documents
│   │       ├── upload.js       # Endpoint to upload a document
│   │       ├── download/
│   │       │   └── [id].js     # Endpoint to download a PDF by ID
│   │       └── preview/
│   │           └── [id].js     # Endpoint to preview a PDF by ID
│   └── dashboard/
│       ├── categories.js       # Browse documents by category
│       ├── index.js            # Dashboard main page (displays documents, upload form)
│       └── search.js           # Search interface for documents
├── public/
│   ├── images/
│   │   └── previews/           # Default placeholder images for categories
│   ├── templates/              # PDF templates created by scripts
│   └── uploads/                # Uploaded files (PDF/doc)
├── scripts/
│   ├── download-previews.js    # Downloads placeholder preview images (for local dev)
│   └── generate-templates.js   # Generates example PDF templates (for local dev)
├── styles/
│   └── globals.css             # Global Tailwind CSS imports and custom styles
├── package.json
├── postcss.config.js
└── tailwind.config.js

Where WordPress Headless CMS Would Fit

    A WordPress setup (in a separate directory or subdomain) could replace or supplement mockData.js and documentStorage.js.
    Instead of storing documents locally in /public/uploads, we would pull them from WordPress’s custom post types using the WP REST API (secured by JWT or other authentication).
    The existing Next.js pages/api routes would integrate with or proxy requests to WordPress for CRUD operations.

Key Features

    User Login Simulation:
        The UserContext simulates a user login flow with a mock user.
        In production, WordPress authentication or an equivalent secure method would be necessary (e.g., JWT tokens).

    Document Dashboard:
        Displays a list of all documents (fetched from a local API /api/documents/list).
        Admin users see an Upload Widget for new document submissions.

    Upload Widget:
        Allows the user to upload a file, assign a category, add a description, and add tags.
        On form submit, it sends a FormData request to /api/documents/upload.

    DocumentPreview:
        Renders a preview image, metadata, tags, and a “like” (endorsement) button.
        Provides quick document download and inline PDF preview.

    Search & Categorization:
        Basic search form at /dashboard/search with filters by category, date range, etc.
        Categories interface at /dashboard/categories.

    Local Document Storage:
        For demo purposes, documentStorage.js writes to browser localStorage.
        In a production setting, you might store file records in WordPress (as custom post types) and the actual files in S3 or your hosting’s filesystem.

Getting Started

    Clone the repo:

git clone https://github.com/YourOrg/sg-repo2-hydro-portal-demo.git
cd sg-repo2-hydro-portal-demo

Install dependencies:

npm install

Run in development mode:

npm run dev

    By default, it runs at http://localhost:3000.

Build for production (Optional):

    npm run build
    npm run start

        This starts a production server at http://localhost:3000.

    Scripts (Optional):
        download-previews.js: Downloads placeholder images into public/images/previews.
        generate-templates.js: Creates sample PDFs in public/templates.

Scripts and Tools
scripts/download-previews.js

    Node script that downloads placeholder images from placehold.co.
    Run via node scripts/download-previews.js (optional).

scripts/generate-templates.js

    Uses PDFKit to generate some demo PDF templates.
    Run via node scripts/generate-templates.js (optional).

Tailwind CSS

    Configured in tailwind.config.js and postcss.config.js.
    Global styles in styles/globals.css.

Environment Variables

Currently, the app does not require specific environment variables. All file storage and user context runs locally in public/uploads or in the browser’s localStorage.

    Note: For a more secure or complex deployment, you would typically set environment variables for:

        API endpoints (e.g., pointing to WordPress).
        Authentication secrets (JWT secret keys).
        Database credentials (if not using WordPress’s built-in DB).

Future Enhancements

    WordPress Headless CMS
        Replace mockData.js with actual WordPress data via REST endpoints.
        Use custom post types (document or resource) in WordPress and store metadata using ACF (Advanced Custom Fields).

    Advanced User Security
        Integrate secure logins (JWT Auth with WP’s jwt-auth plugin or OAuth).
        Replace UserContext.js with real user sessions from WordPress or another identity provider.

    Editorial Workflow
        Editorial approvals, versioning, and role-based editing (non-Admin authors).
        Potentially use WordPress for editorial metadata (publish dates, statuses, etc.).

    Analytics and Auditing
        Track document access, downloads, previews in a dedicated analytics service or database.
        Add dashboards to monitor usage stats and user behavior.

    Performance and Scalability
        Migrate file storage to a CDN or object storage (Amazon S3, Azure Blob, etc.).
        Use Next.js incremental static regeneration for performance gains.

License

This project is for demonstration purposes, intended to show potential workflows and architecture for Hydro Portal. For actual production use, consult your legal and compliance teams regarding licensing, user data handling, and other requirements.
