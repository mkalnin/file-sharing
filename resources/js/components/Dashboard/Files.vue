<template>
  <div class="jumbotron mt-5">
    <h1 class="text-center">Мои Файлы</h1>
    <div v-if="USER" class="row row-eq-height">
      <div class="col-md-4 col-sm-6 mb-3" v-for="(file, index) in USER.files">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{{file.original_name}}</h5>
            <p class="card-text">Скачан раз:
              <span class="badge badge-info">{{file.times_downloaded}}</span>
            </p>
            <p class="card-text">
              Ссылка:
              <span class="badge badge-secondary">{{baseUrl + file.url}}</span>
            </p>
            <button class="btn btn-danger" @click="deleteFile([file.id, index])">
              Удалить
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        baseUrl : window.location.origin + '/'
      }
    },
    computed : {
      ...mapGetters(['USER'])
    },
    methods: {
      ...mapActions(['DELETE_FILE']),
      deleteFile([id, index]) {
        this.DELETE_FILE([id, index])
      }
    }
  }
</script>
