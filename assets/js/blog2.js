const BASE_URL = "https://www.flyingtips.no/wp-json/wp/v2/posts?per_page=12";
const loadMore = document.querySelector("#loadmoreBtn");

// Get the modal
const modal = document.getElementById("modal");
const modalImg = document.querySelector(".modal-content");

async function fetchData() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    //console.log(data)
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function renderData() {
  const mainContainer = document.querySelector(".blogs");
  const data = await fetchData();
  console.log(data);
  render(data.slice(0, 10), mainContainer);

  loadMore.addEventListener("click", () => {
    const loader = document.querySelector(".loader");
    loader.style.display = "inline-block";
    setTimeout(() => {
      render(data.slice(10), mainContainer);
      loadMore.style.display = "none";
    }, 2000);
  });
}

function render(data, container) {
  data.forEach(async (element) => {
    const { id, title, content, featured_media } = element;
    const imageUrl = await fetchMedia(featured_media);

    if (container) {
      container.innerHTML += `
              <div class="card">
                <div product_id="${id}" imageUrl="${imageUrl}" class="imgCon">
                    <img src="${imageUrl}" onclick="console.log(${imageUrl})" alt="" /> 
                </div>
                <div class="detail">
                    <h3>${title.rendered}</h3>
                    <div>${content.rendered
                      .split("strong")[1]
                      .slice(1, 100)}...</div>
                    <br>
                    <a class="readMore" href='blogspecific.html?id=${id}'>Read More</a>
                </div>
              </div>
          `;
    }
  });
}

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

renderData();

const showModal = (e) => {
  console.log("working");
  console.log(e);
  //modalImg.src = img;
  //modal.style.display = "block";
};

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
