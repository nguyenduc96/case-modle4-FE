function homePage() {
    $('#main-content').html(`<!---top trending--->
        <div class="ms_rcnt_slider" id="show-recently">

        </div>
        <!---top week4--->
        <div class="ms_weekly_wrapper">
            <div class="ms_weekly_inner">
                <div class="row" id="top-music">


                </div>
            </div>
        </div>
        <!----top month---->
        <div class="ms_advr_wrapper">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <a href="#"><img src="images/adv.jpg" alt="" class="img-fluid"/></a>
                    </div>
                </div>
            </div>
        </div>
        <!----category---->
        <div class="ms_genres_wrapper ms_genres_single padder_top90">
            <div class="row" id="top-category">

            </div>
        </div>

        <div class="ms_weekly_wrapper">
            <div class="ms_weekly_inner">
                <div class="row" id="show-music-by-category">
                </div>
            </div>
        </div>

        <!----random music---->
        <div class="ms_releases_wrapper">
            <div class="ms_heading">
                <h1>Random music</h1>
                <span class="veiw_all"><a href="#">view more</a></span>
            </div>
            <div class="ms_release_slider swiper-container">
                <div class="ms_divider"></div>
                <div class="swiper-wrapper" id="random-music">


                </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next2 slider_nav_next"></div>
            <div class="swiper-button-prev2 slider_nav_prev"></div>
        </div>`)
    loadRecentlyByUser();
    getRandomMusic();
    showAllMusicByUser();
}

function loadRecentlyByUser() {
    $('#show-recently').html('');
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/recently/user/musics",
        headers: {
            Authorization: 'Bearer ' + currentUser.token
        },
        success: function (data) {

                $('#show-recently').html(`<div class="ms_heading">
                <h1>Recently Played</h1>
                <span class="veiw_all"><a href="#">view more</a></span>
            </div>
            <div class="swiper-container">
                <div class="swiper-wrapper" id="recently-music">

                </div>
            </div>
            <!-- Add Arrows -->
            <div class="swiper-button-next slider_nav_next"></div>
            <div class="swiper-button-prev slider_nav_prev"></div>`)
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