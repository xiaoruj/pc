import Vue from 'vue'
import { Pagination, MessageBox, Message} from 'element-ui'
Vue.component(Pagination.name, Pagination)
Vue.prototype.$msgbox = MessageBox
Vue.prototype.$alert = MessageBox.alert
Vue.prototype.$message = Message


