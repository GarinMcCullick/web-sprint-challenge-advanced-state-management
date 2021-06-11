
export const initialState = {
    smurfs: [],
    loading: true,
    error:'',
}

export const fetchFail = "FAILED_FETCH";
export const addSmurf = "ADD_SMURF";
export const fetchSuccess = "FETCH_SUCCESS";
export const errorValue = "ERROR_VALUE";
export const fetchSmurf = "SMURF_FETCH";

const reducer = (state = initialState, action)=>{ 
    switch(action.type){
            case addSmurf:
                return{
                    ...state,
                    smurfs: [...state.smurfs, action.payload],
                }
            case fetchSmurf:
                return{
                    ...state,
                    loading: true
                }
            case fetchSuccess:
                return{
                    loading:false,
                    smurfs: action.payload,
                    error:''
                }
            case fetchFail:
                return{
                    ...state,
                    loading: false,
                    error:action.payload
                }
            case errorValue:
                return{
                    ...state,
                    error:action.payload
                }
                default:
        }
        
    return state;
    
}

export default reducer;

//Task List:
//1. Adds the following state values into the initialState:
//  - an array of smurfs
//  - a boolean indicating if the app is loading
//  - a string indicating a possible error message
//---DONE

//2. Add in the arguments needed to complete a standard reducer function.
//3. Add in a reducer case to accomidate the start of a smurf fetch.
//4. Add in a reducer case to accomidate the successful smurf api fetch.
//5. Add in a reducer cases to accomidate the failed smurf api fetch.
//6. Add in a reducer case to accomidate adding a smurf (including the name, nickname, position, summary and an internally generated id) into your smurf list.
//7. Add in a reducer case that adds in a value to the error message.
//-----Done