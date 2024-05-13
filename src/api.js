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
export const photoEdit = (payload) => {
    return connect.put(`/photohomepage/${payload.id}`, payload).then((res) => res.data);
};
export const photosList = () => {
    return connect.get('/homepagephotos?inActive=true').then((res) => res.data);
};

export const topBannerCreate = (payload) => {
    return connect.post('/topbanners/', payload).then((res) => res.data);
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

export const topBannerDelete = (id) => {
    return connect.delete(`/topbanners/${id}`).then((res) => res.data);
};
export const topBannerPosition = (payload) => {
    const url = (payload.action === 'up') ? `/topbanners/${payload.id}/position/up` : `/topbanners/${payload.id}/position/down`;
    return connect.get(url).then((res) => res.data);
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

export const faqList = () => {
    return connect.get('/faq').then((res) => res.data);
}
export const faqCategoryCreate = (payload) => {
    return connect.post('/faq/category', payload).then((res) => res.data);
}
export const faqCreate = (payload) => {
    return connect.post('/faq', payload).then((res) => res.data);
}

export const showCategory = (id) => {
    return connect.get(`/faq/category/${id}`).then((res) => res.data);
};

export const showFaq = (id) => {
    return connect.get(`/faq/${id}`).then((res) => res.data);
};

export const updateCategory = (payload) => {
    return connect.put(`/faq/category/${payload.id}`, payload).then((res) => res.data);
};

export const updateFaq = (payload) => {
    return connect.put(`/faq/${payload.id}`, payload).then((res) => res.data);
};

export const destroyCategory = (id) => {
    return connect.delete(`/faq/category/${id}`).then((res) => res.data);
};

export const destroyFaq = (id) => {
    return connect.delete(`/faq/${id}`).then((res) => res.data);
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
