
import { Routes, Route } from 'react-router-dom';

import About from "../pages/about";
import News from "../pages/news/news";
import Login from "../pages/login";
import EditNew from "../pages/news/editNew";
import CreateNew from "../pages/news/createNew";
import PhotosHomePage from "../pages/photosHomePage/photosHomePage";
import EditPhotoHomePage from "../pages/photosHomePage/editPhotoHomePage";
import AddHomePagePhoto from "../pages/photosHomePage/addHomePagePhoto";
import MainPhotoRooms from "../pages/rooms/main_rooms";
import CreateRoom from "../pages/rooms/createRoom";
import EditRoomPhoto from "../pages/rooms/editRoomPhoto";
import CurrentRoom from "../pages/rooms/current_room";
import EditRoom from "../pages/rooms/editRoom";
import Gallery from "../pages/gallery/gallery";
import CreatePlace from "../pages/gallery/createPlace";
import EditPlace from "../pages/gallery/editPlace";
import CurrentPlace from "../pages/gallery/currentPlace";

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
                <Route path="/createRoom" element={<CreateRoom />} />
                <Route path="/main_rooms/:id?" element={<MainPhotoRooms />} />
                <Route path="/current_room/:id?" element={<CurrentRoom />} />
                <Route path="/editRoomPhoto/:id?" element={<EditRoomPhoto />} />
                <Route path="/editRoom/:id?" element={<EditRoom />} />
                <Route path="/gallery/:id?" element={<Gallery />} />
                <Route path="/createPlace" element={<CreatePlace />} />
                <Route path="/editPlace/:id?" element={<EditPlace />} />
                <Route path="/currentPlace/:id?" element={<CurrentPlace />} />
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
