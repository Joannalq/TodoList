import {
  ADD_TODO,
  DELETE_TODO,
  UPDATE_CHECKLIST,
  DELETE_SELECTITEMS,
} from "../actionType";

export const initialState = {
  items: [],
  checkList: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    }

    case DELETE_TODO:
      return {
        ...state,
        items: [...state.items.filter((item) => item.id !== action.payload.id)],
      };

    case UPDATE_CHECKLIST: {
      const updatedList = state.checkList.filter(
        (item) => !action.payload.find((payload) => payload.id === item.id)
      );
      return {
        ...state,
        checkList: [...updatedList, ...action.payload],
      };
    }

    case DELETE_SELECTITEMS: {
      const { checkList } = action.payload;
      const checkedIds = checkList.map((checkedItem) => {
        return checkedItem.id;
      });
      return {
        items: [
          ...state.items.filter((item) => {
            if (!checkedIds.includes(item.id)) {
              return item;
            }
          }),
        ],
        checkList: [
          ...state.checkList.filter((singleCheckItem) => {
            if (!checkedIds.includes(singleCheckItem.id)) {
              return singleCheckItem;
            }
          }),
        ],
      };
    }

    default:
      return state;
  }
}
