<template>
    <div class="app-license-keyboard" :class="[customClass]">
        <span @click="show()">
            <slot>
                <i class="el-icon-s-grid icon" /> 
                <font>软键盘</font>
            </slot>
        </span>
        <div v-if="isShow" class="license-container" :class="[customLicenseClass]" :style="{background:keyboardBg,opacity,fontSize}">
            <div class="license-bar">
                <span class="res-view" :style="{fontSize}">预览: {{ licenseNumber }}</span>
                <div>
                    <span class="confirm" :style="{fontSize}" @click="confirm()">完成</span>
                    <span class="close" :style="{fontSize}" @click="close()">关闭</span>
                </div>
            </div>
            <template v-if="type">
                <template v-for="(items,k) in licenseNumberModels">
                    <div :key="k" class="license-buttons">
                        <span v-if="k== 3" :disabled="!licenseNumber" class="model" :class="{'disabled-btn':!licenseNumber}" :style="keyStyle" @click="toggle()">
                            切换
                        </span>
                        <template v-for="(item,j) in items">
                            <span :key="j" @click="handleChinese(item)" :style="keyStyle">{{ item }}</span>
                        </template>
                        <span v-if="k== 3" class="delete" :disabled="!licenseNumber" :class="{'disabled-btn':!licenseNumber}" :style="keyStyle">删除</span>
                    </div>
                </template>
            </template>
            <template v-else>
                <template v-for="(items,k) in abcAndNums">
                    <div :key="k" class="license-buttons">
                        <span v-if="k== 3" :disabled="!licenseNumber" class="model" :class="{'disabled-btn':!licenseNumber}" :style="keyStyle" @click="toggle()">
                            切换
                        </span>
                        <template v-for="(item,j) in items">
                            <span :key="j" @click="handleAbcNum(item)" :style="keyStyle">{{ item }}</span>
                        </template>
                        <span v-if="k== 3" class="delete" :disabled="!licenseNumber" :class="{'disabled-btn':!licenseNumber}" :style="keyStyle" @click="deleteLicense()">删除</span>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>
<script>
const theme = '#3d51aa';
export default {
    name:'LicenseKeyboard',
    model: {
        value: 'license',
        event: 'confirm'
    },
    props: {
        license: {
            required: false,
            type: [String],
            default: null
        },

        //顶级节点自定义的class
        customClass: {
            required: false,
            type: [String],
            default: null
        },

        //键盘容器节点自定义的class
        customLicenseClass: {
            required: false,
            type: [String],
            default: null
        },

        //键盘背景
        keyboardBg:{
            required: false,
            type: [String],
            default: null
        },

        //键盘字体颜色
        fontColor:{
            required: false,
            type: [String],
            default: null
        },

        //键盘按钮的边框颜色
        keyBorderColor:{
            required: false,
            type: [String],
            default: theme
        },

        //键盘背景
        keyBg:{ 
            required: false,
            type: [String],
            default: null
        },

        //键盘的透明度
        opacity:{
            required: false,
            type: [Number],
            default: 1
        },

        //默认的字体大小 16px => 1rem
        fontSize:{
            required: false,
            type: [String],
            default: '1rem'
        },

        //键盘的默认圆角
        borderRadius:{  
            required: false,
            type: [String],
            default: null
        },

        //是否只在移动端使用 默认false,在pc端使用的时候,建议全部使用手动配置字体大小的方法,区别在于是否会开启字体响应,其中使用了autosize的方法,会改变跟元素的font-size
        isMobile:{
            required: false,
            type: [Boolean],
            default: false
        }
    },
    computed:{
        keyStyle(){
            return {
                color:this.fontColor,
                background:this.keyBg,
                borderColor:this.keyBorderColor,
                fontSize:this.fontSize,
                borderRadius: this.borderRadius
            }
        }
    },
    data() {
        return {
            isShow: false,
            licenseNumberModels: [
                ['川', '京', '苏', '津', '浙', '渝', '冀', '皖', '琼', '鲁'],
                ['闽', '贵', '新', '晋', '赣', '云', '宁', '蒙', '豫', '藏'],
                ['港', '辽', '桂', '陕', '澳', '吉', '湘', '甘', '台', '粤'],
                ['青', '沪', '鄂', '黑', '军', '警', '学']
            ],
            abcAndNums: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                [`Q`, `W`, `E`, `R`, `T`, `Y`, `U`, `I`, `O`,`P`],
                [`A`, `S`, `D`, `F`, `G`, `H`, `J`, `K`, `L`],
                [`Z`, `X`, `C`, `V`, `B`, `N`, `M`]
            ],
            type: true,
            licenseNumber: null //车牌输入的值
        };
    },
    watch: {
        licenseNumber(val) {
            //删除完的时候返回到初始界面
            if (!val) {
                this.type = true;
            }
        }
    },
    mounted(){
        if(this.isMobile){
            this.init();
        }
      
    },
    methods: {

        init(){
            !(function(win, doc){
                const setFontSize = ()=> {
                    // 获取window 宽度
                    // zepto实现 $(window).width()就是这么干的
                    let winWidth = window.innerWidth;
                    let size = (winWidth / 375) * 16;
                    doc.documentElement.style.fontSize =  size + 'px';
                }
                let evt = 'onorientationchange' in win ? 'orientationchange' : 'onresize';
                let timer = null;
                win.addEventListener(evt, function() {
                    clearTimeout(timer);
                    timer = setTimeout(setFontSize, 300);
                }, false);
                win.addEventListener('pageshow', function(e) {
                    if (e.persisted) {
                        clearTimeout(timer);
                        timer = setTimeout(setFontSize, 300);
                    }
                }, false);
                //初始化
                setFontSize();
            }(window, document));
        },

        /**
         * 弹出键盘
         */
        show() {
            this.isShow = true;
            this.licenseNumber = null;
            this.type = true;
        },

        /**
         * 切换
         */
        toggle() {
            if (this.licenseNumber) {
                this.type = !this.type;
            }
        },

        /**
         * 汉字输入
         */
        handleChinese(key) {
            this.licenseNumber = key;
            //输入1个汉字切换到英文输入
            this.type = false;
        },

        /**
         * 数字和字母输入
         */
        handleAbcNum(key) {
            if (this.licenseNumber.length < 8) { //最多允许输入8位
                this.licenseNumber += key;
            }
        },

        /**
         * 删除车牌
         */
        deleteLicense() {
            if (this.licenseNumber) {
                this.licenseNumber = this.licenseNumber.substring(0, this.licenseNumber.length - 1);
            }
        },

        /**
         * 完成
         */
        confirm() {
            if (this.licenseNumber) {
                this.$emit('confirm', this.licenseNumber);
            }
            this.isShow = false;
        },

        /**
         * 关闭
         */
        close() {
            this.isShow = false;
        }
    }
};
</script>
<style lang="less" scoped>
.app-license-keyboard{
    .icon{
        font-size: 1.125rem;
        cursor: pointer;
    }
    font{
        cursor: pointer;
    }
    .license-container{
        box-sizing: border-box;
        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: auto;
        z-index: 99999999;
        background: rgba(255, 255, 255, .9);
        box-shadow: 0 .25rem .375rem 0 #3d51aa;
        .license-bar{
            display: flex;
            justify-content: space-between;
            padding: .25rem 1rem;
            color: #f00;
            font-weight: bold;
            font-size: .75rem;
            span{
                align-self: center;
            }
            .confirm,
            .close{
                cursor: pointer;
            }
            .close{
                margin-left: 1.25rem;
            }
        }
        .license-buttons{
            padding: 0 .625rem;
            margin: 0 auto;
            display: flex;
            flex-wrap:wrap;
            justify-content: center;
            span{
                flex: 1;
                margin: .25rem .125rem;
                padding: .25rem 0;
                text-align: center;
                white-space: nowrap;
                color: #3d51aa;
                border: .0625rem solid #3d51aa;
                border-radius: .25rem;
                cursor: pointer;
                transition: color,background .2s ease-in;
                font-size: .875rem;
                &:hover{
                    background: #3d51aa;
                    color: #fff;
                }
            }
            .model,
            .delete{
                flex: 1;
                color: #f00;
            }
            .disabled-btn{
                color: #ccc;
                cursor:not-allowed;
            }
        }
    }
}
</style>
