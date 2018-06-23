//<template>
//<div>
//  <h1>테스트 :)</h1>
//  <child-component></child-component>
//</div>
//</template>
//
import module from "module";
import Child from './components/Child.vue';

export default {
  components: {'child-component': Child},
  name: 'app',
  data: () => {
    return {};
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
    opts.render = function(){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',[_c('h1',[_vm._v("테스트 :)")]),_vm._v(" "),_c('child-component')],1)};
}(module));