const defaultState = () =>{
    return{
        task: {
            id: "",
            title: "",
            startTime: 0,
            esteTime: 0,
            resetCount: 0,
            pauseCount: 0,
            finishTime: 0,
            isNew: true,
        },
        history: null
    }
}

export const state = () => defaultState();

export const mutations = {
    setTitle: (state, title) => {
        state.task.title = title
    },
    setResetCount: (state) => {
        state.task.resetCount = state.task.resetCount + 1;
    },
    setPauseCount: (state) => {
        state.task.pauseCount = state.task.pauseCount + 1;
    },
    setStartTime: (state, startTime) => {
        state.task.startTime = startTime
    },
    setEsteTime: (state, esteTime) => {
        state.task.esteTime = esteTime
    },
    setFinishTime: (state)=>{
        state.task.finishTime = new Date().getTime();
    },
    setId: (state, task_id) =>{
        state.task.id = task_id
    },
    isStarted: (state) => {
        state.task.isNew = false
    },
    setHistory: (state, payload) => {
        state.history = payload
    },
    resetStore: (state)=>{
        Object.assign(state, defaultState());
    }
}

export const actions = {
    async getUsersHistory({commit}, authUser){
        if(!authUser){
            return
        }
        await this.$apis.task.getUserTasks(authUser.uid, authUser.access_token)
            .then(res => {
                commit("setHistory", res)
            })
    }
}