function showLoginRegisterButton() {
    let inner = ""
    if(currentUser == null){
        inner = `<a href="javascript:;" class="ms_btn reg_btn" data-toggle="modal" data-target="#myModal" onclick="showRegisterModal()"><span>register</span></a>
                <a href="javascript:;" class="ms_btn login_btn" data-toggle="modal" data-target="#myModal1" onclick="showLoginModal()"><span>login</span></a>`
    }else {
        inner = `<a href="#" class="ms_btn login_btn"><span>${currentUser.username}</span></a>
                 <a href="javascript:;" class="ms_btn login_btn" onclick="doLogout()"><span>logout</span></a>`
    }

    $("#login-register-button").html(inner);
}
