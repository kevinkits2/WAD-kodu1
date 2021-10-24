//$(function() {
    
     //$.get(URL = "https://api.npoint.io/638f88e48a61ec1a8050", function(json_obj){
        //for (obj of json_obj) {

           // let div = $('<div class= "flex-container">');
           // let createTime = $('<p>').text(obj.create time);
            //let body = $('<p>').text(obj.postText);

    
           // div.append(body);

            //$('body').append(div)
        //}

    //})
//});

$(function() {
    
    $.get("posts.json", function(json_obj){
       for (obj of json_obj) {

           let div = $('<div class= "postsf">');
           let createTime = $('<p class = "date">').text(obj.createTime);
           let authorName = $('<p>').text(obj.authorName);
           let image = $('<img>').attr("src", obj.postPic);
           let body = $('<p class = "tere">').text(obj.postText);
          

           div.append(createTime) ;
           div.append(authorName);
           div.append(image);
           div.append(body);

           $('div.flex-container').append(div)
       }

   })
});