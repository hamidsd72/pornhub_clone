<template>
    <button class="navbar-toggler pb-0" @click="openNavLeft()" style="padding-left: 7px;">
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-list text-orange" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
        </svg>
    </button>
    <router-link to="/" >
        <img class="navbar-toggler" :src="require('@/assets/images/index.png')" style="margin-top: 3px;margin-left: 35px;" width="125" height="38" alt="logo">
    </router-link>
    <!-- <img itemprop="logo" class="navbar-toggler" style="margin-left: 41px;margin-top: 2px;" title="Pornhub" alt="Pornhub Porn Videos" src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.svg?cache=2022020301" width="145" height="36"> -->
    
    <div class="navbar-toggler p-0">
        <button class="btn" type="button" data-bs-toggle="collapse" data-bs-target="#main_nav"  aria-expanded="false" aria-label="Toggle navigation">
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" class="bi bi-search" style="color: #c6c6c6;" viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
            </svg>
        </button>

        <button class="btn pr-4" @click="openNavRight()">
            <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-person-circle" style="color: #c6c6c6;" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
            </svg>
        </button>
    </div>

    <div id="left" class="sidenavLeft sidenav">
        <div class="head row mb-3" >
            <div class="col text-left">
                <img :src="require('@/assets/images/index.png')" style="margin-left: 20px;margin-top: 15px;" width="90" height="27.5" alt="logo">
                <!-- <img itemprop="logo" class="mt-3 ml-3" title="Pornhub" alt="Pornhub Porn Videos" src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.svg?cache=2022020301" width="103" height="26"> -->
            </div>
            <div class="col text-right" style="margin-top: 13px;margin-right: 19px">
                <a href="#" @click="closeNavLeft()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg text-orange" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </a>
            </div>
        </div>
        <a class="item" data-toggle="collapse" href="#legal" role="button" aria-expanded="false" aria-controls="collapseExample">
            Legal
        </a>
        <div class="collapse" id="legal">
            <div class="body">Term Of Service</div>
            <div class="body">Privacy Policy</div>
            <div class="body">Disclaimer</div>
            <div class="body">18.U.S.C</div>
            <div class="body">$2257 Statement</div>
        </div>
        <a class="item" data-toggle="collapse" href="#JoinOurCommunity" role="button" aria-expanded="false" aria-controls="collapseExample">
            Join Our Community
        </a>
        <div class="collapse" id="JoinOurCommunity">
            <div class="body">Twitter</div>
            <div class="body">Instagram</div>
            <div class="body">YouTube</div>
            <div class="body">Telegram</div>
        </div>
        <a class="item" data-toggle="collapse" href="#navigation" role="button" aria-expanded="false" aria-controls="collapseExample">
            Navigation
        </a>
        <div class="collapse" id="navigation">
            <div class="body">NFT Market</div>
            <div class="body">Creators</div>
            <div class="body">Shop</div>
        </div>
        <a class="item" data-toggle="collapse" href="#about" role="button" aria-expanded="false" aria-controls="collapseExample">
            About
        </a>
        <div class="collapse" id="about">
            <div class="body">Team</div>
            <div class="body">Acceptable Use Policy</div>
            <div class="body">Creator Policy</div>
        </div>
        <a class="item" data-toggle="collapse" href="#token" role="button" aria-expanded="false" aria-controls="collapseExample">
            Token
        </a>
        <div class="collapse" id="token">
            <div class="body">How To Buy <span class="text-orange">PornHub</span></div>
            <div class="body"><span class="text-orange">Porn</span> Form</div>
            <div class="body"><span class="text-orange">Porn</span> Sowap</div>
            <div class="body">Chart</div>
            <div class="body">Contact</div>
        </div>
        <div class="input-group-append">
            <router-link @click="closeNavLeft()" class="mini-item" style="margin-right: 11px" to="/map">
                Road Map
                <br>
                <span class="small text-orange">View Road Map</span>
            </router-link>
            <router-link @click="closeNavLeft()" class="mini-item ml-0" to="#">
                Link Router
                <br>
                <span class="small text-orange">Link Router</span>
            </router-link>
        </div>
        <div class="input-group-append">
            <router-link @click="closeNavLeft()" class="mini-item" style="margin-right: 11px" to="/vr-girls">
                VR-Girls
                <br>
                <span class="small text-orange">ComingSoon...</span>
            </router-link>
            <router-link @click="closeNavLeft()" class="mini-item ml-0" to="/disco">
                Disco
                <br>
                <span class="small text-orange">ComingSoon...</span>
            </router-link>
        </div>
    </div>

    <div id="right" class="sidenavRight sidenav pr-2 pr-lg-0">
        <div class="head row mb-4" >
            <div class="col text-left" style="margin-top: 12px;margin-left: 15px">
                <a href="#" @click="closeNavRight()">
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="currentColor" class="bi bi-x-lg text-orange" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M13.854 2.146a.5.5 0 0 1 0 .708l-11 11a.5.5 0 0 1-.708-.708l11-11a.5.5 0 0 1 .708 0Z"/>
                        <path fill-rule="evenodd" d="M2.146 2.146a.5.5 0 0 0 0 .708l11 11a.5.5 0 0 0 .708-.708l-11-11a.5.5 0 0 0-.708 0Z"/>
                    </svg>
                </a>
            </div>
            <div class="col text-right">
                <img :src="require('@/assets/images/index.png')" style="margin-right: 15px;margin-top: 15px;" width="95" height="30" alt="logo">
                <!-- <img itemprop="logo" class="mt-3 mr-2" title="Pornhub" alt="Pornhub Porn Videos" src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.svg?cache=2022020301" width="103" height="26"> -->
            </div>
        </div>
        <div class="row mr-3 ml-3 pb-5">
            <div class="col-4 small text-light font-weight-bold">
                <div class="pt-3" style="min-height: 60px;border-radius: 50px;background-color: rgba(30,30,30,.5);">
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" class="bi bi-cloud-arrow-up" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                        <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
                    </svg>
                </div>
                Upload
            </div>
            <div class="col-4 small text-light font-weight-bold">
                <div class="pt-3" style="min-height: 60px;border-radius: 50px;background-color: rgba(30,30,30,.5);">
                    <router-link @click="closeNavRight()" to="/login" class="text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-person-circle" viewBox="0 0 16 16">
                            <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                            <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
                        </svg>
                    </router-link>
                </div>
                Login
            </div>
            <div class="col-4 small text-light font-weight-bold">
                <div class="pt-3" style="min-height: 60px;border-radius: 50px;background-color: rgba(30,30,30,.5);">
                    <router-link @click="closeNavRight()" to="/signup" class="text-light">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-pencil" viewBox="0 0 16 16">
                            <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z"/>
                        </svg>
                    </router-link>
                </div>
                Signup
            </div>
        </div>
        <router-link class="item" to="#">Link Router</router-link>
        <router-link class="item" to="#">Link Router</router-link>
        <router-link class="item" to="#">Link Router</router-link>
        <router-link class="item" to="#">Link Router</router-link>
    </div>

</template>

<script>
export default {
    data() {
        return {
            pr: 'pr-3',
        }
    },
    created() {
        if (this.$route.path == '/') {
            this.pr = ''
        }
    },
    methods: {
        openNavLeft() {
            document.getElementById("left").style.width = "315px";
        },

        closeNavLeft() {
            document.getElementById("left").style.width = "0";
        },
        openNavRight() {
            document.getElementById("right").style.width = "330px";
        },

        closeNavRight() {
            document.getElementById("right").style.width = "0";
        },
    },
}
</script>

<style>
    .collapse {
        margin-left: 5%;
        margin-right: 5%;
        padding-top: 3%;
        padding-bottom: 2%;
        background-color: #0f0f0f;
        border-radius: 0px 0px 10px 10px;
    }
    .collapse .body {
        text-align: left;
        margin-left: 40px;
        margin-bottom: 2%;
        color: #c6c6c6;
        font-size: 12px;
        font-weight: bold;
        padding: 13px 0 10px 10px;
        text-decoration: none;
    }
</style>