function getId(id){
	return document.getElementById(id);
}

var banner_img=getId("banner_img"),
    bimg=banner_img.getElementsByTagName("a"),
    len=bimg.length,
    index=1,
    banner_sub=getId("banner_sub"),
    spans=banner_sub.getElementsByTagName("span"),
    timer=null,
    banner=getId("banner"),
    button_1=getId("button_1"),
    button_2=getId("button_2"),
    cursor=getId("cursor"),
    banner_list=getId("banner_list"),
    aUl=getId("aUl"),
    lis=aUl.getElementsByTagName("li"),
    adiv=aUl.getElementsByTagName("div");
    
console.log(adiv);
/*封装切换图片的函数*/
function change(){
   for(var i=0;i<len;i++){
   	   bimg[i].className="";
   	   spans[i].className="";
   }
   bimg[index].className="banner_active";
   spans[index].className="on";
   index++;
   if(index==len){index=0;}
}

/*定时切换*/
function AutoPlay(){
	timer=setInterval(change,2500)
}
AutoPlay();

/*点击原点切换*/
for(var i=0;i<len;i++){
	spans[i].id=i;
	spans[i].onclick=function(){
		index=this.id;
		change();
	}
}

/*鼠标移入停止切换*/
banner.onmouseover=function(){
    clearInterval(timer);
}
/*鼠标移出继续切换*/
banner.onmouseout=function(){
    AutoPlay();
}
/*点击按钮切换图片*/
button_1.onclick=function(){
	index++;
	if (index==len) {index=0;}
	change();
}
button_2.onclick=function(){
	change();
}
/*移入鼠标展开二级菜单*/
for(var i=0;i<lis.length;i++){
  lis[i].j=i;
  lis[i].onmouseover=function(){
    for(var i=0;i<lis.length;i++){
      lis[i].className="";
      adiv[i].style.display="none";
    }
    lis[this.j].className="list_active";
    adiv[this.j].style.display="block";
  }
}
/*移出鼠标收起二级菜单*/
for(var i=0;i<lis.length;i++){
  lis[i].onmouseout=function(){
    for(var i=0;i<lis.length;i++){
      lis[i].className="";
      adiv[i].style.display="none";
    }
  }
}
