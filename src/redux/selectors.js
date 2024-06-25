import { createSelector } from "@reduxjs/toolkit";

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.loading;
export const selectError = state => state.contacts.error;
export const selectFilters = state => state.filters.name;

export const filteredContacts = createSelector([selectContacts, selectFilters], (contacts, filters) => {
    if (!filters) {
      return contacts;
    }
    return contacts.filter(contact => contact.name.toLowerCase().includes(filters.toLowerCase())
   );
    
})
   