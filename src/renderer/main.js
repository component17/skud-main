import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

import uPoint from 'upoint-vue-ui';
import locale from 'upoint-vue-ui/locale/lang/ru-RU'

import 'upoint-vue-ui/assets/css/main.css'

const os = require('os');
const {join} = require('path');
const fs = require('fs');

const pathDb = join(os.homedir(), 'skud');

fs.mkdir(pathDb, (err) => {

});

const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');

const adapter = new FileSync(join(pathDb, 'db.json'));

const db = low(adapter);

Vue.prototype.$db = db;

db.defaults({ guests: [], cards: [] }).write();

Vue.use(uPoint, {size: 'mini', locale});

if (!process.env.IS_WEB) Vue.use(require('vue-electron'));
Vue.http = Vue.prototype.$http = axios;
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
    components: {App},
    router,
    store,
    template: '<App/>'
}).$mount('#app');
