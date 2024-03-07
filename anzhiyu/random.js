var posts=["2020/12/01/My-New-PostMB/","2024/03/03/GitHub上优秀的嵌入式开源项目/","2024/02/28/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };