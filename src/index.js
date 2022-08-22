// webpack打包的入口

import { addFn } from './add/add' // 按需导入addFn方法
import{ getArrSum } from './tool/tool' // 按需导入getArrSum方法
import $ from 'jquery' // 默认导入jQuery

import "./css/index.css" //  7、引入css文件
import "./less/index.less"  // 7.2、在js中 引入less文件

// 5、编写隔行变色的代码
$('#myUL li:nth-child(2n)').css('color','red')
$('#myUL li:nth-child(2n+1)').css('color','green')

// 8、手动引入一个图片文件
// webpack眼里万物皆模块
import imgObj from './assets/1.gif'
let theImg = document.createElement("img") // 创建一个节点img
theImg.src = imgObj // 节点img 的src属性等于变量imgObj
document.body.appendChild(theImg) // 在body中的插入最后一个元素 img

// 9、引入字体图标样式文件
import "./assets/fonts/iconfont.css" 
let theI = document.createElement("i") // 创建i节点
theI.className = "iconfont icon-qq" // 给i节点设置 类名 这样i就能使用字体图标
document.body.appendChild(theI) // 把i节点添加到 body父元素的 最后一个元素

// 10、书写高版本的js语法
const fn = () => {console.log("我是一个箭头函数")}  
console.log(fn);  // 打印这个函数 方便我们进行验证是否被降级 ，但不能调用 不然只会打印函数里的这个话


console.log(addFn(5, 2));
console.log(getArrSum([1,2,3,4]));