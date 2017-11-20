/**App.vue的测试用例 */

import vue from 'vue';
import App from '../../src/App.vue';

describe('test App.vue',() => {
    it('显示侧边页面showSidebar(true)',()=>{
        let vm =new vue(App).$mount();
        vm.showSidebar(true);
        expect(vm.message).toEqual(true);
    });

});