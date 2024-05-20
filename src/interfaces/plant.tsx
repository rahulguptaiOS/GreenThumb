interface Plant {
    id: number;
    common_name: string;
    slug: string;
    scientific_name: string;
    year: number;
    bibliography: string;
    author: string;
    status: string;
    rank: string;
    family_common_name: string | null;  // Allow null value
    genus_id: number;
    image_url: string;
    synonyms: string[];
    genus: string;
    family: string;
    links: {
      self: string;
      plant: string;
      genus: string;
    };
  }
  