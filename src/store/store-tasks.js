import Vue from 'vue'

import {
  uid
} from 'quasar'

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
  },
  addTaskMutation(state, payload) {
    Vue.set(state.allTasks, payload.id, payload.task)
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
  },
  addTaskAction({
    commit
  }, taskData) {
    const taskId = uid()
    const payload = {
      id: taskId,
      task: taskData
    }
    // console.log(payload)
    commit('addTaskMutation', payload)
  }
};

// get date from the state
const getters = {
  getTasksTodo: state => {
    var tasks = {}
    Object.keys(state.allTasks).forEach(function (key) {
      const task = state.allTasks[key]
      if (!task.completed) {
        tasks[key] = task
      }
    });

    return tasks;
  },
  getTasksCompleted: state => {
    var tasks = {}
    Object.keys(state.allTasks).forEach(function (key) {
      const task = state.allTasks[key]
      if (task.completed) {
        tasks[key] = task
      }
    });

    return tasks;
  }
};

export default {
  namespaced: true, // allows to have multiple store modules in our app.
  state,
  mutations,
  actions,
  getters
};
