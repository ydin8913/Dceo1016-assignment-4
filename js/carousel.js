var banenrCenter = document.querySelector('.banenr-center');
  // var butLeft = document.querySelector('.but-left');
  // var burRight = document.querySelector('.but-right');
  var center = document.querySelector('.center');
  var lis = document.querySelectorAll('.centers li');
  var width = banenrCenter.offsetWidth;
  console.log(width);
  var one = document.getElementById('one');
  var index = 0;
 var clone = one.cloneNode(true);
 center.appendChild(clone);
 //右滚动
 function burRightF() {
     if(index==0){
         center.style.left = 0 + 'px';
     }
     lis[index].className = '';
     index++;
     distance = - index * width
     moveElement(center,distance,10)
     if (index == 6) {
         index = 0;
     }
     // center.style.left = - index * width + 'px';
     lis[index].className = 'active';
 };
 //左滚动
 function butLeftF() {
     lis[index].className = '';
     index--;
     distance = - index * width
     moveElement(center,distance,10)
     if (index < 0) {
         index = 5
         center.style.left = -4200 + 'px';
     };
     // center.style.left = - index * width + 'px';
 
     lis[index].className = 'active';
 };
 //小点跟随
 for (var i = 0; i < lis.length; i++) {
     lis[i].xiabiao = i;
     lis[i].onclick = function () {
         lis[index].className = '';
         index = this['xiabiao'];
         // center.style.left = -index * width + 'px';
         distance = - index * width
         moveElement(center,distance,10)
         lis[index].className = 'active';
     }
 }
 //自动轮播
 var auto = window.setInterval(function(){
     burRightF();
 },2000);
 banenrCenter.onmouseover = function(){
     window.clearInterval(auto);
 };
 banenrCenter.onmouseout = function(){
     auto = window.setInterval(function(){
         burRightF();
     },2000);
 }