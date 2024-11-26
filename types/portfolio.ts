// ~/types/portfolio.ts
export interface ProjectItem {
    title: string;
    description: string;
    link: string;
    technologies: string[];
    githubLink?: string; // Make it optional
    images: string[]; // Explicitly define as string array
    isArchived?: boolean; // New optional property
    archivedReason?: string; // Optional reason for archiving
  }
  
  // Utility function to normalize images
  export function normalizeProjectImages(item: Omit<ProjectItem, 'images'> & { 
    image?: string, 
    images?: string | string[],
    isArchived?: boolean,
    archivedReason?: string 
  }): ProjectItem {
    // Normalize images
    const images = Array.isArray(item.images) 
      ? item.images 
      : (item.image ? [item.image] : []);
  
    return {
      ...item,
      images,
      isArchived: item.isArchived || false,
      archivedReason: item.archivedReason || ''
    }
  }