<template>
  <div class="row">
    <div class="col-md-3">
      <label>File
        <input type="file" id="file" v-on:change="handleFileUpload($event)"/>
      </label>
      <span class="invalid-feedback" v-if="ERRORS.file">{{ERRORS.file[0]}}</span>
    </div>
    <div class="col-md-3">
      <button class="btn btn-info" v-on:click="submitFile()">Загрузить</button>
    </div>
  </div>
</template>
<script>
  import { mapGetters, mapActions } from 'vuex';
  export default {
    computed: {
      ...mapGetters(['ERRORS']),
    },
    methods: {
      ...mapActions(['UPLOAD']),
      submitFile() {
          this.UPLOAD(this.file);
      },
      handleFileUpload(event) {
        this.file = event.target.files[0];
      }
    }
  }
</script>
