import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { db } from "../../firebase/initFirebase";
import { collection, addDoc, getDocs } from "firebase/firestore";

//Action
export const getAdvertisement = createAsyncThunk(
  "getAdvertisement",
  async () => {
    const temp = [];
    const data = await getDocs(collection(db, "advertisement"));
    data.forEach((val) => {
      temp.push(val.data());
    });
    return temp;
  }
);

const advertisementSlice = createSlice({
  name: "advertisement",
  initialState: {
    isLoading: false,
    data: null,
    isError: false,
  },
  reducers: {
    async addAdvertisement(state, actions) {
      try {
        const docRef = await addDoc(
          collection(db, "advertisement"),
          actions.payload
        );
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAdvertisement.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(getAdvertisement.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(getAdvertisement.rejected, (state, action) => {
      state.isError = false;
    });
  },
});

export const { addAdvertisement } = advertisementSlice.actions;
export default advertisementSlice;
