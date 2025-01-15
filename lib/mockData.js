export const mockDocuments = [
  {
    id: "doc-1",
    title: "Water Treatment Protocol 2025",
    category: "Operations",
    fileType: "pdf",
    uploadDate: "2025-01-01",
    description: "Standard operating procedures for water treatment facilities.",
    access: ["Admin", "Operations"],
  },
  {
    id: "doc-2",
    title: "Environmental Impact Report",
    category: "Environmental",
    fileType: "pdf",
    uploadDate: "2024-12-15",
    description: "Annual environmental impact assessment for hydro facilities.",
    access: ["Admin", "Environmental", "Operations"],
  },
  {
    id: "doc-3",
    title: "Safety Guidelines",
    category: "Safety",
    fileType: "pdf",
    uploadDate: "2024-12-01",
    description: "Updated safety protocols for all facility personnel.",
    access: ["Admin", "Safety", "Operations", "General"],
  },
];

export const mockCategories = [
  "Operations",
  "Environmental",
  "Safety",
  "Technical",
  "Administrative",
  "Training",
  "Frequently Accessed"
];

export const mockRoles = [
  "Admin",
  "Operations",
  "Environmental",
  "Safety",
  "General"
];

export const mockUser = {
  username: "john.doe",
  role: "Operations",
  name: "John Doe",
  email: "john.doe@hydro-portal.com"
}; 