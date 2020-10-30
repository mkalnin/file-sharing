<template>
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Login</div>

            <div class="card-body">
                <div class="form-group row">
                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                    <div class="col-md-6">
                        <input id="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus v-model="email">
                    </div>
                </div>

                <div class="form-group row">
                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                    <div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password" v-model="password">
                    </div>
                </div>

                <div class="form-group row mb-0">
                    <div class="col-md-8 offset-md-4">
                        <button type="button" class="btn btn-primary" @click="login()">Login</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  import { mapActions } from 'vuex';
  export default {
    data() {
      return {
        email    : '',
        password : ''
      }
    },
    methods: {
      ...mapActions(['TRIGGER_UPDATE_USER']),
      login() {
        axios.get('/sanctum/csrf-cookie').then(response => {
            axios.post('/login', {
              email   : this.email,
              password: this.password
            }).then(success => {
              this.TRIGGER_UPDATE_USER(success.data)
              localStorage.setItem('authUser', 'true')
              this.$router.push({ name: 'home' })
            })
        });
      }
    }
  }
</script>
