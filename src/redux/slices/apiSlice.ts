import { BaseQueryFn, createApi, FetchArgs, fetchBaseQuery, FetchBaseQueryError } from "@reduxjs/toolkit/query/react";
import { API_URL, EPISODE_LIST_URL, PODCAST_LIST_URL } from '../../utils/constant';
import { IPodcastDetail, IPodcastsResponse } from '../../interfaces/podcast';
import { IEpisode, IEpisodeResponse} from '../../interfaces/episode';
import { transformPodcast } from "../../utils/utils";

const standardBaseQuery = fetchBaseQuery({
  baseUrl: API_URL,
});

export const customBaseQuery: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (args, api, extraOptions) => {
  let result = await standardBaseQuery(args, api, extraOptions);

  if (result.error && (result.error.status === 'FETCH_ERROR' || result.error.status === 404 || result.error.status === 0)) {
    console.log('Fetch error encountered, retrying with AllOrigins...');
    try {
      const url = typeof args === 'string' ? args : args.url;
      const allOriginsUrl = `https://api.allorigins.win/get?url=${encodeURIComponent(url)}`;
      const response = await fetch(allOriginsUrl);

      if (!response.ok) {
        return { error: { status: response.status as number, data: 'Failed to fetch data from AllOrigins.' } };
      }

      const data = await response.json();
      return { data: JSON.parse(data.contents) }; 
    } catch (error) {
      return { error: { status: 'FETCH_ERROR', data: 'An error occurred when using AllOrigins.' } as unknown as FetchBaseQueryError };
    }
  }
  return result;
};

const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: customBaseQuery,
  tagTypes: ['Podcasts', 'Episodes'],
  endpoints: (builder) => ({
    getPodcasts: builder.query<IPodcastDetail[], void>({
      query: () => {
        return ({
          url: PODCAST_LIST_URL,
          method: 'GET',
        })
      },
      transformResponse: (response: IPodcastsResponse) => { 
        return transformPodcast(response)
      },
      providesTags: () => [{ type: 'Podcasts' }],
      keepUnusedDataFor: 24 * 60 * 60,
    }),

    getEpisodes: builder.query<IEpisode[], {podcastId: string}>({
      query: ({podcastId}) => {
        return ({
          url: `${API_URL}${EPISODE_LIST_URL}&id=${podcastId}`,
          method: 'GET',
        })
      },
      transformResponse: (response: IEpisodeResponse) => {        
        return response?.results;
      },
      providesTags: () => [{ type: 'Episodes' }],
      keepUnusedDataFor: 24 * 60 * 60,
    }),
  }),
})

export const { useGetPodcastsQuery, useGetEpisodesQuery, useLazyGetPodcastsQuery, useLazyGetEpisodesQuery } = apiSlice;

export default apiSlice;
