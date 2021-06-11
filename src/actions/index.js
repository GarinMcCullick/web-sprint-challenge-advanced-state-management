import axios from 'axios';

import { fetchFail } from '../reducers';
import { fetchSuccess } from '../reducers';
import { fetchSmurf } from '../reducers';
import { addSmurf } from '../reducers';
import { errorValue } from '../reducers';

export const fetchSmurfsRequest = () => {
    return {
        type: fetchSmurf,
    }
}

export const fetchSmurfs = () => {
    return (dispatch)=>{
        dispatch(fetchSmurfsRequest)//sets loading to true
        axios.get('http://localhost:3333/smurfs')
        
        .then(response => {
            const smurfs = response
            dispatch(fetchSmurfsRequest(smurfs))
            dispatch(addSmurfs(smurfs))
            console.log('consoleLogData',smurfs);
        })
        .catch(error => {
            const errorMsg = error.message
            dispatch(fetchSmurfsFailure(errorMsg))
        })
    }
}

export const fetchSmurfsSuccess = smurfs => {
    return {
        type: fetchSuccess,
        payload: smurfs
    }
}

export const fetchSmurfsFailure = error => {
    return {
        type: fetchFail,
        payload: error
    }
}

export const addSmurfs = (smurf) => {
    return {
        type: addSmurf,
        payload: smurf.data
    }
}

export const errorState = error => {
    return {
        type: errorValue,
        payload: error
    }
}

//Task List:
//1. Add a thunk action called fetchSmurfs that triggers a loading status display in our application, performs an axios call to retreive smurfs from our server, saves the result of that call to our state and shows an error if one is made.
//2. Add a standard action that allows us to add new smurf (including the name, nickname, position, summary)
//3. Add a standard action that allows us to set the value of the error message slice of state.