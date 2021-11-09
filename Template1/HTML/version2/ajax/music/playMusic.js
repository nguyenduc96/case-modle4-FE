// let currentMusic = JSON.parse(localStorage.getItem("currentUser"));

function playMusic(id) {
    $.ajax({
        headers : {
            'Authorization' : 'Bearer ' + currentUser.token,
        },
        url : `http://localhost:8080/musics/${id}`,
        type : "GET",
        success : function (data) {
            console.log(data)
            localStorage.setItem("currentMusic", data);
            drawMusicPlayer(data);
        }
    })
}

function drawMusicPlayer(data) {
    let imageBackground = 'https://img.freepik.com/free-vector/background-stellar-sky-watercolor_125540-28.jpg?size=626&ext=jpg';
    $(".jp-now-playing").html(`<div class='jp-track-name'><span class='que_img'><img src='${data.image}'></span><div class='que_data'>${data.name}<div class='jp-artist-name'>${data.user.fullName}</div></div></div>`);

    $(".jp-type-playlist").html(`<audio controls poster=${imageBackground} style=" width: 80%">
                                        <source src="http://localhost:8080/music2/${data.song}" type="audio/mpeg"> 
                                        </audio>`)
}