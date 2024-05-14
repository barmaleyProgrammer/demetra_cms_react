
import { Routes, Route } from 'react-router-dom';

import About from "../pages/about";
import News from "../pages/news/news";
import Login from "../pages/login";
import EditNew from "../pages/news/editNew";
import CreateNew from "../pages/news/createNew";
import PhotosHomePage from "../pages/photosHomePage/photosHomePage";
import EditPhotoHomePage from "../pages/photosHomePage/editPhotoHomePage";
import AddHomePagePhoto from "../pages/photosHomePage/addHomePagePhoto";


const Main = () => {

    return (
        <main className="">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/about" element={<About />} />
                <Route path="/news" element={<News />} />
                <Route path="/editNew/:id?" element={<EditNew />} />
                <Route path="/createNew" element={<CreateNew />} />
                <Route path="/photosHomePage" element={<PhotosHomePage />} />
                <Route path="/editPhotoHomePage/:id?" element={<EditPhotoHomePage />} />
                <Route path="/addHomePagePhoto" element={<AddHomePagePhoto />} />
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
