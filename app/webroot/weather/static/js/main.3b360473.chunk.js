(this["webpackJsonpweather-app"]=this["webpackJsonpweather-app"]||[]).push([[0],{33:function(t,e,a){},34:function(t,e,a){},41:function(t,e,a){"use strict";a.r(e);var s=a(0),n=a.n(s),c=a(15),r=a.n(c),o=(a(33),a(8)),i=a(9),l=a(7),h=a(11),j=a(10),d=(a(34),a(43)),u=a(44),b=a(45),m=a(46),O=a(50),p=a(51),x=a(1),f=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(t){var s;Object(o.a)(this,a),(s=e.call(this,t)).toggleEditMode=function(){s.setState((function(t){return{editMode:!t.editMode}}))},s.setSearchInput=function(t){s.setState({searchInput:t.target.value})},s.addLocation=function(){var t="https://nominatim.openstreetmap.org/search?limit=1&format=json&addressdetails=1&country=US",e=s.state.searchInput;if(5===e.length&&parseInt(e)>0)t+="&postalcode="+e;else{if(!(e.length>2))return;t+="&q="+e}console.log(t),fetch(t).then((function(t){return t.json()})).then((function(t){return t.length>0?{name:t[0].address.city||t[0].display_name.split(",")[0],lat:parseFloat(t[0].lat).toFixed(6),lng:parseFloat(t[0].lon).toFixed(6)}:{}})).then((function(t){if(t!=={}){var e="https://api.weather.gov/points/"+t.lat+","+t.lng;console.log(e),fetch(e).then((function(t){return t.json()})).then((function(e){var a={name:t.name,lat:parseFloat(t.lat),lng:parseFloat(t.lng),hfurl:e.properties.forecastHourly,dfurl:e.properties.forecast},n=s.state.locations;n.push(a),s.setState({locations:n,searchInput:""},localStorage.setItem("locations",JSON.stringify(n)))}))}}))},s.deleteLocation=function(t){var e=s.state.locations;-1!==t.target.value&&(e.splice(t.target.value,1),s.setState({locations:e},localStorage.setItem("locations",JSON.stringify(e))))},s.showForecast=function(t){s.props.onTabChange("forecast");var e=s.state.locations[t];s.props.onLocChange(e)},s.setSearchInput=s.setSearchInput.bind(Object(l.a)(s)),s.deleteLocation=s.deleteLocation.bind(Object(l.a)(s)),s.showForecast=s.showForecast.bind(Object(l.a)(s));var n=JSON.parse(localStorage.getItem("locations"))||[];return s.state={searchInput:"",locations:n,editMode:!(n.length>0)},s}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return Object(x.jsxs)(d.a,{className:"pl-1 pr-1",children:[Object(x.jsxs)(u.a,{className:"mt-3 mb-2",children:[Object(x.jsxs)(b.a,{className:"mt-2",children:[Object(x.jsx)("img",{className:"today-logo",src:"./logo.png",alt:"weather-logo"}),Object(x.jsx)("strong",{children:"Weather"})]}),Object(x.jsx)(b.a,{xs:3,sm:2,children:Object(x.jsx)(m.a,{onClick:this.toggleEditMode,children:"+/-"})})]}),Object(x.jsx)("hr",{}),this.state.locations.map((function(e,a){return Object(x.jsxs)(u.a,{className:"row-striped",style:{height:"3rem",lineHeight:"3rem",cursor:"pointer"},children:[Object(x.jsx)(b.a,{xs:2,className:"".concat(t.state.editMode?"":"d-none"),children:Object(x.jsx)(m.a,{variant:"danger",value:a,onClick:t.deleteLocation,children:"X"})}),Object(x.jsx)(b.a,{onClick:function(){return t.showForecast(a)},children:Object(x.jsx)("strong",{children:e.name})})]})})),Object(x.jsxs)(u.a,{children:[Object(x.jsx)("br",{}),Object(x.jsx)("hr",{}),Object(x.jsxs)(O.a,{className:"mt-3 ".concat(this.state.editMode?"":"d-none"),children:[Object(x.jsx)(p.a,{type:"text",placeholder:"ZIP Code or US Address",value:this.state.searchInput,onChange:this.setSearchInput,onKeyPress:function(e){"Enter"===e.key&&t.addLocation()}}),Object(x.jsx)(m.a,{onClick:this.addLocation,children:"+"})]})]})]})}}]),a}(n.a.Component),g=a(49),v=a(48),S=a(47),w=function(t,e){return{temperature:t.temperature<e.temperature?t.temperature:e.temperature}},y=function(t,e){return{temperature:t.temperature>e.temperature?t.temperature:e.temperature}},L=function(t){return new Date(t.startTime).getDate()===(new Date).getDate()},N=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={isLoaded:!1,now:{},hours:[]},s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.loc.hfurl;console.log(e),fetch(e).then((function(t){return t.json()})).then((function(e){var a=e.properties.periods,s=a.filter(L);t.setState({now:{data:a[0],tmin:s.reduce(w).temperature,tmax:s.reduce(y).temperature},hours:a.slice(0,24),isLoaded:!0})}))}},{key:"render",value:function(){var t;return t=this.state.isLoaded?Object(x.jsxs)(d.a,{children:[Object(x.jsx)(u.a,{className:"mt-2",children:Object(x.jsxs)(b.a,{className:"text-center today-box",children:[Object(x.jsx)("img",{className:"today-icon",src:this.state.now.data.icon,alt:this.state.now.data.shortForecast}),Object(x.jsxs)("span",{className:"today-temp",children:["\xa0",this.state.now.data.temperature,"\xb0"]})]})}),Object(x.jsxs)(u.a,{className:"mt-2 mb-2 text-center",children:[Object(x.jsx)(b.a,{xs:12,sm:4,children:Object(x.jsxs)("small",{children:["H: ",this.state.now.tmax,"\xb0 \xa0 L: ",this.state.now.tmin,"\xb0"]})}),Object(x.jsx)(b.a,{xs:12,sm:4,children:this.state.now.data.shortForecast}),Object(x.jsx)(b.a,{xs:12,sm:4,children:Object(x.jsxs)("small",{className:"text-muted",children:["Wind\xa0",this.state.now.data.windSpeed," ",this.state.now.data.windDirection]})})]})]}):Object(x.jsx)(S.a,{animation:"border",role:"status"}),Object(x.jsxs)(d.a,{fluid:!0,children:[t,Object(x.jsx)(u.a,{className:"mt-4",children:Object(x.jsx)(b.a,{className:"mt-4",children:"Next 24 Hour Forecast"})}),Object(x.jsx)("hr",{}),Object(x.jsx)(u.a,{className:"mt-2",children:this.state.hours.map((function(t,e){return Object(x.jsxs)(b.a,{xs:3,sm:2,lg:1,children:[Object(x.jsx)(u.a,{className:"mt-4",children:Object(x.jsx)("small",{className:"text-muted",children:new Date(t.startTime).toLocaleString("en-US",{hour:"numeric",hour12:!0})})}),Object(x.jsx)(u.a,{children:Object(x.jsx)("span",{children:Object(x.jsxs)("strong",{children:[t.temperature,"\xb0"]})})})]},e)}))})]})}}]),a}(n.a.Component),C=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).state={isLoaded:!1,slots:[]},s}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var t=this,e=this.props.loc.dfurl;console.log(e),fetch(e).then((function(t){return t.json()})).then((function(e){var a=e.properties.periods;t.setState({slots:a.slice(0,14),isLoaded:!0})}))}},{key:"render",value:function(){var t;return this.state.isLoaded||(t=Object(x.jsx)(S.a,{animation:"border",role:"status"})),Object(x.jsxs)(d.a,{className:"pl-1 pr-1",children:[t,this.state.slots.map((function(t,e){return Object(x.jsxs)(u.a,{className:"pt-2 pb-2 row-striped",children:[Object(x.jsx)(b.a,{xs:4,sm:3,md:2,children:Object(x.jsx)("img",{src:t.icon,alt:t.shortForecast,height:"60px"})}),Object(x.jsxs)(b.a,{children:[Object(x.jsx)("strong",{children:new Date(t.startTime).toLocaleString("en-US",{day:"numeric",month:"numeric"})}),Object(x.jsx)("br",{}),Object(x.jsx)("small",{children:t.name})]}),Object(x.jsxs)(b.a,{xs:12,sm:6,children:[Object(x.jsxs)(u.a,{children:[Object(x.jsxs)(b.a,{xs:4,children:[t.temperature,"\xb0",t.temperatureUnit]}),Object(x.jsx)(b.a,{children:Object(x.jsxs)("small",{children:[t.windSpeed," ",t.windDirection]})})]}),Object(x.jsx)(u.a,{children:Object(x.jsx)("small",{children:Object(x.jsx)("small",{children:t.detailedForecast})})})]})]},e)}))]})}}]),a}(n.a.Component),k=function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).showLocations=function(){s.props.onTabChange("home")},s.showLocations=s.showLocations.bind(Object(l.a)(s)),s.state={key:"today",loc:s.props.loc},s}return Object(i.a)(a,[{key:"render",value:function(){var t=this;return Object(x.jsxs)(d.a,{children:[Object(x.jsxs)(u.a,{className:"mt-3 mb-3",children:[Object(x.jsx)(b.a,{children:Object(x.jsx)("h1",{children:this.state.loc.name})}),Object(x.jsx)(b.a,{xs:2,className:"text-right",children:Object(x.jsx)(m.a,{variant:"secondary",onClick:this.showLocations,children:"<"})})]}),Object(x.jsx)(u.a,{children:Object(x.jsxs)(g.a,{id:"weather-forecast-tabs",activeKey:this.state.key,mountOnEnter:!0,onSelect:function(e){return t.setState({key:e})},children:[Object(x.jsx)(v.a,{eventKey:"today",title:"Today's Weather",children:Object(x.jsx)(N,{loc:this.state.loc})}),Object(x.jsx)(v.a,{eventKey:"weekly",title:"Next 7 Days",children:Object(x.jsx)(C,{loc:this.state.loc})})]})})]})}}]),a}(n.a.Component),F=(a(40),function(t){Object(h.a)(a,t);var e=Object(j.a)(a);function a(t){var s;return Object(o.a)(this,a),(s=e.call(this,t)).handleSetLoc=function(t){s.setState({loc:t})},s.handleSetTab=function(t){s.setState({tab:t})},s.handleSetLoc=s.handleSetLoc.bind(Object(l.a)(s)),s.handleSetTab=s.handleSetTab.bind(Object(l.a)(s)),s.state={tab:"home",loc:{}},s}return Object(i.a)(a,[{key:"render",value:function(){return Object(x.jsxs)(d.a,{fluid:!0,children:["forecast"===this.state.tab&&Object(x.jsx)(k,{loc:this.state.loc,onTabChange:this.handleSetTab}),"forecast"!==this.state.tab&&Object(x.jsx)(f,{onLocChange:this.handleSetLoc,onTabChange:this.handleSetTab})]})}}]),a}(n.a.Component)),I=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,52)).then((function(e){var a=e.getCLS,s=e.getFID,n=e.getFCP,c=e.getLCP,r=e.getTTFB;a(t),s(t),n(t),c(t),r(t)}))};r.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(F,{})}),document.getElementById("root")),I()}},[[41,1,2]]]);
//# sourceMappingURL=main.3b360473.chunk.js.map