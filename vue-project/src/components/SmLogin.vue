<template>
    <div class="d-lg-none">
        <div class="p-1 pt-4 text-center text-light reg2">
            <h2 class="font-weight-bold mb-0">Member login</h2>
            <div class="mb-4 pb-2" style="color: #898787;font-size: 14px;font-weight: 400;">Access your Pornhub or Pornhub Premium account</div>

            <input type="text" name="username" v-on:keyup="validateUserName()" :class="{'border border-success':this.Eusername===false}" v-model="username" placeholder="Username">
            <input type="text" name="password" v-on:keyup="validatePassword()" :class="{'border border-success':this.Epassword===false}" v-model="password" placeholder="Password">
            <div class="text-left checked">
                <input type="checkbox" name="remember_me" 
                style="float: left;outline: 0;position: static;padding: 0;margin-top: 10px;text-decoration: none;height: 14px;width: 14px" >
                <lebal style="padding-left: 6px;font-size: 12px;font-weight: bold;">
                    Remember me on this divise
                    <div style="font-size: 9.5px;padding-left: 20px;padding-bottom: 5px;">(not recommended on public or shared divises)</div>
                </lebal>
            </div>
            <button style="width: 100%; margin-top:8%;background-color: #ff9900;color: #000;;">Log In</button>
            <div class="mt-4"><a href="#" class="text-orange">Forgot Username or Password?</a> | <a href="#" class="text-orange">Resend confirmation email?</a></div>
        </div>
        <div class="text-left text-light">
            <div class="mt-5">
                <h2 style="color: #fefefe;text-align: center;font-size: 22px;text-transform: uppercase;margin-bottom:0px;font-weight: bold;">not a member yet?</h2>
                <p style="font-size: 1em;margin-bottom: 3px;text-align: center;color: #999;margin-top: 0;">Here's what you're missing out on!</p>
                <div class="m-3 mr-4 ml-4 mb-4 pb-2">
                    <div class="row small" style="color: #999;">
                        <div class="mt-2 col-6">Add Friends</div>
                        <div class="mt-2 col-6">Subscribe to Channels</div>
                        <div class="mt-2 col-6">Post Comments</div>
                        <div class="mt-2 col-6">Create Playlists </div>
                    </div>
                </div>
                <button style="padding: 2%;margin-left: 2%;font-weight: bold;font-size: 15px;width: 96%;background-color: #2f2f2f;color: #000;color: #fff;text-align: center;border: none">Sign Up</button>            
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
        border-radius: 1px;
        background-color: #252525;
        /* border: 1px solid #292929; */
        color: #acacac;
        padding: 0px 15px;
        margin-top: 2%;
        margin-bottom: 1%;
    }
    a {
        font-size: .7em;
        padding: 7px;
    }
</style>