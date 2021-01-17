(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{144:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return b}));var a=n(1),r=n(6),o=(n(0),n(158)),i={title:"RequestAction",description:"RequestAction API reference for redux-requests - declarative AJAX requests and automatic network state management for single-page applications"},s={id:"api-reference/request-action",title:"RequestAction",description:"RequestAction API reference for redux-requests - declarative AJAX requests and automatic network state management for single-page applications",source:"@site/docs/api-reference/request-action.md",permalink:"/docs/api-reference/request-action",editUrl:"https://github.com/klis87/redux-requests/edit/master/docusaurus/docs/api-reference/request-action.md",lastUpdatedBy:"Konrad",lastUpdatedAt:1610841813,sidebar:"docs",previous:{title:"Usage with Typescript",permalink:"/docs/guides/usage-with-typescript"},next:{title:"handleRequests",permalink:"/docs/api-reference/handle-requests"}},c=[{value:"<code>request</code>",id:"request",children:[]},{value:"<code>meta</code>",id:"meta",children:[{value:"<code>getData: (data, currentData) =&gt; transformedData</code>",id:"getdata-data-currentdata--transformeddata",children:[]},{value:"<code>getError: error =&gt; transformedError</code>",id:"geterror-error--transformederror",children:[]},{value:"<code>asMutation: boolean</code>",id:"asmutation-boolean",children:[]},{value:"<code>driver: string</code>",id:"driver-string",children:[]},{value:"<code>takeLatest: boolean</code>",id:"takelatest-boolean",children:[]},{value:"<code>requestKey: string</code>",id:"requestkey-string",children:[]},{value:"<code>requestsCapacity: number</code>",id:"requestscapacity-number",children:[]},{value:"<code>cache: boolean | number</code>",id:"cache-boolean--number",children:[]},{value:"<code>poll: number</code>",id:"poll-number",children:[]},{value:"<code>dependentRequestsNumber: number</code>",id:"dependentrequestsnumber-number",children:[]},{value:"<code>isDependentRequest: boolean</code>",id:"isdependentrequest-boolean",children:[]},{value:"<code>normalize: boolean</code>",id:"normalize-boolean",children:[]},{value:"<code>optimisticData</code>",id:"optimisticdata",children:[]},{value:"<code>revertedData</code>",id:"reverteddata",children:[]},{value:"<code>localData</code>",id:"localdata",children:[]},{value:"<code>silent: boolean</code>",id:"silent-boolean",children:[]},{value:"<code>onRequest: (request, requestAction, store) =&gt; request</code>",id:"onrequest-request-requestaction-store--request",children:[]},{value:"<code>onSuccess: (response, requestAction, store) =&gt; response</code>",id:"onsuccess-response-requestaction-store--response",children:[]},{value:"<code>onError: (error, requestAction, store) =&gt; error</code>",id:"onerror-error-requestaction-store--error",children:[]},{value:"<code>onAbort: (requestAction, store) =&gt; void</code>",id:"onabort-requestaction-store--void",children:[]},{value:"<code>runOnRequest: boolean</code>",id:"runonrequest-boolean",children:[]},{value:"<code>runOnSuccess: boolean</code>",id:"runonsuccess-boolean",children:[]},{value:"<code>runOnError: boolean</code>",id:"runonerror-boolean",children:[]},{value:"<code>runOnAbort: boolean</code>",id:"runonabort-boolean",children:[]},{value:"<code>measureDownloadProgress: boolean</code>",id:"measuredownloadprogress-boolean",children:[]},{value:"<code>measureUploadProgress: boolean</code>",id:"measureuploadprogress-boolean",children:[]},{value:"<code>mutations</code>",id:"mutations",children:[]}]}],l={rightToc:c};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"RequestAction")," is a type which defines the structure of request actions. Like\nall Redux actions it obviously has a ",Object(o.b)("inlineCode",{parentName:"p"},"type")," property. Also it must have ",Object(o.b)("inlineCode",{parentName:"p"},"request"),"\nproperty and might have ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," property."),Object(o.b)("h2",{id:"request"},Object(o.b)("inlineCode",{parentName:"h2"},"request")),Object(o.b)("p",null,"This is mandatory key in any request action. What you put here depends on a driver you use.\nFor example, when using ",Object(o.b)("inlineCode",{parentName:"p"},"axios"),", it could look like that:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const fetchBooks = () => ({\n  type: 'FETCH_BOOKS',\n  request: {\n    url: '/books',\n  },\n});\n")),Object(o.b)("p",null,"It is also possible to provide array of configs to make ",Object(o.b)("strong",{parentName:"p"},"batch requests"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const fetchBooksAndAuthors = () => ({\n  type: 'FETCH_BOOKS_AND_AUTHORS',\n  request: [{ url: '/books' }, { url: '/authors' }],\n});\n")),Object(o.b)("h2",{id:"meta"},Object(o.b)("inlineCode",{parentName:"h2"},"meta")),Object(o.b)("p",null,"While ",Object(o.b)("inlineCode",{parentName:"p"},"request")," key is driver dependent and mandatory, ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," is optional and its\noptions don't depend on used driver. As an example, let's add a ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," property\nto ",Object(o.b)("inlineCode",{parentName:"p"},"FETCH_BOOKS")," action:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const fetchBooks = () => ({\n  type: 'FETCH_BOOKS',\n  request: {\n    url: '/books',\n  },\n  meta: {\n    normalize: true,\n  },\n});\n")),Object(o.b)("p",null,"which would turn on automatic normalisation for ",Object(o.b)("inlineCode",{parentName:"p"},"FETCH_BOOKS")," query."),Object(o.b)("p",null,"Below you can see the list of all possible ",Object(o.b)("inlineCode",{parentName:"p"},"meta")," options:"),Object(o.b)("h3",{id:"getdata-data-currentdata--transformeddata"},Object(o.b)("inlineCode",{parentName:"h3"},"getData: (data, currentData) => transformedData")),Object(o.b)("p",null,"A function which is called on response success, which allows you to\ntransform data received from server, ",Object(o.b)("inlineCode",{parentName:"p"},"data")," is what you got from the server and ",Object(o.b)("inlineCode",{parentName:"p"},"currentData")," is data stored in reducer\ncurrently."),Object(o.b)("h3",{id:"geterror-error--transformederror"},Object(o.b)("inlineCode",{parentName:"h3"},"getError: error => transformedError")),Object(o.b)("p",null,"A function which is called on request error, which allows you to\ntransform error received from server."),Object(o.b)("h3",{id:"asmutation-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"asMutation: boolean")),Object(o.b)("p",null,"It can be used to force treating of a request action as mutation when ",Object(o.b)("inlineCode",{parentName:"p"},"true")," or query when ",Object(o.b)("inlineCode",{parentName:"p"},"false"),".\nUseful if a driver you use doesn't have a config which could determine whether it is query or mutation.\nAlso could be handy if your want to treat a mutation (for example ",Object(o.b)("inlineCode",{parentName:"p"},"POST")," request) as a query for instance\nto store its data."),Object(o.b)("h3",{id:"driver-string"},Object(o.b)("inlineCode",{parentName:"h3"},"driver: string")),Object(o.b)("p",null,"Only if you use multiple drivers, more details in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../drivers/using-drivers#multiple-drivers"}),"multiple-drivers chapter"),"."),Object(o.b)("h3",{id:"takelatest-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"takeLatest: boolean")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true"),", if a request of a given type is pending and another one is fired, the first one will be\nautomatically aborted, which can prevent race condition bugs and improve performance, default as ",Object(o.b)("inlineCode",{parentName:"p"},"true")," for queries and ",Object(o.b)("inlineCode",{parentName:"p"},"false"),"\nfor mutations, which is usually what you want. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/1-requests-aborts"}),"abort tutorial")," for more info."),Object(o.b)("h3",{id:"requestkey-string"},Object(o.b)("inlineCode",{parentName:"h3"},"requestKey: string")),Object(o.b)("p",null,"By default it is assumed that you only need to store information once for a given request type,\nlike its data, error or loading state, so that ",Object(o.b)("inlineCode",{parentName:"p"},"fetchBook('2')")," would override data for previous book, like with ",Object(o.b)("inlineCode",{parentName:"p"},"id")," ",Object(o.b)("inlineCode",{parentName:"p"},"'1'"),", you can\nchange it behaviour with this property, like ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey: id"),". See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/3-request-keys"}),"requests keys tutorial")," for more info."),Object(o.b)("h3",{id:"requestscapacity-number"},Object(o.b)("inlineCode",{parentName:"h3"},"requestsCapacity: number")),Object(o.b)("p",null,"Use together with ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey"),", it prevents memory leak, imagine you dispatch requests with 1000+\ndifferent ",Object(o.b)("inlineCode",{parentName:"p"},"requestKey"),", passing ",Object(o.b)("inlineCode",{parentName:"p"},"requestsCapacity: 2")," would remove state for 1st request after 3rd is resolved and so on, so\nFIFO rule is applied here. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/3-request-keys"}),"requests keys tutorial")," to see examples."),Object(o.b)("h3",{id:"cache-boolean--number"},Object(o.b)("inlineCode",{parentName:"h3"},"cache: boolean | number")),Object(o.b)("p",null,"It can be used to cache queries, forever when ",Object(o.b)("inlineCode",{parentName:"p"},"true")," or for a number of seconds, more information\nin ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/9-caching"}),"caching tutorial"),"."),Object(o.b)("h3",{id:"poll-number"},Object(o.b)("inlineCode",{parentName:"h3"},"poll: number")),Object(o.b)("p",null,"It can be used to execute short polling for a given query, value is in seconds. For example, ",Object(o.b)("inlineCode",{parentName:"p"},"poll: 10")," will refetch a given\nquery every 10 seconds, until ",Object(o.b)("inlineCode",{parentName:"p"},"resetRequests")," or ",Object(o.b)("inlineCode",{parentName:"p"},"stopPolling")," action is dispatched for this type of query. Also note, that\nthis option doesn't do anything when ",Object(o.b)("inlineCode",{parentName:"p"},"ssr: 'server'")," in ",Object(o.b)("inlineCode",{parentName:"p"},"handleRequests")),Object(o.b)("h3",{id:"dependentrequestsnumber-number"},Object(o.b)("inlineCode",{parentName:"h3"},"dependentRequestsNumber: number")),Object(o.b)("p",null,"Number of requests which will be fired after this one, only for SSR purposes, more information in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../guides/server-side-rendering"}),"server side rendering guide"),"."),Object(o.b)("h3",{id:"isdependentrequest-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"isDependentRequest: boolean")),Object(o.b)("p",null,"Used together with ",Object(o.b)("inlineCode",{parentName:"p"},"dependentRequestsNumber"),", marking a given request as dependent on another,\nmore information in ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../guides/server-side-rendering"}),"server side rendering guide"),"."),Object(o.b)("h3",{id:"normalize-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"normalize: boolean")),Object(o.b)("p",null,"Automatically normalize ",Object(o.b)("inlineCode",{parentName:"p"},"data")," on response success, both for queries and mutations. More information in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/10-automatic-normalisation"}),"automatic normalisation tutorial"),"."),Object(o.b)("h3",{id:"optimisticdata"},Object(o.b)("inlineCode",{parentName:"h3"},"optimisticData")),Object(o.b)("p",null,"An object which will be normalized on request as an optimistic update. More information in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/10-automatic-normalisation"}),"automatic normalisation tutorial"),"."),Object(o.b)("h3",{id:"reverteddata"},Object(o.b)("inlineCode",{parentName:"h3"},"revertedData")),Object(o.b)("p",null,"An object which will be normalized on response error so if optimistic update failed.\nMore information in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/10-automatic-normalisation"}),"automatic normalisation tutorial"),"."),Object(o.b)("h3",{id:"localdata"},Object(o.b)("inlineCode",{parentName:"h3"},"localData")),Object(o.b)("p",null,"It can be attached to any action, even not request action, to update normalized data without request.\nMore information in\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/10-automatic-normalisation"}),"automatic normalisation tutorial"),"."),Object(o.b)("h3",{id:"silent-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"silent: boolean")),Object(o.b)("p",null,"After setting to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," no action will be dispatched for given request, so reducers won't be hit,\nuseful if you want to make a request and not store it, or in interceptor to avoid duplicated actions in some cases."),Object(o.b)("h3",{id:"onrequest-request-requestaction-store--request"},Object(o.b)("inlineCode",{parentName:"h3"},"onRequest: (request, requestAction, store) => request")),Object(o.b)("p",null,"Function which will be called before request is made. It can be used to make some side effects,\nfor example with ",Object(o.b)("inlineCode",{parentName:"p"},"store.dispatch")," or to update request config by returning an updated one.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(o.b)("h3",{id:"onsuccess-response-requestaction-store--response"},Object(o.b)("inlineCode",{parentName:"h3"},"onSuccess: (response, requestAction, store) => response")),Object(o.b)("p",null,"Function which will be called after successful response but before success action is dispatched.\nIt can be used to make some side effects or to update response by returning another one.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(o.b)("h3",{id:"onerror-error-requestaction-store--error"},Object(o.b)("inlineCode",{parentName:"h3"},"onError: (error, requestAction, store) => error")),Object(o.b)("p",null,"Function which will be called after error response but before error action is dispatched.\nIt can be used to make some side effects or to update error by throwing another one.\nIt is also possible to recover from error by returning a response.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(o.b)("h3",{id:"onabort-requestaction-store--void"},Object(o.b)("inlineCode",{parentName:"h3"},"onAbort: (requestAction, store) => void")),Object(o.b)("p",null,"Function which will be called after abort but before abort action is dispatched.\nUsually it won't be useful, but it is available just in case.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(o.b)("h3",{id:"runonrequest-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"runOnRequest: boolean")),Object(o.b)("p",null,"Passing ",Object(o.b)("inlineCode",{parentName:"p"},"true")," would prevent running ",Object(o.b)("inlineCode",{parentName:"p"},"onRequest")," interceptor for this action, useful to avoid infinitive loops in some cases.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(o.b)("h3",{id:"runonsuccess-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"runOnSuccess: boolean")),Object(o.b)("p",null,"Passing ",Object(o.b)("inlineCode",{parentName:"p"},"true")," would prevent running ",Object(o.b)("inlineCode",{parentName:"p"},"onSuccess")," interceptor for this action, useful to avoid infinitive loops in some cases.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(o.b)("h3",{id:"runonerror-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"runOnError: boolean")),Object(o.b)("p",null,"Passing ",Object(o.b)("inlineCode",{parentName:"p"},"true")," would prevent running ",Object(o.b)("inlineCode",{parentName:"p"},"onError")," interceptor for this action, useful to avoid infinitive loops in some cases.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(o.b)("h3",{id:"runonabort-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"runOnAbort: boolean")),Object(o.b)("p",null,"Passing ",Object(o.b)("inlineCode",{parentName:"p"},"true")," would prevent running ",Object(o.b)("inlineCode",{parentName:"p"},"onAbort")," interceptor for this action.\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/6-interceptors"}),"interceptors tutorial"),"."),Object(o.b)("h3",{id:"measuredownloadprogress-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"measureDownloadProgress: boolean")),Object(o.b)("p",null,"Passing ",Object(o.b)("inlineCode",{parentName:"p"},"true")," will expose download progress calculation in selectors like ",Object(o.b)("inlineCode",{parentName:"p"},"getQuery")," and ",Object(o.b)("inlineCode",{parentName:"p"},"getMutation"),", calculated by native\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent"}),"ProgressEvent"),". Useful for file downloads and big JSON payloads.\nAvailable only for ",Object(o.b)("inlineCode",{parentName:"p"},"axios")," and ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," drivers... and for custom drivers which support it."),Object(o.b)("h3",{id:"measureuploadprogress-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"measureUploadProgress: boolean")),Object(o.b)("p",null,"Passing ",Object(o.b)("inlineCode",{parentName:"p"},"true")," will expose upload progress calculation in selectors like ",Object(o.b)("inlineCode",{parentName:"p"},"getQuery")," and ",Object(o.b)("inlineCode",{parentName:"p"},"getMutation"),", calculated by native\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/ProgressEvent"}),"ProgressEvent"),". Useful for file uploads and big JSON payloads.\nAvailable only for ",Object(o.b)("inlineCode",{parentName:"p"},"axios")," and ",Object(o.b)("inlineCode",{parentName:"p"},"graphql")," drivers... and for custom drivers which support it."),Object(o.b)("h3",{id:"mutations"},Object(o.b)("inlineCode",{parentName:"h3"},"mutations")),Object(o.b)("p",null,"An object to instruct a mutation how to update queries data. Its keys are just\nquery types and values are update functions, for example for ",Object(o.b)("inlineCode",{parentName:"p"},"DELETE_BOOK")," mutation we could have:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mutations: {\n  FETCH_BOOKS: data => data.filter(book => book.id !== '1'),\n}\n")),Object(o.b)("p",null,"It is possible to update multiple queries with one mutation:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mutations: {\n  FETCH_BOOK: data => data.id === '1' ? null : data,\n  FETCH_BOOKS: data => data.filter(book => book.id !== '1'),\n}\n")),Object(o.b)("p",null,"Update function also has 2nd argument ",Object(o.b)("inlineCode",{parentName:"p"},"mutationData")," which is just ",Object(o.b)("inlineCode",{parentName:"p"},"data")," from mutation\nresponse. It could be useful for update mutations like ",Object(o.b)("inlineCode",{parentName:"p"},"UPDATE_BOOK"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mutations: {\n  FETCH_BOOK: (data, mutationData) => data.id === '1' ? mutationData : data,\n}\n")),Object(o.b)("p",null,"Actually there is an alias for passing update functions:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"mutations: {\n  FETCH_BOOK: {\n    updateData: (data, mutationData) => data.id === '1' ? mutationData : data,\n  },\n}\n")),Object(o.b)("p",null,"As you can see, instead of passing update functions directly, you can pass them inside\nobject as ",Object(o.b)("inlineCode",{parentName:"p"},"updateData")," key."),Object(o.b)("p",null,"This is to support other options, like ",Object(o.b)("inlineCode",{parentName:"p"},"local"),", ",Object(o.b)("inlineCode",{parentName:"p"},"updateDataOptimistic")," and ",Object(o.b)("inlineCode",{parentName:"p"},"revertData"),".\nSee ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/7-local-updates"}),"local updates tutorial")," and\n",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../tutorial/8-optimistic-updates"}),"optimistic updates tutorial")," for more information."))}b.isMDXComponent=!0},158:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),b=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s({},t,{},e)),n},u=function(e){var t=b(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=b(n),p=a,m=u["".concat(i,".").concat(p)]||u[p]||d[p]||o;return n?r.a.createElement(m,s({ref:t},l,{components:n})):r.a.createElement(m,s({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=p;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);