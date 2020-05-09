export interface iPlantsState {
  isLoading: boolean
  data: any
}

interface iPlantsAction {
  type?: string
  payload?: any
}

const initialState: iPlantsState = {
  isLoading: false,
  data: [],
}

export default function plantsReducer(state: iPlantsState = initialState, action: iPlantsAction): iPlantsState {
  if (action.type === 'GET_PLANTS_PENDING') {
    return { ...state, isLoading: false, data: [] }
  }

  if (action.type === 'GET_PLANTS_FULLFILLED') {
    return { ...state, isLoading: false, data: [...action.payload] }
  }

  return { ...state }
}
