import { api } from "./api"
import { Comment } from "../types"

export const commentsApi = api.injectEndpoints({
  endpoints: builder => ({
    createComment: builder.mutation<Comment, Partial<Comment>>({
      query: commentData => ({
        url: `/comments`,
        method: "POST",
        body: commentData,
      }),
    }),
    deleteComment: builder.mutation<void, string>({
      query: id => ({
        url: `/comments/${id}`,
        method: "DELETE",
      }),
    }),
  }),
})

export const { useCreateCommentMutation, useDeleteCommentMutation } =
  commentsApi

export const {
  endpoints: { createComment, deleteComment },
} = commentsApi
