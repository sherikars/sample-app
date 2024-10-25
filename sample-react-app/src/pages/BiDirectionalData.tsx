import { useState } from "react";


function EmpName(props: { name: string }) {
    return (<>
        {props.name}
    </>)
}


function UpdateName(props: { updateName: (name: string) => void }) {
    return (
        <button onClick={() => { props.updateName((Math.random() + 1).toString(36).substring(7)) }}>Update Name with random</button>
    )
}


function BiDirectionalData() {

    const [name, setName] = useState("Developer");

    const updateNameEvent = (newName: string) => {
        setName(newName);
    }

    return (<>
        <EmpName name={name}></EmpName>
        <UpdateName updateName={updateNameEvent} ></UpdateName>
    </>);

}




export default BiDirectionalData;