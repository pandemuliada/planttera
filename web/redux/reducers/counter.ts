export type iCounterState = {
  count: number
}

type iCounterAction = {
  type?: string
}

const initialState: iCounterState = {
  count: 1,
}

export default function counterReducer(state: iCounterState = initialState, action: iCounterAction): iCounterState {
  if (action.type === 'INCREMENT') {
    return { count: state.count + 1 }
  }

  if (action.type === 'DECREMENT') {
    return { count: state.count - 1 }
  }

  return { ...state }
}
