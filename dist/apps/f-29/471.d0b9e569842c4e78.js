(self.webpackChunkf29=self.webpackChunkf29||[]).push([[471,529],{9751:(N,_,n)=>{n.d(_,{y:()=>U});var u=n(930),s=n(727),v=n(8822),p=n(9635),y=n(2416),R=n(576),P=n(2806);let U=(()=>{class w{constructor(I){I&&(this._subscribe=I)}lift(I){const j=new w;return j.source=this,j.operator=I,j}subscribe(I,j,J){const H=function g(w){return w&&w instanceof u.Lv||function m(w){return w&&(0,R.m)(w.next)&&(0,R.m)(w.error)&&(0,R.m)(w.complete)}(w)&&(0,s.Nn)(w)}(I)?I:new u.Hp(I,j,J);return(0,P.x)(()=>{const{operator:B,source:Y}=this;H.add(B?B.call(H,Y):Y?this._subscribe(H):this._trySubscribe(H))}),H}_trySubscribe(I){try{return this._subscribe(I)}catch(j){I.error(j)}}forEach(I,j){return new(j=M(j))((J,H)=>{const B=new u.Hp({next:Y=>{try{I(Y)}catch(Z){H(Z),B.unsubscribe()}},error:H,complete:J});this.subscribe(B)})}_subscribe(I){var j;return null===(j=this.source)||void 0===j?void 0:j.subscribe(I)}[v.L](){return this}pipe(...I){return(0,p.U)(I)(this)}toPromise(I){return new(I=M(I))((j,J)=>{let H;this.subscribe(B=>H=B,B=>J(B),()=>j(H))})}}return w.create=K=>new w(K),w})();function M(w){var K;return null!==(K=w??y.v.Promise)&&void 0!==K?K:Promise}},930:(N,_,n)=>{n.d(_,{Hp:()=>J,Lv:()=>w});var u=n(576),s=n(727),v=n(2416),p=n(7849),y=n(5032);const R=M("C",void 0,void 0);function M(b,h,D){return{kind:b,value:h,error:D}}var m=n(3410),g=n(2806);class w extends s.w0{constructor(h){super(),this.isStopped=!1,h?(this.destination=h,(0,s.Nn)(h)&&h.add(this)):this.destination=Z}static create(h,D,W){return new J(h,D,W)}next(h){this.isStopped?Y(function U(b){return M("N",b,void 0)}(h),this):this._next(h)}error(h){this.isStopped?Y(function P(b){return M("E",void 0,b)}(h),this):(this.isStopped=!0,this._error(h))}complete(){this.isStopped?Y(R,this):(this.isStopped=!0,this._complete())}unsubscribe(){this.closed||(this.isStopped=!0,super.unsubscribe(),this.destination=null)}_next(h){this.destination.next(h)}_error(h){try{this.destination.error(h)}finally{this.unsubscribe()}}_complete(){try{this.destination.complete()}finally{this.unsubscribe()}}}const K=Function.prototype.bind;function I(b,h){return K.call(b,h)}class j{constructor(h){this.partialObserver=h}next(h){const{partialObserver:D}=this;if(D.next)try{D.next(h)}catch(W){H(W)}}error(h){const{partialObserver:D}=this;if(D.error)try{D.error(h)}catch(W){H(W)}else H(h)}complete(){const{partialObserver:h}=this;if(h.complete)try{h.complete()}catch(D){H(D)}}}class J extends w{constructor(h,D,W){let T;if(super(),(0,u.m)(h)||!h)T={next:h??void 0,error:D??void 0,complete:W??void 0};else{let O;this&&v.v.useDeprecatedNextContext?(O=Object.create(h),O.unsubscribe=()=>this.unsubscribe(),T={next:h.next&&I(h.next,O),error:h.error&&I(h.error,O),complete:h.complete&&I(h.complete,O)}):T=h}this.destination=new j(T)}}function H(b){v.v.useDeprecatedSynchronousErrorHandling?(0,g.O)(b):(0,p.h)(b)}function Y(b,h){const{onStoppedNotification:D}=v.v;D&&m.z.setTimeout(()=>D(b,h))}const Z={closed:!0,next:y.Z,error:function B(b){throw b},complete:y.Z}},727:(N,_,n)=>{n.d(_,{Lc:()=>R,w0:()=>y,Nn:()=>P});var u=n(576);const v=(0,n(3888).d)(M=>function(g){M(this),this.message=g?`${g.length} errors occurred during unsubscription:\n${g.map((w,K)=>`${K+1}) ${w.toString()}`).join("\n  ")}`:"",this.name="UnsubscriptionError",this.errors=g});var p=n(8737);class y{constructor(m){this.initialTeardown=m,this.closed=!1,this._parentage=null,this._finalizers=null}unsubscribe(){let m;if(!this.closed){this.closed=!0;const{_parentage:g}=this;if(g)if(this._parentage=null,Array.isArray(g))for(const I of g)I.remove(this);else g.remove(this);const{initialTeardown:w}=this;if((0,u.m)(w))try{w()}catch(I){m=I instanceof v?I.errors:[I]}const{_finalizers:K}=this;if(K){this._finalizers=null;for(const I of K)try{U(I)}catch(j){m=m??[],j instanceof v?m=[...m,...j.errors]:m.push(j)}}if(m)throw new v(m)}}add(m){var g;if(m&&m!==this)if(this.closed)U(m);else{if(m instanceof y){if(m.closed||m._hasParent(this))return;m._addParent(this)}(this._finalizers=null!==(g=this._finalizers)&&void 0!==g?g:[]).push(m)}}_hasParent(m){const{_parentage:g}=this;return g===m||Array.isArray(g)&&g.includes(m)}_addParent(m){const{_parentage:g}=this;this._parentage=Array.isArray(g)?(g.push(m),g):g?[g,m]:m}_removeParent(m){const{_parentage:g}=this;g===m?this._parentage=null:Array.isArray(g)&&(0,p.P)(g,m)}remove(m){const{_finalizers:g}=this;g&&(0,p.P)(g,m),m instanceof y&&m._removeParent(this)}}y.EMPTY=(()=>{const M=new y;return M.closed=!0,M})();const R=y.EMPTY;function P(M){return M instanceof y||M&&"closed"in M&&(0,u.m)(M.remove)&&(0,u.m)(M.add)&&(0,u.m)(M.unsubscribe)}function U(M){(0,u.m)(M)?M():M.unsubscribe()}},2416:(N,_,n)=>{n.d(_,{v:()=>u});const u={onUnhandledError:null,onStoppedNotification:null,Promise:void 0,useDeprecatedSynchronousErrorHandling:!1,useDeprecatedNextContext:!1}},2076:(N,_,n)=>{n.d(_,{D:()=>W});var u=n(8421),s=n(9672),v=n(4482),p=n(5403);function y(T,O=0){return(0,v.e)((S,r)=>{S.subscribe((0,p.x)(r,i=>(0,s.f)(r,T,()=>r.next(i),O),()=>(0,s.f)(r,T,()=>r.complete(),O),i=>(0,s.f)(r,T,()=>r.error(i),O)))})}function R(T,O=0){return(0,v.e)((S,r)=>{r.add(T.schedule(()=>S.subscribe(r),O))})}var M=n(9751),g=n(2202),w=n(576);function I(T,O){if(!T)throw new Error("Iterable cannot be null");return new M.y(S=>{(0,s.f)(S,O,()=>{const r=T[Symbol.asyncIterator]();(0,s.f)(S,O,()=>{r.next().then(i=>{i.done?S.complete():S.next(i.value)})},0,!0)})})}var j=n(3670),J=n(8239),H=n(1144),B=n(6495),Y=n(2206),Z=n(4532),b=n(3260);function W(T,O){return O?function D(T,O){if(null!=T){if((0,j.c)(T))return function P(T,O){return(0,u.Xf)(T).pipe(R(O),y(O))}(T,O);if((0,H.z)(T))return function m(T,O){return new M.y(S=>{let r=0;return O.schedule(function(){r===T.length?S.complete():(S.next(T[r++]),S.closed||this.schedule())})})}(T,O);if((0,J.t)(T))return function U(T,O){return(0,u.Xf)(T).pipe(R(O),y(O))}(T,O);if((0,Y.D)(T))return I(T,O);if((0,B.T)(T))return function K(T,O){return new M.y(S=>{let r;return(0,s.f)(S,O,()=>{r=T[g.h](),(0,s.f)(S,O,()=>{let i,a;try{({value:i,done:a}=r.next())}catch(c){return void S.error(c)}a?S.complete():S.next(i)},0,!0)}),()=>(0,w.m)(r?.return)&&r.return()})}(T,O);if((0,b.L)(T))return function h(T,O){return I((0,b.Q)(T),O)}(T,O)}throw(0,Z.z)(T)}(T,O):(0,u.Xf)(T)}},8421:(N,_,n)=>{n.d(_,{Xf:()=>K});var u=n(655),s=n(1144),v=n(8239),p=n(9751),y=n(3670),R=n(2206),P=n(4532),U=n(6495),M=n(3260),m=n(576),g=n(7849),w=n(8822);function K(b){if(b instanceof p.y)return b;if(null!=b){if((0,y.c)(b))return function I(b){return new p.y(h=>{const D=b[w.L]();if((0,m.m)(D.subscribe))return D.subscribe(h);throw new TypeError("Provided object does not correctly implement Symbol.observable")})}(b);if((0,s.z)(b))return function j(b){return new p.y(h=>{for(let D=0;D<b.length&&!h.closed;D++)h.next(b[D]);h.complete()})}(b);if((0,v.t)(b))return function J(b){return new p.y(h=>{b.then(D=>{h.closed||(h.next(D),h.complete())},D=>h.error(D)).then(null,g.h)})}(b);if((0,R.D)(b))return B(b);if((0,U.T)(b))return function H(b){return new p.y(h=>{for(const D of b)if(h.next(D),h.closed)return;h.complete()})}(b);if((0,M.L)(b))return function Y(b){return B((0,M.Q)(b))}(b)}throw(0,P.z)(b)}function B(b){return new p.y(h=>{(function Z(b,h){var D,W,T,O;return(0,u.mG)(this,void 0,void 0,function*(){try{for(D=(0,u.KL)(b);!(W=yield D.next()).done;)if(h.next(W.value),h.closed)return}catch(S){T={error:S}}finally{try{W&&!W.done&&(O=D.return)&&(yield O.call(D))}finally{if(T)throw T.error}}h.complete()})})(b,h).catch(D=>h.error(D))})}},9646:(N,_,n)=>{n.d(_,{of:()=>v});var u=n(7669),s=n(2076);function v(...p){const y=(0,u.yG)(p);return(0,s.D)(p,y)}},5403:(N,_,n)=>{n.d(_,{x:()=>s});var u=n(930);function s(p,y,R,P,U){return new v(p,y,R,P,U)}class v extends u.Lv{constructor(y,R,P,U,M,m){super(y),this.onFinalize=M,this.shouldUnsubscribe=m,this._next=R?function(g){try{R(g)}catch(w){y.error(w)}}:super._next,this._error=U?function(g){try{U(g)}catch(w){y.error(w)}finally{this.unsubscribe()}}:super._error,this._complete=P?function(){try{P()}catch(g){y.error(g)}finally{this.unsubscribe()}}:super._complete}unsubscribe(){var y;if(!this.shouldUnsubscribe||this.shouldUnsubscribe()){const{closed:R}=this;super.unsubscribe(),!R&&(null===(y=this.onFinalize)||void 0===y||y.call(this))}}}},4351:(N,_,n)=>{n.d(_,{b:()=>v});var u=n(5577),s=n(576);function v(p,y){return(0,s.m)(y)?(0,u.z)(p,y,1):(0,u.z)(p,1)}},9300:(N,_,n)=>{n.d(_,{h:()=>v});var u=n(4482),s=n(5403);function v(p,y){return(0,u.e)((R,P)=>{let U=0;R.subscribe((0,s.x)(P,M=>p.call(y,M,U++)&&P.next(M)))})}},4004:(N,_,n)=>{n.d(_,{U:()=>v});var u=n(4482),s=n(5403);function v(p,y){return(0,u.e)((R,P)=>{let U=0;R.subscribe((0,s.x)(P,M=>{P.next(p.call(y,M,U++))}))})}},5577:(N,_,n)=>{n.d(_,{z:()=>U});var u=n(4004),s=n(8421),v=n(4482),p=n(9672),y=n(5403),P=n(576);function U(M,m,g=1/0){return(0,P.m)(m)?U((w,K)=>(0,u.U)((I,j)=>m(w,I,K,j))((0,s.Xf)(M(w,K))),g):("number"==typeof m&&(g=m),(0,v.e)((w,K)=>function R(M,m,g,w,K,I,j,J){const H=[];let B=0,Y=0,Z=!1;const b=()=>{Z&&!H.length&&!B&&m.complete()},h=W=>B<w?D(W):H.push(W),D=W=>{I&&m.next(W),B++;let T=!1;(0,s.Xf)(g(W,Y++)).subscribe((0,y.x)(m,O=>{K?.(O),I?h(O):m.next(O)},()=>{T=!0},void 0,()=>{if(T)try{for(B--;H.length&&B<w;){const O=H.shift();j?(0,p.f)(m,j,()=>D(O)):D(O)}b()}catch(O){m.error(O)}}))};return M.subscribe((0,y.x)(m,h,()=>{Z=!0,b()})),()=>{J?.()}}(w,K,M,g)))}},3410:(N,_,n)=>{n.d(_,{z:()=>u});const u={setTimeout(s,v,...p){const{delegate:y}=u;return y?.setTimeout?y.setTimeout(s,v,...p):setTimeout(s,v,...p)},clearTimeout(s){const{delegate:v}=u;return(v?.clearTimeout||clearTimeout)(s)},delegate:void 0}},2202:(N,_,n)=>{n.d(_,{h:()=>s});const s=function u(){return"function"==typeof Symbol&&Symbol.iterator?Symbol.iterator:"@@iterator"}()},8822:(N,_,n)=>{n.d(_,{L:()=>u});const u="function"==typeof Symbol&&Symbol.observable||"@@observable"},7669:(N,_,n)=>{n.d(_,{_6:()=>R,jO:()=>p,yG:()=>y});var u=n(576);function v(P){return P[P.length-1]}function p(P){return(0,u.m)(v(P))?P.pop():void 0}function y(P){return function s(P){return P&&(0,u.m)(P.schedule)}(v(P))?P.pop():void 0}function R(P,U){return"number"==typeof v(P)?P.pop():U}},8737:(N,_,n)=>{function u(s,v){if(s){const p=s.indexOf(v);0<=p&&s.splice(p,1)}}n.d(_,{P:()=>u})},3888:(N,_,n)=>{function u(s){const p=s(y=>{Error.call(y),y.stack=(new Error).stack});return p.prototype=Object.create(Error.prototype),p.prototype.constructor=p,p}n.d(_,{d:()=>u})},2806:(N,_,n)=>{n.d(_,{O:()=>p,x:()=>v});var u=n(2416);let s=null;function v(y){if(u.v.useDeprecatedSynchronousErrorHandling){const R=!s;if(R&&(s={errorThrown:!1,error:null}),y(),R){const{errorThrown:P,error:U}=s;if(s=null,P)throw U}}else y()}function p(y){u.v.useDeprecatedSynchronousErrorHandling&&s&&(s.errorThrown=!0,s.error=y)}},9672:(N,_,n)=>{function u(s,v,p,y=0,R=!1){const P=v.schedule(function(){p(),R?s.add(this.schedule(null,y)):this.unsubscribe()},y);if(s.add(P),!R)return P}n.d(_,{f:()=>u})},4671:(N,_,n)=>{function u(s){return s}n.d(_,{y:()=>u})},1144:(N,_,n)=>{n.d(_,{z:()=>u});const u=s=>s&&"number"==typeof s.length&&"function"!=typeof s},2206:(N,_,n)=>{n.d(_,{D:()=>s});var u=n(576);function s(v){return Symbol.asyncIterator&&(0,u.m)(v?.[Symbol.asyncIterator])}},576:(N,_,n)=>{function u(s){return"function"==typeof s}n.d(_,{m:()=>u})},3670:(N,_,n)=>{n.d(_,{c:()=>v});var u=n(8822),s=n(576);function v(p){return(0,s.m)(p[u.L])}},6495:(N,_,n)=>{n.d(_,{T:()=>v});var u=n(2202),s=n(576);function v(p){return(0,s.m)(p?.[u.h])}},8239:(N,_,n)=>{n.d(_,{t:()=>s});var u=n(576);function s(v){return(0,u.m)(v?.then)}},3260:(N,_,n)=>{n.d(_,{L:()=>p,Q:()=>v});var u=n(655),s=n(576);function v(y){return(0,u.FC)(this,arguments,function*(){const P=y.getReader();try{for(;;){const{value:U,done:M}=yield(0,u.qq)(P.read());if(M)return yield(0,u.qq)(void 0);yield yield(0,u.qq)(U)}}finally{P.releaseLock()}})}function p(y){return(0,s.m)(y?.getReader)}},4482:(N,_,n)=>{n.d(_,{A:()=>s,e:()=>v});var u=n(576);function s(p){return(0,u.m)(p?.lift)}function v(p){return y=>{if(s(y))return y.lift(function(R){try{return p(R,this)}catch(P){this.error(P)}});throw new TypeError("Unable to lift unknown Observable type")}}},5032:(N,_,n)=>{function u(){}n.d(_,{Z:()=>u})},9635:(N,_,n)=>{n.d(_,{U:()=>v,z:()=>s});var u=n(4671);function s(...p){return v(p)}function v(p){return 0===p.length?u.y:1===p.length?p[0]:function(R){return p.reduce((P,U)=>U(P),R)}}},7849:(N,_,n)=>{n.d(_,{h:()=>v});var u=n(2416),s=n(3410);function v(p){s.z.setTimeout(()=>{const{onUnhandledError:y}=u.v;if(!y)throw p;y(p)})}},4532:(N,_,n)=>{function u(s){return new TypeError(`You provided ${null!==s&&"object"==typeof s?"an invalid object":`'${s}'`} where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.`)}n.d(_,{z:()=>u})},655:(N,_,n)=>{function U(r,i,a,c){return new(a||(a=Promise))(function(f,x){function z(Q){try{A(c.next(Q))}catch(ne){x(ne)}}function te(Q){try{A(c.throw(Q))}catch(ne){x(ne)}}function A(Q){Q.done?f(Q.value):function E(f){return f instanceof a?f:new a(function(x){x(f)})}(Q.value).then(z,te)}A((c=c.apply(r,i||[])).next())})}function H(r){return this instanceof H?(this.v=r,this):new H(r)}function B(r,i,a){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var E,c=a.apply(r,i||[]),f=[];return E={},x("next"),x("throw"),x("return"),E[Symbol.asyncIterator]=function(){return this},E;function x(G){c[G]&&(E[G]=function(re){return new Promise(function(ae,le){f.push([G,re,ae,le])>1||z(G,re)})})}function z(G,re){try{!function te(G){G.value instanceof H?Promise.resolve(G.value.v).then(A,Q):ne(f[0][2],G)}(c[G](re))}catch(ae){ne(f[0][3],ae)}}function A(G){z("next",G)}function Q(G){z("throw",G)}function ne(G,re){G(re),f.shift(),f.length&&z(f[0][0],f[0][1])}}function Z(r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var a,i=r[Symbol.asyncIterator];return i?i.call(r):(r=function w(r){var i="function"==typeof Symbol&&Symbol.iterator,a=i&&r[i],c=0;if(a)return a.call(r);if(r&&"number"==typeof r.length)return{next:function(){return r&&c>=r.length&&(r=void 0),{value:r&&r[c++],done:!r}}};throw new TypeError(i?"Object is not iterable.":"Symbol.iterator is not defined.")}(r),a={},c("next"),c("throw"),c("return"),a[Symbol.asyncIterator]=function(){return this},a);function c(f){a[f]=r[f]&&function(x){return new Promise(function(z,te){!function E(f,x,z,te){Promise.resolve(te).then(function(A){f({value:A,done:z})},x)}(z,te,(x=r[f](x)).done,x.value)})}}}n.d(_,{FC:()=>B,KL:()=>Z,mG:()=>U,qq:()=>H})},529:(N,_,n)=>{n.r(_),n.d(_,{HTTP_INTERCEPTORS:()=>z,HttpBackend:()=>M,HttpClient:()=>f,HttpClientJsonpModule:()=>we,HttpClientModule:()=>Te,HttpClientXsrfModule:()=>_e,HttpContext:()=>Z,HttpContextToken:()=>Y,HttpErrorResponse:()=>c,HttpEventType:()=>S,HttpHandler:()=>U,HttpHeaderResponse:()=>i,HttpHeaders:()=>m,HttpParams:()=>B,HttpRequest:()=>O,HttpResponse:()=>a,HttpResponseBase:()=>r,HttpUrlEncodingCodec:()=>w,HttpXhrBackend:()=>ce,HttpXsrfTokenExtractor:()=>he,JsonpClientBackend:()=>ue,JsonpInterceptor:()=>me,XhrFactory:()=>Me,\u0275HttpInterceptingHandler:()=>Ee});var u=n(8736),s=n(3185),v=n(9646),p=n(9751),y=n(4351),R=n(9300),P=n(4004);class U{}class M{}class m{constructor(t){this.normalizedNames=new Map,this.lazyUpdate=null,t?this.lazyInit="string"==typeof t?()=>{this.headers=new Map,t.split("\n").forEach(e=>{const d=e.indexOf(":");if(d>0){const l=e.slice(0,d),C=l.toLowerCase(),F=e.slice(d+1).trim();this.maybeSetNormalizedName(l,C),this.headers.has(C)?this.headers.get(C).push(F):this.headers.set(C,[F])}})}:()=>{this.headers=new Map,Object.keys(t).forEach(e=>{let d=t[e];const l=e.toLowerCase();"string"==typeof d&&(d=[d]),d.length>0&&(this.headers.set(l,d),this.maybeSetNormalizedName(e,l))})}:this.headers=new Map}has(t){return this.init(),this.headers.has(t.toLowerCase())}get(t){this.init();const e=this.headers.get(t.toLowerCase());return e&&e.length>0?e[0]:null}keys(){return this.init(),Array.from(this.normalizedNames.values())}getAll(t){return this.init(),this.headers.get(t.toLowerCase())||null}append(t,e){return this.clone({name:t,value:e,op:"a"})}set(t,e){return this.clone({name:t,value:e,op:"s"})}delete(t,e){return this.clone({name:t,value:e,op:"d"})}maybeSetNormalizedName(t,e){this.normalizedNames.has(e)||this.normalizedNames.set(e,t)}init(){this.lazyInit&&(this.lazyInit instanceof m?this.copyFrom(this.lazyInit):this.lazyInit(),this.lazyInit=null,this.lazyUpdate&&(this.lazyUpdate.forEach(t=>this.applyUpdate(t)),this.lazyUpdate=null))}copyFrom(t){t.init(),Array.from(t.headers.keys()).forEach(e=>{this.headers.set(e,t.headers.get(e)),this.normalizedNames.set(e,t.normalizedNames.get(e))})}clone(t){const e=new m;return e.lazyInit=this.lazyInit&&this.lazyInit instanceof m?this.lazyInit:this,e.lazyUpdate=(this.lazyUpdate||[]).concat([t]),e}applyUpdate(t){const e=t.name.toLowerCase();switch(t.op){case"a":case"s":let d=t.value;if("string"==typeof d&&(d=[d]),0===d.length)return;this.maybeSetNormalizedName(t.name,e);const l=("a"===t.op?this.headers.get(e):void 0)||[];l.push(...d),this.headers.set(e,l);break;case"d":const C=t.value;if(C){let F=this.headers.get(e);if(!F)return;F=F.filter(X=>-1===C.indexOf(X)),0===F.length?(this.headers.delete(e),this.normalizedNames.delete(e)):this.headers.set(e,F)}else this.headers.delete(e),this.normalizedNames.delete(e)}}forEach(t){this.init(),Array.from(this.normalizedNames.keys()).forEach(e=>t(this.normalizedNames.get(e),this.headers.get(e)))}}class w{encodeKey(t){return J(t)}encodeValue(t){return J(t)}decodeKey(t){return decodeURIComponent(t)}decodeValue(t){return decodeURIComponent(t)}}const I=/%(\d[a-f0-9])/gi,j={40:"@","3A":":",24:"$","2C":",","3B":";","3D":"=","3F":"?","2F":"/"};function J(o){return encodeURIComponent(o).replace(I,(t,e)=>j[e]??t)}function H(o){return`${o}`}class B{constructor(t={}){if(this.updates=null,this.cloneFrom=null,this.encoder=t.encoder||new w,t.fromString){if(t.fromObject)throw new Error("Cannot specify both fromString and fromObject.");this.map=function K(o,t){const e=new Map;return o.length>0&&o.replace(/^\?/,"").split("&").forEach(l=>{const C=l.indexOf("="),[F,X]=-1==C?[t.decodeKey(l),""]:[t.decodeKey(l.slice(0,C)),t.decodeValue(l.slice(C+1))],L=e.get(F)||[];L.push(X),e.set(F,L)}),e}(t.fromString,this.encoder)}else t.fromObject?(this.map=new Map,Object.keys(t.fromObject).forEach(e=>{const d=t.fromObject[e],l=Array.isArray(d)?d.map(H):[H(d)];this.map.set(e,l)})):this.map=null}has(t){return this.init(),this.map.has(t)}get(t){this.init();const e=this.map.get(t);return e?e[0]:null}getAll(t){return this.init(),this.map.get(t)||null}keys(){return this.init(),Array.from(this.map.keys())}append(t,e){return this.clone({param:t,value:e,op:"a"})}appendAll(t){const e=[];return Object.keys(t).forEach(d=>{const l=t[d];Array.isArray(l)?l.forEach(C=>{e.push({param:d,value:C,op:"a"})}):e.push({param:d,value:l,op:"a"})}),this.clone(e)}set(t,e){return this.clone({param:t,value:e,op:"s"})}delete(t,e){return this.clone({param:t,value:e,op:"d"})}toString(){return this.init(),this.keys().map(t=>{const e=this.encoder.encodeKey(t);return this.map.get(t).map(d=>e+"="+this.encoder.encodeValue(d)).join("&")}).filter(t=>""!==t).join("&")}clone(t){const e=new B({encoder:this.encoder});return e.cloneFrom=this.cloneFrom||this,e.updates=(this.updates||[]).concat(t),e}init(){null===this.map&&(this.map=new Map),null!==this.cloneFrom&&(this.cloneFrom.init(),this.cloneFrom.keys().forEach(t=>this.map.set(t,this.cloneFrom.map.get(t))),this.updates.forEach(t=>{switch(t.op){case"a":case"s":const e=("a"===t.op?this.map.get(t.param):void 0)||[];e.push(H(t.value)),this.map.set(t.param,e);break;case"d":if(void 0===t.value){this.map.delete(t.param);break}{let d=this.map.get(t.param)||[];const l=d.indexOf(H(t.value));-1!==l&&d.splice(l,1),d.length>0?this.map.set(t.param,d):this.map.delete(t.param)}}}),this.cloneFrom=this.updates=null)}}class Y{constructor(t){this.defaultValue=t}}class Z{constructor(){this.map=new Map}set(t,e){return this.map.set(t,e),this}get(t){return this.map.has(t)||this.map.set(t,t.defaultValue()),this.map.get(t)}delete(t){return this.map.delete(t),this}has(t){return this.map.has(t)}keys(){return this.map.keys()}}function h(o){return typeof ArrayBuffer<"u"&&o instanceof ArrayBuffer}function D(o){return typeof Blob<"u"&&o instanceof Blob}function W(o){return typeof FormData<"u"&&o instanceof FormData}class O{constructor(t,e,d,l){let C;if(this.url=e,this.body=null,this.reportProgress=!1,this.withCredentials=!1,this.responseType="json",this.method=t.toUpperCase(),function b(o){switch(o){case"DELETE":case"GET":case"HEAD":case"OPTIONS":case"JSONP":return!1;default:return!0}}(this.method)||l?(this.body=void 0!==d?d:null,C=l):C=d,C&&(this.reportProgress=!!C.reportProgress,this.withCredentials=!!C.withCredentials,C.responseType&&(this.responseType=C.responseType),C.headers&&(this.headers=C.headers),C.context&&(this.context=C.context),C.params&&(this.params=C.params)),this.headers||(this.headers=new m),this.context||(this.context=new Z),this.params){const F=this.params.toString();if(0===F.length)this.urlWithParams=e;else{const X=e.indexOf("?");this.urlWithParams=e+(-1===X?"?":X<e.length-1?"&":"")+F}}else this.params=new B,this.urlWithParams=e}serializeBody(){return null===this.body?null:h(this.body)||D(this.body)||W(this.body)||function T(o){return typeof URLSearchParams<"u"&&o instanceof URLSearchParams}(this.body)||"string"==typeof this.body?this.body:this.body instanceof B?this.body.toString():"object"==typeof this.body||"boolean"==typeof this.body||Array.isArray(this.body)?JSON.stringify(this.body):this.body.toString()}detectContentTypeHeader(){return null===this.body||W(this.body)?null:D(this.body)?this.body.type||null:h(this.body)?null:"string"==typeof this.body?"text/plain":this.body instanceof B?"application/x-www-form-urlencoded;charset=UTF-8":"object"==typeof this.body||"number"==typeof this.body||"boolean"==typeof this.body?"application/json":null}clone(t={}){const e=t.method||this.method,d=t.url||this.url,l=t.responseType||this.responseType,C=void 0!==t.body?t.body:this.body,F=void 0!==t.withCredentials?t.withCredentials:this.withCredentials,X=void 0!==t.reportProgress?t.reportProgress:this.reportProgress;let L=t.headers||this.headers,V=t.params||this.params;const se=t.context??this.context;return void 0!==t.setHeaders&&(L=Object.keys(t.setHeaders).reduce((oe,ee)=>oe.set(ee,t.setHeaders[ee]),L)),t.setParams&&(V=Object.keys(t.setParams).reduce((oe,ee)=>oe.set(ee,t.setParams[ee]),V)),new O(e,d,C,{params:V,headers:L,context:se,reportProgress:X,responseType:l,withCredentials:F})}}var S=(()=>((S=S||{})[S.Sent=0]="Sent",S[S.UploadProgress=1]="UploadProgress",S[S.ResponseHeader=2]="ResponseHeader",S[S.DownloadProgress=3]="DownloadProgress",S[S.Response=4]="Response",S[S.User=5]="User",S))();class r{constructor(t,e=200,d="OK"){this.headers=t.headers||new m,this.status=void 0!==t.status?t.status:e,this.statusText=t.statusText||d,this.url=t.url||null,this.ok=this.status>=200&&this.status<300}}class i extends r{constructor(t={}){super(t),this.type=S.ResponseHeader}clone(t={}){return new i({headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class a extends r{constructor(t={}){super(t),this.type=S.Response,this.body=void 0!==t.body?t.body:null}clone(t={}){return new a({body:void 0!==t.body?t.body:this.body,headers:t.headers||this.headers,status:void 0!==t.status?t.status:this.status,statusText:t.statusText||this.statusText,url:t.url||this.url||void 0})}}class c extends r{constructor(t){super(t,0,"Unknown Error"),this.name="HttpErrorResponse",this.ok=!1,this.message=this.status>=200&&this.status<300?`Http failure during parsing for ${t.url||"(unknown url)"}`:`Http failure response for ${t.url||"(unknown url)"}: ${t.status} ${t.statusText}`,this.error=t.error||null}}function E(o,t){return{body:t,headers:o.headers,context:o.context,observe:o.observe,params:o.params,reportProgress:o.reportProgress,responseType:o.responseType,withCredentials:o.withCredentials}}let f=(()=>{class o{constructor(e){this.handler=e}request(e,d,l={}){let C;if(e instanceof O)C=e;else{let L,V;L=l.headers instanceof m?l.headers:new m(l.headers),l.params&&(V=l.params instanceof B?l.params:new B({fromObject:l.params})),C=new O(e,d,void 0!==l.body?l.body:null,{headers:L,context:l.context,params:V,reportProgress:l.reportProgress,responseType:l.responseType||"json",withCredentials:l.withCredentials})}const F=(0,v.of)(C).pipe((0,y.b)(L=>this.handler.handle(L)));if(e instanceof O||"events"===l.observe)return F;const X=F.pipe((0,R.h)(L=>L instanceof a));switch(l.observe||"body"){case"body":switch(C.responseType){case"arraybuffer":return X.pipe((0,P.U)(L=>{if(null!==L.body&&!(L.body instanceof ArrayBuffer))throw new Error("Response is not an ArrayBuffer.");return L.body}));case"blob":return X.pipe((0,P.U)(L=>{if(null!==L.body&&!(L.body instanceof Blob))throw new Error("Response is not a Blob.");return L.body}));case"text":return X.pipe((0,P.U)(L=>{if(null!==L.body&&"string"!=typeof L.body)throw new Error("Response is not a string.");return L.body}));default:return X.pipe((0,P.U)(L=>L.body))}case"response":return X;default:throw new Error(`Unreachable: unhandled observe type ${l.observe}}`)}}delete(e,d={}){return this.request("DELETE",e,d)}get(e,d={}){return this.request("GET",e,d)}head(e,d={}){return this.request("HEAD",e,d)}jsonp(e,d){return this.request("JSONP",e,{params:(new B).append(d,"JSONP_CALLBACK"),observe:"body",responseType:"json"})}options(e,d={}){return this.request("OPTIONS",e,d)}patch(e,d,l={}){return this.request("PATCH",e,E(l,d))}post(e,d,l={}){return this.request("POST",e,E(l,d))}put(e,d,l={}){return this.request("PUT",e,E(l,d))}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(U))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();class x{constructor(t,e){this.next=t,this.interceptor=e}handle(t){return this.interceptor.intercept(t,this.next)}}const z=new s.InjectionToken("HTTP_INTERCEPTORS");let Q,te=(()=>{class o{intercept(e,d){return d.handle(e)}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})(),A=0;class le{}let ue=(()=>{class o{constructor(e,d){this.callbackMap=e,this.document=d,this.resolvedPromise=Promise.resolve()}nextCallback(){return"ng_jsonp_callback_"+A++}handle(e){if("JSONP"!==e.method)throw new Error("JSONP requests must use JSONP request method.");if("json"!==e.responseType)throw new Error("JSONP requests must use Json response type.");if(e.headers.keys().length>0)throw new Error("JSONP requests do not support headers.");return new p.y(d=>{const l=this.nextCallback(),C=e.urlWithParams.replace(/=JSONP_CALLBACK(&|$)/,`=${l}$1`),F=this.document.createElement("script");F.src=C;let X=null,L=!1;this.callbackMap[l]=ee=>{delete this.callbackMap[l],X=ee,L=!0};const V=()=>{F.parentNode&&F.parentNode.removeChild(F),delete this.callbackMap[l]};return F.addEventListener("load",ee=>{this.resolvedPromise.then(()=>{V(),L?(d.next(new a({body:X,status:200,statusText:"OK",url:C})),d.complete()):d.error(new c({url:C,status:0,statusText:"JSONP Error",error:new Error("JSONP injected script did not invoke callback.")}))})}),F.addEventListener("error",ee=>{V(),d.error(new c({error:ee,status:0,statusText:"JSONP Error",url:C}))}),this.document.body.appendChild(F),d.next({type:S.Sent}),()=>{L||this.removeListeners(F),V()}})}removeListeners(e){Q||(Q=this.document.implementation.createHTMLDocument()),Q.adoptNode(e)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(le),s.\u0275\u0275inject(u.DOCUMENT))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})(),me=(()=>{class o{constructor(e){this.jsonp=e}intercept(e,d){return"JSONP"===e.method?this.jsonp.handle(e):d.handle(e)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(ue))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();const be=/^\)\]\}',?\n/;let ce=(()=>{class o{constructor(e){this.xhrFactory=e}handle(e){if("JSONP"===e.method)throw new Error("Attempted to construct Jsonp request without HttpClientJsonpModule installed.");return new p.y(d=>{const l=this.xhrFactory.build();if(l.open(e.method,e.urlWithParams),e.withCredentials&&(l.withCredentials=!0),e.headers.forEach((k,$)=>l.setRequestHeader(k,$.join(","))),e.headers.has("Accept")||l.setRequestHeader("Accept","application/json, text/plain, */*"),!e.headers.has("Content-Type")){const k=e.detectContentTypeHeader();null!==k&&l.setRequestHeader("Content-Type",k)}if(e.responseType){const k=e.responseType.toLowerCase();l.responseType="json"!==k?k:"text"}const C=e.serializeBody();let F=null;const X=()=>{if(null!==F)return F;const k=l.statusText||"OK",$=new m(l.getAllResponseHeaders()),ie=function Oe(o){return"responseURL"in o&&o.responseURL?o.responseURL:/^X-Request-URL:/m.test(o.getAllResponseHeaders())?o.getResponseHeader("X-Request-URL"):null}(l)||e.url;return F=new i({headers:$,status:l.status,statusText:k,url:ie}),F},L=()=>{let{headers:k,status:$,statusText:ie,url:ve}=X(),q=null;204!==$&&(q=typeof l.response>"u"?l.responseText:l.response),0===$&&($=q?200:0);let ye=$>=200&&$<300;if("json"===e.responseType&&"string"==typeof q){const De=q;q=q.replace(be,"");try{q=""!==q?JSON.parse(q):null}catch(Ce){q=De,ye&&(ye=!1,q={error:Ce,text:q})}}ye?(d.next(new a({body:q,headers:k,status:$,statusText:ie,url:ve||void 0})),d.complete()):d.error(new c({error:q,headers:k,status:$,statusText:ie,url:ve||void 0}))},V=k=>{const{url:$}=X(),ie=new c({error:k,status:l.status||0,statusText:l.statusText||"Unknown Error",url:$||void 0});d.error(ie)};let se=!1;const oe=k=>{se||(d.next(X()),se=!0);let $={type:S.DownloadProgress,loaded:k.loaded};k.lengthComputable&&($.total=k.total),"text"===e.responseType&&!!l.responseText&&($.partialText=l.responseText),d.next($)},ee=k=>{let $={type:S.UploadProgress,loaded:k.loaded};k.lengthComputable&&($.total=k.total),d.next($)};return l.addEventListener("load",L),l.addEventListener("error",V),l.addEventListener("timeout",V),l.addEventListener("abort",V),e.reportProgress&&(l.addEventListener("progress",oe),null!==C&&l.upload&&l.upload.addEventListener("progress",ee)),l.send(C),d.next({type:S.Sent}),()=>{l.removeEventListener("error",V),l.removeEventListener("abort",V),l.removeEventListener("load",L),l.removeEventListener("timeout",V),e.reportProgress&&(l.removeEventListener("progress",oe),null!==C&&l.upload&&l.upload.removeEventListener("progress",ee)),l.readyState!==l.DONE&&l.abort()}})}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(u.XhrFactory))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();const de=new s.InjectionToken("XSRF_COOKIE_NAME"),fe=new s.InjectionToken("XSRF_HEADER_NAME");class he{}let Pe=(()=>{class o{constructor(e,d,l){this.doc=e,this.platform=d,this.cookieName=l,this.lastCookieString="",this.lastToken=null,this.parseCount=0}getToken(){if("server"===this.platform)return null;const e=this.doc.cookie||"";return e!==this.lastCookieString&&(this.parseCount++,this.lastToken=(0,u.\u0275parseCookieValue)(e,this.cookieName),this.lastCookieString=e),this.lastToken}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(u.DOCUMENT),s.\u0275\u0275inject(s.PLATFORM_ID),s.\u0275\u0275inject(de))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})(),pe=(()=>{class o{constructor(e,d){this.tokenService=e,this.headerName=d}intercept(e,d){const l=e.url.toLowerCase();if("GET"===e.method||"HEAD"===e.method||l.startsWith("http://")||l.startsWith("https://"))return d.handle(e);const C=this.tokenService.getToken();return null!==C&&!e.headers.has(this.headerName)&&(e=e.clone({headers:e.headers.set(this.headerName,C)})),d.handle(e)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(he),s.\u0275\u0275inject(fe))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})(),Ee=(()=>{class o{constructor(e,d){this.backend=e,this.injector=d,this.chain=null}handle(e){if(null===this.chain){const d=this.injector.get(z,[]);this.chain=d.reduceRight((l,C)=>new x(l,C),this.backend)}return this.chain.handle(e)}}return o.\u0275fac=function(e){return new(e||o)(s.\u0275\u0275inject(M),s.\u0275\u0275inject(s.Injector))},o.\u0275prov=s.\u0275\u0275defineInjectable({token:o,factory:o.\u0275fac}),o})();function ge(){return"object"==typeof window?window:{}}let _e=(()=>{class o{static disable(){return{ngModule:o,providers:[{provide:pe,useClass:te}]}}static withOptions(e={}){return{ngModule:o,providers:[e.cookieName?{provide:de,useValue:e.cookieName}:[],e.headerName?{provide:fe,useValue:e.headerName}:[]]}}}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=s.\u0275\u0275defineInjector({providers:[pe,{provide:z,useExisting:pe,multi:!0},{provide:he,useClass:Pe},{provide:de,useValue:"XSRF-TOKEN"},{provide:fe,useValue:"X-XSRF-TOKEN"}]}),o})(),Te=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=s.\u0275\u0275defineInjector({providers:[f,{provide:U,useClass:Ee},ce,{provide:M,useExisting:ce}],imports:[_e.withOptions({cookieName:"XSRF-TOKEN",headerName:"X-XSRF-TOKEN"})]}),o})(),we=(()=>{class o{}return o.\u0275fac=function(e){return new(e||o)},o.\u0275mod=s.\u0275\u0275defineNgModule({type:o}),o.\u0275inj=s.\u0275\u0275defineInjector({providers:[ue,{provide:le,useFactory:ge},{provide:z,useClass:me,multi:!0}]}),o})();const Me=u.XhrFactory}}]);