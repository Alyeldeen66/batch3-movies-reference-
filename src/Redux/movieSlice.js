import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  movies: [
    {
      id: 1,
      img: "https://www.imagezcameraclub.co.uk/wp-content/uploads/2022/11/19-Walking-with-Giants-Kes-Ward.jpg",
      title: "Fast",
      description: "A movie",
    },
    {
      id: 2,
      img: "https://www.imagezcameraclub.co.uk/wp-content/uploads/2022/11/19-Walking-with-Giants-Kes-Ward.jpg",
      title: "Hindi",
      description: "A movie",
    },
  ],
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addmovie: (state, action) => {
      console.log(action.payload);
      state.movies = [...state.movies, action.payload];
    },
  },
});

export const { addmovie } = movieSlice.actions;
export default movieSlice.reducer;
