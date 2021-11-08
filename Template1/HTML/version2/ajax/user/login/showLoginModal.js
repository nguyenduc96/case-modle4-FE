function showLoginModal() {
                let inner = `  <button type="button" class="close" data-dismiss="modal">
                                <i class="fa_icon form_close"></i>
                            </button>
                            <div class="modal-body">
                                <div class="ms_register_img">
                                    <img src="images/register_img.png" alt="" class="img-fluid" />
                                </div>
                                <div class="ms_register_form">
                                    <h2>login / Sign in</h2>
                                    <div class="form-group">
                                        <input type="text" placeholder="Enter Username" class="form-control" id="username" name="username">
                                        <span class="form_icon">
                                            <i class="fa_icon form-envelope" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="form-group">
                                        <input type="password" placeholder="Enter Password" class="form-control" id="password" name="password">
                                        <span class="form_icon">
                                             <i class="fa_icon form-lock" aria-hidden="true"></i>
                                        </span>
                                    </div>
                                    <div class="remember_checkbox" id="wrong-username-password">
                                       
                                    </div>
                                    <a class="ms_btn" target="_blank" onclick="doLogin()">login now</a>
            <!--                        <div class="popup_forgot">-->
            <!--                            <a href="#">Forgot Password ?</a>-->
            <!--                        </div>-->
                                    <p>Don't Have An Account? <a href="#myModal" data-toggle="modal" class="ms_modal1 hideCurrentModel" data-dismiss="modal" onclick="showRegisterModal()">register here</a></p>
                                </div>
                            </div>`
    $("#login-modal-content").html(inner);
}

