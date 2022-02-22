<template>
    <div class="d-none d-lg-block">
        <div class="row mt-2 pt-5 pb-5">
            <div class="col-6">
                <div class="text-left text-light">
                    <div class="mb-3 pt-1">
                        <img :src="require('@/assets/images/index.png')" class="ml-5" alt="">
                    </div>
                    <div class="ml-5 pt-1">
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
            <div class="col-1"></div>
            <div class="col mr-5 mt-2 text-left">
                <div class="text-light">
                    <div class="m-lg-2 bg-black border-gray mt-lg-3 p-3 reg pb-4">
                        <h2 class="text-center pt-3 font-weight-bold m-0">Member login</h2>
                        <div class="text-center pt-1 mb-3" style="color: #898787;font-size: 14px;font-weight: 400;">Access your Pornhub or Pornhub Premium account</div>

                        <input type="text" name="username" v-on:keyup="validateUserName()" :class="{'border border-success':this.Eusername===false}" v-model="username" placeholder="Username">
                        <input type="text" name="password" v-on:keyup="validatePassword()" :class="{'border border-success':this.Epassword===false}" v-model="password" placeholder="Password">
                        <div style="border-radius: 5px;background-color: #101010;border: 1px solid #292929;color: #acacac;padding: 0px 15px 5px;margin-top: 2%;margin-bottom: 1%;">
                            <input type="checkbox" name="remember_me" class="remember_me">
                            <lebal style="font-size: 14px;font-weight: 400;">
                                Remember me on this computer
                                <div style="font-size: 11px;padding-left: 17px;">(not recommended on public or shared computers)</div>
                            </lebal>
                        </div>
                        <div class="text-left font-weight-bold mt-4">
                            <button style="background-color: #ff9900;color: #000;">Log In</button> Or <a href="#" class="text-orange ml-2 small font-weight-bold">Sign up</a>
                        </div>
                        <div class="font-weight-bold"><a href="#" class="text-orange">Forgot Username or Password?</a> | <a href="#" class="text-orange">Resend confirmation email?</a></div>
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
                username: '',
                Eusername: null,
                password: '',
                Epassword: null,
            }
        },
        methods: {
            validateUserName() { 
                this.Eusername = false
                if( this.username.length > 6 ) { this.Eusername = true } },
            validatePassword() { 
                this.Epassword = false
                if( this.password.length > 6 ) { this.Epassword = true } },
            formValid() { 
                if ( this.Eusername && this.Epassword ) { return true }
                return false
            }
        },
    }
</script>

<style>
    .checked {
        border-radius: 5px;
        background-color: #101010;
        border: 1px solid #292929;
        color: #acacac;
        padding: 4px 15px ;
        margin-top: 2%;
        margin-bottom: 1%;
    }
    .remember_me {
        outline: 0;
        position: static;
        padding: 0;
        text-decoration: none;
        height: 14px;
        max-width: 14px;
    }
</style>