<template>
  <div class="row justify-content-center">
      <div class="col-md-8">
          <div class="card">
              <div class="card-header">Reister</div>

              <div class="card-body">
                <div class="form-group row">
                          <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>

                          <div class="col-md-6">
                              <input id="name" v-model="name" type="text" class="form-control" name="name" required autocomplete="name" autofocus>
                          </div>

                          <span v-if="ERRORS.name">{{ERRORS.name[0]}}</span>
                      </div>

                      <div class="form-group row">
                          <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                          <div class="col-md-6">
                              <input id="email"v-model="email"  type="email" class="form-control " name="email" required autocomplete="email">
                          </div>
                          <span v-if="ERRORS.email">{{ERRORS.email[0]}}</span>
                      </div>

                      <div class="form-group row">
                          <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>

                          <div class="col-md-6">
                              <input id="password" v-model="password" type="password" class="form-control" name="password" required autocomplete="new-password">
                          </div>
                          <span v-if="ERRORS.password">{{ERRORS.password[0]}}</span>
                      </div>

                      <div class="form-group row">
                          <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>

                          <div class="col-md-6">
                              <input id="password-confirm" v-model="passwordConfirmation" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                          </div>
                          <span v-if="ERRORS.password_confirmation">{{ERRORS.password_confirmation[0]}}</span>
                      </div>

                      <div class="form-group row mb-0">
                          <div class="col-md-6 offset-md-4">
                              <button type="button" @click="register()" class="btn btn-primary">
                                  Register
                              </button>
                          </div>
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
        name: '',
        email: '',
        password: '',
        passwordConfirmation: '',
        invalid: 'invalid-feedback'
      }
    },
    computed : {
      ...mapGetters(['ERRORS'])
    },
    methods: {
      ...mapActions(['TRIGGER_UPDATE_USER', 'TRIGGER_UPDATE_ERRORS']),
      register() {
        axios.post('/register', {
          name: this.name,
          email: this.email,
          password: this.password,
          password_confirmation: this.passwordConfirmation
        }).then(response => {
          this.TRIGGER_UPDATE_USER(response.data)
          localStorage.setItem('authUser', 'true')
          this.$router.push({ name: 'home' })
        }).catch(error => {
          this.TRIGGER_UPDATE_ERRORS(error.response.data.errors)
        })
      }
    }
  }
</script>
