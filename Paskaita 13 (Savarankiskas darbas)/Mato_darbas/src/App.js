// kad galėtumėte kurti ir valdyti Routes
import { Routes, Route } from "react-router-dom";

// importuojame aprašytus komponentus
import PostList from "./components/PostList/PostList";
import PostPage from "./components/PostPage/PostPage";

function App() {
  return (
    <div>
      {/* Nurodome maršrutus ir su kokiais komponentais jie susiję */}
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/post/:id" element={<PostPage />} />

        {/* Jei nurodytas maršrutas nerastas, rodomas "NERASTA" */}
        {/* PVZ: http://localhost:3000/user/asdf */}
        <Route path="*" element={"NERASTA"} />

        
      </Routes>
    </div>
  );
}

export default App;
