export interface TeamMember {
  member: {
    name: string;
    avatar_url?: string;
  };
}

export interface Project {
  id: string;
  name: string;
  tagline: string;
  cover_image?: string;
  submission_url?: string;
  team_members: TeamMember[];
}

export interface ProjectApiResponse {
  projects: Array<{
    node: {
      id?: string;
      name: string;
      tagline: string;
      cover_image?: string;
      submission_url?: string;
      team_members: TeamMember[];
    };
  }>;
}