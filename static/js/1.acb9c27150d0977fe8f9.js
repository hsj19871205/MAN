webpackJsonp([1],{"7dGA":function(e,t){},HJvg:function(e,t){},OVGs:function(e,t){},OiHw:function(e,t){},YH5e:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a("0BaK"),n=a("yJFt"),l=a("kVYb"),o={data:function(){return{radio:1,time:"",isStart:!1,type:"act_users,using_time,group_users,group_size,reboot",dataList:""}},mounted:function(){var e=this;this.$nextTick(function(){e.userAct()})},methods:{changeDate:function(e){if(this.time=e,this.isStart){var t="reboot",a=this.radio;1==a?t="reboot":2==a?t="reset":3==a?t="screenshot":4==a?t="new_group":5==a?t="apk_install":6==a&&(t="apk_uninstall"),this.type="act_users,using_time,group_users,group_size,"+t,this.userAct()}else this.isStart=!this.isStart},radioChange:function(e){var t=this;switch(e){case 1:this.type="reboot";break;case 2:this.type="reset";break;case 3:this.type="screenshot";break;case 4:this.type="new_group";break;case 5:this.type="apk_install";break;case 6:this.type="apk_uninstall"}var a=new Object;a.time1=this.time[0],a.time2=this.time[1],a.types=this.type,Object(l.l)(a).then(function(a){200==a.code&&(1==e?t.otherOperationFun(a.data.reboot):2==e?t.otherOperationFun(a.data.reset):3==e?t.otherOperationFun(a.data.screenshot):4==e?t.otherOperationFun(a.data.new_group):5==e?t.otherOperationFun(a.data.apk_install):6==e&&t.otherOperationFun(a.data.apk_uninstall))}).catch(function(e){console.log(e)})},userAct:function(){var e=this,t=this.radio,a=new Object;a.time1=this.time[0],a.time2=this.time[1],a.types=this.type,Object(l.l)(a).then(function(a){200==a.code&&(e.dataList=a.data,e.phoneStartNumFun(),e.phoneConTimeFun(),e.phoneGroupNumFun(),e.phoneGroupAveNumFun(),1==t?e.otherOperationFun(a.data.reboot):2==t?e.otherOperationFun(a.data.reset):3==t?e.otherOperationFun(a.data.screenshot):4==t?e.otherOperationFun(a.data.new_group):5==t?e.otherOperationFun(a.data.apk_install):6==t&&e.otherOperationFun(a.data.apk_uninstall))}).catch(function(e){console.log(e)})},phoneStartNumFun:function(){var e=this.$echarts.init(document.getElementById("phoneStartNum")),t={grid:{top:"15%",left:"3%",right:"2%",bottom:"8%",containLabel:!0},title:{text:"云机启动人数",textStyle:{fontWeight:"normal"},fontSize:16,left:"2%",top:10},tooltip:{trigger:"axis"},xAxis:{type:"category",data:this.dataList.act_users.time},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"云机启动人数",data:this.dataList.act_users.data,type:"line",itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]};e.setOption(t);var a=document.getElementById("phoneStartNum");i.a.on(a,function(){e.resize()})},phoneConTimeFun:function(){var e=this.$echarts.init(document.getElementById("phoneConTime")),t={grid:{top:"15%",left:"3%",right:"2%",bottom:"8%",containLabel:!0},title:{text:"云机连接时长",textStyle:{fontWeight:"normal"},fontSize:16,left:"2%",top:10},tooltip:{trigger:"axis"},xAxis:{type:"category",data:this.dataList.using_time.time},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"云机连接时长",data:this.dataList.using_time.data,type:"line",itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]};e.setOption(t);var a=document.getElementById("phoneConTime");i.a.on(a,function(){e.resize()})},phoneGroupNumFun:function(){var e=this.$echarts.init(document.getElementById("phoneGroupNum")),t={grid:{top:"15%",left:"3%",right:"2%",bottom:"8%",containLabel:!0},title:{text:"群控使用人数",textStyle:{fontWeight:"normal"},fontSize:16,left:"2%",top:10},tooltip:{trigger:"axis"},xAxis:{type:"category",data:this.dataList.group_users.time},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"群控使用人数",data:this.dataList.group_users.data,type:"line",itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]};e.setOption(t);var a=document.getElementById("phoneGroupNum");i.a.on(a,function(){e.resize()})},phoneGroupAveNumFun:function(){var e=this.$echarts.init(document.getElementById("phoneGroupAveNum")),t={grid:{top:"15%",left:"3%",right:"2%",bottom:"8%",containLabel:!0},title:{text:"群控平均云机数",textStyle:{fontWeight:"normal"},fontSize:16,left:"2%",top:10},tooltip:{trigger:"axis"},xAxis:{type:"category",data:this.dataList.group_size.time},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"群控平均云机数",data:this.dataList.group_size.data,type:"line",itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]};e.setOption(t);var a=document.getElementById("phoneGroupAveNum");i.a.on(a,function(){e.resize()})},otherOperationFun:function(e){var t=this.$echarts.init(document.getElementById("otherOperation")),a={grid:{top:"8%",left:"2%",right:"2%",bottom:"20%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:e.time},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"使用率",data:e.data,type:"line",itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]};t.setOption(a);var n=document.getElementById("otherOperation");i.a.on(n,function(){t.resize()})}},components:{DateSearch:n.a}},s={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DateSearch",{on:{func:e.changeDate}}),e._v(" "),a("div",{staticClass:"box"},[e._m(0),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple",attrs:{id:"phoneStartNum"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light",attrs:{id:"phoneConTime"}})])],1)],1),e._v(" "),a("div",{staticClass:"box"},[e._m(1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple",attrs:{id:"phoneGroupNum"}})]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"grid-content bg-purple-light",attrs:{id:"phoneGroupAveNum"}})])],1)],1),e._v(" "),a("div",{staticClass:"box"},[e._m(2),e._v(" "),a("div",{staticClass:"radio-list"},[a("span",[e._v("其它操作：")]),e._v(" "),a("el-radio-group",{on:{change:e.radioChange},model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio",{attrs:{label:1}},[e._v("云机重启")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("恢复出厂")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("屏幕截图")]),e._v(" "),a("el-radio",{attrs:{label:4}},[e._v("新建分组")]),e._v(" "),a("el-radio",{attrs:{label:5}},[e._v("应用安装")]),e._v(" "),a("el-radio",{attrs:{label:6}},[e._v("应用卸载")])],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple",attrs:{id:"otherOperation"}})])],1)],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleBar"},[t("span",[this._v("云机控制器使用率")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleBar"},[t("span",[this._v("云机群控使用率")])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleBar"},[t("span",[this._v("其它操作使用率")])])}]};var r=a("VU/8")(o,s,!1,function(e){a("OiHw")},"data-v-7b7a959d",null).exports,c=a("bOdI"),u=a.n(c),p={data:function(){return{time:"",appNum:{index:0,list:[{id:"0",type:"upload",value:"应用上传数"},{id:"1",type:"install",value:"应用安装数"},{id:"2",type:"using_time",value:"应用使用时长"}]},type:"upload",appList:""}},mounted:function(){var e=this;this.$nextTick(function(){e.lastWeekClick()})},methods:{format:function(e){var t=new Date(e);return t.getFullYear()+"-"+((t.getMonth()+1<10?"0"+(t.getMonth()+1):t.getMonth()+1)+"-")+(t.getDate()<10?"0"+t.getDate():t.getDate())},yesterdayClick:function(){var e=new Date,t=new Date,a=t.setTime(t.getTime()-864e5);this.time=[this.format(a),this.format(e.getTime())],this.appInstall(),this.applSizeCount()},lastWeekClick:function(){var e=new Date,t=new Date,a=t.setTime(t.getTime()-6048e5);this.time=[this.format(a),this.format(e.getTime())],this.appInstall(),this.applSizeCount()},lastMonthClick:function(){var e=new Date,t=new Date,a=t.setTime(t.getTime()-2592e6);this.time=[this.format(a),this.format(e.getTime())],this.appInstall(),this.applSizeCount()},selectDate:function(e){this.time=[this.format(e[0]),this.format(e[1])],this.appInstall(),this.lastWeekClick()},appInstall:function(){var e=this,t=new Object;t.time1=this.time[0],t.time2=this.time[1],t.type=this.type,Object(l.b)(t).then(function(t){200==t.code&&(e.appList=t.data,e.appRanking())}).catch(function(e){console.log(e)})},appNumChange:function(e,t){this.appNum.index=e,this.type=t.type,this.appInstall()},appRanking:function(){var e=this.appList.name.reverse(),t=this.appList.data.reverse(),a=this.$echarts.init(document.getElementById("appRanking")),n={tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"2%",left:"3%",right:"4%",bottom:"10%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01]},yAxis:{type:"category",data:e},series:[{name:"数据",type:"bar",barWidth:15,data:t,itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]};a.setOption(n);var l=document.getElementById("appRanking");i.a.on(l,function(){a.resize()})},applSizeCount:function(){var e=this,t=new Object;t.time1=this.time[0],t.time2=this.time[1],t.types="apk_size",Object(l.k)(t).then(function(t){if(200==t.code){var a=t.data.apk_size,n=a[0].value+a[1].value+a[2].value+a[3].value,l=e.$echarts.init(document.getElementById("appSizeCount")),o=[{value:a[0].value,legendname:a[0].name,name:a[0].name,itemStyle:{color:"#8d7fec"}},{value:a[1].value,legendname:a[1].name,name:a[1].name,itemStyle:{color:"#5085f2"}},{value:a[2].value,legendname:a[2].name,name:a[2].name,itemStyle:{color:"#e75fc3"}},{value:a[3].value,legendname:a[3].name,name:a[3].name,itemStyle:{color:"#f87be2"}},{value:a[4].value,legendname:a[4].name,name:a[4].name,itemStyle:{color:"#f2719a"}}],s={title:[{text:"合计",subtext:n+"个",textStyle:{fontSize:20,color:"black"},subtextStyle:{fontSize:20,color:"black"},textAlign:"center",x:"35%",y:"44%"}],tooltip:{trigger:"item",formatter:function(e){return e.seriesName+"</br>"+e.marker+e.data.legendname+"</br>数量："+e.data.value+"</br>占比："+e.percent+"%"}},legend:u()({icon:"circle",type:"scroll",orient:"vertical",left:"60%",align:"left",top:"middle",textStyle:{color:"#8C8C8C"},height:250,formatter:function(e){var t=o.map(function(e){return e.value}).reduce(function(e,t){return parseInt(e,10)+parseInt(t,10)}),a=o.filter(function(t){return t.legendname===e})[0].value;return 0===t?"{a|"+e+"：}{b|0.00%}":"{a|"+e+"} {d||} {b|"+Number(100*a/t).toFixed(2)+"%}   {c|"+t+"}"}},"textStyle",{color:"black",fontSize:14,rich:{a:{color:"black",fontSize:14},b:{color:"black",fontSize:14},c:{color:"#ccc",fontSize:14},d:{color:"#ccc"}}}),series:[{name:"标题",type:"pie",center:["35%","50%"],radius:["60%","75%"],clockwise:!1,avoidLabelOverlap:!1,label:{show:!1},labelLine:{show:!1},data:o}]};l.setOption(s);var r=document.getElementById("appSizeCount");i.a.on(r,function(){l.resize()})}}).catch(function(e){console.log(e)})}}},d={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"box",staticStyle:{height:"600px"}},[a("div",{staticClass:"toolBar"},[a("el-row",[a("el-col",{attrs:{span:4}},[a("div",{staticClass:"left"},[a("span",[e._v("安装应用排行TOP20")])])]),e._v(" "),a("el-col",{attrs:{span:24}},[a("div",{staticClass:"right"},[a("el-button-group",[a("el-button",{on:{click:e.yesterdayClick}},[e._v("昨日")]),e._v(" "),a("el-button",{on:{click:e.lastWeekClick}},[e._v("近7日")]),e._v(" "),a("el-button",{on:{click:e.lastMonthClick}},[e._v("近30日")])],1),e._v(" "),a("div",{staticClass:"block"},[a("el-date-picker",{attrs:{type:"daterange","range-separator":"~","start-placeholder":"开始日期","end-placeholder":"结束日期"},on:{change:e.selectDate},model:{value:e.time,callback:function(t){e.time=t},expression:"time"}})],1)],1)])],1)],1),e._v(" "),a("div",{staticClass:"list"},e._l(e.appNum.list,function(t,i){return a("span",{key:t.id,class:e.appNum.index==i?"select":"",on:{click:function(a){return e.appNumChange(i,t)}}},[e._v("       \n            "+e._s(t.value)+"    \n             ")])}),0),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content ",attrs:{id:"appRanking"}})])],1)],1),e._v(" "),a("el-row",[a("el-col",{attrs:{span:8}},[a("div",{staticClass:"box"},[a("div",{staticClass:"titleBar"},[a("span",[e._v("应用大小统计")])]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content ",attrs:{id:"appSizeCount"}})])],1)],1)])],1)],1)},staticRenderFns:[]};var m=a("VU/8")(p,d,!1,function(e){a("OVGs")},"data-v-5b797d38",null).exports,h={data:function(){return{fileNum:{index:0,list:[{id:"0",value:"文件上传数"},{id:"1",value:"文件分发数"}]},type:"file_upload",isStart:!1}},mounted:function(){this.lineChart(),this.pieChart()},methods:{changeDate:function(e){this.time=e,this.isStart?(this.lineChart(),this.pieChart()):this.isStart=!this.isStart},fileOperCount:function(e){var t=this.$echarts.init(document.getElementById("fileOperCount")),a={grid:{top:"8%",left:"2%",right:"2%",bottom:"18%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:e.time},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"文件数",data:e.data,type:"line",itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]};t.setOption(a);var n=document.getElementById("fileOperCount");i.a.on(n,function(){t.resize()})},fileNumChange:function(e,t){this.fileNum.index=e,this.type=0==e?"file_upload":"file_distribute",this.lineChart()},pieChart:function(){var e=this,t=new Object;t.time1=this.time[0],t.time2=this.time[1],t.types="file_type,file_size",Object(l.k)(t).then(function(t){200==t.code&&(e.fileTypeCount(t.data.file_type),e.fileSizeCount(t.data.file_size))}).catch(function(e){console.log(e)})},lineChart:function(){var e=this,t=new Object;t.time1=this.time[0],t.time2=this.time[1],t.types=this.type,Object(l.l)(t).then(function(t){200==t.code&&(0==e.fileNum.index?e.fileOperCount(t.data.file_upload):e.fileOperCount(t.data.file_distribute))}).catch(function(e){console.log(e)})},fileTypeCount:function(e){var t=this.$echarts.init(document.getElementById("fileTypeCount")),a={tooltip:{trigger:"item"},legend:{icon:"circle",orient:"vertical",left:"60%",top:"35%"},series:[{name:"标题",type:"pie",radius:"80%",center:["40%","50%"],data:[{value:e[0].value,name:e[0].name,itemStyle:{color:"#8d7fec"}},{value:e[1].value,name:e[1].name,itemStyle:{color:"#5085f4"}},{value:e[2].value,name:e[2].name,itemStyle:{color:"#e75fc3"}},{value:e[3].value,name:e[3].name,itemStyle:{color:"#f2719a"}}],label:{show:!1},labelLine:{show:!1},emphasis:{itemStyle:{shadowBlur:10,shadowOffsetX:0,shadowColor:"rgba(0, 0, 0, 0.5)"}}}]};t.setOption(a);var n=document.getElementById("fileTypeCount");i.a.on(n,function(){t.resize()})},fileSizeCount:function(e){var t=e[0].value+e[1].value+e[2].value+e[3].value+e[4].value,a=this.$echarts.init(document.getElementById("fileSizeCount")),n={title:[{text:"合计",subtext:t+"个",textStyle:{fontSize:20,color:"black"},subtextStyle:{fontSize:20,color:"black"},textAlign:"center",x:"35%",y:"44%"}],tooltip:{trigger:"item",formatter:function(e){return e.seriesName+"</br>"+e.marker+e.data.legendname+"</br>数量："+e.data.value+"</br>占比："+e.percent+"%"}},legend:{icon:"circle",type:"scroll",orient:"vertical",left:"60%",align:"left",top:"middle",textStyle:{color:"#8C8C8C"},height:250},series:[{name:"标题",type:"pie",center:["35%","50%"],radius:["60%","75%"],clockwise:!1,avoidLabelOverlap:!1,label:{show:!1},labelLine:{show:!1},data:[{value:e[0].value,legendname:e[0].name,name:e[0].name,itemStyle:{color:"#8d7fec"}},{value:e[1].value,legendname:e[1].name,name:e[1].name,itemStyle:{color:"#5085f2"}},{value:e[2].value,legendname:e[2].name,name:e[2].name,itemStyle:{color:"#e75fc3"}},{value:e[3].value,legendname:e[3].name,name:e[3].name,itemStyle:{color:"#f87be2"}},{value:e[4].value,legendname:e[4].name,name:e[4].name,itemStyle:{color:"#f2719a"}}]}]};a.setOption(n);var l=document.getElementById("fileSizeCount");i.a.on(l,function(){a.resize()})}},components:{DateSearch:n.a}},v={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DateSearch",{on:{func:e.changeDate}}),e._v(" "),a("div",{staticClass:"box"},[e._m(0),e._v(" "),a("div",{staticClass:"list"},e._l(e.fileNum.list,function(t,i){return a("span",{key:t.id,class:e.fileNum.index==i?"select":"",on:{click:function(a){return e.fileNumChange(i,t)}}},[e._v("       \n            "+e._s(t.value)+"    \n             ")])}),0),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple",attrs:{id:"fileOperCount"}})])],1)],1),e._v(" "),a("el-row",{attrs:{gutter:20}},[a("el-col",{attrs:{span:12}},[a("div",{staticClass:"box"},[a("div",{staticClass:"titleBar"},[a("span",[e._v("文件类型统计")])]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple",attrs:{id:"fileTypeCount"}})])],1)],1)]),e._v(" "),a("el-col",{attrs:{span:12}},[a("div",{staticClass:"box"},[a("div",{staticClass:"titleBar"},[a("span",[e._v("文件大小统计")])]),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple",attrs:{id:"fileSizeCount"}})])],1)],1)])],1)],1)},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"titleBar"},[t("span",[this._v("文件操作统计")])])}]};var f=a("VU/8")(h,v,!1,function(e){a("HJvg")},"data-v-0449e449",null).exports,g={data:function(){return{radio:1,phoneNumType:{index:0,list:[{id:"0",value:"订购台数"},{id:"1",value:"使用率"},{id:"2",value:"到期台数"},{id:"3",value:"使用次数"}]}}},mounted:function(){this.extendServerDataFun()},methods:{phoneNumTypeChange:function(e,t){this.phoneNumType.index=e},changeDate:function(e){console.log(e)},extendServerDataFun:function(){var e=this.$echarts.init(document.getElementById("extendServerData"));e.setOption({grid:{top:"8%",left:"2%",right:"2%",bottom:"18%",containLabel:!0},tooltip:{trigger:"axis"},xAxis:{type:"category",data:["2021-05-22","2021-05-23","2021-05-24","2021-05-25","2021-05-26","2021-05-27","2021-05-28"]},yAxis:{type:"value",axisLine:{show:!1},axisTick:{show:!1},splitLine:{lineStyle:{type:"dashed"}}},series:[{name:"使用人数",data:[150,230,224,218,135,147,260],type:"line",itemStyle:{normal:{color:"#409eff",lineStyle:{color:"#409eff"}}}}]});var t=document.getElementById("extendServerData");i.a.on(t,function(){e.resize()})}},components:{DateSearch:n.a}},y={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("DateSearch",{on:{func:e.changeDate}}),e._v(" "),a("div",{staticClass:"box"},[a("div",{staticClass:"titleBar"},[a("span",[e._v("拓展服务数据指标")]),e._v(" "),a("div",{staticClass:"radio-list"},[a("el-radio-group",{model:{value:e.radio,callback:function(t){e.radio=t},expression:"radio"}},[a("el-radio",{attrs:{label:1}},[e._v("IP代理")]),e._v(" "),a("el-radio",{attrs:{label:2}},[e._v("设备大师")]),e._v(" "),a("el-radio",{attrs:{label:3}},[e._v("虚拟定位")]),e._v(" "),a("el-radio",{attrs:{label:4}},[e._v("窗口多开")]),e._v(" "),a("el-radio",{attrs:{label:5}},[e._v("多路实时直播")]),e._v(" "),a("el-radio",{attrs:{label:6}},[e._v("远程虚拟相机")]),e._v(" "),a("el-radio",{attrs:{label:7}},[e._v("日志调试")]),e._v(" "),a("el-radio",{attrs:{label:8}},[e._v("高调试ADB")])],1)],1)]),e._v(" "),a("div",{staticClass:"list"},e._l(e.phoneNumType.list,function(t,i){return a("span",{key:t.id,class:e.phoneNumType.index==i?"select":"",on:{click:function(a){return e.phoneNumTypeChange(i,t)}}},[e._v("       \n            "+e._s(t.value)+"    \n             ")])}),0),e._v(" "),a("el-row",[a("el-col",{attrs:{span:24}},[a("div",{staticClass:"grid-content bg-purple",attrs:{id:"extendServerData"}})])],1)],1)],1)},staticRenderFns:[]};var _={data:function(){return{activeName:"1"}},methods:{handleClick:function(e,t){this.activeName=e.name}},components:{UserAction:r,AppInstall:m,FileHandOut:f,ExpandingServices:a("VU/8")(g,y,!1,function(e){a("7dGA")},"data-v-1aefcb27",null).exports}},b={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"maxBox"},[a("el-tabs",{on:{"tab-click":e.handleClick},model:{value:e.activeName,callback:function(t){e.activeName=t},expression:"activeName"}},[a("el-tab-pane",{attrs:{label:"用户操作",name:"1"}},[1==e.activeName?a("UserAction"):e._e()],1),e._v(" "),a("el-tab-pane",{attrs:{label:"应用安装",name:"2"}},[2==e.activeName?a("AppInstall"):e._e()],1),e._v(" "),a("el-tab-pane",{attrs:{label:"文件分发",name:"3"}},[3==e.activeName?a("FileHandOut"):e._e()],1),e._v(" "),a("el-tab-pane",{attrs:{label:"拓展服务",name:"4"}},[4==e.activeName?a("ExpandingServices"):e._e()],1)],1)],1)},staticRenderFns:[]};var x=a("VU/8")(_,b,!1,function(e){a("h4VA")},"data-v-b84f9b1e",null);t.default=x.exports},bOdI:function(e,t,a){"use strict";t.__esModule=!0;var i,n=a("C4MV"),l=(i=n)&&i.__esModule?i:{default:i};t.default=function(e,t,a){return t in e?(0,l.default)(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}},h4VA:function(e,t){}});
//# sourceMappingURL=1.acb9c27150d0977fe8f9.js.map