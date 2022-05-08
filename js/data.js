let sp1 = {masp:1, tensp:"Quần áo nam", hinhanh:'../images/sanpham/1.jpg', soluong:1, dongia:100000}
let sp2 = {masp:2, tensp:"Chau hoa 2", hinhanh:'../img/chauhoa2.PNG', soluong:10, dongia:200000}
let sp3 = {masp:3, tensp:"Chau hoa 3", hinhanh:'../img/chauhoa3.PNG', soluong:18, dongia:300000}
let sp4 = {masp:4, tensp:"Chau hoa 4", hinhanh:'../img/chauhoa4.PNG', soluong:16, dongia:400000}
let sp5 = {masp:5, tensp:"Chau hoa 5", hinhanh:'../img/chauhoa5.PNG', soluong:11, dongia:150000}

let dssp = [sp1, sp2, sp3, sp4, sp5]



localStorage.setItem("products", JSON.stringify(dssp))