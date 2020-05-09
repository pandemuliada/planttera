import { DefaultRootState } from 'react-redux'
import { combineReducers } from 'redux'

import Counter, { iCounterState } from './counter'
import Plants, { iPlantsState } from './plants'

export interface iRootState extends DefaultRootState {
  Counter: iCounterState
  Plants: iPlantsState
}

const rootReducer = combineReducers({
  Counter,
  Plants,
})

export default rootReducer
