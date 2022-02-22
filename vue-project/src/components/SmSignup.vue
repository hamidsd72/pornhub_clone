<template>
    <div class="d-lg-none text-light">
        <div class="reg2" style="padding: 10px 14px 15px 14px">
            <h2 class="text-center pt-1 font-weight-bold m-0">Sign up for free</h2>
            <div class="text-center mb-3 pb-3" style="font-size: 14px;font-weight: 400;">and enhance your experience</div>

            <input type="text" name="email" v-on:keyup="validateEmail()" :class="{'border border-danger':this.Eemail===false}" v-model="email" placeholder="Email">
            <input type="text" name="username" v-on:keyup="validateUserName()" :class="{'border border-danger':this.Eusername===false}" v-model="username" placeholder="Username (6+ characters)">
            <input type="text" name="password" v-on:keyup="validatePassword()" :class="{'border border-danger':this.Epassword===false}" v-model="password" placeholder="Password (6+ characters)">

            <div v-if="formValid()" class="text-left font-weight-bold" style="color: #999;">
                <button class="text-light" style="background-color: #ff9900;">Sign Up!</button> Or 
                <a href="#" class="text-orange ml-2">Log in</a>
            </div>
            <div v-else class="text-left font-weight-bold" style="color: #999;">
                <button disabled="disabled">Sign Up!</button> Or 
                <a href="#" class="small font-weight-bold text-orange ml-2">Log in</a>
            </div>
            <div class="text-left mt-3" style="font-size: .7em;">
                By signing up, you agree to ou2 <a class="text-orange" style="font-size: .9em;" href="#">Terms and Conditions.</a>
                <div class="mt-2"><a class="text-orange" style="font-size: .9em;" href="#">Resend confirmation email</a></div>
            </div>
        </div>

        <h4 class="font-weight-bold pt-4 mt-4" style="text-transform: uppercase">
            There's a lot more to <br>
            Pornhub than you think!
        </h4>
        <div class="ml-3 mb-5">
            <div class="row text-left small" style="color: #999;">
                <div class="mt-3 col-6">Add Friends</div>
                <div class="mt-3 col-6">Subscribe to Channels</div>
                <div class="mt-3 col-6">Post Comments</div>
                <div class="mt-3 col-6">Create Playlists </div>
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