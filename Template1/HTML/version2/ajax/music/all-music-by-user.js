function showAllMusicByUser() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/users/musics",
        headers: {
            'Authorization' : 'Bearer ' + currentUser.token
        },
        success: function (data) {
            $("#main-content").html(`<div class="col-lg-12">
                                                <div class="ms_heading">
                                                    <h1><button class="btn-outline-secondary" style="border-radius: 10px; border: none; cursor: pointer;"  onclick="">&lt;&lt;Home</button></h1>
                                                </div>
                                            </div>
                                        <div class="ms_weekly_wrapper">
                                    <div class="ms_weekly_inner">
                                        <div class="row" id="show-music-by-user">
                                        </div>
                                    </div>
                                         </div>`);
            let result = data.content;
            let cont = ``;
            for (let i = 0; i < result.length; i++) {
                cont += `<div class="col-lg-4 col-md-12 padding_right40">
                        <div class="ms_weekly_box">
                            <div class="weekly_left">
                                    <span class="w_top_no">
                                     ${i + 1}
                                    </span>
                                <div class="w_top_song">
                                    <div class="w_tp_song_img">
                                        <img src="${URL_BASE}images/${result[i].image}" alt="" class="img-fluid">
                                        <div class="ms_song_overlay">
                                        </div>
                                        <div class="ms_play_icon">
                                            <img onclick="playMusic(${result[i].id})" src="images/svg/play.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="w_tp_song_name">
                                        <h3><a href="#">${result[i].name}</a></h3>
                                        <p>Poster : ${result[i].user?.fullName}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="weekly_right">
                                <span class="w_song_time"></span>
                                <span class="ms_more_icon" data-other="1">
                                <img src="images/svg/more1.svg" alt="" onclick="showOption()">
                                </span>
                            </div>
                            <ul class="more_option">
                                <li><a href="#"><span class="opt_icon"><span class="icon icon_fav"></span></span>Add To Favourites</a></li>
                                <li><a href="#"><span class="opt_icon"><span class="icon icon_queue"></span></span>Add To Queue</a></li>
                                <li><a href="#"><span class="opt_icon"><span class="icon icon_dwn"></span></span>Download Now</a></li>
                                <li><a href="#"><span class="opt_icon"><span class="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                <li><a href="#"><span class="opt_icon"><span class="icon icon_share"></span></span>Share</a></li>
                            </ul>
                        </div>
                    </div>`;
            }
            $("#show-music-by-user").html(cont);
        }
    })
}