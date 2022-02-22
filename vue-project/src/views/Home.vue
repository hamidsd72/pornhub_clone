<template>
  <div class="Home" >
    <!-- <div class="d-none d-lg-block">

      <carousel v-if="headerCarousel" :autoplay="3000" :wrap-around="true" :items-to-show="1.1">
        <slide v-for="item in headerCarousel" :key="item.id">
          <img :src="require(`@/assets/images/${item.url}`)" :alt="item.id" style="min-width:100%;min-height: 650px;max-height: 650px;">
          <router-link to="/disco" style="position: absolute;margin-right:75%;margin-top: 27%;text-decoration: none;" class="shadow text-orange bg-gray p-3">
            <h2 class="font-weight-bold" style="text-align: left;">{{item.title}} <span class="text-white">{{item.price}}</span></h2>
            <h6 class="text-left">{{item.subject}}</h6>
          </router-link>
        </slide>

        <template #addons >
          <navigation class="mr-5 ml-5 bg-warning"/>
        </template>
      </carousel>

      <carousel v-if="logosCarousel" :autoplay="3000" :wrap-around="true" :items-to-show="8">
        <slide v-for="item in logosCarousel" :key="item.id" class="bg-orange border">
          <img :src="require(`@/assets/images/${item.url}`)" :alt="item.id" style="max-height: 75px;max-height: 675x;max-width: 150px;">
        </slide>

        <template #addons >
          <navigation class="bg-warning mr-4 ml-4"/>
        </template>
      </carousel>

    </div> -->
    
    <!-- <div class="d-lg-none mr-1 ml-1"> -->

      <!-- top header carousel -->
      <!-- <carousel v-if="headerCarousel" :autoplay="3000" :wrap-around="true" :items-to-show="1.1">
        <slide v-for="item in headerCarousel" :key="item.id">
          <img :src="require(`@/assets/images/${item.url}`)" :alt="item.id" style="min-width:100%;min-height: 400px;max-height: 450px;">
          <router-link to="/disco" style="position: absolute;margin-right:45%;margin-top: 95%;text-decoration: none;" class="shadow text-orange bg-gray pt-2 pl-3 pr-2 pb-0">
            <h6 style="text-align: left;">{{item.title}} <span class="text-white">{{item.price}}</span><br><small class="text-left">{{item.subject}}</small></h6>
          </router-link>
        </slide>

        <template #addons >
          <navigation class="mr-2 ml-2 bg-warning"/>
        </template>
      </carousel> -->
      <!-- end top header carousel -->

      <!-- logos carousel -->
      <!-- <carousel v-if="logosCarousel" :autoplay="3000" :wrap-around="true" :items-to-show="2.5">
        <slide v-for="item in logosCarousel" :key="item.id" class="bg-orange border">
          <img :src="require(`@/assets/images/${item.url}`)" :alt="item.id" style="max-height: 60px;max-height: 675x;max-width: 150px;">
        </slide>

        <template #addons >
          <navigation class="bg-warning mr-2 ml-2"/>
        </template>
      </carousel> -->
      <!-- end logos carousel -->

    <!-- </div> -->

    <img :src="require(`@/assets/images/v1.jpg`)" alt="item.id" style="width: 100%;max-height: 750px;">

    <div class="col-12 text-orange pt-3 pt-lg-5 pb-lg-2">NFTs of empowered women aim to drive female engagement in crypto </div>

    <!-- left or right items  -->
    <div v-if="LorRitemsTop" class="text-white mx-auto pb-lg-5" style="max-width: 1360px">
      <dir v-for="item in LorRitemsTop" :key="item.id" >
        <div v-if="parseInt(item.id % 2) == 0" class="row mb-5 pb-5">
          <div class="col-11 col-lg-7">
            <div style="position: absolute">
              <img :src="require(`@/assets/images/${item.url}`)" style=";width: 35%;margin-left:72%;margin-top:12%;border-radius:20px" alt="">
            </div>
            <h4 class="bg-gray text-orange font-weight-bold" style="position: absolute;margin-left: 65%;margin-top:30%">{{item.price}}</h4>
            <img :src="require(`@/assets/images/${item.url}`)" style="width: 100%;max-height:300px " alt="">
          </div>
          <div class="col d-none d-lg-block">
            <h1 class="pt-1 font-weight-bold mt-4">{{item.title}}</h1>
            <h4 class="pt-3">{{item.subject}}</h4>
          </div>
          <div class="col-11 d-lg-none">
            <h4 class="pt-1 font-weight-bold mt-4">{{item.title}}</h4>
            <small class="pt-3">{{item.subject}}</small>
          </div>
        </div>

        <div v-else class="row mb-5 pb-5">
          <div class="col d-none d-lg-block">
            <h1 class="pt-1 font-weight-bold mt-4">{{item.title}}</h1>
            <h4 class="pt-3">{{item.subject}}</h4>
          </div>
          <div class="col-11 col-lg-7">
            <div style="position: absolute">
              <img :src="require(`@/assets/images/${item.url}`)" style=";width: 35%;margin-right:72%;margin-top:12%;border-radius:20px" alt="">
            </div>
            <h4 class="bg-gray text-orange font-weight-bold" style="position: absolute;margin-left: 30%;margin-top:30%">{{item.price}}</h4>
            <img :src="require(`@/assets/images/${item.url}`)" style="width: 100%;max-height:300px " alt="">
          </div>
          <div class="col-11 d-lg-none">
            <h4 class="pt-1 font-weight-bold mt-4">{{item.title}}</h4>
            <small class="pt-3">{{item.subject}}</small>
          </div>
        </div>
        
      </dir>
    </div>
    <!-- end left or right items  -->

     <!-- circle card 4 taii -->
    <div v-if="quadruItems" class="pt-4 pb-4 bg-gray text-white">
      <div class="mx-auto row pt-5 pb-5" style="max-width: 1360px">
        <div v-for="item in quadruItems" :key="item.id" class="col-lg-3 text-left mt-5 mt-lg-0">
          <div class="bg-black border-gray shadow" style="min-height: 510px;border: 2px solid #363636;border-radius: 150px 150px 0px 0px">
            <img class="img-border-glass" :src="require(`@/assets/images/${item.url}`)" style="position: absolute;width: 75%;margin-top:7%;margin-left:8%;border-radius:200px" alt="">
            <div :style="emailBg" style="min-height: 300px;border-radius: 150px"></div>
            <div class="mt-3 mb-4 ml-3">
              <h3 class="mr-4">{{item.title}}</h3>
              <h6 class="mt-3 mr-3">{{item.body}}</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end circle card 4 taii -->

    <!-- image section -->
    <div :style="emailBg" id="emailBg" >
      <div class="mx-auto text-white row" style="max-width: 1340px;min-height:400px">
        <div class="d-none d-lg-block col-lg text-right mr-3 mr-lg-0"><img class="col pl-lg-5 pt-4" style="max-width: 300px" :src="require(`@/assets/images/logo.png`)" alt="logo"></div>
        <div class="d-none d-lg-block col-9 text-left">
          <h1 class="display-4 pl-5 ml-5 font-weight-bold mt-5 pt-5">The Lorem Ipson</h1>
          <h1 class="display-4 pl-5 ml-5 font-weight-bold">The Lorem Ipson</h1>
        </div>
        <div class="d-lg-none col-12 text-right mr-3 mr-lg-0 text-center pt-5"><img style="max-width: 150px" :src="require(`@/assets/images/logo.png`)" alt="logo"></div>
        <div class="d-lg-none col-12">
          <h4 class="font-weight-bold">The Lorem Ipson</h4>
          <h4 class="font-weight-bold">The Lorem Ipson</h4>
        </div>
      </div>
    </div>
    <!-- end image section -->
    
    <!-- <div class="col-12 text-orange pt-5 pb-5">NFTs of empowered women aim to drive female engagement in crypto </div> -->
    
    <!-- body posts -->
    <!-- <div v-if="bodyItems" class="row mx-auto" style="max-width: 1360px">
      <div v-for="item in bodyItems" :key="item.id" class="col-lg-4">
        <div class="border-gray mb-5 text-center shadow text-orange">
          <div><img class="shadow" style="width: 100%;max-height: 150px;" :src="require(`@/assets/images/${item.url}`)" :alt="item.id"></div>
          <div class="row pt-4">
            <div class="col"><a class="bg-gray text-orange h5" href="#">{{item.title}}</a></div>
            <div class="col text-right"><a class="bg-gray text-orange h5 mr-4" href="#">Preview : {{item.prev}}</a></div>
          </div>
          <div class="col-12">
            <div class="mt-lg-4 p-3 row">
              <div class="col-lg text-left">{{item.body}}</div>
              <div class="col-lg mt-2 mt-lg-5"><button class="p-2" style="background-color: #ff9900;border: none;border-radius: 5px;font-weight: bold;">Buy This Item >></button></div>
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <!-- end body posts -->

    <!-- posts -->
    <div class="row mx-auto mt-5 mb-4" style="max-width: 1340px">
      <h1 class="text-left font-weight-bold text-orange mb-5">The Latest Content About MetaVerse</h1>
      <div v-for="item in posts" :key="item.id">
        <div class="col-lg-9 text-light border-gray shadow mb-5">
          <img class="border-gray shadow" :src="require(`@/assets/images/${item.url}`)" style="width: 100%;max-height: 500px;" :alt="item.id"> 
          <div class="d-none d-lg-block pt-4 pl-4 pr-4 h4 text-left" style="line-height: 1.6">{{item.body}}</div>
          <div class="d-lg-none pt-3 pl-2 pr-4 pb-3 text-left">{{item.body}}</div>
          <div class="text-right pr-lg-5 mb-4"><button class="p-2 pr-5 pl-5" style="background-color: #ff9900;border: none;border-radius: 5px;font-weight: bold;">Read More >></button></div>
        </div>
      </div>
    </div>
    <!-- end posts -->

    <!-- square card 3 taii -->
    <div v-if="tripleItems" class="pt-4 pb-4 bg-gray text-white">
      <div class="mx-auto row pt-5 pb-5" style="max-width: 1360px">
        <div v-for="item in tripleItems" :key="item.id" class="col-lg-4 mt-5 mt-lg-0">
          <div class="card" style="border: 1px solid #333">
            <div class="card-header" style="background-color: #ff9900;min-height: 150px;min-width: 100%px;" :style="emailBg">
              <div style="position: absolute;"><img :src="require(`@/assets/images/${item.url}`)" class="img-border-glass" style="margin-right: 4.5%;width: 50%;margin-top: 10%;border-radius: 100px" alt=""></div>
            </div>
            <div class="card-body bg-black" style="padding-top: 20%;">
              <h2 class="pt-5 pb-2">{{item.title}}</h2>
              <h6 class="pr-4 pl-4 pt-2 pb-2">{{item.body}}</h6>
              <div class="row pt-4 pb-4">
                <div class="col text-right">
                  <button class="text-light p-2 pr-lg-4 pl-lg-4 text-dark" style=";background-color: #ff9900;border: none;border-radius: 5px;font-weight: bold;">Buy Now</button>
                </div>
                <div class="col-7 text-left">
                  <button class="text-light p-2 pr-lg-4 pl-lg-4" style="background: #2f2f2f;border: none;border-radius: 5px;font-weight: bold;">ReminderForLater</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- end square card 3 taii -->

    <!-- form email -->
    <div :style="emailBg" id="emailBg">
      <div class="pt-lg-5 mx-auto text-white" style="max-width: 1340px">
          
          <div class="d-none d-lg-block">
            <h1 class="font-weight-bold display-4">
              <div class="mb-3">Need Help? WantTo</div>
              <div class="row">
                <div class="col text-right pr-lg-5">Belnvolved?</div>
                <div class="col text-left pl-lg-5">Contact Us</div>
              </div>
            </h1>

            <div class="reg pb-5">
              <input type="text" name="email" v-on:keyup="validateEmail()" :class="{'border border-danger':this.Eemail===false}" v-model="email" placeholder="Email">
              <textarea name="msg" rows="4" v-on:keyup="validateMsg()" :class="{'border border-danger':this.Emsg===false}" v-model="msg" placeholder="Type Message"></textarea>

              <div class="text-left font-weight-bold">
                <button v-if="formValid()" class="text-light" style="background-color: #ff9900;">Send Email</button>
                <button v-else disabled="disabled">Send Email</button>
              </div>
            </div>
          </div>

          <div class="d-lg-none">
            <h6 class="font-weight-bold pt-3">
              <div class="mb-2">Need Help? WantTo</div>
              <div class="row">
                <div class="col text-right">Belnvolved?</div>
                <div class="col text-left">Contact Us</div>
              </div>
            </h6>

            <div class="reg2 pl-1 pr-1 pb-3">
              <input style="background-color: black" type="text" name="email" v-on:keyup="validateEmail()" :class="{'border border-danger':this.Eemail===false}" v-model="email" placeholder="Email">
              <textarea style="background-color: black" name="msg" rows="2" v-on:keyup="validateMsg()" :class="{'border border-danger':this.Emsg===false}" v-model="msg" placeholder="Type Message"></textarea>

              <div class="text-left font-weight-bold">
                <button v-if="formValid()" class="text-light" style="background-color: #ff9900;">Send Email</button>
                <button v-else disabled="disabled">Send Email</button>
              </div>
            </div>
          </div>

      </div>
    </div>
    <!-- end form email -->

  </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel';

export default {
  name: 'Home',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation,
  },
  data() {
    return {
      headerCarousel: [
        {id: 7,title: "Title Post 7 ",subject: "Subject Post Number 7",price: " $ 11.009",url: "d3.webp"},
        {id: 1,title: "Title Post 1 ",subject: "Subject Post Number 1",price: " $ 1.413",url: "v1.jpg"},
        {id: 2,title: "Title Post 2 ",subject: "Subject Post Number 2",price: " $ 2.012",url: "v2.jpg"},
        {id: 3,title: "Title Post 3 ",subject: "Subject Post Number 3",price: " $ 1.312",url: "v3.jpg"},
        {id: 4,title: "Title Post 4 ",subject: "Subject Post Number 4",price: " $ 5.021",url: "v4.jpg"},
        {id: 5,title: "Title Post 5 ",subject: "Subject Post Number 5",price: " $ 4.106",url: "v5.jpg"},
        {id: 6,title: "Title Post 6 ",subject: "Subject Post Number 6",price: " $ 7.009",url: "v6.jpg"},
      ],
      logosCarousel: [
        {id: 1,url:"l1.png"},
        {id: 2,url:"l2.png"},
        {id: 3,url:"l3.png"},
        {id: 4,url:"l4.png"},
        {id: 5,url:"l5.png"},
        {id: 6,url:"l6.png"},
        {id: 7,url:"l7.png"},
        {id: 8,url:"l8.png"},
        {id: 9,url:"l9.png"},
        {id: 10,url:"l10.png"},
        {id: 11,url:"l11.png"},
        {id: 12,url:"l12.png"},
        {id: 13,url:"l13.png"},
      ],
      LorRitemsTop: [
        {id:2, title: "Title Post 2 ", price: " $ 12.012",url: "i2.png",
          subject: "Abidi plans to officially launch the Women Rise project at the end of November this year, around the same time as the United Nations’ 16 Days of Activism against gender-based violence campaign scheduled for November 25"
        },
        {id:3, title: "Title Post 3 ", price: " $ 70.009",url: "i3.png",
          subject: "Abidi further remarked that she is most excited about the project’s plan to give back to a number of organizations she has worked with over the years. For example, she shared that 25% of proceeds will go to the Malala Fund, while another 10%  will be donated across organizations supporting gender equality, girls education and mental health in marginalized societies."
        },
        {id:4, title: "Title Post 4 ", price: " $ 51.021",url: "i4.png",
          subject: "Abidi further remarked that she is most excited about the project’s plan to give back to a number of organizations she has worked with over the years. For example, she shared that 25% of proceeds will go to the Malala Fund, while another 10%  will be donated across organizations supporting gender equality, girls education and mental health in marginalized societies."
        },
      ],
      quadruItems: [
        {id: 1,title: "aging technology for Avatars",url: "i1.png",body: "Novatars can act as NFT profile pics on social networks. Twitter has recently applied NFT profile picture integration to its platform"},
        {id: 2,title: "Your own Avatar for social life",url: "i1.png",body: "The owner has the choice to launch the aging process on the blockchain for revealing the adult version of the baby avatar"},
        {id: 3,title: "25K Unique ai generated Novatars",url: "i1.png",body: "Each of the 25K Novatars has its unique facial traits, expressions, character and sometimes even profession"},
        {id: 4,title: "Find your Meta identity",url: "i1.png",body: "Novatars present the real life persona resembling diversity of human race, gender and sexual orientation"},
      ],
      bodyItems: [
        {id: 1, url: "v1.jpg",prev: "12",title: "Woman #9650",body: "NFTs of empowered women aim to drive female engagement in crypto "},
        {id: 2, url: "v2.jpg",prev: "90",title: "Woman #1129",body: "NFTs of empowered women aim to drive female engagement in crypto "},
        {id: 3, url: "v3.jpg",prev: "17",title: "Woman #7860",body: "NFTs of empowered women aim to drive female engagement in crypto "},
        {id: 4, url: "v4.jpg",prev: "42",title: "Woman #4490",body: "NFTs of empowered women aim to drive female engagement in crypto "},
        {id: 5, url: "v5.jpg",prev: "60",title: "Woman #4480",body: "NFTs of empowered women aim to drive female engagement in crypto "},
        {id: 6, url: "v6.jpg",prev: "14",title: "Woman #4270",body: "NFTs of empowered women aim to drive female engagement in crypto "},
      ],
      tripleItems: [
        {id: 1,title: "The Cesar NFT",url: "i1.png",body: "Novatars can act as NFT profile pics on social networks. Twitter has recently applied NFT profile picture integration to its platform"},
        {id: 2,title: "The Cesar NFT",url: "i1.png",body: "Novatars can act as NFT profile pics on social networks. Twitter has recently applied NFT profile picture integration to its platform"},
        {id: 3,title: "The Cesar NFT",url: "i1.png",body: "Novatars can act as NFT profile pics on social networks. Twitter has recently applied NFT profile picture integration to its platform"},
      ],
      posts: [
        {id: 1, body: "The market for nonfungible token, or NFT, digital artwork is taking on the traditional art industry. Within the first six months of 2021, analytics firm DappRadar recorded $2.5 billion in NFT sales, showing a major increase from the $13.7 million in sales during the same time period in 2020. Christie's auction house reported $93.2 million in NFT sales during the first half of 2021. In addition to impressive sales, the NFT marketplace OpenSea, which reportedly hosts 98% of the entire market’s transactions, registered $4 billion in NFT trading volume during August this year", url: "d3.webp" },
        {id: 2, body: "Abidi further remarked that she is most excited about the project’s plan to give back to a number of organizations she has worked with over the years. For example, she shared that 25% of proceeds will go to the Malala Fund, while another 10%  will be donated across organizations supporting gender equality, girls education and mental health in marginalized societies", url: "d1.jpg" },
        {id: 3, body: "Following the launch of Boss Beauties, Mayer shared that the entire collection sold out in just 90 minutes, demonstrating the financial impact NFTs can have for small business owners. “I was blown away by this because during the pandemic, I had been working hard to get My Social Canvas to survive. As a small business owner I was really emotional to see the collection sell out so quickly,” she said.", url: "d2.jpg" },
      ],
      head:  { backgroundImage: `url(${require('@/assets/images/v1.jpg')})` },
      emailBg: { backgroundImage: `url(${require('@/assets/images/vr-music.jpg')})` },
      sliderVal: 0,
      email: '',
      Eemail: null,
      msg: '',
      Emsg: null,
    }
  },
  methods: {
    validateEmail() { 
        this.Eemail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(this.email) 
    },
    validateMsg() { 
        this.Emsg = false
        if( this.msg.length > 6 ) { this.Emsg = true } },
    formValid() { 
        if ( this.Eemail && this.Emsg ) { return true }
        return false
    }
  },
}
</script>

<style>
  #emailBg {
    widows: 600px;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover; 
    /* background-blend-mode: darken; */
    background-blend-mode: luminosity;
  }
  .router-link-active:hover {
    background-color: #000;
    color: #000;
  }
</style>