import React, { useState } from 'react'

export default function Exam() {
    // Create State
    const [count, setCount] = useState(0)

    // Reducer: xu ly state
    const initialState = {
        number : 0
    }

    const rootReducer = (state = initialState, {type, payload}) => {
        switch (type) {
            case ADD:
                return {
                    ...state,
                    count: state.number + 1
                }
        
            default:
                return state;
        }
    }

    // Action
    // -> nhu vay la hardcode ne
    const ADD = {
        type: 'folder/add',
        payload: 1
    }

    // su dung function create action de tranh bi hard code
    const ActionCreator = (data) => {
        return {
            type: data.type,
            payload: data.payload
        }
    }


    // khi co su kien tren UI -> ban -> Dispath: dung de dua action vao storage
    const HandleClick = () => {
        console.log('click me');
        dispath(ADD)

    }

  return (
    <div>
        <h1>{count}</h1>
        <button onClick={HandleClick}> +1 </button>
    </div>
  )
}
