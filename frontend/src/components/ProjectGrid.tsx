import React from 'react';
import { ProjectCard } from './ProjectCard';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { ErrorMessage } from './ui/ErrorMessage';
import type { Project } from '../types/project';

interface ProjectGridProps {
  projects: Project[];
  isLoading: boolean;
  error: Error | null;
  onRetry?: () => void;
}

export const ProjectGrid: React.FC<ProjectGridProps> = ({
  projects,
  isLoading,
  error,
  onRetry
}) => {
  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <ErrorMessage message={error.message} onRetry={onRetry} />;
  }

  if (projects.length === 0) {
    return (
      <div className="text-center text-gray-600 py-8">
        <p className="text-lg">No projects found</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </div>
  );
};