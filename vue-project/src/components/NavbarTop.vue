<template>
    <div class="Navbar fixed-top background-color-navbar-full" >
        <div class="mx-auto" style="max-width: 1380px;">
            <div class="d-none d-lg-block">
                <NavbarLarge />
            </div>

            <nav class="navbar navbar-expand-lg p-0 pt-1 pb-2 pr-lg-5 pl-lg-5">
                <NavbarSmall />

                <div class="collapse navbar-collapse p-0 background-color-navbar-full" id="main_nav">
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">legal</a>
                            <ul class="dropdown-menu dropdown-menu-end bg-dark">
                                <li><a class="dropdown-item" href="#">Term Of Service</a></li>
                                <li><a class="dropdown-item" href="#">Privacy Policy</a></li>
                                <li><a class="dropdown-item" href="#">Risk Disclosure</a></li>
                                <li><a class="dropdown-item" href="#">Disclaimer</a></li>
                                <li><a class="dropdown-item" href="#">18.U.S.C</a></li>
                                <li><a class="dropdown-item" href="#">$2257 Statement</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">Join Our Community</a>
                            <ul class="dropdown-menu dropdown-menu-end bg-dark">
                                <li><a class="dropdown-item" href="#">Twitter</a></li>
                                <li><a class="dropdown-item" href="#">Instagram</a></li>
                                <li><a class="dropdown-item" href="#">YouTube</a></li>
                                <li><a class="dropdown-item" href="#">Telegram</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">navigation</a>
                            <ul class="dropdown-menu dropdown-menu-end bg-dark">
                                <li><a class="dropdown-item" href="#">NFT Market</a></li>
                                <li><a class="dropdown-item" href="#">Creators</a></li>
                                <li><a class="dropdown-item" href="#">Shop</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">about</a>
                            <ul class="dropdown-menu dropdown-menu-end bg-dark">
                                <li><a class="dropdown-item" href="#">Team</a></li>
                                <li><a class="dropdown-item" href="#">Acceptable Use Policy</a></li>
                                <li><a class="dropdown-item" href="#">Creator Policy</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <a class="nav-link dropdown-toggle" href="#" data-bs-toggle="dropdown">token</a>
                            <ul class="dropdown-menu dropdown-menu-end bg-dark">
                                <li><a class="dropdown-item" href="#">How To Buy <span class="text-orange">PornHub</span></a></li>
                                <li><a class="dropdown-item" href="#"><span class="text-orange">Porn</span> Form</a></li>
                                <li><a class="dropdown-item" href="#"><span class="text-orange">Porn</span> Sowap</a></li>
                                <li><a class="dropdown-item" href="#">Chart</a></li>
                                <li><a class="dropdown-item" href="#">Contact</a></li>
                            </ul>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <router-link class="navbar-nav nav-link" to="/map">road map</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <router-link class="navbar-nav nav-link" to="/vr-girls">vr-girls</router-link>
                        </li>
                    </ul>
                    <ul class="navbar-nav mx-auto">
                        <li class="nav-item dropdown">
                            <router-link class="navbar-nav nav-link" to="/disco">disco</router-link>
                        </li>
                    </ul>
                </div>
            </nav>

            <!-- <div class="d-lg-none">
                <div class="col-12">
                    <div class="row pt-1 bg-black text-light text-center" style="border: 1px solid #262626;">
                        <div class="col-3 box pt-2 pb-2 mb-1"><router-link class="text-light" to="/disco">disco</router-link></div>    
                        <div class="col-3 box pt-2 pb-2 mb-1"><router-link class="text-light" to="/vr-girls">vr-girls</router-link></div>    
                        <div class="col-3 box pt-2 pb-2 mb-1"><router-link class="text-light" to="/map">road map</router-link></div>    
                        <div class="col-3 box pt-2 pb-2 mb-1"><a href="#" class="text-light">ITEM BAR</a></div>    
                    </div>
                </div>
            </div> -->
            
        </div>
    </div>
</template>

<script>
import Vue from 'vue'
import NavbarLarge from '@/components/NavLg.vue'
import NavbarSmall from '@/components/NavSm.vue'
export default {
    name: 'Navbar',
    components: {
        NavbarLarge, NavbarSmall
    },
}
</script>

<style type="text/css">

    /* ============ desktop view ============ */
    @media all and (min-width: 992px) {
        .navbar .nav-item .dropdown-menu{ display: none; }
        /* .navbar .nav-item:hover .nav-link{   } */
        .navbar .nav-item:hover .dropdown-menu{ display: block; }
        .navbar .nav-item .dropdown-menu{ margin-top:0; }
        .navbar .nav-item a{ font-size: 11px; font-weight: bold;color: white;text-transform: uppercase;font-weight: 700;text-align: center; }
    }	
    /* ============ desktop view .end// ============ */

    .box{
        color: #ccc;
        font-size: .6em;
        font-weight: 700;
        white-space: normal;
        text-align: center;
        border-left: 1px solid #262626;

    }
    #main_nav a {
        text-align: left;
    }
</style>