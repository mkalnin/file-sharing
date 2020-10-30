<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-light bg-white shadow-sm">
        <div class="container">
            <a class="navbar-brand" href="/">Laravel</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
          </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <!-- Left Side Of Navbar -->
                <ul class="navbar-nav mr-auto">
                  <div v-if="USER">
                    <router-link class="btn btn-success" :to="{ name: 'uploadFile'}">
                      Загрузить файл
                    </router-link>
                    <router-link class="btn btn-info" :to="{ name: 'files'}">
                      Мои Файлы
                    </router-link>
                  </div>
                </ul>

                <!-- Right Side Of Navbar -->
                <ul class="navbar-nav ml-auto">
                    <!-- Authentication Links -->
                    <div v-if="!USER">
                      <li class="nav-item">
                          <router-link :to="{ name: 'login' }" class="nav-link">
                            Login
                          </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link :to="{ name: 'register' }" class="nav-link">
                          Register
                        </router-link>
                      </li>
                    </div>
                    <div v-else="">
                      {{USER.name}}
                      <li class="nav-item dropdown">
                          <a id="navbarDropdown" class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" v-pre><span class="caret"></span>
                            </a>
                          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navbarDropdown">
                              <button class="dropdown-item" @click="logout()">Logout</button>
                          </div>
                      </li>
                    </div>


                </ul>
            </div>
        </div>
    </nav>
    <div class="container-fluid">
        <router-view></router-view>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
    name : 'main-app',
    computed : {
      ...mapGetters(['USER'])
    },
    mounted() {
        this.$store.dispatch('TRIGGER_UPDATE_USER')
    },
    methods: {
      ...mapActions(['TRIGGER_UPDATE_USER']),
        logout() {
            axios.post('/logout')
                .then(response => {
                  this.TRIGGER_UPDATE_USER(null)
                  localStorage.removeItem('authUser')
                  this.$router.push({ name: 'login' })
                });
        }
    },
}
</script>
