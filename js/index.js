//获取class名元素
var getByClass=function(className){
	return document.getElementsByClassName(className);
}
//添加class函数
var addClass=function(element,_className){
	var className=element.className.split(' ');
	var classNameMap={}
	for(var i=0;i<className.length;i++){
		classNameMap[className[i]]=1;
	}
	classNameMap[_className]=1;
	className=[];
	for(i in classNameMap){
		className.push(i);
	}
	element.className=className.join(' ');
}
//删除class函数
var removeClass=function(element,_className){
	var className=element.className.split(' ');
	var classNameMap={};
	for(var i=0;i<className.length;i++){
		classNameMap[className[i]]=1;
	}
	delete classNameMap[_className];
	className=[];
	for(i in classNameMap){
		className.push(i);
	}
	element.className=className.join(' ');
}

//
window.onload=function(){
		addClass(getByClass('screen_1_title')[0],'screen_1_title_done');
	    addClass(getByClass('screen_1_sub_title')[0],'screen_1_sub_title_done');
	    addClass(getByClass('header')[0],'header_done');
//
getByClass('header_nav_1')[0].onclick=function(){
	document.body.scrollTop=0;
	addClass(getByClass('header_nav_1')[0],'nav_active');
	removeClass(getByClass('header_nav_2')[0],'nav_active');
	removeClass(getByClass('header_nav_3')[0],'nav_active');
	removeClass(getByClass('header_nav_4')[0],'nav_active');
	removeClass(getByClass('header_nav_5')[0],'nav_active');
}
getByClass('header_nav_2')[0].onclick=function(){
	document.body.scrollTop=640;
	addClass(getByClass('header_nav_2')[0],'nav_active');
	removeClass(getByClass('header_nav_1')[0],'nav_active');
	removeClass(getByClass('header_nav_3')[0],'nav_active');
	removeClass(getByClass('header_nav_4')[0],'nav_active');
	removeClass(getByClass('header_nav_5')[0],'nav_active');
}
getByClass('header_nav_3')[0].onclick=function(){
	document.body.scrollTop=640*2;
	addClass(getByClass('header_nav_3')[0],'nav_active');
	removeClass(getByClass('header_nav_2')[0],'nav_active');
	removeClass(getByClass('header_nav_1')[0],'nav_active');
	removeClass(getByClass('header_nav_4')[0],'nav_active');
	removeClass(getByClass('header_nav_5')[0],'nav_active');
}
getByClass('header_nav_4')[0].onclick=function(){
	document.body.scrollTop=640*3;
	addClass(getByClass('header_nav_4')[0],'nav_active');
	removeClass(getByClass('header_nav_2')[0],'nav_active');
	removeClass(getByClass('header_nav_3')[0],'nav_active');
	removeClass(getByClass('header_nav_1')[0],'nav_active');
	removeClass(getByClass('header_nav_5')[0],'nav_active');
}
getByClass('header_nav_5')[0].onclick=function(){
	document.body.scrollTop=640*4;
	addClass(getByClass('header_nav_5')[0],'nav_active');
	removeClass(getByClass('header_nav_2')[0],'nav_active');
	removeClass(getByClass('header_nav_3')[0],'nav_active');
	removeClass(getByClass('header_nav_4')[0],'nav_active');
	removeClass(getByClass('header_nav_1')[0],'nav_active');
}
}

window.onscroll=function(){
	var top=document.body.scrollTop||document.documentElement.scrollTop;
	if(top>60){addClass(getByClass('header')[0],'header_down');}else{removeClass(getByClass('header')[0],'header_down')}
	if(top>300){
		addClass(getByClass('screen_2_title')[0],'screen_2_title_done');
		addClass(getByClass('screen_2_sub_title')[0],'screen_2_sub_title_done');
		addClass(getByClass('screen_2_sec_1')[0],'screen_2_sec_1_done');
		addClass(getByClass('screen_2_sec_2')[0],'screen_2_sec_2_done');
	}
	if(top>920){
		addClass(getByClass('screen_3_title')[0],'screen_3_title_done');
		addClass(getByClass('screen_3_sub_title')[0],'screen_3_sub_title_done');
		addClass(getByClass('screen_3_sec_1')[0],'screen_3_sec_1_done');
		addClass(getByClass('screen_3_sec_2')[0],'screen_3_sec_2_done');
	}
	if(top>1500){
		addClass(getByClass('screen_4_title')[0],'screen_4_title_done');
		addClass(getByClass('screen_4_sub_title')[0],'screen_4_sub_title_done');
		addClass(getByClass('screen_4_sec_1')[0],'screen_4_sec_1_done');
		addClass(getByClass('screen_4_sec_2')[0],'screen_4_sec_2_done');
		addClass(getByClass('screen_4_sec_3')[0],'screen_4_sec_3_done');
		addClass(getByClass('screen_4_sec_4')[0],'screen_4_sec_4_done');
	}
	if(top>2100){
		addClass(getByClass('screen_5_title')[0],'screen_5_title_done');
		addClass(getByClass('screen_5_sub_title')[0],'screen_5_sub_title_done');
		addClass(getByClass('screen_5_sec')[0],'screen_5_sec_done');
	}
	if(top>0&&top<200){
		addClass(getByClass('header_nav_1')[0],'nav_active');
		removeClass(getByClass('header_nav_2')[0],'nav_active');
		removeClass(getByClass('header_nav_3')[0],'nav_active');
		removeClass(getByClass('header_nav_4')[0],'nav_active');
		removeClass(getByClass('header_nav_5')[0],'nav_active');
	}
	if(top<600&&top>550){
		addClass(getByClass('header_nav_2')[0],'nav_active');
		removeClass(getByClass('header_nav_1')[0],'nav_active');
		removeClass(getByClass('header_nav_3')[0],'nav_active');
		removeClass(getByClass('header_nav_4')[0],'nav_active');
		removeClass(getByClass('header_nav_5')[0],'nav_active');
	}
		if(top>1100&&top<1200){
		addClass(getByClass('header_nav_3')[0],'nav_active');
		removeClass(getByClass('header_nav_1')[0],'nav_active');
		removeClass(getByClass('header_nav_2')[0],'nav_active');
		removeClass(getByClass('header_nav_4')[0],'nav_active');
		removeClass(getByClass('header_nav_5')[0],'nav_active');
	}
		if(top<1800&&top>1650){
		addClass(getByClass('header_nav_4')[0],'nav_active');
		removeClass(getByClass('header_nav_1')[0],'nav_active');
		removeClass(getByClass('header_nav_2')[0],'nav_active');
		removeClass(getByClass('header_nav_3')[0],'nav_active');
		removeClass(getByClass('header_nav_5')[0],'nav_active');
	}
		if(top<3200&&top>2300){
		addClass(getByClass('header_nav_5')[0],'nav_active');
		removeClass(getByClass('header_nav_1')[0],'nav_active');
		removeClass(getByClass('header_nav_2')[0],'nav_active');
		removeClass(getByClass('header_nav_3')[0],'nav_active');
		removeClass(getByClass('header_nav_4')[0],'nav_active');
	}
}