function JsxDemo() {



    const jsxSimple = <h1>Hello, world!</h1>; // Creates React Element


    //Embedding Expressions: You can embed JavaScript expressions inside curly braces {}.
    const name = "Alice";
    const greeting = <h1>Hello, {name}!</h1>;


    //Attributes: JSX allows you to use attributes similar to HTML, but you may need to use camelCase for some attributes (like className instead of class).
    const attributeJsx = <div className="container">Content</div>;


    //Conditional Rendering: You can use JavaScript logic for conditional rendering.
    const isLoggedIn = true;
    const message = isLoggedIn ? <h1>Welcome back!</h1> : <h1>Please log in.</h1>;


    return (<>


        {jsxSimple}


        {greeting}

        {attributeJsx}

        {message}


        {isLoggedIn && <>Logged In</>}

    </>);

}

export default JsxDemo;