import{B as ne,r as De,J as Ke,aT as we,d as Y,P as J,a6 as V,ab as le,aj as fe,X as re,ai as W,K as b,aa as te,a7 as Se,cx as Ae,b as xe,ap as Fe,N as w,Q as ce,cy as Be,L as pe,aK as Te,at as Ie,a as I,a1 as oe,am as de,o as K,e as L,g as O,Z as q,w as U,aD as Le,n as S,aY as B,al as H,f as x,ak as $e,$ as ge,a0 as ye,bg as ue,a3 as Oe,a4 as Me,ad as ze,b6 as T,bs as Pe,W as qe,M as je,c8 as Re,t as He,cz as _e,c as Ue,u as Ve,p as We,j as Ye,i as Je,_ as Qe}from"./index.2f7faff1.js";import"./el-input.e00db325.js";import"./el-tag.eb7726f8.js";import{E as Xe,a as Ze}from"./el-select.9f9848f5.js";import{E as Ge}from"./index.69b52b01.js";import"./event.776e7e11.js";import"./_Uint8Array.a107ab3a.js";import"./isEqual.894c56f2.js";import"./strings.67a0dc2d.js";import"./scroll.df75995b.js";const j="$treeNodeId",he=function(t,e){!e||e[j]||Object.defineProperty(e,j,{value:t.id,enumerable:!1,configurable:!1,writable:!1})},ie=function(t,e){return t?e[t]:e[j]},se=(t,e,o)=>{const d=t.value.currentNode;o();const n=t.value.currentNode;d!==n&&e("current-change",n?n.data:null,n)},ae=t=>{let e=!0,o=!0,d=!0;for(let n=0,s=t.length;n<s;n++){const a=t[n];(a.checked!==!0||a.indeterminate)&&(e=!1,a.disabled||(d=!1)),(a.checked!==!1||a.indeterminate)&&(o=!1)}return{all:e,none:o,allWithoutDisable:d,half:!e&&!o}},_=function(t){if(t.childNodes.length===0||t.loading)return;const{all:e,none:o,half:d}=ae(t.childNodes);e?(t.checked=!0,t.indeterminate=!1):d?(t.checked=!1,t.indeterminate=!0):o&&(t.checked=!1,t.indeterminate=!1);const n=t.parent;!n||n.level===0||t.store.checkStrictly||_(n)},Z=function(t,e){const o=t.store.props,d=t.data||{},n=o[e];if(typeof n=="function")return n(d,t);if(typeof n=="string")return d[n];if(typeof n>"u"){const s=d[e];return s===void 0?"":s}};let et=0;class ${constructor(e){this.id=et++,this.text=null,this.checked=!1,this.indeterminate=!1,this.data=null,this.expanded=!1,this.parent=null,this.visible=!0,this.isCurrent=!1,this.canFocus=!1;for(const o in e)ne(e,o)&&(this[o]=e[o]);this.level=0,this.loaded=!1,this.childNodes=[],this.loading=!1,this.parent&&(this.level=this.parent.level+1)}initialize(){const e=this.store;if(!e)throw new Error("[Node]store is required!");e.registerNode(this);const o=e.props;if(o&&typeof o.isLeaf<"u"){const s=Z(this,"isLeaf");typeof s=="boolean"&&(this.isLeafByUser=s)}if(e.lazy!==!0&&this.data?(this.setData(this.data),e.defaultExpandAll&&(this.expanded=!0,this.canFocus=!0)):this.level>0&&e.lazy&&e.defaultExpandAll&&this.expand(),Array.isArray(this.data)||he(this,this.data),!this.data)return;const d=e.defaultExpandedKeys,n=e.key;n&&d&&d.includes(this.key)&&this.expand(null,e.autoExpandParent),n&&e.currentNodeKey!==void 0&&this.key===e.currentNodeKey&&(e.currentNode=this,e.currentNode.isCurrent=!0),e.lazy&&e._initDefaultCheckedNode(this),this.updateLeafState(),this.parent&&(this.level===1||this.parent.expanded===!0)&&(this.canFocus=!0)}setData(e){Array.isArray(e)||he(this,e),this.data=e,this.childNodes=[];let o;this.level===0&&Array.isArray(this.data)?o=this.data:o=Z(this,"children")||[];for(let d=0,n=o.length;d<n;d++)this.insertChild({data:o[d]})}get label(){return Z(this,"label")}get key(){const e=this.store.key;return this.data?this.data[e]:null}get disabled(){return Z(this,"disabled")}get nextSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return e.childNodes[o+1]}return null}get previousSibling(){const e=this.parent;if(e){const o=e.childNodes.indexOf(this);if(o>-1)return o>0?e.childNodes[o-1]:null}return null}contains(e,o=!0){return(this.childNodes||[]).some(d=>d===e||o&&d.contains(e))}remove(){const e=this.parent;e&&e.removeChild(this)}insertChild(e,o,d){if(!e)throw new Error("InsertChild error: child is required.");if(!(e instanceof $)){if(!d){const n=this.getChildren(!0);n.includes(e.data)||(typeof o>"u"||o<0?n.push(e.data):n.splice(o,0,e.data))}Object.assign(e,{parent:this,store:this.store}),e=De(new $(e)),e instanceof $&&e.initialize()}e.level=this.level+1,typeof o>"u"||o<0?this.childNodes.push(e):this.childNodes.splice(o,0,e),this.updateLeafState()}insertBefore(e,o){let d;o&&(d=this.childNodes.indexOf(o)),this.insertChild(e,d)}insertAfter(e,o){let d;o&&(d=this.childNodes.indexOf(o),d!==-1&&(d+=1)),this.insertChild(e,d)}removeChild(e){const o=this.getChildren()||[],d=o.indexOf(e.data);d>-1&&o.splice(d,1);const n=this.childNodes.indexOf(e);n>-1&&(this.store&&this.store.deregisterNode(e),e.parent=null,this.childNodes.splice(n,1)),this.updateLeafState()}removeChildByData(e){let o=null;for(let d=0;d<this.childNodes.length;d++)if(this.childNodes[d].data===e){o=this.childNodes[d];break}o&&this.removeChild(o)}expand(e,o){const d=()=>{if(o){let n=this.parent;for(;n.level>0;)n.expanded=!0,n=n.parent}this.expanded=!0,e&&e(),this.childNodes.forEach(n=>{n.canFocus=!0})};this.shouldLoadData()?this.loadData(n=>{Array.isArray(n)&&(this.checked?this.setChecked(!0,!0):this.store.checkStrictly||_(this),d())}):d()}doCreateChildren(e,o={}){e.forEach(d=>{this.insertChild(Object.assign({data:d},o),void 0,!0)})}collapse(){this.expanded=!1,this.childNodes.forEach(e=>{e.canFocus=!1})}shouldLoadData(){return this.store.lazy===!0&&this.store.load&&!this.loaded}updateLeafState(){if(this.store.lazy===!0&&this.loaded!==!0&&typeof this.isLeafByUser<"u"){this.isLeaf=this.isLeafByUser;return}const e=this.childNodes;if(!this.store.lazy||this.store.lazy===!0&&this.loaded===!0){this.isLeaf=!e||e.length===0;return}this.isLeaf=!1}setChecked(e,o,d,n){if(this.indeterminate=e==="half",this.checked=e===!0,this.store.checkStrictly)return;if(!(this.shouldLoadData()&&!this.store.checkDescendants)){const{all:a,allWithoutDisable:i}=ae(this.childNodes);!this.isLeaf&&!a&&i&&(this.checked=!1,e=!1);const f=()=>{if(o){const y=this.childNodes;for(let r=0,p=y.length;r<p;r++){const g=y[r];n=n||e!==!1;const C=g.disabled?g.checked:n;g.setChecked(C,o,!0,n)}const{half:u,all:c}=ae(y);c||(this.checked=c,this.indeterminate=u)}};if(this.shouldLoadData()){this.loadData(()=>{f(),_(this)},{checked:e!==!1});return}else f()}const s=this.parent;!s||s.level===0||d||_(s)}getChildren(e=!1){if(this.level===0)return this.data;const o=this.data;if(!o)return null;const d=this.store.props;let n="children";return d&&(n=d.children||"children"),o[n]===void 0&&(o[n]=null),e&&!o[n]&&(o[n]=[]),o[n]}updateChildren(){const e=this.getChildren()||[],o=this.childNodes.map(s=>s.data),d={},n=[];e.forEach((s,a)=>{const i=s[j];!!i&&o.findIndex(y=>y[j]===i)>=0?d[i]={index:a,data:s}:n.push({index:a,data:s})}),this.store.lazy||o.forEach(s=>{d[s[j]]||this.removeChildByData(s)}),n.forEach(({index:s,data:a})=>{this.insertChild({data:a},s)}),this.updateLeafState()}loadData(e,o={}){if(this.store.lazy===!0&&this.store.load&&!this.loaded&&(!this.loading||Object.keys(o).length)){this.loading=!0;const d=s=>{this.childNodes=[],this.doCreateChildren(s,o),this.loaded=!0,this.loading=!1,this.updateLeafState(),e&&e.call(this,s)},n=()=>{this.loading=!1};this.store.load(this,d,n)}else e&&e.call(this)}eachNode(e){const o=[this];for(;o.length;){const d=o.shift();o.unshift(...d.childNodes),e(d)}}reInitChecked(){this.store.checkStrictly||_(this)}}class tt{constructor(e){this.currentNode=null,this.currentNodeKey=null;for(const o in e)ne(e,o)&&(this[o]=e[o]);this.nodesMap={}}initialize(){if(this.root=new $({data:this.data,store:this}),this.root.initialize(),this.lazy&&this.load){const e=this.load;e(this.root,o=>{this.root.doCreateChildren(o),this._initDefaultCheckedNodes()})}else this._initDefaultCheckedNodes()}filter(e){const o=this.filterNodeMethod,d=this.lazy,n=function(s){const a=s.root?s.root.childNodes:s.childNodes;if(a.forEach(i=>{i.visible=o.call(i,e,i.data,i),n(i)}),!s.visible&&a.length){let i=!0;i=!a.some(f=>f.visible),s.root?s.root.visible=i===!1:s.visible=i===!1}!e||s.visible&&!s.isLeaf&&(!d||s.loaded)&&s.expand()};n(this)}setData(e){e!==this.root.data?(this.root.setData(e),this._initDefaultCheckedNodes()):this.root.updateChildren()}getNode(e){if(e instanceof $)return e;const o=Ke(e)?ie(this.key,e):e;return this.nodesMap[o]||null}insertBefore(e,o){const d=this.getNode(o);d.parent.insertBefore({data:e},d)}insertAfter(e,o){const d=this.getNode(o);d.parent.insertAfter({data:e},d)}remove(e){const o=this.getNode(e);o&&o.parent&&(o===this.currentNode&&(this.currentNode=null),o.parent.removeChild(o))}append(e,o){const d=we(o)?this.root:this.getNode(o);d&&d.insertChild({data:e})}_initDefaultCheckedNodes(){const e=this.defaultCheckedKeys||[],o=this.nodesMap;e.forEach(d=>{const n=o[d];n&&n.setChecked(!0,!this.checkStrictly)})}_initDefaultCheckedNode(e){(this.defaultCheckedKeys||[]).includes(e.key)&&e.setChecked(!0,!this.checkStrictly)}setDefaultCheckedKey(e){e!==this.defaultCheckedKeys&&(this.defaultCheckedKeys=e,this._initDefaultCheckedNodes())}registerNode(e){const o=this.key;!e||!e.data||(o?e.key!==void 0&&(this.nodesMap[e.key]=e):this.nodesMap[e.id]=e)}deregisterNode(e){!this.key||!e||!e.data||(e.childNodes.forEach(d=>{this.deregisterNode(d)}),delete this.nodesMap[e.key])}getCheckedNodes(e=!1,o=!1){const d=[],n=function(s){(s.root?s.root.childNodes:s.childNodes).forEach(i=>{(i.checked||o&&i.indeterminate)&&(!e||e&&i.isLeaf)&&d.push(i.data),n(i)})};return n(this),d}getCheckedKeys(e=!1){return this.getCheckedNodes(e).map(o=>(o||{})[this.key])}getHalfCheckedNodes(){const e=[],o=function(d){(d.root?d.root.childNodes:d.childNodes).forEach(s=>{s.indeterminate&&e.push(s.data),o(s)})};return o(this),e}getHalfCheckedKeys(){return this.getHalfCheckedNodes().map(e=>(e||{})[this.key])}_getAllNodes(){const e=[],o=this.nodesMap;for(const d in o)ne(o,d)&&e.push(o[d]);return e}updateChildren(e,o){const d=this.nodesMap[e];if(!d)return;const n=d.childNodes;for(let s=n.length-1;s>=0;s--){const a=n[s];this.remove(a.data)}for(let s=0,a=o.length;s<a;s++){const i=o[s];this.append(i,d.data)}}_setCheckedKeys(e,o=!1,d){const n=this._getAllNodes().sort((f,y)=>f.level-y.level),s=Object.create(null),a=Object.keys(d);n.forEach(f=>f.setChecked(!1,!1));const i=f=>{f.childNodes.forEach(y=>{var u;s[y.data[e]]=!0,(u=y.childNodes)!=null&&u.length&&i(y)})};for(let f=0,y=n.length;f<y;f++){const u=n[f],c=u.data[e].toString();if(!a.includes(c)){u.checked&&!s[c]&&u.setChecked(!1,!1);continue}if(u.childNodes.length&&i(u),u.isLeaf||this.checkStrictly){u.setChecked(!0,!1);continue}if(u.setChecked(!0,!0),o){u.setChecked(!1,!1);const p=function(g){g.childNodes.forEach(k=>{k.isLeaf||k.setChecked(!1,!1),p(k)})};p(u)}}}setCheckedNodes(e,o=!1){const d=this.key,n={};e.forEach(s=>{n[(s||{})[d]]=!0}),this._setCheckedKeys(d,o,n)}setCheckedKeys(e,o=!1){this.defaultCheckedKeys=e;const d=this.key,n={};e.forEach(s=>{n[s]=!0}),this._setCheckedKeys(d,o,n)}setDefaultExpandedKeys(e){e=e||[],this.defaultExpandedKeys=e,e.forEach(o=>{const d=this.getNode(o);d&&d.expand(null,this.autoExpandParent)})}setChecked(e,o,d){const n=this.getNode(e);n&&n.setChecked(!!o,d)}getCurrentNode(){return this.currentNode}setCurrentNode(e){const o=this.currentNode;o&&(o.isCurrent=!1),this.currentNode=e,this.currentNode.isCurrent=!0}setUserCurrentNode(e,o=!0){const d=e[this.key],n=this.nodesMap[d];this.setCurrentNode(n),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0)}setCurrentNodeKey(e,o=!0){if(e==null){this.currentNode&&(this.currentNode.isCurrent=!1),this.currentNode=null;return}const d=this.getNode(e);d&&(this.setCurrentNode(d),o&&this.currentNode.level>1&&this.currentNode.parent.expand(null,!0))}}const nt=Y({name:"ElTreeNodeContent",props:{node:{type:Object,required:!0},renderContent:Function},setup(t){const e=J("tree"),o=V("NodeInstance"),d=V("RootTree");return()=>{const n=t.node,{data:s,store:a}=n;return t.renderContent?t.renderContent(le,{_self:o,node:n,data:s,store:a}):fe(d.ctx.slots,"default",{node:n,data:s},()=>[le("span",{class:e.be("node","label")},[n.label])])}}});var ot=re(nt,[["__file","tree-node-content.vue"]]);function Ne(t){const e=V("TreeNodeMap",null),o={treeNodeExpand:d=>{t.node!==d&&t.node.collapse()},children:[]};return e&&e.children.push(o),W("TreeNodeMap",o),{broadcastExpanded:d=>{if(!!t.accordion)for(const n of o.children)n.treeNodeExpand(d)}}}const Ce=Symbol("dragEvents");function dt({props:t,ctx:e,el$:o,dropIndicator$:d,store:n}){const s=J("tree"),a=b({showDropIndicator:!1,draggingNode:null,dropNode:null,allowDrop:!0,dropType:null});return W(Ce,{treeNodeDragStart:({event:u,treeNode:c})=>{if(typeof t.allowDrag=="function"&&!t.allowDrag(c.node))return u.preventDefault(),!1;u.dataTransfer.effectAllowed="move";try{u.dataTransfer.setData("text/plain","")}catch{}a.value.draggingNode=c,e.emit("node-drag-start",c.node,u)},treeNodeDragOver:({event:u,treeNode:c})=>{const r=c,p=a.value.dropNode;p&&p.node.id!==r.node.id&&te(p.$el,s.is("drop-inner"));const g=a.value.draggingNode;if(!g||!r)return;let C=!0,k=!0,E=!0,F=!0;typeof t.allowDrop=="function"&&(C=t.allowDrop(g.node,r.node,"prev"),F=k=t.allowDrop(g.node,r.node,"inner"),E=t.allowDrop(g.node,r.node,"next")),u.dataTransfer.dropEffect=k||C||E?"move":"none",(C||k||E)&&(p==null?void 0:p.node.id)!==r.node.id&&(p&&e.emit("node-drag-leave",g.node,p.node,u),e.emit("node-drag-enter",g.node,r.node,u)),C||k||E?a.value.dropNode=r:a.value.dropNode=null,r.node.nextSibling===g.node&&(E=!1),r.node.previousSibling===g.node&&(C=!1),r.node.contains(g.node,!1)&&(k=!1),(g.node===r.node||g.node.contains(r.node))&&(C=!1,k=!1,E=!1);const A=r.$el.querySelector(`.${s.be("node","content")}`).getBoundingClientRect(),M=o.value.getBoundingClientRect();let D;const Q=C?k?.25:E?.45:1:-1,X=E?k?.75:C?.55:0:1;let z=-9999;const h=u.clientY-A.top;h<A.height*Q?D="before":h>A.height*X?D="after":k?D="inner":D="none";const v=r.$el.querySelector(`.${s.be("node","expand-icon")}`).getBoundingClientRect(),m=d.value;D==="before"?z=v.top-M.top:D==="after"&&(z=v.bottom-M.top),m.style.top=`${z}px`,m.style.left=`${v.right-M.left}px`,D==="inner"?Se(r.$el,s.is("drop-inner")):te(r.$el,s.is("drop-inner")),a.value.showDropIndicator=D==="before"||D==="after",a.value.allowDrop=a.value.showDropIndicator||F,a.value.dropType=D,e.emit("node-drag-over",g.node,r.node,u)},treeNodeDragEnd:u=>{const{draggingNode:c,dropType:r,dropNode:p}=a.value;if(u.preventDefault(),u.dataTransfer.dropEffect="move",c&&p){const g={data:c.node.data};r!=="none"&&c.node.remove(),r==="before"?p.node.parent.insertBefore(g,p.node):r==="after"?p.node.parent.insertAfter(g,p.node):r==="inner"&&p.node.insertChild(g),r!=="none"&&(n.value.registerNode(g),n.value.key&&c.node.eachNode(C=>{var k;(k=n.value.nodesMap[C.data[n.value.key]])==null||k.setChecked(C.checked,!n.value.checkStrictly)})),te(p.$el,s.is("drop-inner")),e.emit("node-drag-end",c.node,p.node,r,u),r!=="none"&&e.emit("node-drop",c.node,p.node,r,u)}c&&!p&&e.emit("node-drag-end",c.node,null,r,u),a.value.showDropIndicator=!1,a.value.draggingNode=null,a.value.dropNode=null,a.value.allowDrop=!0}}),{dragState:a}}const st=Y({name:"ElTreeNode",components:{ElCollapseTransition:Ae,ElCheckbox:Ge,NodeContent:ot,ElIcon:xe,Loading:Fe},props:{node:{type:$,default:()=>({})},props:{type:Object,default:()=>({})},accordion:Boolean,renderContent:Function,renderAfterExpand:Boolean,showCheckbox:{type:Boolean,default:!1}},emits:["node-expand"],setup(t,e){const o=J("tree"),{broadcastExpanded:d}=Ne(t),n=V("RootTree"),s=b(!1),a=b(!1),i=b(null),f=b(null),y=b(null),u=V(Ce),c=pe();W("NodeInstance",c),t.node.expanded&&(s.value=!0,a.value=!0);const r=n.props.props.children||"children";w(()=>{const h=t.node.data[r];return h&&[...h]},()=>{t.node.updateChildren()}),w(()=>t.node.indeterminate,h=>{C(t.node.checked,h)}),w(()=>t.node.checked,h=>{C(h,t.node.indeterminate)}),w(()=>t.node.childNodes.length,()=>t.node.reInitChecked()),w(()=>t.node.expanded,h=>{ce(()=>s.value=h),h&&(a.value=!0)});const p=h=>ie(n.props.nodeKey,h.data),g=h=>{const v=t.props.class;if(!v)return{};let m;if(Te(v)){const{data:ee}=h;m=v(ee,h)}else m=v;return Ie(m)?{[m]:!0}:m},C=(h,v)=>{(i.value!==h||f.value!==v)&&n.ctx.emit("check-change",t.node.data,h,v),i.value=h,f.value=v},k=h=>{se(n.store,n.ctx.emit,()=>n.store.value.setCurrentNode(t.node)),n.currentNode.value=t.node,n.props.expandOnClickNode&&F(),n.props.checkOnClickNode&&!t.node.disabled&&A(null,{target:{checked:!t.node.checked}}),n.ctx.emit("node-click",t.node.data,t.node,c,h)},E=h=>{n.instance.vnode.props.onNodeContextmenu&&(h.stopPropagation(),h.preventDefault()),n.ctx.emit("node-contextmenu",h,t.node.data,t.node,c)},F=()=>{t.node.isLeaf||(s.value?(n.ctx.emit("node-collapse",t.node.data,t.node,c),t.node.collapse()):(t.node.expand(),e.emit("node-expand",t.node.data,t.node,c)))},A=(h,v)=>{t.node.setChecked(v.target.checked,!n.props.checkStrictly),ce(()=>{const m=n.store.value;n.ctx.emit("check",t.node.data,{checkedNodes:m.getCheckedNodes(),checkedKeys:m.getCheckedKeys(),halfCheckedNodes:m.getHalfCheckedNodes(),halfCheckedKeys:m.getHalfCheckedKeys()})})};return{ns:o,node$:y,tree:n,expanded:s,childNodeRendered:a,oldChecked:i,oldIndeterminate:f,getNodeKey:p,getNodeClass:g,handleSelectChange:C,handleClick:k,handleContextMenu:E,handleExpandIconClick:F,handleCheckChange:A,handleChildNodeExpand:(h,v,m)=>{d(v),n.ctx.emit("node-expand",h,v,m)},handleDragStart:h=>{!n.props.draggable||u.treeNodeDragStart({event:h,treeNode:t})},handleDragOver:h=>{h.preventDefault(),n.props.draggable&&u.treeNodeDragOver({event:h,treeNode:{$el:y.value,node:t.node}})},handleDrop:h=>{h.preventDefault()},handleDragEnd:h=>{!n.props.draggable||u.treeNodeDragEnd(h)},CaretRight:Be}}}),at=["aria-expanded","aria-disabled","aria-checked","draggable","data-key"],rt=["aria-expanded"];function it(t,e,o,d,n,s){const a=I("el-icon"),i=I("el-checkbox"),f=I("loading"),y=I("node-content"),u=I("el-tree-node"),c=I("el-collapse-transition");return oe((K(),L("div",{ref:"node$",class:S([t.ns.b("node"),t.ns.is("expanded",t.expanded),t.ns.is("current",t.node.isCurrent),t.ns.is("hidden",!t.node.visible),t.ns.is("focusable",!t.node.disabled),t.ns.is("checked",!t.node.disabled&&t.node.checked),t.getNodeClass(t.node)]),role:"treeitem",tabindex:"-1","aria-expanded":t.expanded,"aria-disabled":t.node.disabled,"aria-checked":t.node.checked,draggable:t.tree.props.draggable,"data-key":t.getNodeKey(t.node),onClick:e[1]||(e[1]=B((...r)=>t.handleClick&&t.handleClick(...r),["stop"])),onContextmenu:e[2]||(e[2]=(...r)=>t.handleContextMenu&&t.handleContextMenu(...r)),onDragstart:e[3]||(e[3]=B((...r)=>t.handleDragStart&&t.handleDragStart(...r),["stop"])),onDragover:e[4]||(e[4]=B((...r)=>t.handleDragOver&&t.handleDragOver(...r),["stop"])),onDragend:e[5]||(e[5]=B((...r)=>t.handleDragEnd&&t.handleDragEnd(...r),["stop"])),onDrop:e[6]||(e[6]=B((...r)=>t.handleDrop&&t.handleDrop(...r),["stop"]))},[O("div",{class:S(t.ns.be("node","content")),style:$e({paddingLeft:(t.node.level-1)*t.tree.props.indent+"px"})},[t.tree.props.icon||t.CaretRight?(K(),q(a,{key:0,class:S([t.ns.be("node","expand-icon"),t.ns.is("leaf",t.node.isLeaf),{expanded:!t.node.isLeaf&&t.expanded}]),onClick:B(t.handleExpandIconClick,["stop"])},{default:U(()=>[(K(),q(Le(t.tree.props.icon||t.CaretRight)))]),_:1},8,["class","onClick"])):H("v-if",!0),t.showCheckbox?(K(),q(i,{key:1,"model-value":t.node.checked,indeterminate:t.node.indeterminate,disabled:!!t.node.disabled,onClick:e[0]||(e[0]=B(()=>{},["stop"])),onChange:t.handleCheckChange},null,8,["model-value","indeterminate","disabled","onChange"])):H("v-if",!0),t.node.loading?(K(),q(a,{key:2,class:S([t.ns.be("node","loading-icon"),t.ns.is("loading")])},{default:U(()=>[x(f)]),_:1},8,["class"])):H("v-if",!0),x(y,{node:t.node,"render-content":t.renderContent},null,8,["node","render-content"])],6),x(c,null,{default:U(()=>[!t.renderAfterExpand||t.childNodeRendered?oe((K(),L("div",{key:0,class:S(t.ns.be("node","children")),role:"group","aria-expanded":t.expanded},[(K(!0),L(ge,null,ye(t.node.childNodes,r=>(K(),q(u,{key:t.getNodeKey(r),"render-content":t.renderContent,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,node:r,accordion:t.accordion,props:t.props,onNodeExpand:t.handleChildNodeExpand},null,8,["render-content","render-after-expand","show-checkbox","node","accordion","props","onNodeExpand"]))),128))],10,rt)),[[de,t.expanded]]):H("v-if",!0)]),_:1})],42,at)),[[de,t.node.visible]])}var lt=re(st,[["render",it],["__file","tree-node.vue"]]);function ct({el$:t},e){const o=J("tree"),d=ue([]),n=ue([]);Oe(()=>{a()}),Me(()=>{d.value=Array.from(t.value.querySelectorAll("[role=treeitem]")),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"))}),w(n,i=>{i.forEach(f=>{f.setAttribute("tabindex","-1")})}),ze(t,"keydown",i=>{const f=i.target;if(!f.className.includes(o.b("node")))return;const y=i.code;d.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`));const u=d.value.indexOf(f);let c;if([T.up,T.down].includes(y)){if(i.preventDefault(),y===T.up){c=u===-1?0:u!==0?u-1:d.value.length-1;const p=c;for(;!e.value.getNode(d.value[c].dataset.key).canFocus;){if(c--,c===p){c=-1;break}c<0&&(c=d.value.length-1)}}else{c=u===-1?0:u<d.value.length-1?u+1:0;const p=c;for(;!e.value.getNode(d.value[c].dataset.key).canFocus;){if(c++,c===p){c=-1;break}c>=d.value.length&&(c=0)}}c!==-1&&d.value[c].focus()}[T.left,T.right].includes(y)&&(i.preventDefault(),f.click());const r=f.querySelector('[type="checkbox"]');[T.enter,T.space].includes(y)&&r&&(i.preventDefault(),r.click())});const a=()=>{var i;d.value=Array.from(t.value.querySelectorAll(`.${o.is("focusable")}[role=treeitem]`)),n.value=Array.from(t.value.querySelectorAll("input[type=checkbox]"));const f=t.value.querySelectorAll(`.${o.is("checked")}[role=treeitem]`);if(f.length){f[0].setAttribute("tabindex","0");return}(i=d.value[0])==null||i.setAttribute("tabindex","0")}}const ut=Y({name:"ElTree",components:{ElTreeNode:lt},props:{data:{type:Array,default:()=>[]},emptyText:{type:String},renderAfterExpand:{type:Boolean,default:!0},nodeKey:String,checkStrictly:Boolean,defaultExpandAll:Boolean,expandOnClickNode:{type:Boolean,default:!0},checkOnClickNode:Boolean,checkDescendants:{type:Boolean,default:!1},autoExpandParent:{type:Boolean,default:!0},defaultCheckedKeys:Array,defaultExpandedKeys:Array,currentNodeKey:[String,Number],renderContent:Function,showCheckbox:{type:Boolean,default:!1},draggable:{type:Boolean,default:!1},allowDrag:Function,allowDrop:Function,props:{type:Object,default:()=>({children:"children",label:"label",disabled:"disabled"})},lazy:{type:Boolean,default:!1},highlightCurrent:Boolean,load:Function,filterNodeMethod:Function,accordion:Boolean,indent:{type:Number,default:18},icon:{type:Pe}},emits:["check-change","current-change","node-click","node-contextmenu","node-collapse","node-expand","check","node-drag-start","node-drag-end","node-drop","node-drag-leave","node-drag-enter","node-drag-over"],setup(t,e){const{t:o}=qe(),d=J("tree"),n=b(new tt({key:t.nodeKey,data:t.data,lazy:t.lazy,props:t.props,load:t.load,currentNodeKey:t.currentNodeKey,checkStrictly:t.checkStrictly,checkDescendants:t.checkDescendants,defaultCheckedKeys:t.defaultCheckedKeys,defaultExpandedKeys:t.defaultExpandedKeys,autoExpandParent:t.autoExpandParent,defaultExpandAll:t.defaultExpandAll,filterNodeMethod:t.filterNodeMethod}));n.value.initialize();const s=b(n.value.root),a=b(null),i=b(null),f=b(null),{broadcastExpanded:y}=Ne(t),{dragState:u}=dt({props:t,ctx:e,el$:i,dropIndicator$:f,store:n});ct({el$:i},n);const c=je(()=>{const{childNodes:l}=s.value;return!l||l.length===0||l.every(({visible:N})=>!N)});w(()=>t.currentNodeKey,l=>{n.value.setCurrentNodeKey(l)}),w(()=>t.defaultCheckedKeys,l=>{n.value.setDefaultCheckedKey(l)}),w(()=>t.defaultExpandedKeys,l=>{n.value.setDefaultExpandedKeys(l)}),w(()=>t.data,l=>{n.value.setData(l)},{deep:!0}),w(()=>t.checkStrictly,l=>{n.value.checkStrictly=l});const r=l=>{if(!t.filterNodeMethod)throw new Error("[Tree] filterNodeMethod is required when filter");n.value.filter(l)},p=l=>ie(t.nodeKey,l.data),g=l=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getNodePath");const N=n.value.getNode(l);if(!N)return[];const P=[N.data];let R=N.parent;for(;R&&R!==s.value;)P.push(R.data),R=R.parent;return P.reverse()},C=(l,N)=>n.value.getCheckedNodes(l,N),k=l=>n.value.getCheckedKeys(l),E=()=>{const l=n.value.getCurrentNode();return l?l.data:null},F=()=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in getCurrentKey");const l=E();return l?l[t.nodeKey]:null},A=(l,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedNodes");n.value.setCheckedNodes(l,N)},M=(l,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCheckedKeys");n.value.setCheckedKeys(l,N)},D=(l,N,P)=>{n.value.setChecked(l,N,P)},Q=()=>n.value.getHalfCheckedNodes(),X=()=>n.value.getHalfCheckedKeys(),z=(l,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentNode");se(n,e.emit,()=>n.value.setUserCurrentNode(l,N))},h=(l,N=!0)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in setCurrentKey");se(n,e.emit,()=>n.value.setCurrentNodeKey(l,N))},v=l=>n.value.getNode(l),m=l=>{n.value.remove(l)},ee=(l,N)=>{n.value.append(l,N)},ve=(l,N)=>{n.value.insertBefore(l,N)},me=(l,N)=>{n.value.insertAfter(l,N)},be=(l,N,P)=>{y(N),e.emit("node-expand",l,N,P)},Ee=(l,N)=>{if(!t.nodeKey)throw new Error("[Tree] nodeKey is required in updateKeyChild");n.value.updateChildren(l,N)};return W("RootTree",{ctx:e,props:t,store:n,root:s,currentNode:a,instance:pe()}),W(Re,void 0),{ns:d,store:n,root:s,currentNode:a,dragState:u,el$:i,dropIndicator$:f,isEmpty:c,filter:r,getNodeKey:p,getNodePath:g,getCheckedNodes:C,getCheckedKeys:k,getCurrentNode:E,getCurrentKey:F,setCheckedNodes:A,setCheckedKeys:M,setChecked:D,getHalfCheckedNodes:Q,getHalfCheckedKeys:X,setCurrentNode:z,setCurrentKey:h,t:o,getNode:v,remove:m,append:ee,insertBefore:ve,insertAfter:me,handleNodeExpand:be,updateKeyChildren:Ee}}});function ht(t,e,o,d,n,s){const a=I("el-tree-node");return K(),L("div",{ref:"el$",class:S([t.ns.b(),t.ns.is("dragging",!!t.dragState.draggingNode),t.ns.is("drop-not-allow",!t.dragState.allowDrop),t.ns.is("drop-inner",t.dragState.dropType==="inner"),{[t.ns.m("highlight-current")]:t.highlightCurrent}]),role:"tree"},[(K(!0),L(ge,null,ye(t.root.childNodes,i=>(K(),q(a,{key:t.getNodeKey(i),node:i,props:t.props,accordion:t.accordion,"render-after-expand":t.renderAfterExpand,"show-checkbox":t.showCheckbox,"render-content":t.renderContent,onNodeExpand:t.handleNodeExpand},null,8,["node","props","accordion","render-after-expand","show-checkbox","render-content","onNodeExpand"]))),128)),t.isEmpty?(K(),L("div",{key:0,class:S(t.ns.e("empty-block"))},[fe(t.$slots,"empty",{},()=>{var i;return[O("span",{class:S(t.ns.e("empty-text"))},He((i=t.emptyText)!=null?i:t.t("el.tree.emptyText")),3)]})],2)):H("v-if",!0),oe(O("div",{ref:"dropIndicator$",class:S(t.ns.e("drop-indicator"))},null,2),[[de,t.dragState.showDropIndicator]])],2)}var G=re(ut,[["render",ht],["__file","tree.vue"]]);G.install=t=>{t.component(G.name,G)};const ft=G,pt=ft,ke=t=>(We("data-v-aa7ec2a0"),t=t(),Ye(),t),gt={class:"container"},yt=ke(()=>O("div",{class:"plugins-tips"},"\u901A\u8FC7 v-permiss \u81EA\u5B9A\u4E49\u6307\u4EE4\u5B9E\u73B0\u6743\u9650\u7BA1\u7406\uFF0C\u4F7F\u7528\u975E admin \u8D26\u53F7\u767B\u5F55\uFF0C\u53EF\u67E5\u770B\u6548\u679C\u3002",-1)),Nt={class:"mgb20"},Ct=ke(()=>O("span",{class:"label"},"\u89D2\u8272\uFF1A",-1)),kt={class:"mgb20 tree-wrapper"},vt=Y({name:"permission"}),mt=Y({...vt,setup(t){const e=b("admin"),o=[{id:"1",label:"\u7CFB\u7EDF\u9996\u9875"},{id:"2",label:"\u57FA\u7840\u8868\u683C",children:[{id:"15",label:"\u7F16\u8F91"},{id:"16",label:"\u5220\u9664"}]},{id:"3",label:"tab\u9009\u9879\u5361"},{id:"4",label:"\u8868\u5355\u76F8\u5173",children:[{id:"5",label:"\u57FA\u672C\u8868\u5355"},{id:"6",label:"\u6587\u4EF6\u4E0A\u4F20"},{id:"7",label:"\u4E09\u7EA7\u83DC\u5355",children:[{id:"8",label:"\u5BCC\u6587\u672C\u7F16\u8F91\u5668"},{id:"9",label:"markdown\u7F16\u8F91\u5668"}]}]},{id:"10",label:"\u81EA\u5B9A\u4E49\u56FE\u6807"},{id:"11",label:"schart\u56FE\u8868"},{id:"13",label:"\u6743\u9650\u7BA1\u7406"},{id:"14",label:"\u652F\u6301\u4F5C\u8005"}],d=_e(),n=b([]);(()=>{n.value=d.defaultList[e.value]})();const a=b(),i=()=>{console.log(a.value.getCheckedKeys(!1))},f=y=>{a.value.setCheckedKeys(d.defaultList[e.value])};return(y,u)=>{const c=Xe,r=Ze,p=Ue;return K(),L("div",gt,[yt,O("div",Nt,[Ct,x(r,{modelValue:e.value,"onUpdate:modelValue":u[0]||(u[0]=g=>e.value=g),onChange:f},{default:U(()=>[x(c,{label:"\u8D85\u7EA7\u7BA1\u7406\u5458",value:"admin"}),x(c,{label:"\u666E\u901A\u7528\u6237",value:"user"})]),_:1},8,["modelValue"])]),O("div",kt,[x(Ve(pt),{ref_key:"tree",ref:a,data:o,"node-key":"id","default-expand-all":"","show-checkbox":"","default-checked-keys":n.value},null,8,["default-checked-keys"])]),x(p,{type:"primary",onClick:i},{default:U(()=>[Je("\u4FDD\u5B58\u6743\u9650")]),_:1})])}}});const Tt=Qe(mt,[["__scopeId","data-v-aa7ec2a0"]]);export{Tt as default};
