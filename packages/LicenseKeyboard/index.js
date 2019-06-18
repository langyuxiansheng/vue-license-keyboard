// 导入组件，组件必须声明 name
import LicenseKeyboard from './src/main.vue';
// 为组件添加 install 方法，用于按需引入
LicenseKeyboard.install = function (Vue) {
    Vue.component(LicenseKeyboard.name, LicenseKeyboard);
}
export default LicenseKeyboard;