// Interface for the API response data
interface ApiResponse {
    data: Plant[];  
    links: {
        self: string;
        first: string;
        next: string;
        last: string;
    };
    meta: {
        total: number;
    }
  }