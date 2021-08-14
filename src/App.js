import './App.css';
import NewAlbumList from "./AlbumList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom";
import useDates from "./Dates";

function App() {
    const dates = useDates()
    return (
        <Router>
        <div className="App">
            <Switch>
            <Route path={'/new-music-archive/:date'}>
                <NewAlbumList />}/>
            </Route>
            <Redirect to={`/new-music-archive/${dates[0].date}`} />
            </Switch>
        </div>
        </Router>
    );
}

export default App;
