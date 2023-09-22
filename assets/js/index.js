
const BASE_URL = "https://www.flyingtips.no/wp-json/wp/v2/posts?per_page=12";

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
  const mainContainer = document.querySelector(".main-container");
  const data = await fetchData();
  render(data, mainContainer);
}

function render(data, container) {
  console.log(data);

  data.forEach(async (element) => {
    const { id, title, content, featured_media } = element;
    const imageUrl = await fetchMedia(featured_media );

    if (container) {
      container.innerHTML += `
            <div class="card">
                <div product_id="${id}" class="imgCon">
                    <img src="${imageUrl}" alt="" /> 
                </div>
                <div class="detail">
                    <h3>${title.rendered}</h3>
                    <div>${content.rendered.split("strong")[1].slice(1,100)}...</div>
                    <br>
                    <button>Read More</button>
                </div>
            </div>
        `;
    }
  });
}

async function fetchMedia(mediaId) {
  const response = await fetch(`https://www.flyingtips.no/wp-json/wp/v2/media/${mediaId}`);
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
