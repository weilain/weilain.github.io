var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "/joke.ico");
         document.title = '看不见我🙈~看不见我🙈~';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "/favicon.ico");
         document.title = ' ( ๑•̀ㅂ•́) ✧被发现了～';
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });

<script type="text/javascript"> var infolinks_pid = 3310385; var infolinks_wsid = 0; </script>
