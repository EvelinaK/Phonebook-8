import { createSelector } from '@reduxjs/toolkit';

const getLoading = state => state.contacts.loading;
const getFilter = state => state.contacts.filter;
const getAllCont = state => state.contacts.items;

// export const getVisibleContacts = (state) => {
//   const filter = getFilter(state);
//   const items = getAllCont(state);
//   const normalizedFilter = filter.toLowerCase();
//   return items.filter(({ name }) =>
//     name.toLowerCase().includes(normalizedFilter)
//   );
// };
const getVisibleContacts = createSelector(
  [getAllCont, getFilter],
  (items, filter) => {
    const normalizedFilter = filter.toLowerCase();
    return items.filter(({ name }) =>
      name.toLowerCase().includes(normalizedFilter),
    );
  },
);
export default {
  getVisibleContacts,
  getAllCont,
  getLoading,
  getFilter,
};
