import userApiFactory from "./user";

const apiFactory = axios => ({
    user: userApiFactory(axios)
});

export default apiFactory;