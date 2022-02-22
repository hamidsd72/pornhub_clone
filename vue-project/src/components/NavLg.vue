<template>
    <div class="row p-2">
        <div class="col-10 pr-5">

            <div class="input-group pr-5">
                    <!-- <img itemprop="logo" title="Pornhub" alt="Pornhub Porn Videos" src="https://di.phncdn.com/www-static/images/pornhub_logo_straight.svg?cache=2022020301" width="230" height="40"> -->
                <router-link to="/" >
                    <img :src="require('@/assets/images/index.png')" style="margin-right:75px;margin-left: 35px;" width="140" height="40" alt="logo">
                </router-link>

                <input 
                    class="form-control form-control-sm bg-black font-italic"
                    style="max-height: 27px;margin-top: 12px;border: none;border-radius:3px 0px 0px 3px;background-color: #343a40;"
                    type="text"
                    v-model="search"
                    placeholder="search videos"
                >

                <div class="input-group-append">
                    <span class="bg-orange text-black shadow" style="margin-top: 12px;border-radius:0px 3px 3px 0px;max-height: 27px;padding: 0px 26px;">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                </div>

                <router-link to="/upload" class="small text-light mb-1 pt-1 pr-2 pl-2 ml-4 mr-1" style="text-decoration: none;margin-top: 12px;height: 28px;border-radius: 5px;background-color: #363636">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-camera-video-fill mb-1 ml-1 mr-1" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M0 5a2 2 0 0 1 2-2h7.5a2 2 0 0 1 1.983 1.738l3.11-1.382A1 1 0 0 1 16 4.269v7.462a1 1 0 0 1-1.406.913l-3.111-1.382A2 2 0 0 1 9.5 13H2a2 2 0 0 1-2-2V5z"/>
                    </svg>
                    upload
                </router-link>
                <router-link to="/upgrade" class="small text-black mb-1 pt-1 pr-2 pl-2 font-weight-bold" style="text-decoration: none;margin-top: 12px;height: 28px;border-radius: 5px;background-color: orange;">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="currentColor" class="bi bi-star-fill mb-1 mr-1 ml-1" viewBox="0 0 16 16">
                        <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                    </svg>
                    upgrade
                </router-link>
                
            </div>

        </div>

        <div class="col mt-2 text-right">
            <router-link class="small mr-2" style="text-decoration: none;color: #b3b3b3;" to="/login">Log In</router-link>
            <router-link class="small mr-4" style="text-decoration: none;color: #b3b3b3;" to="/signup">Sign Up</router-link>
        </div>
    </div>
</template>