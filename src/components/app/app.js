import React, { Component } from 'react';
import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorBoundry from '../error-boundry';
import SwapiService from '../../services/swapi-service';
import DummySwapiService from '../../services/dummy-swapi-service';
import StarshipDetails from "../sw-components/starship-details";

import { PeoplePage } from '../pages'
import { PlanetsPage } from '../pages'
import { StarshipsPage } from '../pages'

import { SwapiServiceProvider } from '../swapi-service-context';

import { BrowserRouter as Router, Route } from 'react-router-dom'


import './app.css';

export default class App extends Component {

  state = {
    swapiService: new SwapiService()
  };

  onServiceChange = () => {
    this.setState(({ swapiService }) => {
      const Service = swapiService instanceof SwapiService ?
                        DummySwapiService : SwapiService;

      return {
        swapiService: new Service()
      };
    });
  };


  render() {

    const planet = this.state.showRandomPlanet ?
      <RandomPlanet/> :
      null;



    return (
      <ErrorBoundry>
        <SwapiServiceProvider value={this.state.swapiService} >
          <Router>
            <div className="stardb-app">
              <Header onServiceChange={this.onServiceChange} />
              <RandomPlanet></RandomPlanet>
              <Route path = "/" render = {() => <h2>Welcome to StarDB</h2>} exact/>
              <Route path = "/people:id?" component = {PeoplePage}/>
              <Route path = "/planets" component = {PlanetsPage}/>
              <Route path = "/starships" exact component = {StarshipsPage}/>
              <Route path = "/starships/:id" 
                     render = {({ match }) => {
                       const { id } = match.params;
                       return <StarshipDetails itemId = {id}/>
                     }}/>

            </div>
          </Router>
        </SwapiServiceProvider>
      </ErrorBoundry>
    );
  }
}