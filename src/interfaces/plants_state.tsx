interface PlantsState {
    plants: Plant[];
    loading: boolean;
    error: Error | null;
  }

  interface PlantSaveState {
    isSaved: boolean;
    error: Error | null;
  }