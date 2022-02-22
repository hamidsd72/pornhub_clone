<template>
    <div class="d-none d-lg-block">
        <div class="row pt-lg-5 pb-5">
            <div class="col-lg-6 mt-3">
                <div class="mt-lg-5 text-left text-light">
                    <div class="text-left pt-lg-3 mb-3">
                        <img :src="require('@/assets/images/index.png')" class="ml-5" alt="">
                    </div>
                    <div class="ml-lg-5">
                        <h1 class="font-weight-bold display-4 mb-4" style="text-transform: uppercase">
                            There's a lot <br> 
                            more to Pornhub <br>
                            than you think! 
                        </h1>
                        <div class="m-2 mr-lg-5">
                            <div class="row">
                                <div class="col-xl-4 mt-2 col-lg-6">Add Friends</div>
                                <div class="col-xl-4 mt-2 col-lg-6">Subscribe to Channels</div>
                                <div class="col-xl-4 mt-2 col-lg-6">Post Comments</div>
                                <div class="col-xl-4 mt-2 col-lg-6">Create Playlists </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-lg-5 ml-lg-4 mt-lg-2">
                <div class="ml-lg-5 text-light text-left">
                    <div class="m-lg-2 bg-black border-gray mt-lg-3 p-3 reg pb-4">
                        <h2 class="text-center pt-2 font-weight-bold m-0">Sign up for free</h2>
                        <div class="text-center mt-1 mb-4" style="color: #898787;font-size: 14px;font-weight: 400;">and enhance your experience</div>

                        <input type="text" name="email" v-on:keyup="validateEmail()" :class="{'border border-danger':this.Eemail===false}" v-model="email" placeholder="Email">
                        <input type="text" name="username" v-on:keyup="validateUserName()" :class="{'border border-danger':this.Eusername===false}" v-model="username" placeholder="Username (6+ characters)">
                        <input type="text" name="password" v-on:keyup="validatePassword()" :class="{'border border-danger':this.Epassword===false}" v-model="password" placeholder="Password (6+ characters)">

                        <div class="text-left font-weight-bold">
                            <button v-if="formValid()" class="text-light" style="background-color: #ff9900;">Sign Up!</button>
                            <button v-else disabled="disabled">Sign Up!</button>
                             Or <a href="#" class="text-orange ml-2">Log in</a>
                        </div>
                        <small>
                            By signing up, you agree to our <a class="text-orange " href="#">Terms and Conditions.</a> <br> <a class="text-orange " href="#">Resend confirmation email</a>
                        </small>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                Eemail: null,
                username: '',
                Eusername: null,
                password: '',
                Epassword: null,
            }
        },
        methods: {
            validateEmail() { 
                this.Eemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email) 
            },
            validateUserName() { 
                this.Eusername = false
                if( this.username.length > 6 ) { this.Eusername = true } },
            validatePassword() { 
                this.Epassword = false
                if( this.password.length > 6 ) { this.Epassword = true } },
            formValid() { 
                if ( this.Eemail && this.Eusername && this.Epassword ) { return true }
                return false
            }
        },
    }
</script>