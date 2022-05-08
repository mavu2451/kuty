let item1 = {
  img: "../images/sanpham/1.jpg",
  name: "Váy đỏ nữ",
  gia: "90000",
  dvtt: "VND",
  chitiet: "Váy đỏ đẹp dành cho các bé nữ ",
};
let item2 = {
  img: "../images/sanpham/2.jpg",
  name: "Quần áo nam",
  gia: "50000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let item3 = {
  img: "../images/sanpham/3.jpg",
  name: "Quần áo nam",
  gia: "40000",
  dvtt: "VND",
  chitiet: "Quần áo xì tai",
};
let sp = [item1,item2,item3]

function display(item){
  let dv = "<div class='cart-box shadow p-3 mb-5 bg-white rounded'>"+ "<div class='img'>" +     "<img onclick=\"return chitiet('" +
  item.img +
  "','" +
  item.name +
  "','" +
  item.chitiet +
  "','" +
  item.gia + " " + 
  item.dvtt +
  "');\" " + "<img src=" +item.img + ">" + "</div>" +
  "<div class='cart-title'>"+item.name + "</div>" +
  "<span class='cart-price'>" + item.gia +" "+ item.dvtt + "<img id='icon' src='../images/icons/2.png' >" + "</span>" + "</div>"
  $("#cart1").append(dv);
}
function chitiet(img,name,chitiet,gia,dvtt){

  $("#imgitem").attr("src", img);
  $("#imgitem").attr("width", 512);
  $("#imgitem").attr("height", 384);
  $("#nameitem").html(name);
  $("#chitietSP").html(chitiet);
  $("#giaSP").html(gia);
  $("#giaSP").html(dvtt);
  $("#modalsp").modal("show");
}
$(document).ready(function(){
  sp.forEach(display);
  $("#ad").modal("show")
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
