import { FETCH_MAPDATA, FETCH_ATTR } from "../actions";
import _ from "lodash";
export default function(state = {}, action) {
  switch (action.type) {
    case FETCH_MAPDATA:
      const deli = _.mapKeys(action.payload.data, "id");
      return deli;

    case FETCH_ATTR:
      const attr = _.mapKeys(action.payload.data, "id");
      return attr;

    default:
      return state;
  }
}
