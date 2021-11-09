function deleteFavorite(favorite_id) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjM2MzA1NjM4LCJleHAiOjg4MDM2MzA1NjM4fQ.wuVsgYewl3UkEgl-Aim1xxLjI8zTbsiwX0xe2D37QSun7gToey22_Tda0Qrzu9RY2_d_34979GNR-kGG6fCDzg",
        },
        type : "DELETE",
        url : `http://localhost:8080/favorites/${favorite_id}`,
        success : function (data) {
            getAllMusicFavorite();
        }
    })
}

function showDeleteFavorite(favorite_id) {
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiaWF0IjoxNjM2MzA1NjM4LCJleHAiOjg4MDM2MzA1NjM4fQ.wuVsgYewl3UkEgl-Aim1xxLjI8zTbsiwX0xe2D37QSun7gToey22_Tda0Qrzu9RY2_d_34979GNR-kGG6fCDzg",
        },
        type : "GET",
        url : `http://localhost:8080/favorites/${favorite_id}`,
        success : function (data) {
           showModalDeleteFavorite(data);
        }
    })

}

function showModalDeleteFavorite(data) {
    let content = ` <button type="button" class="close" data-dismiss="modal">
                    <i class="fa_icon form_close"></i>
                </button>
                <div class="modal-body">
                    <div class="ms_register_img">
                        <img src="images/register_img.png" alt="" class="img-fluid" />
                    </div>
                    <div class="ms_register_form">
                        <h2>Delete Favorite</h2>
                        <div class="form-group">
                        <div class="row">
                            <label>Music name : </label>
                            <input type="text" readonly value="${data.music.name}" class="form-control">
                        </div>
                        </div>
                        <div class="form-group">
                            <div class="row">
                            <label>Music artist : </label>
                            <input type="text" readonly value="${data.music.user.fullName}" class="form-control">
                        </div>
                        </div>
                        <a href="#" class="ms_btn" onclick="deleteFavorite(${data.id})" data-dismiss="modal">delete now</a>
                    </div>
                </div>`
    $("#delete-favorite-modal").html(content)
}