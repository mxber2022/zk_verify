import React from 'react';
import { ExternalLink, Users } from 'lucide-react';
import type { Project } from '../types/project';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      {project.cover_image && (
        <img
          src={project.cover_image}
          alt={project.name}
          className="w-full h-48 object-cover"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&auto=format&fit=crop&q=60';
          }}
        />
      )}
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{project.name}</h3>
        <p className="text-gray-600 mb-4">{project.tagline}</p>
        
        {project.team_members && project.team_members.length > 0 && (
          <div className="flex items-center gap-2 mb-4">
            <Users className="w-5 h-5 text-gray-500" />
            <div className="flex -space-x-2">
              {project.team_members.map((member, index) => (
                <div
                  key={index}
                  className="relative"
                  title={member.member.name}
                >
                  {member.member.avatar_url ? (
                    <img
                      src={member.member.avatar_url}
                      alt={member.member.name}
                      className="w-8 h-8 rounded-full border-2 border-white"
                      onError={(e) => {
                        e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.member.name)}`;
                      }}
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center border-2 border-white">
                      <span className="text-sm text-blue-600 font-medium">
                        {member.member.name.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {project.submission_url && (
          <a
            href={project.submission_url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-800"
          >
            <ExternalLink className="w-4 h-4" />
            View Project
          </a>
        )}
      </div>
    </div>
  );
};