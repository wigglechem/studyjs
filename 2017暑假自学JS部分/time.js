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


        if (iweek===0) iweek='������';
        if (iweek===1) iweek='����һ';
        if (iweek===2) iweek='���ڶ�';
        if (iweek===3) iweek='������';
        if (iweek===4) iweek='������';
        if (iweek===5) iweek='������';
        if (iweek===6) iweek='������';

        str = iyear+'��'+imonth+'��'+idate+'�� '+iweek+' '+totwo(ihours)+':'+totwo(imin)+':'+totwo(isec);
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
