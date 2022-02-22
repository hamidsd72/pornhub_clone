import { createApp } from 'vue'
import App    from './App.vue'
import router from './router'
import store  from './store'
import axios  from 'axios'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery/src/jquery.js';
import 'popper.js/dist/popper.min.js';
import 'bootstrap/dist/js/bootstrap.min.js';

// axios.defaults.baseURL = 'http://49.12.228.156:8000/';
axios.defaults.baseURL = 'http://127.0.0.1:8000/';

createApp(App).use(store).use(router).mount('#app')
