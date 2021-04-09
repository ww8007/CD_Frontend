import React from "react";
import styled from "styled-components";
import Responsive from "../common/Responsive";
import palette from "../../lib/styles/palette";
import { Link, withRouter } from "react-router-dom";

const PostListBlock = styled(Responsive)`
  margin-top: 3rem;
  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;

const BoardItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-right: 2rem;
    margin-top: 2rem;
  }
`;

const PostItemBlock = styled.div`
  padding-top: 3rem;
  padding-bottom: 3rem;
  /* 맨 위 포스트는 padding-top 없음 */
  &:first-child {
    padding-top: 0;
  }
  & + & {
    border-top: 1px solid ${palette.gray[2]};
  }

  h2 {
    font-size: 1rem;
    margin-bottom: 0;
    margin-top: 0;
    &:hover {
      color: ${palette.gray[6]};
    }
  }
  p {
    margin-right: 2rem;
    margin-top: 2rem;
  }
`;

const PostItem = ({ post }) => {
  const { username } = post.fields.author.fields;

  const { title, writeAt } = post.fields;

  const postDate = writeAt.split("T");

  return (
    <PostItemBlock>
      <h2>
        <Link to={`/board/post/${post.pk}`}>{title}</Link>
        <br />
        <Link to={`/board/post/${post.pk}`}>
          작성자 : {username}, 작성일 : {postDate[0]}
        </Link>
      </h2>
    </PostItemBlock>
  );
};

const PostListUnderComment = ({
  posts,
  loading,
  error,

  postsdata,

  user,
}) => {
  // 에러 발생 시
  if (error) {
    return <PostListBlock>에러가 발생했습니다.</PostListBlock>;
  }
  return (
    <BoardItemBlock>
      <PostListBlock>
        {/*  로딩 중 아니고, 포스트 배열이 존재할 때만 보여줌 */}

        {!loading && posts && postsdata && (
          <div>
            {postsdata.map((post) => (
              <PostItem post={post} key={post.pk} />
            ))}
          </div>
        )}
      </PostListBlock>
    </BoardItemBlock>
  );
};

export default withRouter(PostListUnderComment);
