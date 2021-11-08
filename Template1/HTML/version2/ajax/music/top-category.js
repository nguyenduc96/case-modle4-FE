topCategory();

function topCategory() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/categories/top",
        success: function (data) {
            $("#show-music-by-category").html("")
            let content = ` <div class="col-lg-12">
                            <div class="ms_heading">
                                <h1>hot music genres</h1>
                            </div>
                        </div>`;
            for (let i = 0; i < data.length; i++) {
                    content += getCategory(data, i);
            }
            $("#top-category").html(content);
        }
    })
}





