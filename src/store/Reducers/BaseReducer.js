import { 
  doTest,
  DO_TEST
} from '../Actions/BaseAction.js'

const initialState = {
  data: 'Initail Data',
  subData: ''
}

const testReducer = (state = initialState, action) => {
  switch(action.type) {
    case DO_TEST:
    return Object.assign({}, state, {
      subData: 'DO_TEST' + ' ' + action.text
    })

    default: 
    return state
  }
}

export default testReducer