const { createAsyncThunk } = require("@reduxjs/toolkit");

export const createThunkFromApi = (name, api, handleResponse) =>
  createAsyncThunk(name, async (args, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
      const response = await api(args);

      handleResponse && handleResponse(response, thunkAPI);

      if (args?.onThunkSuccess) args.onThunkSuccess();

      return response;
    } catch (error) {
      if (args?.onThunkCatch) args.onThunkCatch();

      return rejectWithValue(error.response.data);
    }
  });
