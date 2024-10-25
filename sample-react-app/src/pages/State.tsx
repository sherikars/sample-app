import { useState } from "react";

function StateComp() {
    
    let counter = 0;

    const [count, setCount] = useState(0);

    const updateCounterState = () => {
        setCount((prevValue) => prevValue + 1);
        console.log(count);
    }

    return (<>
        Counter Value :{counter} - {count}

        <button onClick={() => {
            counter = counter + 1;
            console.log(counter);
        }} >Update Counter</button>

        <button onClick={updateCounterState} >Update Counter function</button>

    </>);
}

export default StateComp;