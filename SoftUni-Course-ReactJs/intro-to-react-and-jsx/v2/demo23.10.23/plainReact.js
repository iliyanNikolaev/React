import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

var domRoot = document.querySelector('#root');

var reactRoot = ReactDOM.createRoot(domRoot);

// const reactH1 = React.createElement('h1', {
//     className: 'react-element',
//     style: { color: 'red' }
// }, 'Hello from React!');

// const reactP = React.createElement('p', {
//     className: 'react-element',
//     style: { color: 'blue' }
// }, 'this is a paragraph');

// const reactElements = [reactH1, reactP];

// const reactDiv = React.createElement('div', {
//     className: 'react-element',
//     style: { backgroundColor: 'lightgray' }
// }, ...reactElements);

var reactDiv = React.createElement(
    'div',
    { className: 'react-element' },
    React.createElement(
        'h1',
        null,
        'Hello from React with JSX'
    ),
    React.createElement(
        'p',
        null,
        'this is a paragraph'
    )
);

reactRoot.render(reactDiv);