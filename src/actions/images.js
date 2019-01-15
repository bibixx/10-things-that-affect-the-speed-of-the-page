import { getImages, getImageById } from '../api/images';

export const fetchImages = dispatch => async () => {
  const { data: { images = [] } = {} } = await getImages();

  dispatch({
    type: 'IMAGES/FETCH_ALL',
    payload: images      
  });
}

export const fetchImageById = dispatch => async (id) => {
  const { data: { image = {} } = {} } = await getImageById(id);

  dispatch({
    type: 'IMAGES/FETCH_BY_ID',
    payload: image
  });
}
