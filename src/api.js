import axios from 'axios';

const connect = axios.create({
    // baseURL: `${window.location.protocol}//${window.location.host}/api`,
    baseURL: `${window.location.protocol}//127.0.0.1:8000/api`,
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

// connect.interceptors.response.use(
//     (res) => res,
//     (error) => {
//         const prevRequest = error?.config;
//         const token = localStorage.getItem('accessToken') || '';
//         if (error?.response?.status === 401 && token && !prevRequest?.sent) {
//             localStorage.removeItem('accessToken');
//             prevRequest.sent = true;
//             return refreshToken().then(() => connect(prevRequest));
//         }
//         return Promise.reject(error);
//     }
// );

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

export const bannerList = () => {
    return connect.get('/banners?withDeleted=true').then((res) => res.data);
};

export const bannerDelete = (id) => {
    return connect.delete(`/banners/${id}`).then((res) => res.data);
};

export const bannerRestore = (id) => {
    return connect.get(`/banners/${id}/restore`).then((res) => res.data);
};

export const bannerCreate = (payload) => {
    return connect.post('/banners/', payload).then((res) => res.data);
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

export const topBannerInfo = (id) => {
    return connect.get(`/topbanners/${id}`).then((res) => res.data);
};

export const topBannerEdit = (payload) => {
    return connect.put(`/topbanners/${payload.id}`, payload).then((res) => res.data);
};

export const topBannerRestore = (id) => {
    return connect.get(`/topbanners/${id}/restore`).then((res) => res.data);
};



export const setActiveTopBanners = ({ id, is_active }) => {
    return connect.get(`/topbanners/${id}/active/${is_active}`).then((res) => res.data);
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

export const agreementUpdate = (payload) => {
    return connect.put('/agreement/1', payload).then((res) => res.data);
};

export const aboutUpdate = (payload) => {
    return connect.put('/about/1', payload).then((res) => res.data);
};

export const agreementInfo = () => {
    return connect.get('/agreement/1').then((res) => res.data);
};

export const aboutInfo = () => {
    return connect.get('/about/1').then((res) => res.data);
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
    return connect.put(`/place/${payload.id}/is_main`, payload).then((res) => res.data);
};




export const getPlacePhoto = (gallery_place_id) => {
    return connect.get(`/place/${gallery_place_id}/photo`).then((res) => res.data);
}



export const showFaq = (id) => {
    return connect.get(`/faq/${id}`).then((res) => res.data);
};

export const updateRoomsPhoto = (payload) => {
    return connect.put(`/faq/category/${payload.id}`, payload).then((res) => res.data);
};


export const contactInfo = () => {
    return connect.get('/contact').then((res) => res.data);
};

export const contactUpdate = (payload) => {
    return connect.put('/contact', payload).then((res) => res.data);
};

export const advantagesList = () => {
    return connect.get('/advantages?inActive=true').then((res) => res.data);
};

export const setActiveAdvantage = ({ id, is_active }) => {
    return connect.get(`/advantages/${id}/active/${is_active}`).then((res) => res.data);
};

export const advantageCreate = (payload) => {
    return connect.post('/advantages/', payload).then((res) => res.data);
};

export const advantageEdit = (payload) => {
    return connect.put(`/advantages/${payload.id}`, payload).then((res) => res.data);
};

export const advantageDelete = (id) => {
    return connect.delete(`/advantages/${id}`).then((res) => res.data);
};

export const neuronInfo = () => {
    return connect.get('/neuron/1').then((res) => res.data);
};

export const neuronUpdate = (payload) => {
    return connect.put('/neuron/1', payload).then((res) => res.data);
};

export const indicatorsList = () => {
    return connect.get('/indicator?inActive=true').then((res) => res.data);
};

export const indicatorEdit = (payload) => {
    return connect.put(`/indicator/${payload.id}`, payload).then((res) => res.data);
};

export const indicatorInfo = (id) => {
    return connect.get(`/indicator/${id}`).then((res) => res.data);
};

export const setActiveIndicator = ({ id, is_active }) => {
    return connect.get(`/indicator/${id}/active/${is_active}`).then((res) => res.data);
};
