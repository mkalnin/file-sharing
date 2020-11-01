<template>
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Login</div>
            <span v-if="ERRORS.email">{{ERRORS.email[0]}}</span>
            <div class="card-body">
              <form v-on:submit.prevent="onSubmit">
                <div class="form-group row">
                    <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>

                    <div class="col-md-6">
                        <input id="email" type="email" class="form-control" name="email" required autocomplete="email" autofocus v-model="email">
                    </div>
                    <div v-if="$v.email.$error" class="invalid-feedback d-block">
                        <span v-if="!$v.email.required">Email is required</span>
                        <span v-if="!$v.email.minLength">Email must be valid email address</span>
                        <span v-if="!$v.email.maxLength">Email must be maximum 255 characters</span>
                    </div>
                </div>
                <div class="form-group row">
                    <label for="password" class="col-md-4 col-form-label text-md-right">Password</label><div class="col-md-6">
                        <input id="password" type="password" class="form-control" name="password" required autocomplete="current-password" v-model="password">
                    </div>
                    <div v-if="$v.password.$error" class="invalid-feedback d-block">
                        <span v-if="!$v.password.required">Password is required</span>
                        <span v-if="!$v.password.minLength">Password must be at least 8 characters</span>
                    </div>
                </div>

                <div class="form-group row mb-0">
                    <div class="col-md-8 offset-md-4">
                        <button type="button" class="btn btn-primary" @click="login()">Login</button>
                    </div>
                </div>
              </form>
            </div>
        </div>
    </div>
</div>
</template>

<script>
  import {
      email,
      required,
      minLength,
      maxLength,
      sameAs
  } from 'vuelidate/lib/validators';
  import { mapGetters, mapActions } from 'vuex';
  export default {
    data() {
      return {
        email    : '',
        password : ''
      }
    },
    validations: {
        email: {
            required,
            email,
            maxLength: maxLength(255)
        },
        password: {
            required,
            minLength: minLength(8)
        },
    },
    computed: {
        ...mapGetters(['ERRORS'])
    },
    methods: {
      ...mapActions(['TRIGGER_UPDATE_USER', 'TRIGGER_UPDATE_ERRORS']),
      login() {
        this.$v.$touch();
        if (this.$v.$invalid) {
            this.submitStatus = 'ERROR'
        } else {
          axios.get('/sanctum/csrf-cookie').then(response => {
              axios.post('/login', {
                email   : this.email,
                password: this.password
              }).then(success => {
                this.TRIGGER_UPDATE_USER(success.data)
                localStorage.setItem('authUser', 'true')
                this.$router.push({ name: 'home' })
              }).catch(error => {
                this.TRIGGER_UPDATE_ERRORS(error.response.data.errors)
              })
          });
        }

      }
    }
  }
</script>
