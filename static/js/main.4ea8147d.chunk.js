(this.webpackJsonpmovie_app_2020=this.webpackJsonpmovie_app_2020||[]).push([[0],{40:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},70:function(e,t,a){},71:function(e,t,a){},72:function(e,t,a){"use strict";a.r(t);var n=a(1),s=a(0),r=a.n(s),i=a(31),c=a.n(i),o=a(9),l=a(2);a(40);var m=function(){return Object(n.jsxs)("div",{className:"nav",children:[Object(n.jsx)(o.b,{to:"/",children:"Home"}),Object(n.jsx)(o.b,{to:"/about",children:"About"})]})},j=a(20),u=a.n(j),d=a(33),b=a(12),v=a(13),h=a(16),p=a(15),O=a(34),x=a.n(O),g=a(14),_=a.n(g);a(68);var f=function(e){var t=e.id,a=e.title,s=e.year,r=e.genres,i=e.poster,c=e.rating,l=e.summary;return Object(n.jsx)("div",{className:"movie",children:Object(n.jsxs)(o.b,{className:"link",to:{pathname:"/movie/".concat(t),state:{title:a,year:s,genres:r,poster:i,rating:c,summary:l}},children:[Object(n.jsx)("img",{src:i,alt:a,title:a}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:a}),Object(n.jsx)("h5",{className:"movie__year",children:s}),Object(n.jsx)("ul",{className:"movie__genres",children:r.map((function(e,t){return Object(n.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(n.jsx)(_.a,{rating:c/10*5,numberOfStars:5,starRatedColor:"gold",starDimension:"15px",starSpacing:"1px",name:"rating"}),Object(n.jsx)("p",{className:"movie__summary",children:l.length>180?l.slice(0,180)+"...":l})]})]})})},y=(a(69),function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){var e;Object(b.a)(this,a);for(var n=arguments.length,s=new Array(n),r=0;r<n;r++)s[r]=arguments[r];return(e=t.call.apply(t,[this].concat(s))).state={isLoading:!0,movies:[]},e.getMovies=Object(d.a)(u.a.mark((function t(){var a,n;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,x.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:a=t.sent,n=a.data.data.movies,console.log(n),e.setState({movies:n,isLoading:!1});case 6:case"end":return t.stop()}}),t)}))),e}return Object(v.a)(a,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return Object(n.jsx)("section",{className:"container",children:t?Object(n.jsx)("div",{className:"loader",children:Object(n.jsx)("span",{className:"loader__text",children:"Loading..."})}):Object(n.jsx)("div",{className:"movies",children:a.map((function(e){return Object(n.jsx)(f,{id:e.id,title:e.title,year:e.year,genres:e.genres,poster:e.medium_cover_image,rating:e.rating,summary:e.summary},e.id)}))})})}}]),a}(r.a.Component));a(70);var N=function(){return Object(n.jsxs)("div",{className:"about__container",children:[Object(n.jsx)("span",{children:"\u201cFreedom is the freedom to say that two plus two make four. If that is granted, all else follows.\u201d"}),Object(n.jsx)("span",{children:"\u2212 George Orwell, 1984"})]})},k=function(e){Object(h.a)(a,e);var t=Object(p.a)(a);function a(){return Object(b.a)(this,a),t.apply(this,arguments)}return Object(v.a)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;if(e.state){var t=e.state;return Object(n.jsxs)("div",{className:"movie",children:[Object(n.jsx)("img",{src:t.poster,alt:t.title,title:t.title}),Object(n.jsxs)("div",{className:"movie__data",children:[Object(n.jsx)("h3",{className:"movie__title",children:t.title}),Object(n.jsx)("h5",{className:"movie__year",children:t.year}),Object(n.jsx)("ul",{className:"movie__genres",children:t.genres.map((function(e,t){return Object(n.jsx)("li",{className:"genres__genre",children:e},t)}))}),Object(n.jsx)(_.a,{rating:t.rating/10*5,numberOfStars:5,starRatedColor:"gold",starDimension:"15px",starSpacing:"1px",name:"rating"}),Object(n.jsx)("p",{className:"movie__summary",children:t.summary})]})]})}return null}}]),a}(s.Component);a(71);var w=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(m,{}),Object(n.jsx)(l.a,{path:"/",exact:!0,component:y}),Object(n.jsx)(l.a,{path:"/about",component:N}),Object(n.jsx)(l.a,{path:"/movie/:id",component:k})]})};c.a.render(Object(n.jsx)(w,{}),document.getElementById("root"))}},[[72,1,2]]]);
//# sourceMappingURL=main.4ea8147d.chunk.js.map