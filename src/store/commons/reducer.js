
import state from './state'

const reducer = (previousState = state, action) => {
    let new_state = { ...previousState }


    switch ( action.type ) {

        default:break;
    }

    return new_state

}

export default reducer