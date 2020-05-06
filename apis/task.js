export default axios => ({
    newTask: (payload, uid, access_token) => {
        let config = {
            headers:{
                UID:uid,
                AUTH_TOKEN: access_token
            }
        }
        return axios.post(
            "/v1/task/new",payload, config
        )
        .then(res => res.data)
        .catch(err => console.error(err))
    },
    updateTask: (params) => {
        return axios.post(
            "/v1/task/update",params
        )
        .then(res => res.data)
        .catch(err => console.error(err))
    },
    getUserTasks: (uid, access_token) =>{
        let config = {
            headers:{
                UID:uid,
                AUTH_TOKEN: access_token
            }
        }
        return axios.get(
            "/v1/task/all", config
        ).then(res => res.data)
        .catch(err => console.error(err))
    }
})