import { BrowserRouter } from 'react-router-dom';
import Layout from "./components/layout";
// import Footer from "./components/footer";
// import Login from "./pages/login";

const App = () => {
    return (
        <div className="app">
            <BrowserRouter>
                {/*<Login />*/}
                <Layout />
                {/*<Footer />*/}
            </BrowserRouter>
        </div>
    );
};

export default App;
