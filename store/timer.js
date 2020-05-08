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
            finished: false,
            isNew: true,
            status: ""
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
        state.task.status = "START"
    },
    setPauseCount: (state) => {
        state.task.pauseCount = state.task.pauseCount + 1;
        state.task.status = "PAUSE"
    },
    setStartTime: (state, startTime) => {
        state.task.startTime = startTime
        state.task.status = "START"
    },
    setEsteTime: (state, esteTime) => {
        state.task.esteTime = esteTime
    },
    setFinishTime: (state)=>{
        state.task.finishTime = new Date().getTime();
        state.task.status = "DONE"
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
    setFinished: (state, finished)=>{
        state.task.finished = finished
    },
    resumeTimer: (state, task)=>{
        state.task = task
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
    },
    async resumeTimer({commit}, payload){
        let task = {
            id: payload.id,
            title: payload.name,
            startTime: parseInt(payload.start_time),
            esteTime: parseInt(payload.end_time),
            resetCount: payload.reset_count,
            pauseCount: payload.pause_count,
            finishTime: parseInt(payload.finished_time),
            isNew: false,
            finished: false, 
            status: "START"
        }
        commit("resumeTimer", task)
    },
    async createTimer({commit, state}, authUser){
        if(state.task.isNew){
            commit("isStarted");
            await this.$apis.task.newTask(state.task, authUser.uid, authUser.accessToken)
                .then(result => commit("setId", result.insertId))
        }
    },
    async resetTimer({commit}){
        commit("resetStore");
    }
}