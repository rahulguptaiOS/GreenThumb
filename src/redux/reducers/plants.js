const initialState = {
    plants: [],
    loading: false,
    error: null,
  };
  
  const plantsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'FETCH_PLANTS_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_PLANTS_SUCCESS':
        return { ...state, loading: false, plants: action.payload };
      case 'FETCH_PLANTS_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default plantsReducer;
  