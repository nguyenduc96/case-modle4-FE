function checkFullName(){
    let fullName = $("#fullName").val();
    let regex = /^[a-zA-ZaAàÀảẢãÃáÁạẠăĂằẰẳẲẵẴắẮặẶâÂầẦẩẨẫẪấẤậẬbBcCdDđĐeEèÈẻẺẽẼéÉẹẸêÊềỀểỂễỄếẾệỆfFgGhHiIìÌỉỈĩĨíÍịỊjJkKlLmMnNoOòÒỏỎõÕóÓọỌôÔồỒổỔỗỖốỐộỘơƠờỜởỞỡỠớỚợỢpPqQrRsStTuUùÙủỦũŨúÚụỤưƯừỪửỬữỮứỨựỰvVwWxXyYỳỲỷỶỹỸýÝỵỴzZ ]*$/;
    let res = regex.exec(fullName)
    if(res == null) {
        $("#checked-fullName").text("*Name is not valid")
    }else {
        $("#checked-fullName").text("")
    }
    if(fullName === "") {
        $("#checked-fullName").text("")
    }
}
function checkEmail(){
    let email = $("#email").val();
    let regex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    let res = email.match(regex)
    if(res == null) {
        $("#checked-email").text("*Email is not valid")
    }else {
        $("#checked-email").text("")
    }
    if(phone === "") {
        $("#checked-email").text("")
    }
    let user = {
        email : email
    }
    $.ajax({
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        url: `${path}/users/validated/email`,
        data : JSON.stringify(user),
        type : "POST",
        success: function (data) {
            if(data.username != null) {
                $("#checked-email").text("Email is used")
            }
        }
    })
}
function checkPhone(){
    let phone = $("#phone").val();
    let regex = /^[0-9]{10,11}$/;
    let res = regex.exec(phone)
    if(res == null) {
        $("#checked-phone").text("*Phone is not valid")
    }else {
        $("#checked-phone").text("")
    }
    if(phone === "") {
        $("#checked-phone").text("")
    }
    let user = {
        phone : phone
    }

    $.ajax({
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        url: `${path}/users/validated/phone`,
        data : JSON.stringify(user),
        type : "POST",
        success: function (data) {
            if(data.username != null) {
                $("#checked-phone").text("Phone is used")
            }
        }
    })
}
function checkUserName(){
    let username = $("#username").val();
    const res = /^[a-z0-9_\.]+$/.exec(username);
    if(res == null) {
        $("#checked-username").text("*User name is not valid")
    }else {
        $("#checked-username").text("")
    }
    if(username === "") {
        $("#checked-username").text("")
    }

    let user = {
        username : username
    }

    $.ajax({
        headers: {
            'Accept' : 'application/json',
            'Content-Type' : 'application/json'
        },
        url: `${path}/users/validated/username`,
        data : JSON.stringify(user),
        type : "POST",
        success: function (data) {
            if(data.username != null) {
                $("#checked-username").text("Username is used")
            }
        }
    })
}
function checkPassWord(){
    let password = $("#password").val();
    if (password.length < 6 || password.length > 16) {
        $("#checked-password").text("*Password is too short or long. Password is between 6 - 16 characters") ;
    }else {
        $("#checked-password").text("")
    }
    if(password === "") {

    }
}