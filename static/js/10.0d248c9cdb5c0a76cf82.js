webpackJsonp([10],{IojS:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a("yJFt"),i=a("0BaK"),r=a("kVYb"),n={data:function(){return{valueDate:"",type:!0,selectObj:{value:""},orderAllData:{orderCount:{first:"",secord:"",third:""},money:{first:"",secord:"",third:""},personNum:{first:"",secord:"",third:""},payNum:{first:"",secord:"",third:""},rate:{first:"",secord:"",third:""}},serviceList:{index:0,serviceName:"云机购买",list:[{id:"0",value:"云机购买"},{id:"1",value:"云机续费"},{id:"2",value:"IP代理"},{id:"3",value:"设备大师"},{id:"4",value:"窗口多开服务"},{id:"5",value:"多路实时直播"},{id:"6",value:"日志调试"},{id:"7",value:"高级调试ADB"}]},isStart:!1}},mounted:function(){this.orderCount(),this.orderChart(),this.orderDist(),this.packageDist()},methods:{selectVal:function(t){this.selectObj.value=t,this.orderCount(),this.orderChart(),this.orderDist(),this.packageDist()},changeDate:function(t){this.valueDate=t,this.isStart?(this.orderChart(),this.orderDist(),this.packageDist()):this.isStart=!this.isStart},orderCount:function(){var t=this,e=new Object;e.client=this.selectObj.value,Object(r.c)(e).then(function(e){0==e.resultCode&&(t.orderAllData=e.resultInfo)}).catch(function(t){console.log(t)})},orderChart:function(){var t=this,e=new Object;e.client=this.selectObj.value,e.beginTime=this.valueDate[0],e.endTime=this.valueDate[1],Object(r.d)(e).then(function(e){if(0==e.resultCode){var a=e.resultInfo,s=t.$echarts.init(document.getElementById("orderChart")),r={tooltip:{trigger:"axis"},legend:{data:a.data1},grid:{left:"1%",right:"2%",bottom:"8%",containLabel:!0},xAxis:{type:"category",boundaryGap:!1,data:a.data2},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"支付人数",type:"line",stack:"总量",data:a.list.payNum},{name:"订单数",type:"line",stack:"总量",data:a.list.orderCount},{name:"订单金额",type:"line",stack:"总量",data:a.list.money},{name:"转化率",type:"line",stack:"总量",data:a.list.rate}]};s.setOption(r);var n=document.getElementById("orderChart");i.a.on(n,function(){s.resize()})}}).catch(function(t){console.log(t)})},dataExport:function(){var t=new Object;t.client=this.selectObj.value,t.beginTime=this.valueDate[0],t.endTime=this.valueDate[1],Object(r.e)(t).then(function(t){var e=new Blob([t],{type:"application/vnd.openxmlformats-  officedocument.spreadsheetml.sheet;charset=utf-8"}),a=document.createElement("a"),s=window.URL.createObjectURL(e);a.href=s,a.download="订单总数.xlsx",document.body.appendChild(a),a.click(),document.body.removeChild(a),window.URL.revokeObjectURL(s)}).catch(function(t){console.log(t)})},orderDist:function(){var t=this,e=new Object;e.client=this.selectObj.value,e.beginTime=this.valueDate[0],e.endTime=this.valueDate[1],Object(r.f)(e).then(function(e){if(0==e.resultCode){var a=e.resultInfo;a.name.unshift("name");var s=t.$echarts.init(document.getElementById("orderDist")),r={legend:{icon:"react",type:"scroll"},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},dataset:{dimensions:a.name,source:a.data},grid:{left:"1%",right:"2%",bottom:"3%",containLabel:!0},xAxis:{type:"category"},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{type:"bar"},{type:"bar"},{type:"bar"},{type:"bar"},{type:"bar"},{type:"bar"},{type:"bar"},{type:"bar"}]};s.setOption(r);var n=document.getElementById("orderDist");i.a.on(n,function(){s.resize()})}}).catch(function(t){console.log(t)})},packDistChange:function(t,e){this.serviceList.index=t,this.serviceList.serviceName=e.value,this.packageDist()},packageDist:function(){var t=this,e=new Object;e.client=this.selectObj.value,e.goodsName=this.serviceList.serviceName,e.beginTime=this.valueDate[0],e.endTime=this.valueDate[1],Object(r.g)(e).then(function(e){if(0==e.resultCode){var a=e.resultInfo,s=t.$echarts.init(document.getElementById("packageDist")),r={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"3%",left:"3%",right:"4%",bottom:"15%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:a.name},series:[{name:"订单数",type:"bar",barWidth:15,data:a.data,itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]};s.setOption(r);var n=document.getElementById("packageDist");i.a.on(n,function(){s.resize()})}}).catch(function(t){console.log(t)})}},components:{DateSearch:s.a}},o={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"maxBox"},[a("DateSearch",{attrs:{search:t.type},on:{func:t.changeDate,selectVal:t.selectVal}}),t._v(" "),a("div",{staticClass:"orderNum"},[a("el-row",[a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content "},[a("p",[t._v("订单数(昨日)")]),t._v(" "),a("span",[t._v(t._s(t.orderAllData.orderCount.first))]),t._v(" "),t.orderAllData.orderCount.secord>0?a("span",{staticClass:"goup"},[t._v("较前一日 ↑ "+t._s(t.orderAllData.orderCount.third)+" ")]):t.orderAllData.orderCount.secord<0?a("span",{staticClass:"decline"},[t._v("较前一日 ↓ "+t._s(t.orderAllData.orderCount.third)+" ")]):a("span",{staticClass:"just"},[t._v("较前一日 → "+t._s(t.orderAllData.orderCount.third)+" ")])])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content "},[a("p",[t._v("订单金额(昨日)")]),t._v(" "),a("span",[t._v(t._s(t.orderAllData.money.first/100))]),t._v(" "),t.orderAllData.money.secord>0?a("span",{staticClass:"goup"},[t._v("较前一日 ↑ "+t._s(t.orderAllData.money.third)+" ")]):t.orderAllData.money.secord<0?a("span",{staticClass:"decline"},[t._v("较前一日 ↓ "+t._s(t.orderAllData.money.third)+" ")]):a("span",{staticClass:"just"},[t._v("较前一日 → "+t._s(t.orderAllData.money.third)+" ")])])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content "},[a("p",[t._v("下单人数(昨日)")]),t._v(" "),a("span",[t._v(t._s(t.orderAllData.personNum.first))]),t._v(" "),t.orderAllData.personNum.secord>0?a("span",{staticClass:"goup"},[t._v("较前一日 ↑ "+t._s(t.orderAllData.personNum.third)+" ")]):t.orderAllData.personNum.secord<0?a("span",{staticClass:"decline"},[t._v("较前一日 ↓ "+t._s(t.orderAllData.personNum.third)+" ")]):a("span",{staticClass:"just"},[t._v("较前一日 → "+t._s(t.orderAllData.personNum.third)+" ")])])]),t._v(" "),a("el-col",{attrs:{span:5}},[a("div",{staticClass:"grid-content "},[a("p",[t._v("支付人数(昨日)")]),t._v(" "),a("span",[t._v(t._s(t.orderAllData.payNum.first))]),t._v(" "),t.orderAllData.payNum.secord>0?a("span",{staticClass:"goup"},[t._v("较前一日 ↑ "+t._s(t.orderAllData.payNum.third)+" ")]):t.orderAllData.payNum.secord<0?a("span",{staticClass:"decline"},[t._v("较前一日 ↓ "+t._s(t.orderAllData.payNum.third)+" ")]):a("span",{staticClass:"just"},[t._v("较前一日 → "+t._s(t.orderAllData.payNum.third)+" ")])])]),t._v(" "),a("el-col",{attrs:{span:4}},[a("div",{staticClass:"grid-content "},[a("p",[t._v("转化率(昨日)")]),t._v(" "),a("span",[t._v(t._s(t.orderAllData.rate.first))]),t._v(" "),t.orderAllData.rate.secord>0?a("span",{staticClass:"goup"},[t._v("较前一日 ↑ "+t._s(t.orderAllData.rate.third)+" ")]):t.orderAllData.rate.secord<0?a("span",{staticClass:"decline"},[t._v("较前一日 ↓ "+t._s(t.orderAllData.rate.third)+" ")]):a("span",{staticClass:"just"},[t._v("较前一日 → "+t._s(t.orderAllData.rate.third)+" ")])])])],1)],1),t._v(" "),a("div",{staticClass:"box"},[a("span",{staticClass:"outchart",staticStyle:{"z-index":"99999999999"},on:{click:t.dataExport}},[t._v("导出")]),t._v(" "),a("div",{attrs:{id:"orderChart"}})]),t._v(" "),a("div",{staticClass:"box"},[t._m(0),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content",attrs:{id:"orderDist"}})])],1)],1),t._v(" "),a("div",{staticClass:"box"},[t._m(1),t._v(" "),a("div",{staticClass:"list"},t._l(t.serviceList.list,function(e,s){return a("span",{key:e.id,class:t.serviceList.index==s?"select":"",on:{click:function(a){return t.packDistChange(s,e)}}},[t._v("       \n            "+t._s(e.value)+"    \n             ")])}),0),t._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content",attrs:{id:"packageDist"}})])],1)],1)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleBar"},[e("span",[this._v("订单分布")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"titleBar"},[e("span",[this._v("套餐分布")])])}]};var l=a("VU/8")(n,o,!1,function(t){a("izqI")},"data-v-78ab7ceb",null);e.default=l.exports},izqI:function(t,e){}});
//# sourceMappingURL=10.0d248c9cdb5c0a76cf82.js.map