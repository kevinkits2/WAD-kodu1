

window.addEventListener("load", pageFullyLoaded, false);

function pageFullyLoaded() {
    $(function() {

        $.get("posts.json", function(json_obj){
            for (obj of json_obj) {

                let div = $('<div class= "postsf">');

                let div1 = $('<div1 class= "imageprof">');
                if (!(obj.profilePic == null)) {
                    var imageprof = $('<img class = "imageprof">').attr("src", obj.profilePic);
                    div1.append(imageprof);
                }
                div.append(div1)
                
        
            
                let createTime = $('<p class = "date">').text(obj.createTime);
                div.append(createTime);

                //let authorName = $('<p>').text(obj.authorName);
                //div.append(authorName);


                if (!(obj.postPic == null)) {
                    var image = $('<img>').attr("src", obj.postPic);
                    div.append(image);
                }

                


                let body = $('<p class = "tere">').text(obj.postText);
                div.append(body);


                let div2 = $('<div2 class= "imagelike">');
                var imagelike = $('<img class = "imagelike">').attr("src", "pic/like.png");
                    div2.append(imagelike);
                div.append(div2)


                $('div.flex-container').append(div)
            }

        })
    });
}

/*window.addEventListener("load", pageFullyLoaded, false);

function pageFullyLoaded() {
    $(function() {

        $.get(URL = "https://api.npoint.io/9ea9d2eda71b40e627ef", function(json_obj){
            for (obj of json_obj) {

                let div = $('<div class= "postsf">');

                let div1 = $('<div1 class= "imageprof">');
                if (!(obj.profilePic == null)) {
                    var imageprof = $('<img class = "imageprof">').attr("src", obj.profilePic);
                    div1.append(imageprof);
                }
                div.append(div1)
                
        
            
                let createTime = $('<p class = "date">').text(obj.createTime);
                div.append(createTime);

                //let authorName = $('<p>').text(obj.authorName);
                //div.append(authorName);


                if (!(obj.postPic == null)) {
                    var image = $('<img>').attr("src", obj.postPic);
                    div.append(image);
                }

                


                let body = $('<p class = "tere">').text(obj.postText);
                div.append(body);


                let div2 = $('<div2 class= "imagelike">');
                var imagelike = $('<img class = "imagelike">').attr("src", "pic/like.png");
                    div2.append(imagelike);
                div.append(div2)


                $('div.flex-container').append(div)
            }

        })
    });
}*/


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