import React from "react";
import ReactDOM from "react-dom/client";

// 1. Creating React element using Core React
    // React Element => object => (render on dom) => HTML Element
    const heading = React.createElement("h1", {id: "heading"}, "Creating react element using Core React");
    // const root = ReactDOM.createRoot(document.getElementById("root"));
    // root.render(heading);
    console.log(heading); //object

// 2. Creating React element using JSX
    // JSX => React Element => object => (render on dom) => HTML Element
    // JSX - is not HTML in JS.  it is HTML-Like/XML-Like Syntax. it also become react element after conversion by parcel-babel package
    // JSX is not a part of JS, JSX is transpiled (i.e translated to code that browser or react can understand) by parcel-babel package before it reaches the JS Engine
    // if we have to give attributes to JSX then we have to camelCase the letters
    // if jsx extends to more than 1 line, we need to wrap it up in paranthesis ()
    // proof that jsx is not html : in html, class is given as [class="abc"] but in JSX, class is give as [className="abc"]
    // Explore: how do we write attributes in JSX
    const jsxHeading = (<h1 id="heading" className="heading" tabIndex="1">Creating react
                         element using JSX &#x1F680;</h1>);
    const root = ReactDOM.createRoot(document.getElementById("root"));
    root.render(jsxHeading);
    console.log(jsxHeading); //object
// Note : using core react OR JSX to create react element, both are same things. the only change is syntax



// 3. React Component 
    // always name a Component with capital letters otherwise will get an error
    // - two types of React Component
    //  1. Class Based Componenets - Old way of writing component
    //  2. Functional Componenets  - New way of writing component 

    // A React functional componenet is a normal javascript function that returns some jsx element.
    // OR  A functiion which is returning some jsx element is React functional componenet

    // 3.1 React Functional Component
    const HeadingComponent1 = () => {
        return <h1 className="newheading">This is React Function Component</h1>;
    }

    const HeadingComponent2 = () => <h1 className="newheading">This is React Function Component</h1>;

    const HeadingComponent3 = () => (<h1 className="newheading">
                                    This is React Function Component
                                    </h1>);

    // ! Note: All the 3 Heading component(HeadingComponent1, HeadingComponent2, HeadingComponent3) are same thing

    //Functional component can even return nested JSX element. see example below
    const name = "Akash"; //Example of writing JS inside JSX
    const Example = () => {
     return <div id="Container">
            <h1 className="heading1">This is React Functional Component</h1>
            <HeadingComponent1 />   // !this is component Composition i.e putting component inside a componenet
            { 1000 + 2000}; // !this is how we can use any JavaScript Expression inside React Functional component by wrapping up the code by curly brackets
            { name }
            <h2> {name} </h2>   
        </div>
    } ;
    //how do you render React Functional Component, see below
    const root1 = ReactDOM.createRoot(document.getElementById("root1"));
    root1.render(<Example />);





    //Learning How can we put React Element inside JSX/React Component
    //here title is a React Element
    const title = (<h1 id="maintitle" tabIndex="2"> Acoustic Waves</h1>);

    //this Example1 is a React Component
    const Example1 = () => {
    return <div id="Container 1">
            <h1 className="heading1">This is a Example of How can we add React Element inside JSX using curly Brakets</h1>
            {title}
        </div>
    } ;
    //how do you render React Functional Component, see below
    const root2 = ReactDOM.createRoot(document.getElementById("root2"));
    root2.render(<Example1 />);