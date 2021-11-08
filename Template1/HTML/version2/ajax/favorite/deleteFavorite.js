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
            console.log("Xoa favorite thanh cong")
        }
    })
}