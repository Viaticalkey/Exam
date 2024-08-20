function Counter() {
	// Declare a state variable `count` with initial value 0
	const [count, setCount] = useState(0);

	return (
    	<div>
        	<p>Current count: {count}</p>
        	<button onClick={() => setCount(count + 1)}>Increment</button>
    	</div>
	);
}

export default Counter;
//Dette er bare en test.