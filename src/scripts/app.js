//import '../styles/app.scss';
//console.log("首页加载成功");
//import loim from '../media/index-mdd-logo.gif';
//import login from '../media/index-log.gif';
//import carsrc from '../media/index-shoppingcar.gif';
//import nav1 from '../media/index-nav1.gif';
//import nav2 from '../media/index-nav2.gif';
//import nav3 from '../media/index-nav3.gif';
//import nav4 from '../media/index-nav4.gif';
//var logoimg=new Image();
//var loginimg=new Image();
//var carimg=new Image();
//carimg.src=carsrc;
//logoimg.src=loim;
//loginimg.src=login;
//var logo=document.getElementsByClassName("logo")[0];
//logo.appendChild(logoimg);
//var log=document.getElementsByClassName("log")[0];
//log.appendChild(loginimg);
//var shoppingcar=document.getElementsByClassName("shoppingcars")[0];
//shoppingcar.appendChild(carimg);
//var nav1img=new Image();
//nav1img.src=nav1;
//var nav2img=new Image();
//nav2img.src=nav2;
//var nav3img=new Image();
//nav3img.src=nav3;
//var nav4img=new Image();
//nav4img.src=nav4;
//var li1=document.getElementsByClassName("new")[0];
//var li2=document.getElementsByClassName("female")[0];
//var li3=document.getElementsByClassName("hot")[0];
//var li4=document.getElementsByClassName("select")[0];
//li1.appendChild(nav1img);
//li2.appendChild(nav2img);
//li3.appendChild(nav3img);
//li4.appendChild(nav4img);
import Vue from 'vue'
import Index from './pages/index.up.vue'
//载入index的主体
import footerarea from './pages/common-footer.vue'
//载入尾部
new Vue({
  el: '#root',
  components: {
    Index: Index
  }
})
new Vue({
	el:'#footarea',
	components:{
		footerarea:footerarea
	}
})
