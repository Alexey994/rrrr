import { getAuthUserData } from "./authReducer";

const INITIALIZED_SUCCESS = "INITIAL-SUCCESS";


const initialState = {
    initialized: false,
}

const appReducer = (state = initialState , action) => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
    
        default:
            return state;
    }
}

export const initializeSucces = ()=> ({type: INITIALIZED_SUCCESS});

export const initializeApp = () => (dispatch) => {
   let promise =  dispatch(getAuthUserData());
Promise.all([promise])
.then(() => {
    dispatch(initializeSucces());
})
}

export default appReducer