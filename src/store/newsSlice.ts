import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

interface Article {
    title: string;
    description: string;
    image: string;
}

interface NewsState {
  articles: Article[];
  loading: boolean;
  error: string | null;
}

const initialState: NewsState = {
  articles: [],
  loading: false,
  error: null,
};



export const fetchNewsFromApi1 = createAsyncThunk<Article[], string>('news/fetchApi1', async (query) => {
    const response = await axios.get(`https://api.mediastack.com/v1/news?access_key=e568efb538478c1bf108e4ce158325b1&${query?`keywords=${query}` : ''}`);
    return response.data.data || response.data; 
  });
  
  
  export const fetchNewsFromApi2 = createAsyncThunk<Article[], string>('news/fetchApi2', async (query: string) => {
    const response = await axios.get(`https://api.thenewsapi.com/v1/news/top?api_token=u1nVhIBFpfQXqpGXkeUAtwChWddxp9yqoej17Q9l&locale=us&limit=3&${query?`search=${query}` : ''}`);
    return response.data.data || response.data; 
  });
  

  
const newsSlice = createSlice({
    name: 'news',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchNewsFromApi1.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchNewsFromApi1.fulfilled, (state, action: PayloadAction<Article[]>) => {
            const transformedArticles = action.payload.map((item: Article) => ({
                title: item.title, 
                description: item.description,
                image: item.image,
            }));
          state.articles = [...state.articles, ...transformedArticles];
          state.loading = false;
        })
        .addCase(fetchNewsFromApi1.rejected, (state, action) => {
          state.error = action.error.message || 'Failed to fetch news from API 1';
          state.loading = false;
        })
        .addCase(fetchNewsFromApi2.pending, (state) => {
          state.loading = true;
        })
        .addCase(fetchNewsFromApi2.fulfilled, (state, action: PayloadAction<Article[]>) => {
        
            const transformedArticles = action.payload.map((item: any) => ({
                title: item.title, 
                description: item.description,
                image: item.image_url,
              }));
        
          state.articles = [...state.articles, ...transformedArticles];
          state.loading = false;
        })
        .addCase(fetchNewsFromApi2.rejected, (state, action) => {
          state.error = action.error.message || 'Failed to fetch news from API 2';
          state.loading = false;
        })
    },
  });
  
  export default newsSlice.reducer;