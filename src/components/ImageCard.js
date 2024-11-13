// src/components/ImageCard.js
import React from "react";
import { useNavigate } from "react-router-dom";
import "./ImageCard.css";

const ImageCard = ({ image }) => {
  const navigate = useNavigate();

  return (
    <div className="image-card" onClick={() => navigate(`/image/${image.id}`)}>
      <img src={image.thumbnailUrl} alt={image.title} />
      <p>{image.title}</p>
    </div>
  );
};

export default ImageCard;
