document.addEventListener("DOMContentLoaded", function () {
  const tabs = document.querySelector(".tabs");
  const btns = document.querySelectorAll("button");
  const articles = document.querySelectorAll(".content");

  tabs.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove selected from other buttons
      btns.forEach(function (btn) {
        btn.classList.remove("live");
      });
      e.target.classList.add("live");
      // hide other articles
      articles.forEach(function (article) {
        article.classList.remove("live");
      });
      const element = document.getElementById(id);
      element.classList.add("live");
    }
  });
});

const linksArray = [
  "https://lh3.googleusercontent.com/pw/AP1GczMbLbSht5w_l5TugvNHX4kEAez9PzYLOCNX-zA4G0UqqLQmFWRZrEHQ6Gup7bQwXSY2AcOs-swt_WQnUvelHBjieDg8vJfEszyYf0UqqhrQVOvSFwZdhfhasTdPBPEnFQLZpz4Ze4bHKo7lJndjML88PA=w2472-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPeCticeCuXZe6-zXNdibupQJ4J_F4tpu2cbpTcM3t4QbzWUN_4ysVYdGjTLyulSwA4n8WhKfhVT9JxeayAM7HhnW2tTZX_ENLvsEhMx6jqRQlKyV9t4yU7KDnjn7sl6bEd6f_q8xkUxvVQL2TsTrlhVA=w3408-h1133-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP4L15VlNLMKvJDTUZeZN_LlR2SxDyAsvyiqzPtqGZkpLvloplbqTbPxoPOUc7TxvB4Ju2jbQ-3ODy5Eobr0KFqBbdc2G-FAr8rWT2D01IvTB15qzDJxj8LPpQqj9WRe-kb4AlKpiMnBb11MCgCvk8QTA=w3408-h890-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMD1pZyL-Rb0aF89No8OMjGWQcwEzs5KU1YHYRUkg29wp_9Z_uv24RBpLCJItQhOVh-i0izfXz9vGXlskx-fqFzgMdVPygpUzuVNHWC3qXfNOmOuiJ2iVZj8D26BBOwXlqgVjxY9NMd3FhDZD3TGuzaLw=w3408-h963-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPDHg-osHMJggYVlb4oPX_0UYs0SpJPnO3S70-4BePaUZ4IjmuqTEsK7qKNN_A7mwb-FWdbF9ep5vJtU5g-MgfFAQXXOkUtX8nVgEhF8idOQENxWecqUkIOYmnIEy4moSw6QM_q6YEiBLg2-4N8tKDiRQ=w3408-h847-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNh6ybpD5qtO2Ncc2rexKT9U-Lk7Sy8mdEjZb6pbND2hL_zODh4bHVpFHXMlMRF7EDDE_j86faOzAFWTFqulonKLNxyYwTMhNWuPFdDP106EbJBNIaUaiRyrzBXf-bJNw6OY6Ddz78uPoQlX-y1UNWFzA=w3408-h933-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMRtTSJGfte4u73IzUbMKJqrXXRvio-c91z4vKC6S5jqJ3YLr_-H67GkMjbcLkPalkjPnRKlPzoF_39AYBDexAE_xEi34u-5aUy_GqX8bSfEiNymHDFlJT1nqG4SD6eTS2LkwFjDeJqmfpcyK0xLzNCsw=w3258-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczPju_1dWaXINV3ESReBZerSASBENNdkE6fW3WnM8x75eags6spHvGQgRmMOpBT452SigoY3BtnZ-f6zCbBOc08edFEGyZuSEYEbNR8TxyTMcZfbwLLH3ZrrEjUIi6LyP4U_lEtMBdNWLqWN-yjEZd9tUw=w2794-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMPMOC1GVZ0oblQkhZIedHlYmFkVps7mOD3Di2Xn3ZVKP-wzXBha7iXQTRBIghy7lrfpXjQDSDGwFFzYRC90H25syArdIgcJ--7j4IWSRtcCeCdPoEfhelOSCd5yVZcRzkyyp7ogFfNccBGaVbcuzsjgg=w3266-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP7sxG5goAoHYnOAjgM4WBMR9ShCBTfc4FzObD4b_HD1OxK55seCKAEXBu9rj9i9_eApARfUHmRf42e6YGEV0CGwH4dwi7LHz8nm4ro4DBHJUXRlrOMWUdQolR42vZrYyED6KCIA2neVTNQF3D7MOOkDg=w3092-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczORHNbOIrQqok-kJ1Pn-MbOGJnupgov7VLIOnU-0-F7mhlzxpX1RVJbpRVFe9i62Yr6mBQg6H7JHi0Ko8icAgoV-YpcxJEZvRL_2jKOWpu6fhUYFm7YtB0oe57CT8QhR4Y4KtiDPsV2l8KxpB52Nnndzg=w2300-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNPTaQGJI7CwzOTfdgf3HjXEbrIFm5cepLUwfngJhQjscBJCiCkiftqe05BV3mTPuNOjQLRYP1lm6NfsHkOH8-A3dThXXOMfvLam1cEZJie5l4FnHqkuemWUH7uy0kXTctJiQllzTDYHJnf1SYKVgZ8nQ=w2300-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNE3XvSiNLkk7JFbR9KpjJFZbu7SUXC4cjjlDb6urL0Qx032D8RO5OpMYMQfFl8b5VZJURfhx0_d0M0kD0ywOEbzbzfvjdcHrAKj57aIvCh7IMO47KJkVeDLOltHqvRgev3ixLpwNu_97HWnbYNNPwNgQ=w2300-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczNgPOGUpTqiKRyDo0O0XnoO27a2b1P3b6AGGoYjn9wkRdCOQN4oKH1sJr0mpUgTe63kZFx_LdNUcd9ZHsEsRSm5xGZfTjO256eHRwOHFXiGrS-cHwE1oYzOYAIGXHZ2FtitidCBlPK6HMF3fk2zoyEw8Q=w2300-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczMLt0cdmEBJ25s68DKx_VfDKnc2S2zMkrY_1Rqj1Gw_2QoBSJVEpUzvLQEtten13tWI8IeLVdj0XaaVCwgBAD4bnVpiCw_EAx4rkrxTz-WMaaLCOBWyG2L6DLBOkDDcRGlignEzHLp-cUNarWtSPP_XUg=w2300-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczP374zTBDj2nBUSWQzOqCAai4RogckMjVY3lQA8fGuJB0S5feVg6Es_H8zKLaqabCLRDIYRM7xyIIVrz0uELcalc99QOALsL5uBO3AvMJVRZu6wx3Z22dJgZ0j69ptDIHJraloF2Nie6Dgfv-dbquItSg=w2300-h1294-s-no-gm?authuser=0",
  "https://lh3.googleusercontent.com/pw/AP1GczONtRQqFUmzuyw5vf1csJZ6-TT7nrgZjli28gCVAky4Fwhjuia72JiXqEjQVJGXHqUfoVXjR5Uqqu3RFa5YJcEnc7rpM3POFkL6d0aLDrzS7i0a5vht1j8rCNMnk229rU4hfTZ2dGFT6l9PSNB2ocCv2g=w2300-h1294-s-no-gm?authuser=0",
];

function imagesFromArray() {
  for (let i = 0; i < linksArray.length; i++) {
    const img = document.createElement("img");
    img.src = linksArray[i];
    img.loading = "lazy";
    //    document.body.appendChild(img);
  }
}

imagesFromArray();

function displayRandomImage() {
  const randomIndex = Math.floor(Math.random() * linksArray.length);
  return linksArray[randomIndex];
}

const photoImage = document.getElementById("photoImage");
photoImage.style.objectFit = "cover";
photoImage.style.objectPosition = "center";
let currentSlide = 0;
function showSlide() {
  if (photoImage) {
    photoImage.src = linksArray[currentSlide];
    currentSlide = (currentSlide + 1) % linksArray.length;
  }
}

setInterval(showSlide, 6000); // Change slide every 3 seconds

function fetchUsers() {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", "retrieve_users.php", true);
  xhr.onreadystatechange = xhr.XMLHttpRequest;
  if (xhr.readyState == 4 && xhr.status == 200) {
    const userTable = (document.getElementById("userTable").innerHTML =
      xhr.responseText);
    console.log(userTable);
  }
}
document.getElementById("retrieveUsers").addEventListener("click", () => {
  fetch("http://localhost/retrieve_users.php")
    .then((response) => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.text();
    })
    .then((data) => (document.getElementById("userTable").innerHTML = data))
    .catch((error) =>
      console.error("There was a problem with the request:", error)
    );
});

function displayRandomImage() {
  const randomNumber = Math.floor(Math.random() * 94) + 1;
  const imageSource = `Flinders/gallery/gallery${randomNumber}.jpg`;

  document
    .getElementById("photoButton")
    .addEventListener("click", displayRandomImage);
  let photoImage = document.getElementById("photoImage");
  photoImage.style.maxWidth = "1000px";
  photoImage.style.minWidth = "300px";
  photoImage.style.maxHeight = "80vh";
  photoImage.style.minHeight = "70vh";
  photoImage.style.boxShadow = "0 0 30px white";
  photoImage.style.padding = "0.2%";
  photoImage.style.placeSelfSelf = "center";
  // photoImage.src = imageSource;
  photoImage.src = linksArray[randomNumber];
  console.log(photoImage.src);
}

function motivationPhrase() {
  let phrases = [
    "Believe in yourself and all that you are capable of",
    "Success is not final, failure is not fatal: It is the courage to continue that counts",
    "Your only limit is you. Dream big and work hard",
    "Embrace challenges as opportunities for growth",
    "Every day is a new chance to make a positive change",
    "Don't wait for the perfect moment, take the moment and make it perfect",
    "Success is not measured by how far you go, but by the obstacles you overcome",
    "Believe you can and you're halfway there",
    "Strive for progress, not perfection",
    "Don't be afraid to fail, be afraid not to try",
    "The harder you work for something, the greater you'll feel when you achieve it",
    "Stay focused, stay positive, and never give up",
    "Success begins with self-discipline",
    "Make each day count towards your goals",
    "Believe in your abilities and trust the process",
    "Challenges are what make life interesting; overcoming them is what makes life meaningful",
    "You are stronger than you think. Keep going",
    "Don't let fear hold you back. Take that leap of faith",
    "Be the change you wish to see in the world",
    "The only way to do great work is to love what you do",
  ];
  let randomIndex = Math.floor(Math.random() * phrases.length);
  let randomPhrase = phrases[randomIndex];

  let phraseSpace = document.getElementById("phrase");
  phraseSpace.textContent = randomPhrase;
  phraseSpace.style.fontSize = "100%";

  let btnPhrase = (document.getElementById("free-button").onclick =
    motivationPhrase);
}

function openOriginalPhoto(img) {
  window.open(img.src);
}

function checkPassword() {
  let passInput = document.getElementById("passwordInput");
  let currentPassword = "TodayFI";
  let tabContent = document.getElementById("tabContent");

  if (passInput.value === currentPassword) {
    tabContent.style.display = "block";
    passInput.value = "";
  } else {
    tabContent.style.display = "hide";
  }
}

document.querySelectorAll(".btn-container").forEach((container) => {
  container.addEventListener("click", function (e) {
    const id = e.target.dataset.id;
    if (id) {
      // remove 'live' from all buttons
      document.querySelectorAll(".button").forEach(function (btn) {
        btn.classList.remove("live");
      });
      e.target.classList.add("live");

      // hide all content
      document.querySelectorAll(".content").forEach(function (article) {
        article.classList.remove("live");
      });
      const element = document.getElementById(id);
      if (element) {
        element.classList.add("live");
      }
    }
  });
});
