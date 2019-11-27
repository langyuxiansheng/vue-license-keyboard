<template>
    <div id="app">
        <p>键盘输入的值:  {{ value }}</p>
        <LicenseKeyboard 
        ref="LicenseKeyboard"
        class="license-keyboard" 
        :isMobile="isMobile"
        v-model="value"/>
        <!-- <button @click="init()">{{ isMobile ? '切换成PC端模式' : '切换成移动端模式'}}</button> -->
        <!-- 
            isMobile
            customClass="custom-class"
            customLicenseClass="customLicenseClass"
            keyboardBg="#1ed289" 
            fontColor="chocolate" 
            keyBorderColor="#ff0"
         -->
        <div class="demo">
            <h4 class="title">示例图片</h4>
            <img src="./assets/images/l1.png" alt="车牌汉字输入">
            <img src="./assets/images/l2.png" alt="车牌数字输入">
            <img src="./assets/images/l3.png" alt="车牌数字输入">
            <img src="./assets/images/l4.jpg" alt="车牌数字输入">
            <img src="./assets/images/l5.jpg" alt="车牌数字输入">
        </div>
    </div>
</template>
<script>
export default {
    data(){
        return {
            value: null,
            isMobile: false
        }
    },
    methods:{
        init(){
            this.isMobile = !this.isMobile;
            this.$refs.LicenseKeyboard.init();
        }
    }
}
</script>
<style lang="less" scoped>
#app{
    color: chocolate;
    font-size: 1.5rem;
    .demo{
        margin-top: 20%;
        img{
            width: 100%;
        }
    }
}
</style>
