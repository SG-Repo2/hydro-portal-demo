export const mockDocuments = [
  {
    id: "doc-1",
    title: "Water Treatment Protocol 2025",
    category: "Operations",
    fileType: "pdf",
    uploadDate: "2025-01-01",
    description: "Standard operating procedures for water treatment facilities.",
    access: ["Admin", "Operations"],
    likes: 5,
    likedBy: ["user1", "user2", "user3", "user4", "user5"],
    thumbnailUrl: "/thumbnails/doc-1.png",
    tags: ["protocol", "water-treatment", "SOP"]
  },
  {
    id: "doc-2",
    title: "Environmental Impact Report",
    category: "Environmental",
    fileType: "pdf",
    uploadDate: "2024-12-15",
    description: "Annual environmental impact assessment for hydro facilities.",
    access: ["Admin", "Environmental", "Operations"],
    likes: 3,
    likedBy: ["user1", "user2", "user3"],
    thumbnailUrl: "/thumbnails/doc-2.png",
    tags: ["environmental", "assessment", "annual-report"]
  },
  {
    id: "doc-3",
    title: "Safety Guidelines",
    category: "Safety",
    fileType: "pdf",
    uploadDate: "2024-12-01",
    description: "Updated safety protocols for all facility personnel.",
    access: ["Admin", "Safety", "Operations", "General"],
    likes: 8,
    likedBy: ["user1", "user2", "user3", "user4", "user5", "user6", "user7", "user8"],
    thumbnailUrl: "/thumbnails/doc-3.png",
    tags: ["safety", "guidelines", "protocols"]
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
  id: "user1",
  username: "john.doe",
  role: "Operations",
  name: "John Doe",
  email: "john.doe@hydro-portal.com"
};

export const mockTags = [
  "protocol",
  "water-treatment",
  "SOP",
  "environmental",
  "assessment",
  "annual-report",
  "safety",
  "guidelines",
  "protocols",
  "maintenance",
  "training",
  "emergency",
  "compliance",
  "regulatory",
  "technical"
]; 