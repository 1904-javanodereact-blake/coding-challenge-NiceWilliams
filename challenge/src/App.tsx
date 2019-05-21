import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './include/bootstrap';
import './App.css';
import { SignInComponent } from './login/sign-in.component';
import { NavComponent } from '../src/nav/nav.components';
import { MonsterGetComponent } from './monster/monsterget.component';
import { MonsternameComponent } from './monster/monstername.component';


const App: React.FC = () => {
  return (
    <BrowserRouter>
    <div className="App">
    <NavComponent/>
    Best App
      <Route path="/sign-in" component={SignInComponent}/>
      <Route path="/monster" component={MonsterGetComponent} />
      <Route path="/monsters" component={MonsternameComponent} />

      
    </div>
    </BrowserRouter>
  );
}

export default App;
