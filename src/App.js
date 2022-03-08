import './App.css';
import NewAlbumList from './AlbumList';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom';
import useDates from './Dates';
import NewDetail from "./Detail";

function App() {
  const dates = useDates();
  return (
    <Router basename={`${process.env.PUBLIC_URL}`}>
      <div className='App'>
        <Switch>
          <Route path={`/:date/:index/*`}>
              <NewDetail />
          </Route>
          <Route path={`/:date`}>
            <NewAlbumList />
          </Route>
          <Redirect to={`/${dates[0].date}`} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
