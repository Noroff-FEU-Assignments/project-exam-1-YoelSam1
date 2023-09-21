const BASE_URL = 'https://www.flyingtips.no/wp-json/wp/v2/posts';

async function fetchData() {
    try {
        const response = await fetch(BASE_URL);
        const data = await response.json();
        console.log(data)
        return data;
    } catch(err) {
        console.log(err)
    }
        
  }