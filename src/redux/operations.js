import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

axios.defaults.baseURL = "https://66798f0d18a459f639507715.mockapi.io/";

export const fetchContacts = createAsyncThunk("contacts/fetchAll", async () => {
    const response = await axios.get("contacts")
    return response.data
})

