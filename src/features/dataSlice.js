import {createSlice} from "@reduxjs/toolkit"

const initialState= {
    objectId: 512,
     apiData: {}
}

export const dataSLice = createSlice({
    name: "date", 
    initialState, 
    reducers: {
        setData: (state, action) => {
            return { ...state, apiData: action.payload}
        },
        incrementId: (state) => {
            return { ...state, objectId: state.objectId + 1 }
        },
        decrementId: (state) => {
            return { ...state, objectId: state.objectId - 1 }
        },
        inputId: (state, action) => {
            return { ...state, objectId: action.payload}
        },
        clearId: () => {
            return initialState
        }

    }
    
})

export const fetchData = () => {
    const dataThunk = async (dispatch, getState) => {
        let state = getState()
        const response = await fetch(`https://collectionapi.metmuseum.org/public/collection/v1/objects/${state.data.objectId}`)
        const resData =  await response.json()
        dispatch(setData(resData))
    }
    return dataThunk
}
export const { setData, incrementId, decrementId, inputId, clearId } = dataSLice.actions

export default dataSLice.reducer