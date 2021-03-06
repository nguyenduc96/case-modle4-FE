topMusic();
function topMusic() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/recently/musics/",
        success: function (data) {
            let content = `<div class="col-lg-12">
                                <div class="ms_heading">
                                    <h1>weekly top 15</h1>
                                </div>
                            </div>`;
            for (let i = 0; i < data.length; i++) {
                content += `<div class="col-lg-4 col-md-12 padding_right40">
                        <div class="ms_weekly_box">
                            <div class="weekly_left">
                                    <span class="w_top_no">
                                     ${i + 1}
                                    </span>
                                <div class="w_top_song">
                                    <div class="w_tp_song_img">
                                        <img src="http://localhost:8080/images/${data[i].image}" alt="" class="img-fluid">
                                        <div class="ms_song_overlay">
                                        </div>
                                        <div class="ms_play_icon">
                                            <img onclick="playMusic(${data[i].id})" src="images/svg/play.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="w_tp_song_name">
                                        <h3><a href="#">${data[i].name}</a></h3>
                                        <p>Poster : ${data[i].user?.fullName}</p>
                                    </div>
                                </div>
                            </div>
                            <div class="weekly_right">
                                <span class="w_song_time"></span>
                                <span class="ms_more_icon" data-other="1">
                                <img src="images/svg/more1.svg" alt="">
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
            $("#top-music").html(content);
        }
    })
}