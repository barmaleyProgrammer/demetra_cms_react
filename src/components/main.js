
import { Routes, Route } from 'react-router-dom';




// import About from '../pages/about.js';
// import Home from '../pages/home';
// import Prices from '../pages/prices';
// import Rooms from '../pages/rooms';
// import Contacts from '../pages/contacts';
// import PhotoGallery from "../pages/photo_gallery";
import About from "../pages/about";
import News from "../pages/news/news";
import Login from "../pages/login";
import EditNew from "../pages/news/editNew";
import CreateNew from "../pages/news/createNew";


const Main = () => {

    return (
        <main className="">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/editNew/:id?" element={<EditNew />} />
                <Route path="/createNew" element={<CreateNew />} />
                {/*<Route path="/prices" element={<Prices />} />*/}
                {/*<Route path="/rooms/:slug?" element={<Rooms />} />*/}
                {/*<Route path="/photo_gallery/:slug?" element={<PhotoGallery />} />*/}
                {/*<Route path="/contacts" element={<Contacts />} />*/}
                {/*<Route path="/territory/:id?" element={<Territory />} />*/}
            </Routes>
        </main>
    );
};

export default Main;
