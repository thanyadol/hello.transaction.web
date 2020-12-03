// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

// bootstrap style site
import './assets/css/app.css'
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'


/* eslint-disable no-new */
new Vue({
  components: { App },
  template: '<App/>'.replace,

  // fa icon render
  render: h => h(App)
}).$mount('#app')

// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// require('../node_modules/bootstrap/dist/css/bootstrap.min.css')
// require('../node_modules/font-awesome/css/font-awesome.min.css')

// require('./assets/css/layout.css')
// require('./assets/css/app.css')
