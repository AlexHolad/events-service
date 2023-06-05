import {
  createSlice,
  createSelector,
  createEntityAdapter,
  createAsyncThunk
} from "@reduxjs/toolkit";



const initialState = [
  {
    title: "Jazz concert",
    category: "концерты",
    description: "Laborum tempor incididunt anim est id duis culpa cupidatat dolor aute. Do eiusmod sit nisi magna sint tempor ex. Ipsum ad magna occaecat commodo culpa cupidatat ut consequat cillum aute esse esse.",
    district: "Marzahn",
    location: "Mercedes Benz Arena",
    date: "2023-05-28 15:38:53",
    img: "/events-imgs/jazz-concert.jpg",
    author: "1jkdhbj"
  },
  {
    title: "Фестиваль воздушных змеев",
    category: "детям",
    description: "Laborum tempor incididunt anim est id duis culpa cupidatat dolor aute. Do eiusmod sit nisi magna sint tempor ex. Ipsum ad magna occaecat commodo culpa cupidatat ut consequat cillum aute esse esse.",
    district: "Marzahn",
    location: "Freizeitforum Marzahn",
    date: "2023-05-28 15:38:53",
    img: "/events-imgs/drachenfest.jpeg",
    author: "1jkdhbj",
  },
]


const eventsAdapter = createEntityAdapter({
  sortComparer: (a, b) => b.title.localeCompare(a.title),
});


// const initialState = eventsAdapter.getInitialState({
//     status: 'idle',
//     error: null
//   })

// export const fetchEvents = createAsyncThunk('events/fetchEvents', async () => {
//     const response = await client.get('/fakeApi/evens')
//     return response.data
//   })
  
  // export const addNewEvent = createAsyncThunk(
  //   'posts/addNewEvent',
  //   // The payload creator receives the partial `{title, content, user}` object
  //   async initialPost => {
  //     // We send the initial data to the fake API server
  //     const response = await client.post('/api/events', initialPost)
  //     // The response includes the complete post object, including unique ID
  //     return response.data
  //   }
  // )
  
  const eventsSlice = createSlice({
    name: 'events',
    initialState,
    reducers: {}
  })
  
  
  export default eventsSlice.reducer
  
  // REUSABLE SELECTOR FUNCTIONS - used to avoid rewriting our components every time we made a change to the data format in our reducers. 
  // One way to avoid this is to define reusable selector functions in the slice files, 
  // and have the components use those selectors to extract the data they need
  //  instead of repeating the selector logic in each component. 
  //  That way, if we do change our state structure again, we only need to update the code in the slice file.   
  
  // Export the customized selectors for this adapter using `getSelectors`


