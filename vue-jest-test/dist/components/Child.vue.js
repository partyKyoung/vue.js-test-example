//<template>
//<div>
//  <h3>{{message}}</h3>
//  <button class="click-btn" @click="changeText">클릭 :)</button>
//</div>
//</template>
//
import module from "module";
export default {
  name: 'child-component',
  methods: {
    changeText: function () {
      this.message = "얍얍"
    }
  },
  data () {
    return {
      message: '테스트'
    }
  }
}
    ;
    (function(m){
    let ex = m.exports;
    if (ex.__esModule) {
        // revert to amd (default is directly exported)
        ex = m.exports = ex.default;
    }// find vue definition object
    let opts = typeof (ex) === "function" ? ex.options : ex;
    opts.render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h3',[_vm._v(_vm._s(_vm.message))]),_vm._v(" "),_c('button',{staticClass:"click-btn",on:{"click":_vm.changeText}},[_vm._v("클릭 :)")])])};
}(module));