(this["webpackJsonpwheel-of-doom"]=this["webpackJsonpwheel-of-doom"]||[]).push([[0],{17:function(e,t,n){},19:function(e,t,n){},20:function(e,t,n){"use strict";n.r(t),n.d(t,"App",(function(){return v}));var a=n(10),s=n(11),c=n(1),l=n.n(c),r=n(6),i=n.n(r),o=n(7),u=n(8),m=n(4),h=n(12),d=n(9),f=(n(17),n(0)),p=function(e){Object(h.a)(n,e);var t=Object(d.a)(n);function n(e){var a;return Object(o.a)(this,n),(a=t.call(this,e)).state={selectedItem:null},a.selectItem=a.selectItem.bind(Object(m.a)(a)),a}return Object(u.a)(n,[{key:"selectItem",value:function(){if(null===this.state.selectedItem){var e=Math.floor(Math.random()*this.props.items.length);this.props.onSelectItem&&this.props.onSelectItem(e),this.setState({selectedItem:e})}else this.setState({selectedItem:null}),setTimeout(this.selectItem,10)}},{key:"render",value:function(){var e=this.state.selectedItem,t=this.props.items,n={"--nb-item":t.length,"--selected-item":e},a=null!==e?"spinning":"";return Object(f.jsx)("div",{className:"wheel-container",children:Object(f.jsx)("div",{className:"wheel ".concat(a),style:n,onClick:this.selectItem,children:t.map((function(e,t){return Object(f.jsx)("div",{className:"wheel-item",style:{"--item-nb":t},children:e},t)}))})})}}]),n}(l.a.Component);n(19);function v(){var e=Object(c.useState)(["Clemens","Stavros","Utsavi","Robert","Said","Carole","Arno","Aryan","Dipali","\xd6mer","Brian","Joey","Jasmin","Safi","Matthias"]),t=Object(s.a)(e,2),n=t[0],l=t[1];return Object(c.useEffect)((function(){document.title="Wheel of Doom"}),[]),Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("h1",{children:"Yacine's Wheel of Doom"}),Object(f.jsx)("input",{type:"text",size:"21",placeholder:"Add or Remove a Name",onKeyUp:function(e){if("Enter"===e.key&&""!==e.target.value){var t=Object(a.a)(n);if(t.includes(e.target.value))for(var s=0;s<t.length;s++)t[s]===e.target.value&&(t.splice(s,1),l(t),s--,alert("".concat(e.target.value," has been removed from the Wheel of Doom!")),e.currentTarget.value="");else t.push(e.target.value),l(t),alert("".concat(e.target.value," has been added to the Wheel of Doom!")),e.currentTarget.value=""}}}),Object(f.jsx)(p,{items:n})]})}var b=document.getElementById("root");i.a.render(Object(f.jsx)(v,{}),b)}},[[20,1,2]]]);
//# sourceMappingURL=main.7b0a3db1.chunk.js.map