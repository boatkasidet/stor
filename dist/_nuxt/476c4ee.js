(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{357:function(e,t,o){"use strict";o.d(t,"a",(function(){return n}));var r=o(358),l=o.n(r);o(366);if(!l.a.apps.length){l.a.initializeApp({apiKey:"AIzaSyAQUE8p9b4LTW7fvR1SvRFIMVsXEIEKqlk",authDomain:"stor-e8aaa.firebaseapp.com",databaseURL:"https://stor-e8aaa.firebaseio.com",projectId:"stor-e8aaa",storageBucket:"stor-e8aaa.appspot.com",messagingSenderId:"780067692153",appId:"1:780067692153:web:7c5d793ac536c245023ea8",measurementId:"G-ECJ4KERP1B"})}var n=l.a.firestore()},424:function(e,t,o){"use strict";o.r(t);o(28);var r=o(358),l=o.n(r),n=o(357),v={data:function(){return{name:null,Phone:null,Product:null,Category:null,Size:null,Sweet:null,Chewy:null,Whipped:null}},methods:{addData:function(){var e={name:this.name,Phone:this.Phone,Product:this.Product,Category:this.Category,Size:this.Size,Sweet:this.Sweet,Chewy:this.Chewy,Whipped:this.Whipped,timestamp:l.a.firestore.FieldValue.serverTimestamp()};n.a.collection("ADD ORDER").doc().set(e).then((function(){console.log("Document successfully written! -> MyText")})).catch((function(e){console.error("Error writing document: ",e)})).then((function(){alert("ORDER DONE")}))},reset:function(){}}},d=o(81),c=o(123),m=o.n(c),h=o(176),_=o(419),f=o(354),w=o(425),y=o(420),S=o(421),C=o(414),component=Object(d.a)(v,(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-container",{on:{submit:function(t){return t.preventDefault(),e.addData(t)}}},[o("v-row",[o("v-col",{attrs:{cols:"5",md:"4"}},[o("h1",[e._v("Name")]),e._v(" "),o("v-text-field",{attrs:{required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),e._v(" "),o("v-col",{attrs:{cols:"5",md:"4"}},[o("h1",[e._v("Phone")]),e._v(" "),o("v-text-field",{attrs:{required:""},model:{value:e.Phone,callback:function(t){e.Phone=t},expression:"Phone"}})],1)],1),e._v(" "),[o("v-container",{attrs:{fluid:""}},[o("div",[e._v("Product list (รายการสินค้า)")]),e._v(" "),o("v-radio-group",{attrs:{mandatory:!1},model:{value:e.Product,callback:function(t){e.Product=t},expression:"Product"}},[o("v-radio",{attrs:{label:"Espresso (เอสเพรสโซ่)",value:"Espresso"}}),e._v(" "),o("v-radio",{attrs:{label:"Americano (อเมริกาโน่)",value:"Americano"}}),e._v(" "),o("v-radio",{attrs:{label:"Latte (ลาเต้)",value:"Latte"}}),e._v(" "),o("v-radio",{attrs:{label:"Cappuccino (คาปูชิโน)",value:"Cappuccino"}}),e._v(" "),o("v-radio",{attrs:{label:"Mocha (มอคค่า)",value:"Mocha"}}),e._v(" "),o("v-radio",{attrs:{label:"Iced milk tea (ชานมเย็น)",value:"Iced milk tea"}})],1)],1)],e._v(" "),[o("v-container",{attrs:{fluid:""}},[o("div",[e._v("Category (ประเภท)")]),e._v(" "),o("v-radio-group",{attrs:{mandatory:!1},model:{value:e.Category,callback:function(t){e.Category=t},expression:"Category"}},[o("v-radio",{attrs:{label:"Hot (ร้อน)",value:"Hot"}}),e._v(" "),o("v-radio",{attrs:{label:"Iced (เย็น)",value:"Iced"}}),e._v(" "),o("v-radio",{attrs:{label:"Blended (ปั่น)",value:"Blended"}})],1)],1)],e._v(" "),[o("v-container",{attrs:{fluid:""}},[o("div",[e._v("Size (ขนาดของแก้ว)")]),e._v(" "),o("v-radio-group",{attrs:{mandatory:!1},model:{value:e.Size,callback:function(t){e.Size=t},expression:"Size"}},[o("v-radio",{attrs:{label:"Short (ชอร์ต) 8 Oz. (เฉพาะเครื่องดื่มร้อนเท่านั้น)",value:"Short"}}),e._v(" "),o("v-radio",{attrs:{label:"Small (เล็ก) 12 Oz.",value:"Small"}}),e._v(" "),o("v-radio",{attrs:{label:"Medium (กลาง) 16 Oz.",value:"Medium"}}),e._v(" "),o("v-radio",{attrs:{label:"Large (ใหญ่) 20 Oz.",value:"Large"}})],1)],1)],e._v(" "),[o("v-container",{attrs:{fluid:""}},[o("div",[e._v("Sweetness level (ระดับความหวาน)")]),e._v(" "),o("v-radio-group",{attrs:{mandatory:!1},model:{value:e.Sweet,callback:function(t){e.Sweet=t},expression:"Sweet"}},[o("v-radio",{attrs:{label:"Normal (หวานปกติ)",value:"Normal"}}),e._v(" "),o("v-radio",{attrs:{label:"Medium (หวานปานกลาง)",value:"Medium"}}),e._v(" "),o("v-radio",{attrs:{label:"Not Sweet (ไม่หวาน)",value:"Not Sweet"}})],1)],1)],e._v(" "),[o("v-container",{attrs:{fluid:""}},[o("div",[e._v("Chewy tapioca balls (ไข่มุก)")]),e._v(" "),o("v-radio-group",{attrs:{mandatory:!1},model:{value:e.Chewy,callback:function(t){e.Chewy=t},expression:"Chewy"}},[o("v-radio",{attrs:{label:"Yes",value:"Yes"}}),e._v(" "),o("v-radio",{attrs:{label:"No",value:"No"}})],1)],1)],e._v(" "),[o("v-container",{attrs:{fluid:""}},[o("div",[e._v("Whipped cream (วิปปิ้งครีม)")]),e._v(" "),o("v-radio-group",{attrs:{mandatory:!1},model:{value:e.Whipped,callback:function(t){e.Whipped=t},expression:"Whipped"}},[o("v-radio",{attrs:{label:"Yes",value:"Yes"}}),e._v(" "),o("v-radio",{attrs:{label:"No",value:"No"}})],1)],1)],e._v(" "),o("v-btn",{staticClass:"mr-6",attrs:{color:"success"},on:{click:e.addData}},[e._v(" Submit ")])],2)}),[],!1,null,null,null);t.default=component.exports;m()(component,{VBtn:h.a,VCol:_.a,VContainer:f.a,VRadio:w.a,VRadioGroup:y.a,VRow:S.a,VTextField:C.a})}}]);