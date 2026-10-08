// Hiển thị thông báo khi mở website

window.onload = function() {
    console.log("Chào mừng bạn đến với Portfolio cá nhân!");
};


// Hiệu ứng khi bấm nút

const button = document.querySelector(".button");

button.addEventListener("click", function() {
    console.log("Bạn đã xem phần giới thiệu.");
});