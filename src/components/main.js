
import { Routes, Route } from 'react-router-dom';

import About from "../pages/Profile";
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
import Profile from "../pages/Profile";
import Logout from "./Logout";
import PrivateRoute from "../PrivateRoute";

const Main = () => {

    return (
        <main className="">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/news" element={<PrivateRoute><News /></PrivateRoute>} />
                <Route path="/editNew/:id?" element={<PrivateRoute><EditNew /></PrivateRoute>} />
                <Route path="/createNew" element={<CreateNew />} />
                <Route path="/photosHomePage" element={<PrivateRoute><PhotosHomePage /></PrivateRoute>} />
                <Route path="/editPhotoHomePage/:id?" element={<EditPhotoHomePage />} />
                <Route path="/addHomePagePhoto" element={<AddHomePagePhoto />} />
                <Route path="/createRoom" element={<CreateRoom />} />
                <Route path="/main_rooms/:id?" element={<MainPhotoRooms />} />
                <Route path="/current_room/:id?" element={<CurrentRoom />} />
                <Route path="/editRoomPhoto/:id?" element={<EditRoomPhoto />} />
                <Route path="/editRoom/:id?" element={<EditRoom />} />
                <Route path="/gallery/:id?" element={<PrivateRoute><Gallery /></PrivateRoute>} />
                <Route path="/createPlace" element={<CreatePlace />} />
                <Route path="/editPlace/:id?" element={<EditPlace />} />
                <Route path="/currentPlace/:id?" element={<CurrentPlace />} />
            </Routes>
        </main>
    );
};

export default Main;
