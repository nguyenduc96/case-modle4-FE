function getAllMusicFavorite() {
    let id = currentUser.id;
    $.ajax({
        headers : {
            'Authorization' : 'Bearer ' + currentUser.token,
        },
        url: `http://localhost:8080/favorites/user/${id}`,
        type : "GET",
        success : function (data) {
            drawFavoriteMusic(data)
        }
    })
}

function drawFavoriteMusic(data) {
    let content = `     <div class="ms_weekly_wrapper">
            <div class="ms_weekly_inner">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="ms_heading">
                            <h1>My Favorite</h1>
                        </div>
                    </div>`
    let listFavorite = data.content;
    for(let i=0; i< listFavorite.length; i++ ) {
        content += `<div class="col-lg-12 col-md-12 ">
                        <div class="ms_weekly_box" >
                            <div class="weekly_left">
                                    <span class="w_top_no">${i+1}</span>
                                <div class="w_top_song">
                                    <div class="w_tp_song_img">
                                        <img src="http://localhost:8080/images/${listFavorite[i].music.image}" alt="">
                                        <div class="ms_song_overlay">
                                        </div>
                                        <div class="ms_play_icon">
                                            <img src="http://localhost:8080/images/${listFavorite[i].music.image}" alt="">
                                        </div>
                                    </div>
                                    <div class="w_tp_song_name">
                                        <h3><a href="#">${listFavorite[i].music.name}</a></h3>
                                        <p>${listFavorite[i].music.user.fullName}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="weekly_right">
                                <button class="ms_btn login_btn" data-toggle="modal" data-target="#myModal3" onclick="showDeleteFavorite(${listFavorite[i].id})">
                                    Unfavorite
                                </button>
                            </div>
                        </div>
                    </div>`
    }

     content += `</div>
            </div>
        </div>`
    $("#content_container").html(content);
}