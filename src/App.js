import './App.css';
import Heaader from './components/Heaader';
import Recommand from './components/Recommand';
import Sidebar from './components/Sidebar';
import SearchPage from './components/SearchPage';
import {
  BrowserRouter as Router,
  Switch,
  Route,

} from "react-router-dom";
function App() {
  return (
    <div className="app">
      <Router>


        <Heaader />
        <Switch>
          <Route path="/search/:searchTerm">

            <div className="app_page">
              <Sidebar />
              <SearchPage />
            </div>
          </Route>

        <Route path="/"> <div className="app_page">
          <Sidebar />
          <Recommand />
        </div> 
        </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
