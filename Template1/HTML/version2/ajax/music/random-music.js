getRandomMusic();

function getRandomMusic() {
    $.ajax({
        type: "GET",
        url: `http://localhost:8080/musics/random`,
        success: function (data) {
            let content = ``;
            for (let i = 0; i < data.length; i++) {
                content += `<div class="swiper-slide">
                        <div class="ms_release_box">
                            <div class="w_top_song">
                                <span class="slider_dot"></span>
                                <div class="w_tp_song_img">
                                    <img src="images/${data[i].image}" alt="">
                                    <div class="ms_song_overlay">
                                    </div>
                                    <div class="ms_play_icon">
                                        <img src="images/svg/play.svg" alt="">
                                    </div>
                                </div>
                                <div class="w_tp_song_name">
                                    <h3><a href="#">${data[i].name}</a></h3>
                                    <p>Poster : ${data[i].user.fullName}</p>
                                </div>
                            </div>
                            <div class="weekly_right">
                                <span class="w_song_time">5:10</span>
                            </div>
                        </div>
                    </div>`
            }
            $("#random-music").html(content);
        }
    })
}