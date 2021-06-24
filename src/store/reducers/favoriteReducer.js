import {
  ADD_TO_FAVORITE,
  REMOVE_FROM_FAVORITE,
} from "../actions/FavoriteActions";
import { favoriteItems } from "../initialValues/favoriteItems";

const initialState = {
  favoriteItems: favoriteItems,
};

export default function favoriteReducer(
  state = initialState,
  { type, payload }
) {
  switch (type) {
    case ADD_TO_FAVORITE:
      let jobAdvertisement = state.favoriteItems.find(
        (j) => j.jobAdvertisement.id === payload.id
      );
      if (jobAdvertisement) {
        jobAdvertisement.quantity=1;
        return {
          ...state,
        };
      } else {
        return {
          ...state,
          favoriteItems: [
            ...state.favoriteItems,
            { quantity: 1, jobAdvertisement: payload },
          ],
        };
      }
    case REMOVE_FROM_FAVORITE:
      return {
        ...state,
        favoriteItems: state.favoriteItems.filter(
          (j) => j.jobAdvertisement.id !== payload.id
        ),
      };
    default:
      return state;
  }
}
