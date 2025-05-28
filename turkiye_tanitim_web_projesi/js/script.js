function toggleInfo(headerElement) {
  const paragraph = headerElement.nextElementSibling;
  paragraph.classList.toggle("hidden");
}


function toggleInfo(headerElement) {
  const allHiddenParagraphs = document.querySelectorAll(".sehirler p");
  const currentParagraph = headerElement.nextElementSibling;

  allHiddenParagraphs.forEach(p => {
    if (p !== currentParagraph) p.classList.add("hidden");
  });

  currentParagraph.classList.toggle("hidden");
}


window.onscroll = function () {
  const btn = document.getElementById("topBtn");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    btn.style.display = "block";
  } else {
    btn.style.display = "none";
  }
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

  if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "/index") {
  const saat = new Date().getHours();
  let mesaj = "Merhaba!";

  if (saat < 12) mesaj = "Günaydın!";
  else if (saat < 18) mesaj = "İyi günler!";
  else mesaj = "İyi akşamlar!";

  const h1 = document.querySelector("header h1");
  if (h1) {
    h1.textContent += " " + mesaj;
  }
}


  document.addEventListener("DOMContentLoaded", () => {
  const bolgeSec = document.getElementById("bolgeSec");
  const sehirSonuc = document.getElementById("sehirSonuc");

  const bolgeler = {
    akdeniz: ["Adana", "Antalya", "Mersin"],
    ege: ["İzmir", "Muğla", "Aydın"],
    marmara: ["İstanbul", "Bursa", "Edirne"],
    karadeniz: ["Trabzon", "Rize", "Ordu"]
  };

  bolgeSec.addEventListener("change", function () {
    const secilen = this.value;

    if (secilen && bolgeler[secilen]) {
      const sehirler = bolgeler[secilen]
        .map(sehir => `<li>📍 ${sehir}</li>`)
        .join("");
      sehirSonuc.innerHTML = `
        <h3>${this.options[this.selectedIndex].text} Bölgesi Şehirleri:</h3>
        <ul>${sehirler}</ul>
      `;
    } else {
      sehirSonuc.innerHTML = "";
    }
  });
});
