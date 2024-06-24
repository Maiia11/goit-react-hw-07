import { configureStore} from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";
import { filtersReducer } from "./filtersSlice";
import storage from 'redux-persist/lib/storage' 
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'

const persistConfig = {
  key: 'contacts',
  storage,
}

const contactsPersistedReducer = persistReducer(persistConfig, contactsReducer)

const rootReducer = {
  contacts: contactsPersistedReducer,
  filters: filtersReducer,
};


export const store = configureStore({
    reducer: rootReducer,
     middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
 
