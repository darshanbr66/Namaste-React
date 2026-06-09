impo;
const Parent = React.createElement('div', {
    id: 'parent'
}, [
    React.createElement('h1', {}, 'I am h1 tag'),
    React.createElement('div', {
        id: 'child'
    }, React.createElement('h1', {}, 'I am h1 tag'), React.createElement('h2', {}, 'I am h2 tag'))
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(Parent);

//# sourceMappingURL=Namaste-React.6bd02f5a.js.map
