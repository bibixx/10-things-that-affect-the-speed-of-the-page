const imagesReducer = (state, action) => {
  switch (action.type) {
    case 'IMAGES/FETCH_ALL': {
      return [...action.payload];
    }

    case 'IMAGES/FETCH_BY_ID': {
      const { payload: newImage } = action;

      const isNewImageInOldOnes = state.find((image) => image.id === newImage.id)

      if (isNewImageInOldOnes) {
        return state.map((image) =>
          image.id === newImage.id
          ? newImage
          : image
        )
      }

      return [newImage];
    }
    // no default
  }

  return state;
}

export default imagesReducer;
