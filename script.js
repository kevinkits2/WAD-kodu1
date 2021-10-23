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
           let body = $('<p class = "tere">').text(obj.postText);
           let authorName = $('<p>').text(obj.authorName);
          

           div.append(createTime) 
           div.append(body);
           div.append(authorName)
           div.append("<img id='theImg' src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Facebook_Thumb_icon.svg/1200px-Facebook_Thumb_icon.svg.png'/>")

           $('section').append(div)
       }

   })
});