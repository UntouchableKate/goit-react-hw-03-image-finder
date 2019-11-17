const fetchCards = (query = '', numberPage = 1) => {
  return fetch(
    `https://pixabay.com/api/?key=14134872-e022301753fdb280678fa084b&q=${query}&image_type=photo&oriental=horizontal&page=${numberPage}&per_page=12`,
  )
    .then(res => res.json())
    .then(data => data.hits);
};

export default fetchCards;
