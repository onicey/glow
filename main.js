const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

ScrollReveal().reveal(".header__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".header__content h1", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".header__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".header__btns", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".commitment__image img", {
  ...scrollRevealOption,
  origin: "left",
});
ScrollReveal().reveal(".commitment__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".commitment__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".commitment__list li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});

ScrollReveal().reveal(".build__image img", {
  ...scrollRevealOption,
  origin: "right",
});
ScrollReveal().reveal(".build__content .section__header", {
  ...scrollRevealOption,
  delay: 500,
});
ScrollReveal().reveal(".build__content .section__description", {
  ...scrollRevealOption,
  delay: 1000,
});
ScrollReveal().reveal(".build__grid li", {
  ...scrollRevealOption,
  delay: 1500,
  interval: 500,
});



// 画像クリックでオーバーレイ表示
const cards = document.querySelectorAll('.build__card'); // 画像が入っているカード
const overlay = document.getElementById('overlay');
const overlayImage = document.getElementById('overlayImage');

// 各カードをクリックしたときにオーバーレイに画像を表示
cards.forEach(card => {
  card.addEventListener('click', () => {
    const image = card.querySelector('img'); // クリックしたカードの画像を取得
    overlayImage.src = image.src; // オーバーレイに画像をセット
    overlay.style.display = 'flex'; // オーバーレイを表示
  });
});

// オーバーレイをクリックしたら非表示にする
overlay.addEventListener('click', () => {
  overlay.style.display = 'none'; // オーバーレイを非表示
});




const swiper = new Swiper(".swiper", {
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
});

function openModal(imageSrc) {
  var modal = document.getElementById('myModal');
  var modalImage = document.getElementById('modalImage');
  modal.style.display = "block";  // モーダル表示
  modalImage.src = imageSrc;  // クリックした画像を表示
}

// モーダルを閉じる関数
function closeModal() {
  var modal = document.getElementById('myModal');
  modal.style.display = "none";  // モーダル非表示
}

// モーダル外をクリックした場合に閉じる
window.onclick = function(event) {
  var modal = document.getElementById('myModal');
  if (event.target == modal) {
      closeModal();
  }
}






