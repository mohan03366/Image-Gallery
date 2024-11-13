import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import "./ImageDetails.css";

const ImageDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [image, setImage] = useState(null);

  useEffect(() => {
    const fetchImageDetail = async () => {
      try {
        const response = await axios.get(
          `https://api.slingacademy.com/v1/sample-data/photos/${id}`
        );
        setImage(response.data);
      } catch (error) {
        console.error("Error fetching image details:", error);
      }
    };

    fetchImageDetail();
  }, [id]);

  if (!image) return <p>Loading...</p>;

  return (
    <div className="image-detail">
      <button onClick={() => navigate(-1)}>Back</button>
      {image.url ? (
        <img src={image.url} alt={image.title || "Image"} />
      ) : (
        <p>No image available</p>
      )}
      <h2>{image.title || "Untitled"}</h2>
      <p>{image.description || "No description available."}</p>
    </div>
  );
};

export default ImageDetail;
