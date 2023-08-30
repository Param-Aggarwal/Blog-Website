import Navbar from './navbar';
import Home from './home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Create from './Create';
import BlogContent from './BlogContent';
import NotFound from './NotFound';
import Search from './Search.js'
import Edit from "./Edit.js"
import Register from './Register';
import { useState } from 'react';
import { LoginContext } from './Context';

// edit with tags 

function App() {
  const [username, setUsername] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  
  return (
    <Router>
      <div className="App">
        <LoginContext.Provider value={{ username, setUsername, isLogged, setIsLogged }} > 
          <Navbar />
        </LoginContext.Provider>
        
      <div className="content">
          <Switch>
            <Route exact path="/"> <Home /> </Route>
            <Route path='/search'> <Search />  </Route>
            <Route path="/blogs/:id"> <BlogContent /> </Route>
            <Route path="/edit/:id"> <Edit /> </Route>
            <Route path="/create"> <Create />  </Route>
            <LoginContext.Provider value={{ username, setUsername, isLogged, setIsLogged}} > 
              <Route path="/register">  <Register /> </Route>
            </LoginContext.Provider>
            <Route path="/*"> <NotFound /> </Route>
        </Switch>
      </div>
    </div>

    </Router>
    
  );
}

export default App;
