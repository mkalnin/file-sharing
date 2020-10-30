<template>
  <div class="jumbotron mt-5">
    <h1>Скачать</h1>
    <div v-if="FILE">
      <a class="btn btn-success"
          @click="download()"
          :href="FILE.path"
          :download="FILE.original_name">
        Скачать {{ FILE.original_name }}
      </a>
    </div>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex';
  export default {
    data() {
      return {
        url : window.location.pathname.split( '/' )[1]
      }
    },
    computed: {
      ...mapGetters(['FILE'])
    },
    mounted() {
      let{data} = axios.get('/api/file/' + this.url).then(response => {
        this.$store.dispatch('TRIGGER_UPDATE_FILE', response.data)
        console.log(response.data);
        if(response.data.id === undefined) {
          this.$router.push( {name: '404'} );
        }
      }).catch (error => { console.log(error) })
    },
    methods: {
      download() {
        axios.post('/api/file/download', {id: this.FILE.id})
        .then (response => { this.$router.push( {name: 'home'} ) })
      }
    }
  }
</script>
