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
    $(function () {
        "use strict";
        if ($('.audio-player').length) {
            var myPlaylist = new jPlayerPlaylist({
                jPlayer: "#jquery_jplayer_1",
                cssSelectorAncestor: "#jp_container_1"
            }, [{
                image: "",
                title: data.name,
                artist: data.user.fullName,
                mp3: `http://localhost:8080/music2/${data.song}`,
            }
            ], {
                swfPath: "js/plugins",
                supplied: "oga, mp3",
                wmode: "window",
                useStateClassSkin: true,
                autoBlur: false,
                smoothPlayBar: true,
                keyEnabled: true,
                playlistOptions: {
                    autoPlay: false
                }
            });
            let inner = `<div class='jp-track-name'><span class='que_img'><img src='${data.image}'></span><div class='que_data'>${data.name}<div class='jp-artist-name'>${data.user.fullName}</div></div></div>"`
            $(".jp-now-playing").html(inner);

            $("#jquery_jplayer_1").on($.jPlayer.event.ready + ' ' + $.jPlayer.event.play, function (event) {
                var current = myPlaylist.current;
                var playlist = myPlaylist.playlist;
                $.each(playlist, function (index, obj) {
                    if (index == current) {
                    }
                });
                $('.knob-wrapper').mousedown(function () {
                    $(window).mousemove(function (e) {
                        var angle1 = getRotationDegrees($('.knob')),
                            volume = angle1 / 270

                        if (volume > 1) {
                            $("#jquery_jplayer_1").jPlayer("volume", 1);
                        } else if (volume <= 0) {
                            $("#jquery_jplayer_1").jPlayer("mute");
                        } else {
                            $("#jquery_jplayer_1").jPlayer("volume", volume);
                            $("#jquery_jplayer_1").jPlayer("unmute");
                        }
                    });

                    return false;
                }).mouseup(function () {
                    $(window).unbind("mousemove");
                });


                function getRotationDegrees(obj) {
                    var matrix = obj.css("-webkit-transform") ||
                        obj.css("-moz-transform") ||
                        obj.css("-ms-transform") ||
                        obj.css("-o-transform") ||
                        obj.css("transform");
                    if (matrix !== 'none') {
                        var values = matrix.split('(')[1].split(')')[0].split(',');
                        var a = values[0];
                        var b = values[1];
                        var angle = Math.round(Math.atan2(b, a) * (180 / Math.PI));
                    } else {
                        var angle = 0;
                    }
                    return (angle < 0) ? angle + 360 : angle;
                }


                var timeDrag = false;
                $('.jp-play-bar').mousedown(function (e) {
                    timeDrag = true;
                    updatebar(e.pageX);

                });
                $(document).mouseup(function (e) {
                    if (timeDrag) {
                        timeDrag = false;
                        updatebar(e.pageX);
                    }
                });
                $(document).mousemove(function (e) {
                    if (timeDrag) {
                        updatebar(e.pageX);
                    }
                });
                var updatebar = function (x) {
                    var progress = $('.jp-progress');
                    var position = x - progress.offset().left;
                    var percentage = 100 * position / progress.width();
                    if (percentage > 100) {
                        percentage = 100;
                    }
                    if (percentage < 0) {
                        percentage = 0;
                    }
                    $("#jquery_jplayer_1").jPlayer("playHead", percentage);
                    $('.jp-play-bar').css('width', percentage + '%');
                };
                $('#playlist-toggle, #playlist-text, #playlist-wrap li a').unbind().on('click', function () {
                    $('#playlist-wrap').fadeToggle();
                    $('#playlist-toggle, #playlist-text').toggleClass('playlist-is-visible');
                });
                $('.hide_player').unbind().on('click', function () {
                    $('.audio-player').toggleClass('is_hidden');
                    $(this).html($(this).html() == '<i class="fa fa-angle-down"></i> HIDE' ? '<i class="fa fa-angle-up"></i> SHOW PLAYER' : '<i class="fa fa-angle-down"></i> HIDE');
                });
                $('body').unbind().on('click', '.audio-play-btn', function () {
                    $('.audio-play-btn').removeClass('is_playing');
                    myPlaylist.play(0);
                });
            });
        }
    });
}
