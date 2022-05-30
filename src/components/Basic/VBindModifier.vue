
.sync(2.3.0+ 新增)
在有些情况下，我们可能需要对一个 prop 进行“双向绑定”。不幸的是，真正的双向绑定会带来维护上的问题，因为子组件可以修改父组件，且在父组件和子组件都没有明显的改动来源。我们通常的做法是

//父亲组件
<comp :myMessage="bar" @update:myMessage="func"></comp>
//js
func(e){
this.bar = e;
}
//子组件js
func2(){
this.$emit('update:myMessage',params);
}
现在这个.sync修饰符就是简化了上面的步骤

//父组件
<comp :myMessage.sync="bar"></comp>
//子组件
this.$emit('update:myMessage',params);
这样确实会方便很多，但是也有很多需要注意的点

使用sync的时候，子组件传递的事件名必须为update:value，其中value必须与子组件中props中声明的名称完全一致(如上例中的myMessage，不能使用my-message)
注意带有 .sync 修饰符的 v-bind 不能和表达式一起使用 (例如 v-bind:title.sync=”doc.title + ‘!’” 是无效的)。取而代之的是，你只能提供你想要绑定的属性名，类似 v-model。
将 v-bind.sync 用在一个字面量的对象上，例如 v-bind.sync=”{ title: doc.title }”，是无法正常工作的，因为在解析一个像这样的复杂表达式的时候，有很多边缘情况需要考虑。
.prop
要学习这个修饰符，我们首先要搞懂两个东西的区别。

Property：节点对象在内存中存储的属性，可以访问和设置。
Attribute：节点对象的其中一个属性( property )，值是一个对象。
可以通过点访问法 document.getElementById('xx').attributes 或者 document.getElementById('xx').getAttributes('xx') 读取，通过 document.getElementById('xx').setAttribute('xx',value) 新增和修改。
在标签里定义的所有属性包括 HTML 属性和自定义属性都会在 attributes 对象里以键值对的方式存在。
其实attribute和property两个单词，翻译出来都是属性，但是《javascript高级程序设计》将它们翻译为特性和属性，以示区分

//这里的id,value,style都属于property
//index属于attribute
//id、title等既是属性，也是特性。修改属性，其对应的特性会发生改变；修改特性，属性也会改变
<input id="uid" title="title1" value="1" :index="index">
//input.index === undefined
//input.attributes.index === this.index
从上面我们可以看到如果直接使用v-bind绑定，则默认会绑定到dom节点的attribute。
为了

通过自定义属性存储变量，避免暴露数据
防止污染 HTML 结构
我们可以使用这个修饰符，如下

<input id="uid" title="title1" value="1" :index.prop="index">
//input.index === this.index
//input.attributes.index === undefined
.camel
由于HTML 特性是不区分大小写的。

<svg :viewBox="viewBox"></svg>
实际上会渲染为

<svg viewbox="viewBox"></svg>
这将导致渲染失败，因为 SVG 标签只认 viewBox，却不知道 viewbox 是什么。
如果我们使用.camel修饰符，那它就会被渲染为驼峰名。
另，如果你使用字符串模版，则没有这些限制。

new Vue({
template: '<svg :viewBox="viewBox"></svg>'
})