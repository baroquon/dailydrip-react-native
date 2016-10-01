import Immutable from 'immutable'
import { createReducer } from 'redux-immutablejs'
import { FETCH_TOPICS, FETCH_DRIPS, SET_DRIP } from './actions'

export const topics = createReducer(Immutable.Map(), {
  [FETCH_TOPICS]: (state, action) => {
    return action.topics
  },
})

export const drips = createReducer(Immutable.fromJS([]), {
  [FETCH_DRIPS]: (state, action) => action.drips,
})

export const drip = createReducer(Immutable.fromJS({}), {
  [SET_DRIP]: (state, action) => action.drip,
})
