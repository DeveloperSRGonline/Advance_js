function profileLekarAao(username, cb) {
  console.log("Fetching profile data...........");
  setTimeout(() => {
    cb({ _id: 123232, username });
  }, 2000);
}
function saareDataLekarAao(id, cb) {
  console.log("Fetching all posts data...........");
  setTimeout(() => {
    cb({ _id: id, posts: ["Hey", "Hello", "Hii", "How are you"] });
  }, 3000);
}
function savedPostNikalo(id,cb){
    console.log("Fetching saved post");
    setTimeout(() => {
        cb({_id:id,saved:[1,2,3,4,5,6]})
    }, 3000);
}
profileLekarAao("shivam", function (data) {
  console.log(data);
  saareDataLekarAao(data._id, function (posts) {
    console.log(posts);
    savedPostNikalo(data._id,function(saved){
        console.log(saved);
    })
  });
});

//  app.get('/users', (req, res) => {
