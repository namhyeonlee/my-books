
import { takeEvery } from "@redux-saga/core/effects";
import { createActions, handleAction, handleActions } from "redux-actions";
import { LoginreqType } from "../../type";

interface AuthState {
    token: string | null;
    loading: boolean;
    error: Error | null;

}

const initialState: AuthState = {
    token: null,
    loading: false,
    error: null
}

const prefix = 'my-books/auth';

export const { pending, success, fail } = createActions(
    'PENDING',
    'SUCCESS',
    'FAIL',
    { prefix }
)

const reducer = handleActions<AuthState, string>({
    PENDING: (state) => ({
        ...state,
        loading: true,
        error:null
    }),

     SUCCESS: (state, action) => ({
        token: action.payload,
        loading: false,
        error:null
    }),
     
      FAIL: (state, action: any) => ({
        ...state,
        loading: false,
        error: action.payload
    })
}, initialState, { prefix })


export default reducer;


//saga

export const { login, logout } = createActions("LOGIN", "LOGOUT", { prefix });

// function* loginSaga(action: Action<LoginreqType>) {
//     try {
          
//     } catch {
        
//       }
// }

function* logoutSaga(){}

export function* authSaga() {
    yield takeEvery(`${prefix}/LOGIN`, loginSaga);
    yield takeEvery(`${prefix}/LOGOUT`, logoutSaga);
}

