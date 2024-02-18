import { useState } from "react";

import "./App.css";

function App() {
	 const [counter, setCounter]  = useState(0)
	 
	
	 function decrement(){
		if(counter > 0){
			setCounter(counter - 1)

		}
	 }
	return (
		<>
			<div>
				<h1>{counter}</h1>
				<button onClick={increment => {setCounter( counter + 1)}}>increment</button>
		     <button onClick={decrement}>descrement</button>
			</div>
		</>
	);
}

export default App;
