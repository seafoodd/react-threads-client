import { api } from "./api";
import { Follows } from "../types";

export const followsApi = api.injectEndpoints({
  endpoints: builder => ({
    followUser: builder.mutation<void, { followingId: string }>({
      query: body => ({
        url: "/follow",
        method: "POST",
        body,
      }),
    }),
    unfollowUser: builder.mutation<void, { followingId: string }>({
      query: followingId => ({
        url: `/follow/${followingId}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const { useFollowUserMutation, useUnfollowUserMutation } = followsApi;

export const {
  endpoints: { followUser, unfollowUser },
} = followsApi;
