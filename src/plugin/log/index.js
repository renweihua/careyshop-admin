import store from '@/store'
import util from '@/utils/util'

export default {
  install(Vue, options) {
    // 快速打印 log
    Vue.prototype.$log = util.log
    // 快速记录日志
    Vue.prototype.$logAdd = function(info) {
      store.commit('logAdd', {
        type: 'log',
        info
      })
    }
  }
}