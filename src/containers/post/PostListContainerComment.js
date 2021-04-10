import React from "react";
import { withRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import PostListUnderComment from "../../components/post/PostListUnderComment";

const PostListContainerComment = () => {
  const { posts, error, loading, user, data, post, postsdata } = useSelector(
    ({ posts, loading, user, post }) => ({
      posts: posts.posts,
      error: posts.error,
      loading: loading["posts/READ_BOARD"],
      user: user.user,
      data: posts.data,
      boards: posts.boards,
      post: post.post,

      postsdata: posts.postsdata,
    })
  );
  // 각 게시판 별 게시물들 불러오기

  let start, end;
  start = localStorage.getItem("start");
  end = localStorage.getItem("end");
  if (start === isNaN || end === isNaN) {
    localStorage.setItem("start", 0);
    localStorage.setItem("end", 10);
    start = 1;
    end = 10;
  } else if (!start) {
    localStorage.setItem("start", 0);
    start = 1;
  } else if (!end) {
    localStorage.setItem("end", 10);
    end = 10;
  } else {
    start = start.toString().replace(/"/g, "");
    end = end.toString().replace(/"/g, "");
  }

  return (
    <PostListUnderComment
      loading={loading}
      error={error}
      posts={posts}
      data={data}
      post={post}
      user={user}
      postsdata={postsdata}
      showWriteButton={user}
    />
  );
};

export default withRouter(PostListContainerComment);
