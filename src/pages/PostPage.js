import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostCommentContainer from "../containers/post/PostCommentContainer";
import PostListContainerComment from "../containers/post/PostListContainerComment";
import PostViewerContainer from "../containers/post/PostViewerContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <PostCommentContainer />
      <PostListContainerComment></PostListContainerComment>
      <PaginationContainer />
    </>
  );
};

export default PostPage;
