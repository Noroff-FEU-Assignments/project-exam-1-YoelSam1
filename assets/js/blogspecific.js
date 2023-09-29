const id = window.location.search.split("=")[1];
const BASE_URL = "https://www.flyingtips.no/wp-json/wp/v2/posts/" + id;

async function fetchData() {
  try {
    const response = await fetch(BASE_URL);
    const data = await response.json();
    console.log(data);
    return data;
  } catch (err) {
    console.log(err);
  }
}

async function render() {
  const data = await fetchData();
  const container = document.querySelector(".main-container");

  const { id, title, content, featured_media, date } = data;
  const imageUrl = await fetchMedia(featured_media);

  // change title
  document.title = "FlyingTips | " + title.rendered;

  if (container) {
    container.innerHTML = `
              <div class="blog">
                 <img src="${imageUrl}" alt="${title.rendered}" />
                 <p>${date}
                 <h3>${title.rendered}</h3>
                 <div>${content.rendered}</div>
              </div>
          `;
  }
}

render();

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
