(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,a){e.exports=a(34)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var o=a(0),n=a.n(o),c=a(12),r=a.n(c),l=a(13),s=a(4),i=a(5),d=a(7),u=a(6),m=a(8),p=(a(19),function(e){return n.a.createElement("input",{className:"c-input ".concat(e.extraClass),type:e.type,placeholder:e.placeholder,value:e.value,onChange:e.onChange,onKeyPress:e.onKeyPress,onBlur:e.onBlur})});p.defaultProps={extraClass:"",type:"text"};var h=a(2),f=(a(25),function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).changeTodo=function(e){return a.props.changeAdd(e)},a.enterTodo=function(e){return a.props.enterAdd(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this;return n.a.createElement("div",{className:"todo-add"},n.a.createElement("div",{className:"todo-add__all"},n.a.createElement(h.a,{icon:"chevron-down"})),n.a.createElement(p,{placeholder:"Write a new todo and press enter",extraClass:"todo-add__input",value:this.props.value,onChange:function(t){return e.changeTodo(t)},onKeyPress:function(t){return e.enterTodo(t)}}))}}]),t}(n.a.Component)),E=(a(26),function(e){return n.a.createElement("div",{className:"c-checkbox ".concat(e.extraClass)},n.a.createElement("input",{className:"c-checkbox__input",type:"checkbox",id:e.id,checked:e.isChecked,onChange:e.onChange}),n.a.createElement("label",{className:"c-checkbox__label",htmlFor:e.id},e.text))});E.defaultProps={extraClass:""};a(27);var v=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={id:a.props.id,value:a.props.text},a.handleChange=function(e){a.setState({value:e.target.value})},a.checkTodo=function(e,t){return a.props.completeTodoList(e,t)},a.editTodo=function(e){return a.props.editableTodoList(e)},a.textTodo=function(e,t){return a.props.updateTodoList(e,t)},a.deleteTodo=function(e){return a.props.removeTodoList(e)},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this,t=this.props,a=t.isComplete?"is-complete":"";return n.a.createElement("li",{className:"todo ".concat(a)},n.a.createElement(E,{extraClass:"todo__check",id:t.id,onChange:function(){return e.checkTodo(t.id)}}),this.props.isEditable?n.a.createElement(p,{extraClass:"todo__input",value:this.state.value,onChange:this.handleChange,onBlur:function(t){return e.textTodo(e.state,t)},onKeyPress:function(t){return e.textTodo(e.state,t)}}):n.a.createElement("div",{className:"todo__text"},this.state.value),n.a.createElement("div",{className:"todo__icon",onClick:function(){return e.editTodo(t.id)}},n.a.createElement(h.a,{icon:"pencil-alt"})),n.a.createElement("div",{className:"todo__icon",onClick:function(){return e.deleteTodo(t.id)}},n.a.createElement(h.a,{icon:"trash-alt"})))}}]),t}(n.a.Component),b=(a(28),function(e){return n.a.createElement("ul",{className:"todo-list"},e.todos.map(function(t){return n.a.createElement(v,Object.assign({key:t.id},t,{completeTodoList:e.completeTodo,editableTodoList:e.editableTodo,updateTodoList:e.updateTodo,removeTodoList:e.removeTodo}))}))}),T=(a(29),function(e){var t=e.size?"c-button--".concat(e.size):"",a=e.color?"c-button--".concat(e.color):"";return n.a.createElement("button",{className:"c-button ".concat(a," ").concat(t," ").concat(e.extraClass),onClick:e.onClick},e.icon?n.a.createElement(h.a,{icon:e.icon,className:"c-button__icon"}):"",e.text)});T.defaultProps={extraClass:"",icon:"",color:""};a(30);var C=function(e){return n.a.createElement("ul",{className:"todo-filters"},n.a.createElement("li",null,"X items left"),n.a.createElement("li",null,n.a.createElement(T,{size:"small",text:"All",color:"crimson"})),n.a.createElement("li",{className:"filter"},n.a.createElement(T,{size:"small",text:"Active",color:"crimson"})),n.a.createElement("li",null,n.a.createElement(T,{size:"small",text:"Completed",color:"crimson"})),n.a.createElement("li",{className:"link"},"Clear completed"))},x=(a(31),function(e){var t=e.type?"c-alert--".concat(e.type):"";return n.a.createElement("div",{className:"c-alert ".concat(t," ").concat(e.extraClass)},n.a.createElement("div",{className:"c-alert__icon"},n.a.createElement(h.a,{icon:e.icon})),n.a.createElement("p",{className:"c-alert__text"},e.text))});x.defaultProps={extraClass:"",icon:"info-circle"};a(32);var y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var o=arguments.length,n=new Array(o),c=0;c<o;c++)n[c]=arguments[c];return(a=Object(d.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(n)))).state={countTodo:1,newTodo:"",todos:[],todoAlert:!1},a.handleChange=function(e){a.setState({newTodo:e.target.value})},a.handleKeyPress=function(e){"Enter"===e.key&&(""===a.state.newTodo?a.setState({todoAlert:!0}):a.setState({countTodo:a.state.countTodo+1,newTodo:"",todos:[].concat(Object(l.a)(a.state.todos),[{id:a.state.countTodo,text:a.state.newTodo,isEditable:!1,isComplete:!1}]),todoAlert:!1}))},a.handleComplete=function(e){a.setState({todos:a.state.todos.filter(function(t){return t.id===e&&(t.isComplete=!t.isComplete),t})})},a.handleEditable=function(e){a.setState({todos:a.state.todos.filter(function(t){return t.id===e&&(t.isEditable=!0),t})})},a.handleUpdate=function(e,t){("blur"===t.type||"keypress"===t.type&&"Enter"===t.key)&&a.setState({todos:a.state.todos.filter(function(t){return t.id===e.id&&(t.text=e.value,t.isEditable=!1),t})})},a.handleRemove=function(e){a.setState({todos:a.state.todos.filter(function(t){return t.id!==e})})},a}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"l-container"},n.a.createElement("span",{className:"app__icon",role:"img","aria-label":"app icons"},"\ud83d\udcdd\ud83d\udc69\ud83c\udffb\ud83d\udcdd"),n.a.createElement("h1",{className:"app__title"},"React Todo List"),n.a.createElement("p",{className:"app__description"},"Add, edit and delete all your tasks thanks to the magic of classic react."),n.a.createElement(f,{value:this.state.newTodo,changeAdd:this.handleChange,enterAdd:this.handleKeyPress}),this.state.todoAlert&&n.a.createElement(x,{type:"error",icon:"times-circle",extraClass:"margin-top-10",text:"Empty todo? You have to write something dude"}),this.state.todos.length>0&&n.a.createElement(b,{todos:this.state.todos,completeTodo:this.handleComplete,editableTodo:this.handleEditable,updateTodo:this.handleUpdate,removeTodo:this.handleRemove}),n.a.createElement(C,null))}}]),t}(n.a.Component),_=a(9),g=a(3);_.b.add(g.e,g.f,g.c,g.d,g.b,g.a);_.b,a(33);r.a.render(n.a.createElement(y,null),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.3d26f226.chunk.js.map