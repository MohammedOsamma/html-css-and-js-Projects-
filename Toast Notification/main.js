let toastBox = document.getElementById("toastBox");
let successMessage = `<i class="fa-solid fa-circle-check"></i>  Successful Submitted`;
let errorMessage = `<i class="fa-solid fa-circle-xmark"></i> please fix this error`;
let invaildMessage = `<i class="fa-solid fa-circle-exclamation"></i> invaild check ,try again`;
function showToast(msg) {
  let toast = document.createElement("div");
  toast.classList.add("toast");
  toast.innerHTML = msg;
  toastBox.appendChild(toast);

  if (msg.includes("error")) {
    toast.classList.add("error");
  }
  if (msg.includes("invaild")) {
    toast.classList.add("invaild");
  }
  setTimeout(() => {
    toast.remove();
  }, 6000);
}
