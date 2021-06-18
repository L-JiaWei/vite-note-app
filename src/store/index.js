import * as Vuex from "vuex";

const store = Vuex.createStore({
    state() {
        return {
            list: []
        }
    },
    mutations: {
        addTask(state, task) {
            state.list.unshift(task)
        },
        updateTask(state, idx, task) {
            state.list[idx] = task
        },
        updateTasks(state, tasks) {
            console.log(tasks);
            state.list = tasks
        },
        deleteTask(state, idx) {
            state.list.splice(idx, 1);
        }
    }
});

export default store;