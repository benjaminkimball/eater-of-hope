import { get } from 'lodash'

export default function config (state = {}, action) {
  return state
}

export const getConfig = (state) => get(state, 'config', {})
