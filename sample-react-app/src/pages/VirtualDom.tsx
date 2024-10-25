import { useEffect, useState } from "react";

function VirtualDom() {
    const [time, setTime] = useState(new Date().toLocaleString())

    useEffect(() => {
        //Implementing the setInterval method
        const interval = setInterval(() => {
            setTime(new Date().toLocaleString());
        }, 1000);

        //Clearing the interval
        return () => clearInterval(interval);
    }, [time]);

    return (
        <>
            <div className="wrapper">
                <p className="App-clock">
                    {time} <br></br>
                    <span>Current Time</span>
                </p>
            </div>
        </>
    )
}
export default VirtualDom;