function doRegister() {
    let user = $("#register-user-form")[0];
    let formData = new FormData(user);
    console.log(formData)
    $.ajax({
        url: `${path}/users`,
        enctype: 'multipart/form-data',
        data : formData,
        type : "POST",
        processData: false,
        contentType: false,
        cache : false,
        timeout : 6000000,
        //xử lý khi thành công
        success: function (data) {
            console.log("dang ki thanh cong");
            let inner = `<span class="form_icon">
                              Created Account !!! 
                         </span>`
            $("#register-success").html(inner);
        }
    })
    event.preventDefault();
}

