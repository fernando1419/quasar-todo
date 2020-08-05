const state = {
  allTasks: [
    {
      id: 1,
      name: 'Go to the shop',
      completed: false,
      dueDate: '2020/08/05',
      dueTime: '18:30'
    },
    {
      id: 2,
      name: 'Go to the park',
      completed: false,
      dueDate: '2020/08/06',
      dueTime: '14:00'
    },
    {
      id: 3,
      name: 'Feed the cat',
      completed: false,
      dueDate: '2020/08/14',
      dueTime: '10:00'
    }
  ]
};

// mutations are synchronous, they manipulate the state directly and instantly.
const mutations = {};

// actions can be asynchronous, then manage same data and then commit a mutation.
const actions = {};

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
