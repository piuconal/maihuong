// admin
document.getElementById("loginForm").addEventListener("submit", checkLogin);

async function checkLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("pwd").value;

  try {
    const response = await fetch(
      "https://6597fa35668d248edf23d6de.mockapi.io/users"
    );
    const users = await response.json();

    const user = users.find(
      (user) => user.taikhoan === username && user.matkhau === password
    );
    if (user) {
      window.location.href = "admin.html";
    } else {
      alert("Tài khoản hoặc mật khẩu không chính xác");
    }
  } catch (error) {
    console.error("Có lỗi xảy ra:", error);
  }
}

// danhgia
document
  .getElementById("feedbackForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    const Name = document.getElementById("name").value;
    const Email = document.getElementById("email").value;
    const Eval = document.getElementById("feedback").value;

    fetch("https://6597fa35668d248edf23d6de.mockapi.io/Eval", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ Name, Email, Eval }),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        alert("Đánh giá thành công"); // Hiển thị thông báo thành công
        document.getElementById("feedbackForm").reset();
      })
      .catch((error) => {
        console.error("Error:", error);
        // Thêm mã để xử lý lỗi
      });
  });
