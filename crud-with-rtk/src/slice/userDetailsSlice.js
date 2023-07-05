import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

// create action
export const CreatUser = createAsyncThunk(
  "createUser",
  async (user, { rejectWithValue }) => {
    const response = await fetch(
      "https://64997ab679fbe9bcf83f54e6.mockapi.io/crud",
      {
        method: "POST",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(user),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// read action

export const ReadUser = createAsyncThunk(
  "Readuser",
  async (args, { rejectWithValue }) => {
    const response = await fetch(
      "https://64997ab679fbe9bcf83f54e6.mockapi.io/crud"
    );

    try {
      const result = await response.json();
      
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// Delete action
export const DeleteUser = createAsyncThunk(
  "DeleteUser",
  async (id, { rejectWithValue }) => {
    const response = await fetch(
      `https://64997ab679fbe9bcf83f54e6.mockapi.io/crud/${id}`,
      { method: "Delete" }
    );

    try {
      const result = await response.json();
   
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

// updateUSer
export const updateUser = createAsyncThunk(
  "updateUser",
  async (data, { rejectWithValue }) => {
    const response = await fetch(
      `https://64997ab679fbe9bcf83f54e6.mockapi.io/crud/${data.id}`,
      {
        method: "put",
        headers: {
          "Content-type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify(data),
      }
    );
    try {
      const result = await response.json();
      return result;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const userDetails = createSlice({
  name: "userDetails",
  initialState: {
    users: [],
    Loading: false,
    error: null,
    SearchData: "",
  },
  reducers: {
    Searchuser: (state, action) => {
      state.SearchData = action.payload;
    },
  },
  extraReducers: {
    [CreatUser.pending]: (state) => {
      state.Loading = true;
    },
    [CreatUser.fulfilled]: (state, action) => {
      state.users.push(action.payload);
      state.Loading = false;
      state.error = null;
    },
    [CreatUser.rejected]: (state, action) => {
      state.Loading = false;
      state.error = action.payload;
    },
    [ReadUser.pending]: (state) => {
      state.Loading = true;
    },
    [ReadUser.fulfilled]: (state, action) => {
      state.users = action.payload;
      state.Loading = false;
      state.error = null;
    },
    [ReadUser.rejected]: (state, action) => {
      state.Loading = false;
      state.error = action.payload;
    },
    [DeleteUser.pending]: (state) => {
      state.Loading = true;
    },
    [DeleteUser.fulfilled]: (state, action) => {
      state.Loading = false;
      const { id } = action.payload;
      if (id) {
        state.users = state.users.filter((ele) => ele.id !== id);
      }
    },
    [DeleteUser.rejected]: (state, action) => {
      state.Loading = false;
      state.error = action.payload;
    },
    [updateUser.pending]: (state) => {
      state.Loading = true;
    },
    [updateUser.fulfilled]: (state, action) => {
      state.Loading = false;
      state.users = state.users.map((ele) =>
        ele.id === action.payload.id ? action.payload : ele
      );
    },
    [updateUser.rejected]: (state, action) => {
      state.Loading = false;
      state.error = action.payload;
    },
  },
});

export default userDetails.reducer;

export const {Searchuser} = userDetails.actions;
