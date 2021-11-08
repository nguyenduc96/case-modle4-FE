let category;

function getAllCategory() {
    $.ajax({
        headers: {
            'Authorization' : 'Bearer ' + currentUser.token
        },
        type: "GET",
        url: "http://localhost:8080/categories",
        success: function (data) {
            let content = ``;
            let result = data.content
            for (let i = 0; i < result.length; i++) {
                content += `<option class="form-control" value="${result[i].id}">${result[i].name}</option>`
            }
            $("#category").html(content);
        }
    })
}


function showModalUpload() {
 getAllCategory()
    let content = `<button type="button" class="close" data-dismiss="modal">
                    <i class="fa_icon form_close"></i>
                </button>
                <div class="modal-body" id="modal-body">
                    <div class="ms_register_img">
                        <img src="images/register_img.png" alt="" class="img-fluid" />
                    </div>
                    <div class="ms_register_form">
                        <form id="upload-music-form">
                            <h2>Upload music</h2>
                            <div style="color: white"  class="form-group">
                                Music name : <input type="text" placeholder="Enter Music Name" class="form-control" id="name" name="name">
                            </div>
                            <div style="color: white"  class="form-group">
                                Description : <input type="text" placeholder="Enter description" class="form-control" id="description" name="description">
                            </div>
                            <div style="color: white"  class="form-group">
                                Image : <input type="file" placeholder="Enter image" class="form-control" id="image" name="image">
                               
                            </div>
                            <div style="color: white"  class="form-group">
                                Song : <input type="file" placeholder="" class="form-control" id="song" name="song">
                            </div>
                            <div style="color: white"  class="form-group">
                            Category : 
                               <select class="form-control" name="category" id="category">
                              
                                </select>
                            </div>
                            <div style="color: white"  class="form-group" id="register-success">
                                
                            </div>
                            <a href="#" class="ms_btn" onclick="uploadMusic()">Upload now</a>
                        </form>
                    </div>
                </div>`;
    $("#upload-modal-content").html(content);

}


function uploadMusic() {
    let fileUpload = new FormData($("#upload-music-form")[0]);
    $.ajax({
        headers: {
            'Authorization' : 'Bearer ' + currentUser.token
        },
        type: "POST",
        url: "http://localhost:8080/musics",
        enctype: 'multipart/form-data',
        cache: false,
        processData: false,
        contentType: false,
        timeout : 6000000,
        data: fileUpload,
        success: function (data) {
            console.log("oK")
        }
    })
}