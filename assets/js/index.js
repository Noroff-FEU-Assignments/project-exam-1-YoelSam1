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
  const mainContainer = document.querySelector(".inner-slider");
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
              <a product_id="${id}" class="imgCon"  href='blogspecific.html?id=${id}'>
                  <img src="${imageUrl}" alt="" /> 
              </a>
              <div class="detail">
                  <h3>${title.rendered}</h3>
                  <div>${content.rendered.split("strong")[1].slice(1,100)}...</div>
                  <br>
                
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


/* slider container */


let sliderContainer = document.querySelector(".slider-container");
let innerSlider = document.querySelector(".inner-slider");

let pressed = false;
let startX;
let x;

innerSlider.style.left = `-1500px`;

sliderContainer.addEventListener("mousedown", (e) => {
    pressed = true;
    startX = e.offsetX - innerSlider.offsetLeft;
    sliderContainer.style.cursor = "grabbing";
});

sliderContainer.addEventListener("mouseenter", () => {
    sliderContainer.style.cursor = "grab";
});

sliderContainer.addEventListener("mouseleave", () => {
    sliderContainer.style.cursor = "default";
});

sliderContainer.addEventListener("mouseup", () => {
    sliderContainer.style.cursor = "grab";
    pressed = false;
});

sliderContainer.addEventListener("mousemove", (e) => {
    if (!pressed) return;
    e.preventDefault();

    x = e.offsetX;

    innerSlider.style.left = `${x - startX}px`;

    checkBoundary();
});

const checkBoundary = () => {
    let outer = sliderContainer.getBoundingClientRect();
    let inner = innerSlider.getBoundingClientRect();

    if (parseInt(innerSlider.style.left) > 0) {
        innerSlider.style.left = "0px";
    }

    if (inner.right < outer.right) {
        innerSlider.style.left = `-${inner.width - outer.width}px`;
    }
};

renderData();




