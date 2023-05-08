import { configureStore } from "@reduxjs/toolkit";
import team from 'containers/TeamList/components/store/teamSlice'

// import trusteeReducer from 'containers/TrusteeList/store/TrusteeSlice'

export const store = configureStore({
    reducer: {team},
    middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    devTools: process.env.NODE_ENV !== "production"
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch