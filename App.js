/**
 * 
 * <div>
 *      <div>
 *              <h1> I am h1 tag </h1>
 *              <h2> I am h2 tag </h2>
 *              <h3> I am h3 tag </h3>
 *      </div>
 * </div>
 * 
 */

const parent = React.createElement(
    'div', 
    {id: "parent"}, 
    [
        React.createElement('div',{id: "child1"},
            [
                React.createElement("h1", {key: 1}, "I am h1 tag"),
                React.createElement("h2", {key: 2}, "I am h2 tag"),
                React.createElement("h3", {key: 3}, "I am h3 tag")
            ]),
        React.createElement('div',{id: "child2"},
            [
                React.createElement("h1", {key: 1}, "I am h1 tag"),
                React.createElement("h2", {key: 2}, "I am h2 tag"),
                React.createElement("h3", {key: 3}, "I am h3 tag")
            ]),
    ]
)

// const heading = React.createElement('h1', {id :"heading", abc: "xyz"}, "Hell React..");

// console.log(heading); //Object

const root = ReactDOM.createRoot(document.getElementById("heading"));

root.render(parent);