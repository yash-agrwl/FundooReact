import './App.css';
import Dashboard from './pages/Dashboard/Dashboard';
import Signup from './pages/signup/signup';
import Signin from './pages/signin/signin';
import Routers from './routers/Router';
import { Provider } from 'react-redux';
import store from './redux/store';
// import Header from './components/Header/Header';
// import TakeNoteOne from './components/TakeNoteOne/TakeNoteOne';
// import TakeNoteTwo from './components/TakeNoteTwo/TakeNoteTwo';

function App() {
    return (
        <div className="App">
            {/* <Signup/> */}
            {/* <Signin/> */}
            {/* <Header/> */}
            {/* <TakeNoteOne/> */}
            {/* <TakeNoteTwo/> */}
            {/* <Dashboard /> */}

            <Provider store={store}>
                <Routers />
            </Provider>

        </div>
    );
}

export default App;
