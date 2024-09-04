import axios from 'axios';

const connect = axios.create({
    // baseURL: `${window.location.protocol}//${window.location.host}/api`,
    // baseURL: `${window.location.protocol}//127.0.0.1:8000/api`,
    baseURL: (process.env.NODE_ENV === 'development') ? 'http://127.0.0.1:8000/api' : `${window.location.protocol}//api.demetra.fish/api`,
    // baseURL: (process.env.NODE_ENV === 'development') ? `${window.location.protocol}//api.demetra.fish/api` : 'http://127.0.0.1:8000/api',
    withCredentials: false,
    responseType: 'json',
    maxRedirects: 0,
    // timeout: 1000,
    headers: {'Content-Type': 'application/json'}
});

connect.interceptors.request.use((config) => {
    const token = localStorage.getItem('accessToken') || '';
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    connect.defaults.withCredentials = false;
    return config;
}, (error) => Promise.reject(error));

connect.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // Показать сообщение о недостаточных правах
            alert('Для цієї дії недостатньо прав.');
            // Вернуть специальное значение, чтобы остановить распространение ошибки
            return Promise.resolve({ handled: true });
        }
        return Promise.reject(error); // Пропустить другие ошибки дальше
    }
);

export const signIn = (data) => {
    return connect.post('/auth/login', data).then((res) => {
        localStorage.setItem('accessToken', res.data.accessToken);
        return res.data;
    });
};

export const me = () => {
    return connect.get('/auth/whoami').then((res) => {
        localStorage.setItem('user', JSON.stringify(res.data));
        return res.data;
    });
};


export const userList = () => {
    return connect.get('/users').then((res) => res.data);
};

export const userDelete = (id) => {
    return connect.delete(`/users/${id}`).then((res) => res.data);
};
export const userUpdate = (payload) => {
    return connect.put(`/users/${payload.id}`, payload).then((res) => res.data);
};

export const userCreate = (payload) => {
    return connect.post('/users/', payload).then((res) => res.data);
};

export const userRestore = (id) => {
    return connect.get(`/users/${id}/restore`).then((res) => res.data);
};

export const photoInfo = (id) => {
    return connect.get(`/homepagephotos/${id}`).then((res) => res.data);
};

export const setActivePhoto = ({ id, is_active }) => {
    return connect.get(`homepagephotos/${id}/active/${is_active}`).then((res) => res.data);
};

export const homePhotoDelete = (id) => {
    return connect.delete(`/homepagephotos/${id}`).then((res) => res.data);
};
export const photoEdit = (payload) => {
    return connect.put(`/homepagephotos/${payload.id}`, payload).then((res) => res.data);
};
export const photosList = () => {
    return connect.get('/homepagephotos?inActive=true').then((res) => res.data);
};

export const addHomePagePhoto = (payload) => {
    return connect.post('/homepagephotos/', payload).then((res) => res.data);
};

export const homePhotoPagePosition = (payload) => {
    const url = (payload.action === 'up') ? `/homepagephotos/${payload.id}/position/up` : `/homepagephotos/${payload.id}/position/down`;
    return connect.get(url).then((res) => res.data);
};

export const newsList = () => {
    return connect.get('/news?inActive=true').then((res) => res.data);
};

export const newoneCreate = (payload) => {
    return connect.post('/news/', payload).then((res) => res.data);
};

export const setActiveNews = ({ id, is_active }) => {
    return connect.get(`/news/${id}/active/${is_active}`).then((res) => res.data);
};
export const newoneDelete = (id) => {
    return connect.delete(`/news/${id}`).then((res) => res.data);
};

export const newoneInfo = (id) => {
    return connect.get(`/news/${id}`).then((res) => res.data);
};

export const newoneEdit = (payload) => {
    return connect.put(`/news/${payload.id}`, payload).then((res) => res.data);
};

export const roomList = () => {
    return connect.get('/room').then((res) => res.data);
}
export const createRoom = (payload) => {
    return connect.post('/room', payload).then((res) => res.data);
}
export const showRoom = (id) => {
    return connect.get(`/room/${id}`).then((res) => res.data);
};

export const destroyRoom = (id) => {
    return connect.delete(`/room/${id}`).then((res) => res.data);
};
export const updateRoom = (payload) => {
    return connect.put(`/room/${payload.id}`, payload).then((res) => res.data);
};

export const getRoomPhoto = (room_id) => {
    return connect.get(`/room/${room_id}/photo`).then((res) => res.data);
}
export const createRoomPhoto = (payload) => {
    return connect.post(`/room/${payload.room_id}/photo`, payload).then((res) => res.data);
}
export const updateRoomPhoto = (payload) => {
    return connect.put(`/room/${payload.room_id}/photo/${payload.id}`, payload).then((res) => res.data);
};
export const destroyRoomPhoto = (payload) => {
    return connect.delete(`/room/${payload.room_id}/photo/${payload.id}`).then((res) => res.data);
};

export const placeList = () => {
    return connect.get('/place').then((res) => res.data);
}

export const createPlace = (payload) => {
    return connect.post('/place', payload).then((res) => res.data);
}

export const destroyPlace = (id) => {
    return connect.delete(`/place/${id}`).then((res) => res.data);
};

export const updatePlace = (payload) => {
    return connect.put(`/place/${payload.id}`, payload).then((res) => res.data);
};

export const createPlacePhoto = (payload) => {
    return connect.post(`/place/${payload.gallery_place_id}/photo`, payload).then((res) => res.data);
}

export const getPlacePhoto = (gallery_place_id) => {
    return connect.get(`/place/${gallery_place_id}/photo`).then((res) => res.data);
}

export const updatePlacePhoto = (payload) => {
    return connect.put(`/place/${payload.id}/photo/${payload.gallery_place_id}`, payload).then((res) => res.data);
};
export const destroyPlacePhoto = (payload) => {
    return connect.delete(`/place/${payload.gallery_place_id}/photo/${payload.id}`).then((res) => res.data);
};

export const serviceList = () => {
    return connect.get('/service').then((res) => res.data);
}

export const serviceEdit = (payload) => {
    return connect.put(`/service/${payload.id}`, payload).then((res) => res.data);
};
