import './App.css';
import NewAlbumList from "./AlbumList";
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Dates from "./Dates";

function App() {
    return (
        <Router>
        <div className="App">
            <Switch>
            <Route path={'/:date'}>
                <NewAlbumList />}/>
            </Route>
            </Switch>
        </div>
        </Router>
    );
}

export default App;
