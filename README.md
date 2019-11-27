# vue-license-keyboard

## 直接安装使用
```
npm i vue-license-keyboard --save
```
```
import LicenseKeyboard from 'vue-license-keyboard';
import 'vue-license-keyboard/lib/vue-license-keyboard.css';

Vue.use(LicenseKeyboard);
```
### 图片展示 输入带预览
---
车牌汉字输入
![车牌汉字输入](https://github.com/langyuxiansheng/vue-license-keyboard/blob/master/images/l1.png)

车牌数字输入
![车牌数字输入](https://github.com/langyuxiansheng/vue-license-keyboard/blob/master/images/l2.png)

车牌数字输入
![车牌字母输入](https://github.com/langyuxiansheng/vue-license-keyboard/blob/master/images/l2.png)

移动端竖屏展示
![移动端竖屏展示](https://github.com/langyuxiansheng/vue-license-keyboard/blob/master/images/l4.jpg)
移动端横屏展示
![移动端横屏展示](https://github.com/langyuxiansheng/vue-license-keyboard/blob/master/images/l5.jpg)

更多功能正在完善中......
如果您有什么好的建议请留言

## [在线演示](https://langyuxiansheng.github.io/vue-license-keyboard/)

你可以这样使用: 

```html
<el-input
slot="query-4"
v-model.trim="table.queryData.licenseNumber"
placeholder="车牌号"
>
    <template slot="prepend">
        <LicenseKeyboard v-model="table.queryData.licenseNumber" title="软键盘" />
    </template>
</el-input>
```

直接使用v-model 进行绑定

也可以使用 @confirm="handleInput"  进行回调
```javascript
methods:{
     handleInput(value){
        console.log('您输入的车牌为:',value);
     }
}
```
也可以使用  
```html
<LicenseKeyboard v-model="table.queryData.licenseNumber" title="软键盘" > 
    这里是你的自定义图标或者内容
</LicenseKeyboard>
```

新增的props属性配置

```javascript
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
```
ps: 如果目前的样式无法满足需求,可以使用自定义的class去覆盖原有的style样式.
---

```
## 二次开发 下载项目

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
## 缺陷 & 后期计划

> 车牌输入中并未加入车牌验证.即可能会出现乱输入的情况,这个后期会考虑的;
> 根据有网友留言说想加入搜索功能(可能有些人并不知道某些省的简称是什么);

## 更新日志

> v1.0.5 新增适应移动端,且增加自定义属性和样式;
> v1.0.4 修复bug,目前已迁移到dev_v1.0.4 分支

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
