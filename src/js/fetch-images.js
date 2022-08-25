import axios from 'axios';

export default async function fetchImages(value, page) {
    const url = 'https://pixabay.com/api/';
    const key = '29499113-43da6bfb9ce26b9bb71689aa3';
    const filter = `?key=${key}&q=${value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;

    return await axios.get(`${url}${filter}`).then(response => response.data);
}