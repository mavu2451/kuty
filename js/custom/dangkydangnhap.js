$(document).ready(function(){
        function xacNhan(){
            let hoten = $("#hoten").val()
            let taikhoan = $("#taikhoan").val()
            let matkhau = $("#matkhau").val()
            let nhaplai = $("#nhaplai").val()
            let sdt = $("#sdt").val()
            let email = $("#email").val()
            let regexhoten = /^[A-Z][a-zA-Z]*(\s[A-Z][a-zA-Z]*)*$/
            let regexmk = /^(\w{6,})+$/i
            let regextk =  /^(\w{6,})+$/i
            let regexsdt = /^\d{9,11}$/
            let regexe= /^\S+@\S+\.\S+$/
            if(hoten.trim()==""){
                $("#errorHT").html("Họ tên không được bỏ trống");
                return false;
            }
             if(!regexhoten.test(hoten)){
                 $("#errorHT").html("Họ tên nhập không đúng định dạng");
                 return false;
            }
            if(taikhoan.trim()==""){
                $("#errorTK").html("Tài khoản không được bỏ trống");
                return false;
            }
            if(!regextk.test(taikhoan)){
                $("#errorTK").html("Tài khoản phải trên 6 ký tự");
            }
            if(matkhau.trim()==""){
                $("#errorMK").html("Mật khẩu không được bỏ trống");
                return false;
            }
            if(!regexmk.test(matkhau)){
                $("#errorMK").html("Mật khẩu phải trên 6 ký tự");
            }
            if(nhaplai.trim()==""){
                $("#errorNL").html("Bắt buộc nhập lại mật khẩu");
                return false;
            }
            if(matkhau != nhaplai){
                $("#errorMK").html("Mật khẩu không khớp");
                $("#errorNL").html("Mật khẩu không khớp");
                return false;
            }
            if(sdt.trim()==""){
                $("#errorSDT").html("Số điện thoại không được bỏ trống");
                return false;
            }
            if(!regexsdt.test(sdt)){
                $("#errorSDT").html("Số điện thoại phải từ 9 đến 11 số")
                return false;
            }
            if(email.trim()==""){
                $("#errorE").html("Email không được bỏ trống")
                return false;
            }
            if(!regexe.test(email)){
                $("#errorE").html("Email nhập sai định dạng")
                return false;
            }
            
            $("#errorHT").html("(*)")
            $("#errorTK").html("(*)")
            $("#errorMK").html("(*)")
            $("#errorNL").html("(*)")
            $("#errorSDT").html("(*)")
            $("#errorE").html("(*)")
            return true;
        }
        $("#hoten").blur(xacNhan)
        $("#taikhoan").blur(xacNhan)
        $("#matkhau").blur(xacNhan)
        $("#nhaplai").blur(xacNhan)
        $("#sdt").blur(xacNhan)
        $("#email").blur(xacNhan)

        function xacNhan1(){
            let taikhoan1 = $("#taikhoan1").val()
            let matkhau1 = $("#matkhau1").val()
            let regexmk1 = /^(\w{6,})+$/i
            let regextk1 =  /^(\w{6,})+$/i
            if(taikhoan1.trim()==""){
                $("#errorTK1").html("Tài khoản không được bỏ trống");
                return false;
            }
            if(!regextk1.test(taikhoan1)){
                $("#errorTK1").html("Tài khoản phải trên 6 ký tự");
                return false;
            }
            if(matkhau1.trim()==""){
                $("#errorMK1").html("Mật khẩu không được bỏ trống");
                return false;
            }
            if(!regexmk1.test(matkhau1)){
                $("#errorMK1").html("Mật khẩu phải trên 6 ký tự");
                return false;
            }
           
            $("#errorTK1").html("(*)")
            $("#errorMK1").html("(*)")
            
            return true;
        }
        $("#taikhoan1").blur(xacNhan1)
        $("#matkhau1").blur(xacNhan1)

        $("#dangky").click(function(){
            let hoten = $("#hoten").val()
            let taikhoan = $("#taikhoan").val()
            let matkhau = $("#matkhau").val()
            let nhaplai = $("#nhaplai").val()
            let sdt = $("#sdt").val()
            let email = $("#email").val()
            if(!xacNhan()){
                alert("Thông tin đăng nhập còn thiếu")
                return false;
            }
            else
            alert("Bạn đã đăng ký thành công, thông tin của bạn là: \n Họ tên: " + hoten + "\n Tài khoản: " + taikhoan + "\n Mật khẩu: " + matkhau +
            "\n Số điện thoại:" + sdt + "\n Email: " + email
            );
            return true;
        })

        $("#dangnhap").click(function(){
            let taikhoan1 = $("#taikhoan1").val()
            let matkhau1 = $("#matkhau1").val()
           
            if(!xacNhan1()){
                alert("Sai tài khoản hoặc mật khẩu")
                return false;
            }
            else
            alert("Bạn đã đăng nhập thành công")
            return true;
        })
})