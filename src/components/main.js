
import { Routes, Route } from 'react-router-dom';

import Service from "../pages/Service/service";
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
import EditService from "../pages/Service/editService";

const Main = () => {

    return (
        <main className="">
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/logout" element={<Logout />} />
                <Route path="/news" element={<PrivateRoute><News /></PrivateRoute>} />
                <Route path="/service/:id?" element={<PrivateRoute><Service /></PrivateRoute>} />
                <Route path="/editService/:id?" element={<PrivateRoute><EditService /></PrivateRoute>} />
                <Route path="/editNew/:id?" element={<PrivateRoute><EditNew /></PrivateRoute>} />
                <Route path="/createNew" element={<PrivateRoute><CreateNew /></PrivateRoute>} />
                <Route path="/photosHomePage" element={<PrivateRoute><PhotosHomePage /></PrivateRoute>} />
                <Route path="/editPhotoHomePage/:id?" element={<PrivateRoute><EditPhotoHomePage /></PrivateRoute>} />
                <Route path="/addHomePagePhoto" element={<PrivateRoute><AddHomePagePhoto /></PrivateRoute>} />
                <Route path="/createRoom" element={<PrivateRoute><CreateRoom /></PrivateRoute>} />
                <Route path="/main_rooms/:id?" element={<PrivateRoute><MainPhotoRooms /></PrivateRoute>} />
                <Route path="/current_room/:id?" element={<PrivateRoute><CurrentRoom /></PrivateRoute>} />
                <Route path="/editRoomPhoto/:id?" element={<PrivateRoute><EditRoomPhoto /></PrivateRoute>} />
                <Route path="/editRoom/:id?" element={<PrivateRoute><EditRoom /></PrivateRoute>} />
                <Route path="/gallery/:id?" element={<PrivateRoute><Gallery /></PrivateRoute>} />
                <Route path="/createPlace" element={<PrivateRoute><CreatePlace /></PrivateRoute>} />
                <Route path="/editPlace/:id?" element={<PrivateRoute><EditPlace /></PrivateRoute>} />
                <Route path="/currentPlace/:id?" element={<PrivateRoute><CurrentPlace /></PrivateRoute>} />
            </Routes>
        </main>
    );
};

export default Main;
