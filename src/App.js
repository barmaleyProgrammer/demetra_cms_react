import { BrowserRouter } from 'react-router-dom';
import Layout from "./components/layout";
// import Login from "./pages/login";


const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                {/*<Login />*/}
                <Layout />
            </BrowserRouter>
        </div>
    );
};

export default App;
