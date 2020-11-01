<template>
<div class="row justify-content-center">
    <div class="col-md-8">
        <div class="card">
            <div class="card-header">Reister</div>
            <div class="card-body">
                <form v-on:submit.prevent="onSubmit">
                    <div class="form-group row">
                        <label for="name" class="col-md-4 col-form-label text-md-right">Name</label>
                        <div class="col-md-6">
                            <input id="name" v-model="name" type="text" class="form-control" name="name" required autocomplete="name" autofocus maxlength="255">
                        </div>
                        <div v-if="$v.name.$error" class="invalid-feedback d-block">
                            <span v-if="!$v.name.required">Name is required</span>
                            <span v-if="!$v.name.minLength">Name must be at least 2 characters</span>
                            <span v-if="!$v.name.maxLength">Name must be maximum 255 characters</span>
                        </div>
                        <span v-if="ERRORS.name">{{ERRORS.name[0]}}</span>
                    </div>
                    <div class="form-group row">
                        <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail Address</label>
                        <div class="col-md-6">
                            <input id="email" v-model="email" type="email" class="form-control " name="email" required autocomplete="email" maxlength="255">
                        </div>
                        <div v-if="$v.email.$error" class="invalid-feedback d-block">
                            <span v-if="!$v.email.required">Email is required</span>
                            <span v-if="!$v.email.minLength">Email must be valid email address</span>
                            <span v-if="!$v.email.maxLength">Email must be maximum 255 characters</span>
                        </div>
                        <span v-if="ERRORS.email">{{ERRORS.email[0]}}</span>
                    </div>
                    <div class="form-group row">
                        <label for="password" class="col-md-4 col-form-label text-md-right">Password</label>
                        <div class="col-md-6">
                            <input id="password" v-model="password" type="password" class="form-control" name="password" required autocomplete="new-password">
                        </div>
                        <span v-if="ERRORS.password">{{ERRORS.password[0]}}</span>
                        <div v-if="$v.password.$error" class="invalid-feedback d-block">
                            <span v-if="!$v.password.required">Password is required</span>
                            <span v-if="!$v.password.minLength">Password must be at least 8 characters</span>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirm Password</label>
                        <div class="col-md-6">
                            <input id="password-confirm" v-model="passwordConfirmation" type="password" class="form-control" name="password_confirmation" required autocomplete="new-password">
                        </div>
                        <span v-if="ERRORS.password_confirmation">{{ERRORS.password_confirmation[0]}}</span>
                        <div v-if="$v.password.$error" class="invalid-feedback d-block">
                            <span v-if="!$v.passwordConfirmation.sameAsPassword">Passwords do not match</span>
                        </div>
                    </div>
                    <div class="form-group row mb-0">
                        <div class="col-md-6 offset-md-4">
                            <button type="button" @click="register()" class="btn btn-primary">
                              Register
                          </button>
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
import {
    mapGetters,
    mapActions
} from 'vuex';
export default {
    data() {
        return {
            name: '',
            email: '',
            password: '',
            passwordConfirmation: '',
        }
    },
    validations: {
        name: {
            required,
            minLength: minLength(2),
            maxLength: maxLength(255)
        },
        email: {
            required,
            email,
            maxLength: maxLength(255)
        },
        password: {
            required,
            minLength: minLength(8)
        },
        passwordConfirmation: {
            sameAsPassword: sameAs('password')
        }
    },
    computed: {
        ...mapGetters(['ERRORS'])
    },
    methods: {
        ...mapActions(['TRIGGER_UPDATE_USER', 'TRIGGER_UPDATE_ERRORS']),
        register() {
            this.$v.$touch();
            if (this.$v.$invalid) {
                this.submitStatus = 'ERROR'
            } else {
                axios.post('/register', {
                    name: this.name,
                    email: this.email,
                    password: this.password,
                    password_confirmation: this.passwordConfirmation
                }).then(response => {
                    this.TRIGGER_UPDATE_USER(response.data)
                    localStorage.setItem('authUser', 'true')
                    this.$router.push({
                        name: 'home'
                    })
                }).catch(error => {
                    this.TRIGGER_UPDATE_ERRORS(error.response.data.errors)
                })
            }

        }
    }
}
</script>
