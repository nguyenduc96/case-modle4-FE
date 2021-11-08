loadRecentlyByUser();
function loadRecentlyByUser() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/recently/user/musics",
        headers: {
            Authorization: 'Bearer ' + currentUser.token
        },
        success: function (data) {
            let content = ``;
            for (let i = 0; i < data.length; i++) {
                content += `<div class="swiper-slide">
                        <div class="ms_rcnt_box">
                            <div class="ms_rcnt_box_img">
                                <img src="http://localhost:8080/images/${data[i].image}" alt="">
                                <div class="ms_main_overlay">
                                    <div class="ms_box_overlay"></div>
                                    <div class="ms_more_icon">
                                        <img src="images/svg/more.svg" alt="">
                                    </div>
                                    <ul class="more_option">
                                        <li><a href="#"><span class="opt_icon"><span class="icon icon_fav"></span></span>Add To Favourites</a></li>
                                        <li><a href="#"><span class="opt_icon"><span class="icon icon_queue"></span></span>Add To Queue</a></li>
                                        <li><a href="#"><span class="opt_icon"><span class="icon icon_dwn"></span></span>Download Now</a></li>
                                        <li><a href="#"><span class="opt_icon"><span class="icon icon_playlst"></span></span>Add To Playlist</a></li>
                                        <li><a href="#"><span class="opt_icon"><span class="icon icon_share"></span></span>Share</a></li>
                                    </ul>
                                    <div class="ms_play_icon">
                                        <img src="images/svg/play.svg" alt="">
                                    </div>
                                </div>
                            </div>
                            <div class="ms_rcnt_box_text">
                                <h3><a href="#">${data[i].name}</a></h3>
                                <p>Poster : ${data[i].user.fullName}</p>
                            </div>
                        </div>
                    </div>`;
            }
            $("#recently-music").html(content);
        }
    })
}