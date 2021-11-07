function showRegisterModal() {
    let inner = `<button type="button" class="close" data-dismiss="modal">
                    <i class="fa_icon form_close"></i>
                </button>
                <div class="modal-body" id="modal-body">
                    <div class="ms_register_img">
                        <img src="images/register_img.png" alt="" class="img-fluid" />
                    </div>
                    <div class="ms_register_form">
                        <form id="register-user-form">
                            <h2>Register / Sign Up</h2>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Your Name" class="form-control" id="fullName" name="fullName" onchange="checkFullName()">
                                   <span id="checked-fullName"></span>
                                   <span class="form_icon">
                                <i class="fa_icon form-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="form-group">
                                <input type="date" placeholder="Enter Your Birthday" class="form-control" id="birthday" name="birthday">
                                <span class="form_icon">
                                <i class="fa_icon form-user" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Your Email" class="form-control" id="email" name="email" onchange="checkEmail()">
                                <span id="checked-email"></span>
                                <span class="form_icon">
                                <i class="fa_icon form-envelope" aria-hidden="true"></i>
                            </span>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Your Phone" class="form-control" id="phone" name="phone" onchange="checkPhone()">
                                 <span id="checked-phone"></span>
                                <span class="form_icon">
                                <i class="fa_icon form-envelope" aria-hidden="true"></i>
                            </span>
                            </div>
                            <div class="form-group">
                                <input type="file" placeholder="Enter Your Image" class="form-control" id="image" name="image">
                                <span class="form_icon">
                                <i class="fa_icon form-envelope" aria-hidden="true"></i>
                            </span>
                            </div>
                            <div class="form-group">
                                <input type="text" placeholder="Enter Your Username" class="form-control" id="username" name="username" onchange="checkUserName()">
                                <span id="checked-username"></span>
                                <span class="form_icon">
                                <i class="fa_icon form-envelope" aria-hidden="true"></i>
                            </span>
                            </div>
                            <div class="form-group">
                                <input type="password" placeholder="Enter Password" class="form-control" id="password" name="password" onchange="checkPassWord()">
                                <span id="checked-password"></span>
                                <span class="form_icon">
                                <i class="fa_icon form-lock" aria-hidden="true"></i>
                                </span>
                            </div>
                            <div class="form-group" id="register-success">
                                
                            </div>
                            <a href="#" class="ms_btn" onclick="doRegister()">register now</a>
                        </form>
                        <p>Already Have An Account? <a href="#myModal1" data-toggle="modal" class="ms_modal hideCurrentModel">login here</a></p>
                    </div>
                </div>`
    $("#register-modal-content").html(inner);
}