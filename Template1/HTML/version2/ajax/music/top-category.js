topCategory();

function topCategory() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories/top",
        success: function (data) {
            let content = ` <div class="col-lg-12">
                            <div class="ms_heading">
                                <h1>Top Genres</h1>
                                <span class="veiw_all"><a href="#">view more</a></span>
                            </div>
                        </div>`;
            for (let i = 0; i < data.length; i++) {

                    content += `<div class="col-lg-2 col-md-6">
                            <div class="ms_rcnt_box marger_bottom30">
                                <div class="ms_rcnt_box_img">
                                    <img src="${data[i].image}" alt="" class="img-fluid">
                                        <div class="ms_main_overlay">
                                            <div class="ms_box_overlay"></div>
                                            <div class="ms_play_icon">
                                                <img onclick="showAllMusicByCategory(${data[i].id})" src="images/svg/play.svg" alt="">
                                            </div>
                                        </div>
                                        <span class="ms_frequency"></span>
                                </div>
                                <div class="ms_rcnt_box_text">
                                    <h3>
                                        <button type="button" style="border: none; border-radius: 10px" class="btn-outline-primary"
                                                onclick="showAllMusicByCategory(${data[i].id})">${data[i].name}</button>
                                    </h3>
                                </div>
                            </div>
                        </div>`
            }
            $("#top-category").html(content)
        }
    })
}

