const iconShare = document.querySelector(".icon_share");
const sharingCloud = document.querySelector(".container_share");

iconShare.addEventListener("click", () => {
    iconShare.classList.toggle("active");
    sharingCloud.classList.toggle("active");
})

document.querySelectorAll(".icon_media").forEach(n => n.addEventListener("click", () => {
    iconShare.classList.remove("active");
    sharingCloud.classList.remove("active");
}))