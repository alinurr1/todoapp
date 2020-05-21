import React from 'react';
import Main from './Pages/Main';
import Contacts from './Pages/Contacts';
import NavBar from './Navigation/NavBar';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Footer from './Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route path={'/'} exact component={Main}/>
        <Route path={'/contacts'} component={Contacts}/>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
