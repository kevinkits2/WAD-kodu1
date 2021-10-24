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
           div.append(createTime);

           let authorName = $('<p>').text(obj.authorName);
           div.append(authorName);

           if (!(obj.postPic == null)) {
               var image = $('<img>').attr("src", obj.postPic);
               div.append(image);
           }

           let body = $('<p class = "tere">').text(obj.postText);
           div.append(body);

           $('div.flex-container').append(div)
       }

   })
});
function dropDownMenu() {
    document.getElementById("myDropdown").classList.toggle("show");
}
window.onclick = function(event) {
    if (!event.target.matches('.dropbtnpic')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};