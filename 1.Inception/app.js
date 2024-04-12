//Inserting h1 tag inside the root div using React
// <div id="root">
//   <h1 id="heading"> Hello World from React </h1>
// </div>
const heading = React.createElement(
    "h1", 
    {id:"heading"}, 
    "Hello World from React"
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);


//creating nested structure of html using react
// <div id="parent">
//     <div id="child">
//         <h1>Nesting using React</h1>
//     </div>
// </div> 
const parent1 = React.createElement(
    "div", 
    {id:"parent1"},
    React.createElement(
        "div", 
        {id:"child1"},
        React.createElement("h1", {}, "Nested HTML using REACT")
    )
);
const root1 = ReactDOM.createRoot(document.getElementById("root1"));
root1.render(parent1);
console.log(parent1);


//creating nested structure with siblings of html using react
// <div id="parent1">
//     <div id="child1">
//         <h1>I am sibling 1</h1>
//         <h1>I am sibling 2</h1>
//     </div>
// </div> 
const parent2 = React.createElement(
    "div" ,
    {id:"parent2"}, 
    React.createElement("div", {id:"child2"},
    [React.createElement("h1",{},"I am  sibling1"), React.createElement("h1",{}, "I am sibling 2")])
);
const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(parent2);


//Creating this complex structure using React
// <div id="parent2">
//     <div id="child2">
//         <h1>I am sibling 1</h1>
//         <h1>I am sibling 2</h1>
//     </div>
//     <div id="child3">
//         <h1>I am sibling 1</h1>
//         <h1>I am sibling 2</h1>
//     </div> 
// </div> 

const parent3 = React.createElement("div",{id:"parent3"},[
    React.createElement("div",{id:"child3"}, [
        React.createElement("h1",{},"I am sib 3"),
        React.createElement("h1",{},"I am sib 4"),
    ]),
    React.createElement("div",{id:"child4"}, [
        React.createElement("h1",{},"I am sib 5"),
        React.createElement("h1",{},"I am sib 6"),
    ])
]);

const root3 = ReactDOM.createRoot(document.getElementById("root3"));
root3.render(parent3);