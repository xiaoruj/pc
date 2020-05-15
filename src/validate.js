import Vue from 'vue'
import { extend, ValidationObserver, ValidationProvider, localize, configure } from 'vee-validate'
import *as rules from 'vee-validate/dist/rules'
import zh_CN from 'vee-validate/dist/locale/zh_CN.json'
import merge from 'lodash/merge'
configure({
    classes:{
        valid:'is-valid',
        invalid:'is-invalid',
    }
})
Object.keys(rules).forEach(rule => {
    extend(rule, rules[rule])
})
const locale = merge(zh_CN, {
    messages:{
        is:'{_field_}必须与密码相同',
        oneOf:'{_field_}必须同意'
    }
})
localize('zh_CN', locale)
Vue.component('ValidationProvider', ValidationProvider)
Vue.component('ValidationObserver', ValidationObserver)




