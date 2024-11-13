import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await axios.get(
          "https://api.slingacademy.com/v1/sample-data/photos"
        );
        console.log(response.data); // Inspect the structure of the response
        // Assuming response.data.photos is the array of images
        setImages(response.data.photos.slice(0, 20));
        setLoading(false);
      } catch (error) {
        console.error("Error fetching images:", error);
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="gallery">
      {images.map((image) => (
        <ImageCard key={image.id} image={image} />
      ))}
    </div>
  );
};

export default Gallery;
