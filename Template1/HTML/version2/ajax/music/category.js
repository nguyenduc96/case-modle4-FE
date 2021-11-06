const URL_BASE = 'http://localhost:8080/';
showAllCategory();

function getCategory(result, i) {
    return `<div class="col-lg-2 col-md-6">
        <div class="ms_rcnt_box marger_bottom30">
            <div class="ms_rcnt_box_img">
                <img src="${result[i].image}" alt="" class="img-fluid">
                    <div class="ms_main_overlay">
                        <div class="ms_box_overlay"></div>
                        <div class="ms_play_icon">
                            <img onclick="showAllMusicByCategory(${result[i].id})" src="images/svg/play.svg" alt="">
                        </div>
                    </div>
                    <span class="ms_frequency"></span>
            </div>
            <div class="ms_rcnt_box_text">
                <h3>
                    <button type="button" style="border: none; border-radius: 10px" class="btn-outline-primary"
                            onclick="showAllMusicByCategory(${result[i].id})">${result[i].name}</button>
                </h3>
            </div>
        </div>
    </div>`
}

function showAllCategory() {
    $("#show-music-by-category").html("");
    $.ajax({
        type: 'GET',
        url: URL_BASE + 'categories',
        success: function (data) {
            let messageCategory = 'Category';
            let content = getContentHeading(messageCategory);
            let result = data.content
            for (let i = 0; i < result.length; i++) {
                content += getCategory(result, i)
            }
            $("#show-category").html(content);
        }
    });


}

function getMusicByCategory(i, result) {
    return `<div class="col-lg-4 col-md-12 padding_right40">
                        <div class="ms_weekly_box">
                            <div class="weekly_left">
                                    <span class="w_top_no">
                                     ${i + 1}
                                    </span>
                                <div class="w_top_song">
                                    <div class="w_tp_song_img">
                                        <img src="images/${result[i].image}" alt="" class="img-fluid">
                                        <div class="ms_song_overlay">
                                        </div>
                                        <div class="ms_play_icon">
                                            <img onclick="playMusic(${result[i].id})" src="images/svg/play.svg" alt="">
                                        </div>
                                    </div>
                                    <div class="w_tp_song_name">
                                        <h3><a href="#">${result[i].name}</a></h3>
                                        <p>${result[i].user?.fullName}</p>
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

function getContentHeading(message) {
    return `<div class="col-lg-12">
                                <div class="ms_heading">
                                    <h1>${message}</h1>
                                </div>
                            </div>`;
}

function showAllMusicByCategory(id) {
    $.ajax({
        type: "GET",
        url: URL_BASE + `categories/${id}/musics`,
        success: function (data) {
            let messageHeading = 'Music by category';
            $("#show-category")
                .html(`<div class="col-lg-12">
                                                <div class="ms_heading">
                                                    <h1><button class="btn-outline-secondary" style="border-radius: 10px; border: none; cursor: pointer;"  onclick="showAllCategory()">&lt;&lt;Back to category</button></h1>
                                                </div>
                                            </div>`);
            let content = getContentHeading(messageHeading);
            let result = data.content;
            if (result.length === 0) {
                content += "&nbsp;&nbsp;&nbsp;&nbsp;🔍🔍🔍   Sorry! No songs found in this category";
            } else {
                for (let i = 0; i < result.length; i++) {
                    content += getMusicByCategory(i, result)
                }
            }
            $("#show-music-by-category").html(content);
        }
    });
}

function playMusic(id) {
    $.ajax({
        type: "GET",
        url: URL_BASE + `musics/${id}`,
        success: function (data) {
            let content = `<div class="ms_player_close">
            <i class="fa fa-angle-down" onclick="closePlay()" aria-hidden="true"></i>
        </div>
        <div class="player_mid">
            <div class="audio-player">
                <div id="jquery_jplayer_1" class="jp-jplayer"></div>
                <div id="jp_container_1" class="jp-audio" role="application" aria-label="media player">
                    <div class="player_left">
                        <div class="ms_play_song">
                            <div class="play_song_name">
                                <a href="javascript:void(0);" id="playlist-text">
                                    <div class="jp-now-playing flex-item">
                                        <div class="jp-track-name"></div>
                                        <div class="jp-artist-name"></div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div class="jp-type-playlist">
                        <div class="jp-gui jp-interface flex-wrap">
                            <div class="jp-progress-container flex-item">
                                <div class="jp-time-holder">
                                    <span class="jp-current-time" role="timer" aria-label="time">&nbsp;</span>
                                    <span class="jp-duration" role="timer" aria-label="duration">&nbsp;</span>
                                <audio controls>
                                  <source src="horse.ogg" type="audio/ogg">
                                  <source src="http://localhost:8080/images/${data.song}" type="audio/mpeg">
                                </audio>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
            $("#play-music").html(content);
        }
    })
}

function closePlay() {
    $("#play-music").html("");
}
