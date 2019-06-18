<template>
    <div class="app-license-keyboard">
        <span @click="show()">
            <slot>
                <i class="el-icon-s-grid icon" /> 
                <font>软键盘</font>
            </slot>
        </span>
        <div v-if="isShow" class="license-container">
            <div class="license-bar">
                <span class="res-view">预览: {{ licenseNumber }}</span>
                <div>
                    <span class="confirm" @click="confirm()">完成</span>
                    <span class="close" @click="close()">关闭</span>
                </div>
            </div>
            <template v-if="type">
                <template v-for="(items,k) in licenseNumberModels">
                    <div :key="k" class="license-buttons">
                        <span v-if="k== 3" :disabled="!licenseNumber" class="model" :class="{'disabled-btn':!licenseNumber}" @click="toggle()">
                            切换
                        </span>
                        <template v-for="(item,j) in items">
                            <span :key="j" @click="handleChinese(item)">{{ item }}</span>
                        </template>
                        <span v-if="k== 3" class="delete" :disabled="!licenseNumber" :class="{'disabled-btn':!licenseNumber}">删除</span>
                    </div>
                </template>
            </template>
            <template v-else>
                <template v-for="(items,k) in abcAndNums">
                    <div :key="k" class="license-buttons">
                        <span v-if="k== 3" :disabled="!licenseNumber" class="model" :class="{'disabled-btn':!licenseNumber}" @click="toggle()">
                            切换
                        </span>
                        <template v-for="(item,j) in items">
                            <span :key="j" @click="handleAbcNum(item)">{{ item }}</span>
                        </template>
                        <span v-if="k== 3" class="delete" :disabled="!licenseNumber" :class="{'disabled-btn':!licenseNumber}" @click="deleteLicense()">删除</span>
                    </div>
                </template>
            </template>
        </div>
    </div>
</template>
<script>
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
        }
    },
    data() {
        return {
            isShow: false,
            licenseNumberModels: [
                ['川', '京', '苏', '津', '浙', '渝', '冀', '皖', '琼', '鲁'],
                ['闽', '贵', '新', '晋', '赣', '云', '宁', '蒙', '豫', '藏'],
                ['港', '辽', '鄂', '陕', '澳', '吉', '湘', '甘', '台', '粤'],
                ['青', '沪', '桂', '黑', '军', '警', '学']
            ],
            abcAndNums: [
                [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
                [`Q`, `W`, `E`, `R`, `T`, `Y`, `U`, `I`, `O`],
                [`P`, `A`, `S`, `D`, `F`, `G`, `H`, `J`, `K`, `L`],
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
    methods: {

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
        font-size: 18px;
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
        height: 520px;
        z-index: 99999999;
        background: rgba(255, 255, 255, .9);
        box-shadow: 0px -4px 10px 0px #3d51aa;
        .license-bar{
            display: flex;
            justify-content: space-between;
            padding: 20px 40px;
            color: #f00;
            font-weight: bold;
            font-size: 24px;
            span{
                align-self: center;
            }
            .confirm,
            .close{
                cursor: pointer;
            }
            .close{
                margin-left: 20px;
            }
        }
        .license-buttons{
            padding: 0 25px;
            margin: 0 auto;
            display: flex;
            flex-wrap:wrap;
            font-size: 48px;
            justify-content: center;
            span{
                margin: 10px;
                padding: 10px 15px;
                flex: 1;
                align-self: center;
                text-align: center;
                white-space:nowrap;
                color: #3d51aa;
                border: 2px solid #3d51aa;
                border-radius: 5px;
                cursor: pointer;
                transition: color,background .2s ease-in;
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
            }
        }
    }
}
</style>
