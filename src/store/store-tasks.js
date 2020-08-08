import Vue from 'vue'

const state = {
  allTasks: {
    ID1: {
      name: 'Go to the shop',
      completed: false,
      dueDate: '2020/08/05',
      dueTime: '18:30'
    },
    ID2: {
      name: 'Go to the park',
      completed: false,
      dueDate: '2020/08/06',
      dueTime: '14:00'
    },
    ID3: {
      name: 'Feed the cat',
      completed: false,
      dueDate: '2020/08/14',
      dueTime: '10:00'
    }
  }
};

// mutations are synchronous, they manipulate the state directly and instantly.
const mutations = {
  updateTaskMutation(state, payload) {
    // console.log('payload (from mutation):', payload)
    Object.assign(state.allTasks[payload.id], payload.updateData)
  },
  deleteTaskMutation(state, id) {
    console.log('Deleted id:', id)
    Vue.delete(state.allTasks, id) // use Vue built in methods in order to make it reactive.
  }
};

// actions can be asynchronous, then manage same data and then commit a mutation.
const actions = {
  updateTaskAction({
    commit
  }, payload) {
    // console.log('payload (from action):', payload) // payload includes id of task and its payload.
    commit('updateTaskMutation', payload)
  },
  deleteTaskAction({
    commit
  }, id) {
    commit('deleteTaskMutation', id)
  }
};

// get date from the state
const getters = {
  getTasks: state => {
    return state.allTasks;
  }
};

export default {
  namespaced: true, // allows to have multiple store modules in our app.
  state,
  mutations,
  actions,
  getters
};
