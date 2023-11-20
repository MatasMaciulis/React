import "./App.css";
import PostList from "./components/PostList/PostList";
import PostPage from "./components/PostPage/PostPage";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostPage />} />
      </Routes>
    </div>
  );
}

export default App;
