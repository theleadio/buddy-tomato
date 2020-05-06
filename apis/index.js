import userApiFactory from "./user";
import taskApiFactory from "./task";

const apiFactory = axios => ({
    user: userApiFactory(axios),
    task: taskApiFactory(axios)
});

export default apiFactory;