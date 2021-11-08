function doLogin() {
    let username = $("#username").val();
    let password = $("#password").val();
    let user = {
        username : username,
        password : password
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        url: `${path}/api/login`,
        type : "POST",
        data : JSON.stringify(user),
        //xử lý khi thành công
        success: function (data) {
            console.log(data);
            localStorage.setItem("currentUser", JSON.stringify(data));
            if(data.roles[0].authority === "ROLE_ADMIN") {
                location.href = "admin.html"
            }else{
                 location.href = "page1-index.html"
            }
        },
    }).fail(
        function () {
            let inner = `<span>Wrong username or password</span>`;
            $("#wrong-username-password").html(inner)
        }
        )

    event.preventDefault();
}