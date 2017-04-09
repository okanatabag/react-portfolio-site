import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Contact from './containers/Contact/Contact';

const Links = () => (
    <nav>
        <Link to="/"> Home</Link>
        <Link to={{ pathname: '/about' }}> About</Link>
        <Link to={{ pathname: '/contact' }}> Contact</Link>
    </nav>
)
const App = () => (
    <Router>
        <div>
            <Links />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
        </div>
    </Router>);
export default App;

ReactDOM.render(<App />, document.getElementById('app'));
