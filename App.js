/*

*Create this 
<div class="parent">
    <div class="child">
        <h1>I am child element</h1>
    </div>
</div>

*/

// const parent = React.createElement("div",{className:"parent"},
//     React.createElement("div",{className:"child"},
//     React.createElement("h1",{id:"heading"},"I am child element")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


/*

* Create this

<div class="parent">
    <div id="child1">
        <h1>I am child1 element</h1>
        <h1>I am child2 element</h1>
    </div>
</div>

*/

// const parent = React.createElement("div",{className:"parent"},
//     React.createElement("div",{className:"child"},
//     [
//         React.createElement("h1",{id:"heading1"},"I am child1 element"),
//         React.createElement("h1",{id:"heading2"},"I am child2 element")
//     ]));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

/*

* Create this

<div class="parent">
    <div id="child1">
        <h1>I am child1 element</h1>
        <h1>I am child2 element</h1>
    </div>
    <div id="child2">
        <h1>I am child1 element</h1>
        <h1>I am child2 element</h1>
    </div>
</div>

*/

const parent = React.createElement("div",{className:"parent"},
    [
        React.createElement("div",{id:"child1"},
        [
            React.createElement("h1",{id:"heading1"},"I am child1 tag"),
            React.createElement("h1",{id:"heading2"},"I am child1 tag")
        ]),
        React.createElement("div",{id:"child2"},
        [
            React.createElement("h1",{id:"heading3"},"I am child2 tag"),
            React.createElement("h1",{id:"heading4"},"I am child2 tag")
        ])
    ]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);