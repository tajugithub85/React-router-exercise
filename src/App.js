import './App.css';
import React from 'react';
import { Colors } from './components/colors'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { RenderColor } from './renderColor';
import { NewColor } from './components/newColor';
import { Homescreen } from './components/homescreen';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route path='/' exact component={Homescreen} />
            <Route path='/colors' exact component={Colors} />
            <Route path={'/colors/new'} exact component={NewColor} />
            <Route path={`/colors/:name`} component={RenderColor} />
            <Route path='*' exact={true} component={Colors} />
          </Switch>
        </div>
      </Router>
    );
  };
};

export default App;