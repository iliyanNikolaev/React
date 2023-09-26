var rootDomElement = document.getElementById('root');

var rootReactElement = ReactDOM.createRoot(rootDomElement);

//const headingElement = React.createElement('h1', null, 'Hello from React!');

//Use JSX syntax

var headerElement = React.createElement(
    "header",
    { className: "header-container" },
    React.createElement(
        "h1",
        null,
        "Hello from React!"
    ),
    React.createElement(
        "h2",
        null,
        "Slogan here"
    ),
    React.createElement(
        "p",
        null,
        "Test test"
    )
);

rootReactElement.render(headerElement);