import axios from 'axios';

const state = {
  errors: ''
};

const getters = {
  ERRORS : state => state.errors
};

const mutations = {
  UPDATE_ERRORS : (state, errors) => {
    state.errors = errors
  }
};

const actions = {
  TRIGGER_UPDATE_ERRORS : (context, errors) => {
    context.commit('UPDATE_ERRORS', errors)
  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
