(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,,,,,,function(e,a,t){},function(e,a,t){e.exports=t.p+"static/media/cloud.2def03b0.svg"},,,function(e,a,t){e.exports=t.p+"static/media/logo.59c6e6b7.png"},,,,function(e,a,t){e.exports=t.p+"static/media/layer_1.f1f68517.svg"},function(e,a,t){e.exports=t.p+"static/media/layer_2.05fae668.svg"},function(e,a,t){e.exports=t.p+"static/media/layer_3.f576989a.svg"},function(e,a,t){e.exports=t.p+"static/media/layer_4.8e360d29.svg"},function(e,a,t){e.exports=t.p+"static/media/resume-img.000b61c8.pdf"},,function(e,a,t){e.exports=t(61)},,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,,,,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,function(e,a,t){},,,function(e,a,t){},,function(e,a,t){},,function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),i=t(17),l=t.n(i),c=(t(33),t(35),t(37),t(4)),r=t(5),s=t(7),u=t(6),m=t(8),d=t(3),p=t(63),_=t(62),h=t(64),b=(t(39),t(14),t(18)),g=t.n(b),v=t(11),f=t(19),E=t(20);v.b.add(E.a);var k=function(e){function a(){return Object(c.a)(this,a),Object(s.a)(this,Object(u.a)(a).apply(this,arguments))}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"parallax__layer parallax__layer__6"},o.a.createElement("div",{className:"nav__outer"},o.a.createElement("div",{className:"navContainer"},o.a.createElement(h.a,{to:"",className:"nav__logoContainer"},o.a.createElement("img",{src:g.a,className:"nav__logo",alt:"logo"})),o.a.createElement("p",{className:"nav__hamburger",onClick:this.props.toggleMobileMenu},"\u2630"),o.a.createElement("div",{className:"nav__rightContainer"},o.a.createElement("div",{className:this.props.mobileMenu?"nav__linkContainer":"nav__linkContainer nav__hideMobileMenu"},o.a.createElement("p",{className:"nav__closeBtn__wrapper",onClick:this.props.toggleMobileMenu},o.a.createElement(f.a,{icon:"times",className:"nav__closeBtn"})),o.a.createElement("div",{className:"nav__linkContainerInner"},o.a.createElement(h.a,{to:"/",exact:!0,activeClassName:"nav__active",className:"nav__rightContainer__link",onClick:function(){return e.props.closeMobileMenu()}},"Home"),o.a.createElement(h.a,{to:"/portfolio",activeClassName:"nav__active",className:"nav__rightContainer__link",onClick:function(){return e.props.closeMobileMenu()}},"Projects"),o.a.createElement(h.a,{to:"/resume",className:"nav__rightContainer__link",activeClassName:"nav__active",onClick:function(){return e.props.closeMobileMenu()}},"R\xe9sum\xe9"),o.a.createElement(h.a,{to:"/contact",className:"nav__rightContainer__link",activeClassName:"nav__active",onClick:function(){return e.props.closeMobileMenu()}},"Contact")))))))}}]),a}(n.Component),j=t(13),y=t(15),O=t.n(y),N=(t(46),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={},t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"landing__outer"},o.a.createElement("div",{className:"landing__rightCloud container"},o.a.createElement("img",{onLoad:function(){return e.props.imageLoaded("cloud1")},src:O.a,className:"landing__rightCloud__img",alt:"cloud"})),o.a.createElement("div",{className:"landing__titleBox"},o.a.createElement("h1",{className:"landing__titleBox__header"},"Sid Barrack"),o.a.createElement("h2",{className:"landing__titleBox__subHeader"},"Software Engineer")),o.a.createElement("div",{className:"landing__leftCloud container"},o.a.createElement("img",{src:O.a,onLoad:function(){return e.props.imageLoaded("cloud2")},className:"landing__leftCloud__img",alt:"cloud"})))}}]),a}(n.Component)),w=t(22),M=t.n(w),x=t(23),P=t.n(x),C=t(24),L=t.n(C),T=t(25),B=t.n(T),R=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={images:[]},t.imageLoaded=t.imageLoaded.bind(Object(d.a)(Object(d.a)(t))),t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"imageLoaded",value:function(e){this.setState(function(a){return{images:[].concat(Object(j.a)(a.images),[e])}})}},{key:"render",value:function(){var e=this;return o.a.createElement("div",null,o.a.createElement("div",{className:6===this.state.images.length?"landingImagesLoaded":"landingImagesLoading"}),o.a.createElement("div",{className:"parallax__layer parallax__layer__1"},o.a.createElement(N,{imageLoaded:this.imageLoaded})),o.a.createElement("div",{className:"parallax__layer parallax__layer__3"},o.a.createElement("img",{src:M.a,height:"455px",width:"3000px",className:"parallax__img",alt:"mountains",onLoad:function(){return e.imageLoaded("layer1")}})),o.a.createElement("div",{className:"parallax__layer parallax__layer__4"},o.a.createElement("img",{src:P.a,height:"455px",width:"3000px",className:"parallax__img",alt:"mountains",onLoad:function(){return e.imageLoaded("layer2")}})),o.a.createElement("div",{className:"parallax__layer parallax__layer__5"},o.a.createElement("img",{src:L.a,height:"455px",width:"3000px",className:"parallax__img",alt:"mountains",onLoad:function(){return e.imageLoaded("layer3")}})),o.a.createElement("div",{className:"parallax__layer beforecover"},o.a.createElement("img",{src:B.a,height:"455px",width:"3000px",className:"parallax__img",alt:"mountains",onLoad:function(){return e.imageLoaded("layer4")}})))}}]),a}(n.Component),S=(t(48),t(50),function(e){return o.a.createElement("div",{className:"container__outer"},o.a.createElement("div",{className:"container heading__container"},o.a.createElement("h1",{className:"heading__header",onClick:function(){return console.log(e)}},e.title),o.a.createElement("p",{className:"heading__para"},e.para),e.button&&o.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer",className:"heading__link"},o.a.createElement("button",{className:"heading__button"},e.button))))}),I=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={images:[]},t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"imageLoaded",value:function(e){this.setState(function(a){return{images:[].concat(Object(j.a)(a.images),[e])}})}},{key:"componentDidMount",value:function(){this.props.scrollToPosition(0)}},{key:"render",value:function(){return o.a.createElement("div",{className:"parallax__cover__portfolio"},o.a.createElement(S,{title:"Projects",para:"You can check out my github account through the link \r below to see some of the projects I have worked on lately.",button:"Github",link:"https://github.com/da7a90"}))}}]),a}(n.Component),D=(t(52),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={},t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"render",value:function(){return o.a.createElement("div",{className:"parallax__cover__contact"},o.a.createElement(S,{title:"Contact",para:"You can reach out to me through my E-mail address: sidbarrack@gmail.com my phone: +221781263286 or through linkedIn by clicking on the button below",button:"Sid Barrack on LinkedIn",link:"https://www.linkedin.com/in/sid-barrack-2496ba177/"}))}}]),a}(n.Component)),z=t(26),W=t.n(z),H=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).state={},t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.props.scrollToPosition(0)}},{key:"render",value:function(){return o.a.createElement("div",{className:""},o.a.createElement("div",{className:"parallax__cover__portfolio"},o.a.createElement(S,{title:"Resume",para:"Here is my resume that you can download in PDF format \r by clicking on the button below.",button:"Download PDF",link:W.a})))}}]),a}(n.Component),A=(t(54),t(57),t(59),function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(s.a)(this,Object(u.a)(a).call(this,e))).handleWindowResize=function(){t.setState({isMobile:window.innerWidth<1050})},t.state={popup:!1},t.myRef=o.a.createRef(),t.scrollToPosition=t.scrollToPosition.bind(Object(d.a)(Object(d.a)(t))),t.closePopup=t.closePopup.bind(Object(d.a)(Object(d.a)(t))),t.showPopup=t.showPopup.bind(Object(d.a)(Object(d.a)(t))),t.toggleMobileMenu=t.toggleMobileMenu.bind(Object(d.a)(Object(d.a)(t))),t.closeMobileMenu=t.closeMobileMenu.bind(Object(d.a)(Object(d.a)(t))),t}return Object(m.a)(a,e),Object(r.a)(a,[{key:"componentDidMount",value:function(){this.scrollToPosition(80),window.addEventListener("click",this.closePopup),window.addEventListener("resize",this.handleWindowResize),(new Image).src="../images/bg.svg"}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowResize),window.addEventListener("click",this.closePopup)}},{key:"closePopup",value:function(e){"popupBackground"!==e.target.id&&"popupCloseBtn"!==e.target.id||this.setState({popup:!1})}},{key:"showPopup",value:function(e){this.setState({popup:e})}},{key:"scrollToPosition",value:function(e){-1===window.navigator.userAgent.indexOf("Edge")&&this.myRef.current&&this.myRef.current.scrollTo(0,e)}},{key:"toggleMobileMenu",value:function(){this.setState(function(e){return{mobileMenu:!e.mobileMenu}})}},{key:"closeMobileMenu",value:function(e){this.setState({mobileMenu:!1})}},{key:"render",value:function(){var e=this;return o.a.createElement(p.a,null,o.a.createElement("div",{className:"App"},o.a.createElement("div",{className:"parallax__overflow",ref:this.myRef},o.a.createElement(_.a,{path:"",render:function(a){return o.a.createElement("div",null,o.a.createElement(k,{mobileMenu:e.state.mobileMenu,toggleMobileMenu:e.toggleMobileMenu,closeMobileMenu:e.closeMobileMenu}))}}),o.a.createElement(_.a,{path:"",exact:!0,render:function(a){return o.a.createElement(R,{showPopup:e.showPopup,closePopup:e.closePopup,scrollToPosition:e.scrollToPosition})}}),o.a.createElement(_.a,{path:"/portfolio",render:function(a){return o.a.createElement(I,{scrollToPosition:e.scrollToPosition})}}),o.a.createElement(_.a,{path:"/contact",render:function(a){return o.a.createElement(D,{showPopup:e.showPopup,closePopup:e.closePopup,scrollToPosition:e.scrollToPosition})}}),o.a.createElement(_.a,{path:"/resume",render:function(a){return o.a.createElement(H,{showPopup:e.showPopup,closePopup:e.closePopup,scrollToPosition:e.scrollToPosition})}}))))}}]),a}(n.Component));l.a.render(o.a.createElement(A,null),document.getElementById("root"))}],[[28,2,1]]]);
//# sourceMappingURL=main.4b55bc3b.chunk.js.map