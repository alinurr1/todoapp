import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import TodosPage from './pages/TodosPage';

const App: React.FC = () => {
  return (
    <Router>
      <Navbar />
      <div className="container">
        <Switch>
          <Route component={TodosPage} path="/" exact></Route>
          <Route component={AboutPage} path="/about" exact></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
