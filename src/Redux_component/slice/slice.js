import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://localhost:4321/user";
export const fetechUserData = createAsyncThunk("fetchuserData", async () => {
  const userData = await axios
    .get(url)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });

  return userData;
});

export const createUserData = createAsyncThunk(
  "createuserData",
  async (newUserDetails) => {
    console.log("url", url);
    console.log("newdata", newUserDetails);
    const createData = await axios
      .post(url, newUserDetails)
      .then((res) => {})
      .catch((error) => {
        return error;
      });
    return createData;
  }
);

export const editUserData = createAsyncThunk("fetchedituserData", async (id) => {
  const edituserDatas = await axios
    .get(`${url}/${id}`)
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });

  return edituserDatas;
});

export const deleteUser = createAsyncThunk("deleteUser", async (id)=>{
    const deleteUserDetails = await axios.delete(`${url}/${id}`).then(()=>{
        return id;
    }).catch((error)=>{
        return error
    })
    return deleteUserDetails;
})

const slice = createSlice({
  name: "slice",
  initialState: {
    userData: [],
    editData: [],
    isFetching: false,
    isEditing: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetechUserData.pending, (state) => {
        state.isFetching = true;
        state.isError = false;
      })
      .addCase(fetechUserData.fulfilled, (state, action) => {
        state.isFetching = false;
        state.userData = action.payload;
      })
      .addCase(fetechUserData.rejected, (state) => {
        state.isFetching = false;
        state.isError = true;
      })
      .addCase(editUserData.pending, (state) => {
        state.isEditing = true;
        state.isError = false;
      })
      .addCase(editUserData.fulfilled, (state, action) => {
        state.isEditing = false;
        state.editData = action.payload;
      })
      .addCase(editUserData.rejected, (state) => {
        state.isEditing = false;
        state.isError = true;
      })
      .addCase(deleteUser.fulfilled, (state, action)=>{
        console.log("userDeleted1111", state);
        console.log("userDeleted2222", action);

        state.userData = state.userData.filter((user) => user.id !== action.payload);
      })
      .addCase(deleteUser.rejected, (state, action)=>{
        state.isError = true
      })

    // bulider.addCase(fetechUserData.pending, (state) => {
    //     state.isLoading = true;
    //     state.isError = false;
    //   })
    // bulider.addCase(fetechUserData.fulfilled, (state, action) => {
    //     state.isLoading = false;
    //     state.userData = action.payload
    //     console.log(state.userData);
    // })
    // bulider.addCase(fetechUserData.rejected, (state,action)=>{
    //     state.isError = true;
    //     console.log("error", action.payload)
    // })

    // bulider.addCase(editUserData.fulfilled, (state, action) => {
    //     state.isEditing = false;
    //     state.editData = action.payload;
    //   })
    //   bulider.addCase(editUserData.rejected, (state) => {
    //     state.isEditing = false;
    //     state.isError = true;
    //   });
    // bulider.addCase(editUserData.fulfilled, (state,action)=>{
    //     state.editData = action.payload
    // })
    // bulider.addCase(editUserData.rejected, (state,action)=>{
    //     console.log("error", action.payload)
    // })
  },
});

export const reducer = slice.reducer;
