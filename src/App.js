import React from 'react'
import {Route,Switch} from 'react-router-dom'
import Navbar from './Components/Navbar'

// Navbar Exports 
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Gallery from './Pages/Gallery'
import Cart from './Pages/Cart'


class App extends React.Component {
  render(){
    return (
      <div>
        <Navbar/>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/gallery" component={Gallery} />
          <Route exact path="/cart" component={Cart} />
        </Switch>
      </div>
    );
  }
}

export default App;
