<template>

  <div class="App">    
    
    <NavbarTop />
    <div class="d-none d-lg-block" style="margin-top:105px;"></div>
    <div style="margin-top:65px;"></div>
    <div class="" style="min-height: 665px"><router-view /></div>
        
    <footer class="p-3 pr-lg-5 pl-lg-5">
      <!-- <div class="bg-light mx-auto p-3 mb-3" style="max-width: 800px">
        <div class="row">
          <div class="col-lg-2 col-4"><img :src="require(`@/assets/vr/1.png`)" style="max-width: 75px;max-height:50px" alt="vr"></div>
          <div class="col-lg-2 col-4"><img :src="require(`@/assets/vr/2.png`)" style="max-width: 75px;max-height:50px" alt="vr"></div>
          <div class="col-lg-2 col-4"><img :src="require(`@/assets/vr/3.png`)" style="max-width: 75px;max-height:50px" alt="vr"></div>
          <div class="col-lg-2 col-4"><img :src="require(`@/assets/vr/4.png`)" style="max-width: 75px;max-height:50px" alt="vr"></div>
          <div class="col-lg-2 col-4"><img :src="require(`@/assets/vr/5.png`)" style="max-width: 75px;max-height:50px" alt="vr"></div>
          <div class="col-lg-2 col-4"><img :src="require(`@/assets/vr/6.png`)" style="max-width: 75px;max-height:50px" alt="vr"></div>
        </div>
      </div> -->
      <div class="row pr-5 pl-5">

        <div class="col-lg-3 col-6 text-left">
          <p class="head">Header Menu</p>
          <div class="body">
            blah blah ...
            <br>
            blah blah ...
            <br>
            blah blah ...
            <br>
            blah blah ...
          </div>
        </div>
        <div class="col-lg-3 col-6 text-left">
          <p class="head">Header Menu</p>
          <div class="body">
            blah blah ...
            <br>
            blah blah ...
            <br>
            blah blah ...
            <br>
            blah blah ...
          </div>
        </div>
        <div class="col-lg-3 col-6 text-left">
          <p class="head">Header Menu</p>
          <div class="body">
            blah blah ...
            <br>
            blah blah ...
            <br>
            blah blah ...
            <br>
            blah blah ...
          </div>
        </div>
        <div class="col-lg-3 col-6 text-left">
          <p class="head">Header Menu</p>
          <div class="body">
            blah blah ...
            <br>
            blah blah ...
            <br>
            blah blah ...
            <br>
            blah blah ...
          </div>
        </div>
      
      </div>
    </footer>

  </div>

</template>

<script>
  import NavbarTop from '@/components/NavbarTop.vue'
  import axios  from 'axios'
  export default {
    name: 'App',
    components: {
      NavbarTop
    },
    data() {
      return {
      }
    },
    watch: {
      $route() {
        this.$store.dispatch("onStart")
        this.$store.commit("onStarted")
      }
    },
    mounted() {
      this.$store.dispatch("onStart")
      this.$store.commit("onStarted")
      // axios.get('/api/auth/users/me/')
      //   .then(response => {
      //     axios.get(`/myuser/${response.data.id}/`)
      //       .then(response => this.user = response.data) 
      //       .catch(e => console.log(e.response.status)) 
      //   })
      //   .catch(e => console.log(e.response.status))
    },
    methods: {
      
    },
  }
</script>
 
<style>
.img-border-glass {
  border-radius:50%;
  box-shadow: 0 0 0 2px #fff, 1px 1px 5px rgb(0 0 0 / 32%);
  object-fit: cover;
}
.bg-black {
  background-color: black;
}
.text-black {
  color: black;
}
.bg-light-black {
  background-color: #101010;
}
.bg-gray {
  background-color: #363636;
}
.border-gray {
  border: 1px solid #333
}
.text-orange {
  color: #ff9900;
}
.bg-orange {
  background-color: #ff9900;
}
.text-black {
  color: #010101;
}
span {
  color: #010101;
}
hr {
  background-color: #010101;
}
footer { background: #151515; }
footer .head { font-weight: 700; color: grey; margin: 0px }
footer .body { color: #ff9900; font-size: 13px; line-height: 28px; }
.background-color-navbar-full {
  background-color: #1b1b1b;
}
#app {
  /* font-family:BYekan,'BYekan',tahoma; */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: Arial,Helvetica,sans-serif;
  text-align: center;
  color: teal;
}
a {
  text-decoration: none;
}
a.router-link-exact-active {
  color: #42b983;
}

/* start navbar */
.sidenavLeft {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: black;
  overflow-x: hidden;
  transition: 0.7s;
  padding-top: 0px;
}

.sidenavRight {
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  right: 0;
  background-color: black;
  overflow-x: hidden;
  transition: 0.7s;
  padding-top: 0px;
}

.sidenav .item {
  padding: 16px 21px 16px 21px;
  background-color: #222222;
  color: #cccccc;
  margin: 10px 15px 0px;
  text-align: left;
  text-decoration: none;
  font-size: small;
  font-weight: bold;
  border-radius: 10px;
  display: block;
  transition: 0.7s;
}

.sidenav .mini-item {
  background-color: #222222;
  color: #cccccc;
  margin: 10px 15px 0px;
  text-align: left;
  text-decoration: none;
  font-size: small;
  font-weight: bold;
  border-radius: 10px;
  display: block;
  transition: 0.7s;
  width: calc((100% - 10px)/ 2);
  height: 75px;
  display: inline-block;
  padding: 18px 0px 13px 21px;
  line-height: 19px;
}

.sidenav a:hover {
  color: #ff9900;
}

@media screen and (max-height: 450px) {
  .sidenav {padding-top: 15px;}
  .sidenav a {font-size: 18px;}
}
/* end navbar */

</style>
