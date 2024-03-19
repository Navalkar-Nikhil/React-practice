import React, { useReducer } from "react";

 


const reducer = (state , action) => {
   switch(action){
	case'change kr bey sala':
		return !state;
	default:
		return  state;
   } 
	   
}

function App() {
	
	const [isOn , dispatch] = useReducer(reducer, false );
	const bodycolor ={
		background: isOn? 'red' : 'black',
		minHeight: '100vh',
		width: '100vw'
	}

	return( <div style={bodycolor} >
          
		   <button onClick={() => dispatch("change kr bey sala")}>{isOn? 'Light On' : 'Light off'}</button>

		</div>)
}

export default App;
