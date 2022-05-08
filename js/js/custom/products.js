let item1 = {
  img: "../images/sanpham/1.jpg",
  name: "Váy đỏ nữ",
  gia: "100000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item2 = {
  img: "../images/sanpham/2.jpg",
  name: "Đồ bộ nam",
  gia: "80000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item3 = {
  img: "../images/sanpham/3.jpg",
  name: "Quần áo Adidas",
  gia: "95000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item4 = {
  img: "../images/sanpham/4.jpg",
  name: "Váy trắng",
  gia: "100000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item5 = {
  img: "../images/sanpham/5.jpg",
  name: "Áo len ",
  gia: "80000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item6 = {
  img: "../images/sanpham/6.jpg",
  name: "Đồ bộ nữ",
  gia: "60000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item7 = {
  img: "../images/sanpham/7.jpg",
  name: "Đồ bộ vịt",
  gia: "60000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item8 = {
  img: "../images/sanpham/8.jpg",
  name: "Đồ bộ con bò",
  gia: "65000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item9 = {
  img: "../images/sanpham/9.jpg",
  name: "Đồ bộ con mèo",
  gia: "60000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item10 = {
  img: "../images/sanpham/10.jpg",
  name: "Đồ bộ cá sấu",
  gia: "80000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item11 = {
  img: "../images/sanpham/11.jpg",
  name: "Bộ thun nữ",
  gia: "60000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item12 = {
  img: "../images/sanpham/12.jpg",
  name: "Đồ bộ Gucci",
  gia: "70000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item13 = {
  img: "../images/sanpham/13.jpg",
  name: "Đồ Tết",
  gia: "80000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item14 = {
  img: "../images/sanpham/14.jpg",
  name: "Áo sơ mi nam",
  gia: "70000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item15 = {
  img: "../images/sanpham/15.jpg",
  name: "Đồ bộ xanh dương",
  gia: "75000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item16 = {
  img: "../images/sanpham/16.jpg",
  name: "Váy nữ",
  gia: "100000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};

let sp = [item1,item2,item3,item4,item5,item6,item7,item8,item9,item10,item11,item12,item13,item14,item15,item16]

function display(item){
  let dv = "<div class='cart-box'>"+ "<div class='img'>" + "<img src=" +item.img + ">" + "</div>" +
  "<div class='cart-title'>"+item.name + "</div>" +
  "<span class='cart-price'>" + item.gia +" "+ item.dvtt + "<img id='icon' src='../images/icons/2.png' >" + "</span>" + "</div>"
  $("#cart").append(dv);
}
$(document).ready(function(){
  sp.forEach(display);
  $("#dk").click(function(){
    $("#myModal").modal('show')
  })
  //Modal
  $("#dong1").click(function(){
    $("#myModal").modal('hide')
  })
  $("#dong2").click(function(){
    $("#myModal").modal('hide')
  })
  $("#dong3").click(function(){
    $("#myModal").modal('hide')
  })
  $("#dong4").click(function(){
    $("#myModal").modal('hide')
  })
  //
  $("#dn").click(function(){
    $("#modalDangNhap").modal('show')
  })
})

