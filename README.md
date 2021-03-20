# blink
慕课网实战 旧岛小程序项目

第四章： Flex布局
1.flex-direction的四种取值 ： 默认row , column, row-revese, column-revese
2.just-content最常用的5种取值： 居中 center； 两边对齐且中间均分space-around; 元素两边间隙相等均分
3.space-between, flex-end;flex-start。
4.flex-direction的取值决定谁是主轴，另外一者为交叉轴
5.just-content控制主轴的排列， align-item决定交叉轴的排列

第五章：小程序基本架构和组件、页面
1、组件只能继承color和font相关CSS属性
2、page能继承几乎所有的css属性
3.bind:tap点击事件的:可以去掉，但是一般情况不建议去掉；bind与catch的区别，catch不阻止元素事件冒泡，bind阻止事件冒泡


第九章： behaviors用法，behaviors将component方法里面的对象共同的东西抽象出来，独立成一个js文件，提供给需要复用的组件使用。behaviors是多继承，与python一样。
而java,c#是单继承， 单继承比多继承简单。而ES6 Class的extends继承也是单继承的方式。behavior同名属性和方法会覆盖，但是生命周期函数不是被覆盖，而小程序会依次调用
各个父类的同名生命周期，再调用子类的生命周期

第十章： hidden与wx:if条件渲染的区别，两者都可以条件渲染，hidden类似与v-show对于切换的消耗性能低，对于初次渲染的消耗性能高，wx:if则与之相反;

        小程序提供了一套动画API
第十一章： 
1.promise学习
  // 纯粹的callback 回调地狱 return
  // promise 多个异步等待合并 不需要层层传递callback
  // async await es2017 最合理的处理回调的方案

第十二章：
1.wx:key 一：对于遍历的是对象（Object）,则填入对象的唯一属性作为标识为优（如id）; 
二:wx:key对于提高小程序的渲染有积极意义；
三： 对于遍历的数据是数字(Number)或者字符串(String),则填入wx:key="*this";
四： slot插槽的学习，增加组件的可延展性和灵活性。启用插槽：在组件的js文件中配置options对象下的multipleSlots: true才能启用插槽。

第十三章： 
 1. wxs:  wxs是小程序内置的独有的类似ES5的编译语言，用于在wxml文件中使用'js'。 没出现wsx之前，小程序一直被
 诟病无法写filter过滤器，wxs出现以后这个问题得以解决。
 2. 要在<text></text>里展示出&nbsp;的效果 则需要在text标签里加入decode=true的属性


旧岛接口文档地址：  https://github.com/No-bb-just-do-it/old-land-flask-api/blob/master/README.md#%E8%BF%9B%E8%A1%8C%E7%82%B9%E8%B5%9E