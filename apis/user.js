export default axios => ({
    signIn: (params) => {
        return axios.post(
            "/v1/user/signin",params
        )
        .then(res => res.data)
        .catch(err => console.error(err))
    },
    updateUser: (params) => {
        return axios.post(
            "/v1/user/update",params
        )
        .then(res => res.data)
        .catch(err => console.error(err))
    },
    getUserDetails: (uid, access_token) =>{
        let config = {
            headers:{
                UID:uid,
                AUTH_TOKEN: access_token
            }
        }
        return axios.get(
            "/v1/user/details", config
        ).then(res => res.data)
        .catch(err => console.error(err))
    }
})