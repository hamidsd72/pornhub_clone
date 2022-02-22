<template>
    <div class="Register hero-image" :style="cssProps">
        <div style="max-width: 1435px" class="mx-auto pt-lg-4">
            
            <LargeLogin />

            <SmallLogin />
            
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import LargeLogin from '@/components/LgLogin.vue'
import SmallLogin from '@/components/SmLogin.vue'
export default {
    name: 'Register',
    components: {
        LargeLogin, SmallLogin
    },
    data() {
        return {
            // cssProps: { backgroundImage: `url(${require('@/assets/images/sea.jpg')}) , url(${require('@/assets/images/reg.jpg')}) ` },
            cssProps: { backgroundImage: `url(${require('@/assets/images/v6.jpg')}) ` },
        }
    },
}
</script>

<style >
    .hero-image {
        height: 665px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover; 
        /* background-blend-mode: darken; */
        background-blend-mode: luminosity;
    }
    .reg input {
        width: 100%;
        box-sizing: border-box;
        border-radius: 2px;
        border: 1px solid #555;
        background: rgba(0,0,0,.9);
        padding: 9px 15px;
        font-size: 17px;
        margin: 7px auto;
        color: #ccc;
        margin-top: 2%;
    }
    .reg button {
        border: none;
        background: #2f2f2f;
        color: #ccc;
        padding: 14px 20px;
        vertical-align: middle;
        margin-right: 20px;
        margin: 20px 20px 20px 0;
        width: 300px;
        border-radius: 5px;
        font-weight: bold;
    }

    .reg2 input {
        box-sizing: border-box;
        margin: 10px auto;
        margin-top: 2%;
        width: 100%;
        border: 1px solid #464646;
        background: rgba(255,255,255,.16);
        color: #fff;
        font-size: .9em;
        padding: 9px 10px 8px;
        border-radius: 1px;
        display: block;
        height: 37px;
    }
    .reg2 button {
        border: none;
        padding: 10px 20px;
        vertical-align: middle;
        border-radius: 0px;
        background: #2f2f2f;
        color: #979595;
        width: 65%;
        font-size: 16px;
        margin-right: 5%;
    }

    .orangeButton:hover {
        background: #ffa31a;
    }
</style>