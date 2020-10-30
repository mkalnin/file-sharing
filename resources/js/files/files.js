import axios from 'axios';

const state = {
  file: ''
};

const getters = {
  FILE : state => state.file
};

const mutations = {
  UPDATE_FILE : (state, file) => {
    state.file = file
  }
};

const actions = {
  TRIGGER_UPDATE_FILE : async (context, file) => {
    context.commit('UPDATE_FILE', file)
  },
  UPLOAD : async (context, file) => {
    try {
      let formData = new FormData();
      formData.append('file', file);
      let {data} = await axios.post( '/api/auth/file',
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data'
        }
      })
      context.dispatch('TRIGGER_UPDATE_USER');
    } catch (error) {
      if(error.response.data.message) {
        //if user is not authenticated
        context.commit('UPDATE_ERRORS', {file: [error.response.data.message]});
      } else {
        context.commit('UPDATE_ERRORS', error.response.data.errors);
      }
    }
  },
  DELETE_FILE : async (context, [id, index]) => {
    if (window.confirm('Вы действительно хотите удалить файл?')) {
      let {data} = await axios.delete('/api/auth/file/' + id)
      context.commit('SPLICE_USER_FILES', index)
    }

  }
};

export default {
  state,
  getters,
  mutations,
  actions
}
