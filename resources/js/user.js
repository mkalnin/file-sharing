import axios from 'axios';

const state = {
  user: null
};

const getters = {
  USER : state => state.user
};

const mutations = {
  UPDATE_USER : (state, user) => {
    state.user = user
  },
  SPLICE_USER_FILES : (state, index) => {
    state.user.files.splice(index, 1);
  }
};

const actions = {
  TRIGGER_UPDATE_USER: async(context, user) => {
    await axios.get('/api/user').then(response => {
      context.commit('UPDATE_USER', response.data)
    })
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
