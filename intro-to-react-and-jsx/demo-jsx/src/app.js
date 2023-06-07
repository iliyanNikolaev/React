const rootDomElement = document.getElementById('root');

const rootReactElement = ReactDOM.createRoot(rootDomElement);

//const headingElement = React.createElement('h1', null, 'Hello from React!');

//Use JSX syntax

const headerElement = (
    <header className="header-container">
        <h1>Hello from React!</h1>
        <h2>Slogan here</h2>
        <p>Test test</p>        
    </header>
);

rootReactElement.render(headerElement);