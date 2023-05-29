import "./Post.css";
import { Route, Routes, useParams } from "react-router-dom";
import posts from "@/json/posts.json";
import PostModel from "@/components/PostModel";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import NotFound from "../NotFound";
import CommonPage from "../../components/CommonPage";

export default function Post() {
  const params = useParams();
  const post = posts.find((post) => {
    return post.id === Number(params.id);
  });

  if (!post) {
    return <NotFound />;
  }

  return (
    <Routes>
      <Route path="*" element={<CommonPage />}>
        <Route
          index
          element={
            <PostModel
              bannerPhoto={`/assets/posts/${post.id}/capa.png`}
              title={post.title}
            >
              <div className="post-markdown-container">
                <ReactMarkdown>{post.text}</ReactMarkdown>
              </div>
            </PostModel>
          }
        />
      </Route>
    </Routes>
  );
}
