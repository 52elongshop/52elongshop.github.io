var posts=["2020/12/01/My-New-PostMB/","2024/02/28/hello-world/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };