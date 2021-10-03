import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './sass/style.css'


const initialState = {
  count: 0
}

const counterReducer = (state = initialState, action ) => {
      switch(action.type) {
        case "Increment":

        return {
          count:state.count +1
        }
        case"Decrement":
        return {
          count:state.count -1
        }
        case"Reset":
        return {
          count:0
        }
       
        default:
          return state

      }
}


const store =createStore(counterReducer);

store.subscribe (()=> {
  console.log(store.getState())
})
store.dispatch ({
  type: "Increment"
}
  
)

store.dispatch ({
  type: "Increment"
}
  
)

store.dispatch ({
  type: "Increment"
}
  
)

store.dispatch ({
  type: "Decrement"
}
  
)

const App =()=>{
  return(
    <h1>Hello</h1>
  );
}



reactDom.render(<App />,document.querySelector("#root"));