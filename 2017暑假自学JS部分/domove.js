function domove(obj,attr,dir,target){
    clearInterval(obj.timer);
   obj.timer = setInterval(function(){

    var speed = parseInt(getStyle(obj,attr)) + dir ;  //²½³¤
    if (speed > target && dir>0){
        speed = target;
    }
     if (speed < target && dir<0){
        speed = target;
    }
    obj.style[attr] = speed +'px';
    if (speed==target){
        clearInterval(obj.timer)
    }




},30)
   }

function getStyle(obj,attr){return obj.currentStyle?obj.currentStyle[attr]:getComputedStyle(obj)[attr]}