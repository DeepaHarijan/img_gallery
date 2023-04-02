let Imgdiv = document.getElementById("imgdiv");

const modal = document.querySelector(".modal");
const modalImg = document.querySelector(".modalImg");
const modalText = document.querySelector(".modalTxt");
const modalClose = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

onload = () => {
  fetch("https://picsum.photos/v2/list?limit=100")
    .then((response) => response.json())
    .then((response) => {
      for (let { download_url } of response) {
        const img = document.createElement("img");

        img.src = download_url;
        Imgdiv.appendChild(img);

        img.addEventListener("click", () => {
          modal.classList.add("appear");
          modalImg.src = img.currentSrc;

          modalClose.addEventListener("click", () => {
            modal.classList.remove("appear");
          });
        });
      }

      // const images = document.querySelectorAll(".gallery img");
      // var i = 0;
      // let store = [];
      // images.forEach((img) => {
      //   store.push(img.src);
      // });

      // prevBtn.onclick = () => {
      //   if (i <= 0) i = store.length;
      //   i--;
      //   return setImg();
      // };
    });
};
