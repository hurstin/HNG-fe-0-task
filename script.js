// Live time in ms
function updateTime() {
  document.getElementById('current-time').innerText = Date.now();
}
updateTime();
setInterval(updateTime, 1000);

// Avatar upload (URL or upload)
const input = document.getElementById('avatar-input');
const avatarImg = document.getElementById('avatar-img');
input.addEventListener('change', function (e) {
  if (e.target.files && e.target.files[0]) {
    const reader = new FileReader();
    reader.onload = function (ev) {
      avatarImg.src = ev.target.result;
    };
    reader.readAsDataURL(e.target.files[0]);
  }
});
