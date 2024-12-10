const url = "/api/api/search/projects"; // Use the '/api' prefix for proxy to work

export const fetchDevfolioProjects = async () => {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        hackathon_slugs: ["ethkl-24"],
        q: "",
        filter: "all",
        prizes: [],
        prize_tracks: [],
        category: [],
        size: 100,
        tracks: [],
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching projects:", error);
    throw error;
  }
};
