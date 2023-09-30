import myExports from "./navstyle.js";
const BASE_URL = "https://www.flyingtips.no/wp-json/wp/v2/posts?per_page=12";
const loadMore = document.querySelector("#loadmoreBtn");

// Get the modal
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-content");
const mainContainer = document.querySelector(".blogs");

fetch(BASE_URL)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    render(data.slice(0, 10));

    loadMore.addEventListener("click", async () => {
      const loader = document.querySelector(".loader");
      loader.style.display = "inline-block";
      setTimeout(() => {
        render(data.slice(10));
        loadMore.style.display = "none";
      }, 2000);
    });
  });

function render(data) {
  data.forEach(async (element) => {
    const { id, title, content, featured_media } = element;
    const imageUrl = await fetchMedia(featured_media);

    // create card div and adding card class
    const card = document.createElement("div");
    card.classList.add("card");

    // create img container div and it's img element
    const imgCon = document.createElement("div");
    imgCon.classList.add("imgCon"); // add imgCon class
    const img = document.createElement("img"); // create image itself
    img.src = imageUrl; // add img src
    // show modal when img is clicked
    img.onclick = () => {
      modalImg.src = imageUrl;
      modal.style.display = "block";
    };
    imgCon.appendChild(img); // put img inside imgCon div

    // creating detail div and it's element
    const detail = document.createElement("div");
    const h3 = document.createElement("h3"); // create h3 element
    h3.innerHTML = title.rendered; // h3 innerHTML
    const contentDiv = document.createElement("div"); // contentDiv element
    contentDiv.innerHTML =
      content.rendered.split("strong")[1].slice(1, 100) + "...";
    const br = document.createElement("br"); // <br> element
    const a = document.createElement("a"); // <a> element
    a.innerHTML = "readMore"; // <a>readMore</a>
    a.classList.add("readMore"); // add readmore class to <a></a>
    a.href = `blogspecific.html?id=${id}`; // add href to <a></a>
    detail.appendChild(h3); // put h3 inside detail div
    detail.appendChild(contentDiv); // put contentDiv in detail div
    detail.appendChild(br); // put <br> in detail div
    detail.appendChild(a); // put <a> in detail div

    // add imgCon and detail div in main card div
    card.appendChild(imgCon);
    card.appendChild(detail);

    // add card to maincontainer
    mainContainer.appendChild(card);
  });
}

const closeModal = document.getElementById("close-modal");
// Close the modal when the close button is clicked
closeModal.addEventListener("click", () => {
  modal.style.display = "none";
});
// Close the modal when clicking outside the image
window.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

async function fetchMedia(mediaId) {
  const response = await fetch(
    `https://www.flyingtips.no/wp-json/wp/v2/media/${mediaId}`
  );
  if (response.ok) {
    const mediaData = await response.json();
    return mediaData.source_url;
  } else {
    console.error(
      `Error fetching media with ID ${mediaId}: ${response.status}`
    );
    return null;
  }
}
