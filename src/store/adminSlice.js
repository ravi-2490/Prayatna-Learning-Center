import { createSlice } from "@reduxjs/toolkit";

import enquiryImage from "../../public/images/admin/enquiry.png";
import postImage from "../../public/images/admin/post.png";
import usersImage from "../../public/images/admin/users.png";

const initialState = {
  function: [
    {
      id: 1,
      name: "Incoming Enquiry",
      image: enquiryImage,
    },
    {
      id: 2,
      name: "Post notification",
      image: postImage,
    },
    {
      id: 3,
      name: "See the Users",
      image: usersImage,
    },
  ],
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
  },
});

export const { add } = adminSlice.actions;

export default adminSlice;
