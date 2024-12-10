import { useState, useEffect } from "react";
import type { Project } from "../types/project";
import { mockProjects } from "../data/mockProjects";
import { fetchDevfolioProjects } from "../services/api";

export const useProjects = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);

  const loadProjects = async () => {
    setIsLoading(true);
    setError(null);
    const data = await fetchDevfolioProjects();
    console.log("data: ", data);
    const projectList = data.hits.hits.map((project: any) => ({
      name: project._source.name,
      tagline: project._source.tagline,
      cover_image: project._source.cover_img,
    }));

    console.log("projectList: ", projectList);
    setProjects(projectList);
    try {
      // Simulate API delay
      setTimeout(() => {
        setProjects(projectList);
        setIsLoading(false);
      }, 1000);
    } catch (err) {
      setError(new Error("Failed to load projects"));
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProjects();
  }, []);

  return { projects, isLoading, error, retry: loadProjects };
};
