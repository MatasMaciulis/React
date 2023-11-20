import React, { useEffect, useState, useMemo } from "react";
import axios from "axios";

export default function PicturesList() {
  const [pictures, setPictures] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/photos")
      .then(({ data }) => setPictures(data))
      .catch((err) => alert(err));
  }, []);

  const sortedPhotos = useMemo(
    () => pictures.sort((a, b) => a.title.localeCompare(b.title)).slice(0, 10),
    [pictures]
  );
  console.log(sortedPhotos);
  return (
    <div>
      <button
        onClick={() => {
          setPictures((prev) => [
            ...prev,
            {
              albumId: 1,
              id: 5555,
              title: "a aaaaaa mano nuotrauka",
              url: "https://via.placeholder.com/600/92c952",
              thumbnailUrl: "https://via.placeholder.com/150/92c952",
            },
          ]);
        }}
      >
        Add photo
      </button>
      {sortedPhotos.map((picture) => (
        <>
          <p>{picture.title}</p>
          <img key={picture.id} src={picture.thumbnailUrl} alt="" />
        </>
      ))}
    </div>
  );
}
