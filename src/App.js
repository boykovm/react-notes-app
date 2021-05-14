import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import {Home} from "./pages/Home";
import {About} from "./pages/About";
import {Navbar} from "./components/Navbar";
import {Alert} from "./components/Alert";
import {AlertState} from "./Context/alert/AlertState";
import {FirebaseState} from "./Context/firebase/firebaseState";

function App() {
  return (
      <FirebaseState>
          <AlertState>
              <Router>
                  <Navbar />
                  <div className="container pt-4">
                      <Alert />
                      <Switch>
                          <Route path='/' exact component={Home} />
                          <Route path='/about' exact component={About} />
                      </Switch>
                  </div>
              </Router>
          </AlertState>
      </FirebaseState>
  );
}

export default App;
