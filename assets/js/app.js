import Vue         from 'vue'
import _           from 'lodash'
import VueResource from 'vue-resource'
import VueModified from './lib/vue.modified'

Vue.use(VueResource)
Vue.use(VueModified)

var emailValidator = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
var phoneValidator = /\D*([2-9]\d{2})(\D*)([2-9]\d{2})(\D*)(\d{4})\D*/

var zVueApp = new Vue({

    debug: true,



    el: '[app]',



    events: {
        'loader:start'() { this.loader = true; console.log('loader:start') },
        'loader:stop'() { this.loader = false; console.log('loader:stop') }
    },
    
    
    
    data: {
        loader: false,
        errorMessage: '',
        showSuccess: false,
        submittedForm: false,
    },

    // computed property for form validation state
    /*
    computed: {
      validation() {
        return {
            FirstName: !!this.form.FirstName.trim(),
            LastName: !!this.form.LastName.trim(),
            Address1: !!this.form.Address1.trim(),
            Email: emailValidator.test(this.form.Email),
        }
      },

      isFormValid() {
        var validation = this.validation
        return Object.keys(validation).every(function (key) {
          return validation[key]
        })
      },

      isFormInvalid() {
        return ! this.isFormValid
      }

    },
    */
    
    
    
    directives: {
        disabled (v) {
            this.el.disabled = !!v
        }
    },
    
    
    
    methods: {

    },
    
    
    
    ready () {

        
    },
})