import React from "react";
import HeaderContainer from "../containers/common/HeaderContainer";
import PostCommentContainer from "../containers/post/PostCommentContainer";

import PostViewerContainer from "../containers/post/PostViewerContainer";
import PaginationContainer from "../containers/posts/PaginationContainer";
import PostListContainer from "../containers/posts/PostListContainer";

const PostPage = () => {
  return (
    <>
      <HeaderContainer />
      <PostViewerContainer />
      <PostCommentContainer />
      <PostListContainer />
      <PaginationContainer />
    </>
  );
};

export default PostPage;
