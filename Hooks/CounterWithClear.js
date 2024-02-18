import { useReducer } from "react";


let initialState = 0;

function reducer(state, action){
	 switch(action.type){
 case 'INCREMENT':
	return state + 1;
	
	case 'DECREMENT':
		if(state > 0){

			return state - 1;
		}
		
		case 'CLEAR':
			return state = 0
		
		default :
		return state

	 }
}
function App(){
	const [state, dispatch] = useReducer(reducer, initialState) 

	 return (
		<div>
			<h1>{state}</h1>
			<button onClick={() => {dispatch({type: 'INCREMENT'})}}>inc</button>
			<button onClick={() => {dispatch({type: 'DECREMENT'})}}>dec</button>
			<button onClick={() => {dispatch({type: 'CLEAR'})}} >clear</button>
			</div>
	 )
}

export default App;
