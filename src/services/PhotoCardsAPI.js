import contants from '../constants';

const fetchCards = (query = '', numberPage = 1, itemsPerPage = 12) => {
  const PER_PAGE = `&per_page=${itemsPerPage}`;
  const CURRENT_PAGE = `&page=${numberPage}`;
  const QUERY = `&q=${query}`;
  return (
    fetch(
      contants.BASE_URL +
        contants.URL_KEY +
        QUERY +
        contants.IMAGE_TYPE +
        contants.ORIENTAL +
        CURRENT_PAGE +
        PER_PAGE,
    )
      // `https://pixabay.com/api/?key=14134872-e022301753fdb280678fa084b&q=${query}&image_type=photo&oriental=horizontal&page=${numberPage}&per_page=12`,
      .then(res => res.json())
      .then(data => data.hits)
  );
};

export default fetchCards;
