window.onload = function(){


          var obody = document.body;
          setInterval(fntime,1000)
          fntime();


          function fntime(){var mytime = new Date();
        var iyear  = mytime.getFullYear();
        var imonth  = mytime.getMonth();+1;
        var idate   = mytime.getDate();
        var iweek  = mytime.getDay();
        var ihours  = mytime.getHours();
        var imin  = mytime.getMinutes();
        var isec  = mytime.getSeconds();
        var str = '';


        if (iweek===0) iweek='星期日';
        if (iweek===1) iweek='星期一';
        if (iweek===2) iweek='星期二';
        if (iweek===3) iweek='星期三';
        if (iweek===4) iweek='星期四';
        if (iweek===5) iweek='星期五';
        if (iweek===6) iweek='星期六';

        str = iyear+'年'+imonth+'月'+idate+'日 '+iweek+' '+totwo(ihours)+':'+totwo(imin)+':'+totwo(isec);
         obody.innerHTML = str;
     }


        }

        function totwo(n){
          if(n<10){
           return '0'+n;
          }else{

            return ''+n;
          }


        }
