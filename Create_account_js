function signup(e){
    event.preventDefault();
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var Email = document.getElementById("Email").value;
    var sdt = document.getElementById("sdt").value;
    var user = {
        name : name,
        password : password,
        Email : Email,
        sdt : sdt ,
    };
    if(name == "" || password == "" || cfpassword == "" || Email == "" || sdt == ""){
        alert("vui lòng nhập đủ thông tin");
    }
    else{
        var json = JSON.stringify(user);
        localStorage.setItem(name,json);
        alert("Đăng ký thành công");
    }
}

function myfunction(){
    document.getElementById('pass').type = "text";
}
