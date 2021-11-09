function addNewFavorite(music_id) {
    let user_id = currentUser.id;
    let favorite = {
        user: {
            id : user_id
        },
        music : {
            id: music_id
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Authorization' : 'Bearer ' + currentUser.token,
        },
        type : "POST",
        url : `${path}/favorites`,
        data : JSON.stringify(favorite),
        success : function (data) {
            console.log("them favorite thanh cong")
        }
    })
}