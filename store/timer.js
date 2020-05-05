const defaultState = () =>{
    return{
        task: {
            title: "",
            startTime: 0,
            esteTime: 0,
            resetCount: 0,
            pauseCount: 0,
            finishTime: 0
        }
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
    resetStore: (state)=>{
        Object.assign(state, defaultState());
    }
}