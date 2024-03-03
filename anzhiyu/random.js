var posts=["2024/02/28/hello-world/","2020/12/01/My-New-PostMB/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };