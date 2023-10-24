import '../node_modules/react/umd/react.production.min.js';
import '../node_modules/react-dom/umd/react-dom.production.min.js';

const domRoot = document.querySelector('#root');

const reactRoot = ReactDOM.createRoot(domRoot);

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

const reactDiv = (<div className='react-element'>
    <h1>Hello from React with JSX</h1>
    <p>this is a paragraph</p>
</div>)

reactRoot.render(reactDiv);
