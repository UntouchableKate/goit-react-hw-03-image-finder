(this["webpackJsonpimage-finder"]=this["webpackJsonpimage-finder"]||[]).push([[0],{14:function(e,t,a){e.exports={searchForm:"SearchForm_searchForm__ncGLa",searchFormInput:"SearchForm_searchFormInput__1qYIw"}},16:function(e,t,a){e.exports={Modal:"Modal_Modal__pM0Y9",Overlay:"Modal_Overlay__Zqat3"}},17:function(e,t,a){e.exports={app:"App_app__10eV3",button:"App_button__3nH08"}},2:function(e,t,a){e.exports={materialIcons:"PhotoCard_materialIcons__31X2l",photoCard:"PhotoCard_photoCard__3Natr",photoCardImg:"PhotoCard_photoCardImg__2LIMa",stats:"PhotoCard_stats__Z8tFs",statsItem:"PhotoCard_statsItem__JrR1t",fullscreenButton:"PhotoCard_fullscreenButton__3i0pI",fullscreenButtonI:"PhotoCard_fullscreenButtonI__2pqaC PhotoCard_materialIcons__31X2l",galleryItem:"PhotoCard_galleryItem__2NfAK"}},22:function(e,t,a){e.exports={gallery:"Gallery_gallery__2B3JE"}},26:function(e,t,a){e.exports=a(44)},31:function(e,t,a){},44:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(3),l=a.n(o),c=(a(31),a(18)),s=a(4),i=a(5),m=a(7),h=a(6),u=a(8),d=a(11),p=(a(32),a(14)),f=a.n(p),y=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={query:""},a.handleChange=function(e){a.setState({query:e.target.value})},a.handleSubmit=function(e){e.preventDefault(),a.props.onSearch(a.state.query),a.setState({query:""})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state.query;return r.a.createElement("form",{className:f.a.searchForm,onSubmit:this.handleSubmit},r.a.createElement("input",{type:"text",autoComplete:"off",placeholder:"Search images...",className:f.a.searchFormInput,value:e,onChange:this.handleChange}))}}]),t}(n.Component),g=a(9),b=a(15),_=a.n(b),C=a(2),E=a.n(C),v=a(16),I=a.n(v);_.a.setAppElement("#modal");var O=function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(m.a)(this,Object(h.a)(t).call(this))).state={showModal:!1},e.handleOpenModal=e.handleOpenModal.bind(Object(g.a)(e)),e.handleCloseModal=e.handleCloseModal.bind(Object(g.a)(e)),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleOpenModal",value:function(){this.setState({showModal:!0})}},{key:"handleCloseModal",value:function(){this.setState({showModal:!1})}},{key:"render",value:function(){var e=this.state.showModal,t=this.props.largeImageURL;return r.a.createElement("div",null,r.a.createElement("button",{onClick:this.handleOpenModal,type:"button",className:E.a.fullscreenButton},r.a.createElement("i",{className:E.a.fullscreenButtonI}," zoom_out_map ")),r.a.createElement(_.a,{isOpen:e,contentLabel:"onRequestClose Example",onRequestClose:this.handleCloseModal,className:I.a.Modal,overlayClassName:I.a.Overlay},r.a.createElement("img",{src:t,alt:"img"}),r.a.createElement("button",{onClick:this.handleCloseModal,type:"button"},r.a.createElement("i",{className:E.a.fullscreenButtonI}," close "))))}}]),t}(n.Component),N=function(e){var t=e.photoCard;return r.a.createElement("li",{className:E.a.photoCard,key:t.id},r.a.createElement("div",{className:E.a.galleryItem},r.a.createElement("img",{src:t.webformatURL,alt:"abc",className:E.a.photoCardImg}),r.a.createElement("div",{className:E.a.stats},r.a.createElement("p",{className:E.a.statsItem},r.a.createElement("i",{className:E.a.materialIcons},"thumb_up"),t.likes),r.a.createElement("p",{className:E.a.statsItem},r.a.createElement("i",{className:E.a.materialIcons},"visibility"),t.views),r.a.createElement("p",{className:E.a.statsItem},r.a.createElement("i",{className:E.a.materialIcons},"comment"),t.comments),r.a.createElement("p",{className:E.a.statsItem},r.a.createElement("i",{className:E.a.materialIcons},"cloud_download"),t.downloads)),r.a.createElement(O,{largeImageURL:t.largeImageURL,photoCard:t,id:t.id})))},w=a(22),x=a.n(w),M=function(e){var t=e.photoCards;return r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{className:x.a.gallery},t.map((function(e){return r.a.createElement(N,{key:e.id,photoCard:e})}))))},j=a(23),S=function(){return r.a.createElement(j.a,{height:450,width:820,speed:2,primaryColor:"#d9d9d9",secondaryColor:"#ecebeb"},r.a.createElement("rect",{x:"10",y:"10",rx:"5",ry:"5",width:"260",height:"140"}),r.a.createElement("rect",{x:"280",y:"10",rx:"5",ry:"5",width:"260",height:"280"}),r.a.createElement("rect",{x:"550",y:"10",rx:"5",ry:"5",width:"260",height:"140"}),r.a.createElement("rect",{x:"10",y:"160",rx:"5",ry:"5",width:"260",height:"280"}),r.a.createElement("rect",{x:"280",y:"300",rx:"5",ry:"5",width:"260",height:"140"}),r.a.createElement("rect",{x:"550",y:"160",rx:"5",ry:"5",width:"260",height:"280"}))};S.metadata={name:"baptiste fkt",github:"baptistefkt",description:"Three column grid layout",filename:"Grid"};var k=S,q="https://pixabay.com/api/",L="?key=14134872-e022301753fdb280678fa084b",B="&image_type=photo",F="&oriental=horizontal",P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:12,n="&per_page=".concat(a),r="&page=".concat(t),o="&q=".concat(e);return fetch(q+L+o+B+F+r+n).then((function(e){return e.json()})).then((function(e){return e.hits}))},R=a(17),A=a.n(R),T=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(m.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(r)))).state={photoCards:[],isLoading:!1,pageNumber:1,query:""},a.onSearch=function(e){a.setState({query:e,photoCards:[],pageNumber:1})},a.fetchCards=function(){var e=a.state,t=e.query,n=e.pageNumber;a.setState({isLoading:!0}),P(t,n).then((function(e){a.setState((function(t){return{photoCards:[].concat(Object(c.a)(t.photoCards),Object(c.a)(e)),pageNumber:t.pageNumber+1}}))})).catch((function(e){d.b.error("Oops...something wrong.",e,{position:d.b.POSITION.BOTTOM_RIGHT})})).finally((function(){a.setState({isLoading:!1})}))},a.scrollCards=function(){window.scrollBy({left:0,top:window.innerHeight,behavior:"smooth"})},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidUpdate",value:function(e,t){var a=this.state.query;t.query!==a&&this.fetchCards(),this.scrollCards()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.photoCards;return r.a.createElement("div",{className:A.a.app},r.a.createElement(y,{onSearch:this.onSearch}),a.length>0&&r.a.createElement(M,{photoCards:a}),t&&r.a.createElement(k,null),a.length>0&&r.a.createElement("button",{type:"button",onClick:this.fetchCards,className:A.a.button},"Load more"),r.a.createElement(d.a,null))}}]),t}(n.Component);l.a.render(r.a.createElement(T,null),document.getElementById("root"))}},[[26,1,2]]]);
//# sourceMappingURL=main.bc48f22f.chunk.js.map