//可以与 valine 的配置 js 文件放一起，或放置到公共 js 文件中
$("#veditor").focus(function(){$(this).css("background-image","none");});
$("#veditor").blur(function(){
      $(this).css("background-image","url(https://cdn.jsdelivr.net/gh/weilain/cdn-photo/Photo/valine.webp)");
   }
);

