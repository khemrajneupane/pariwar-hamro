"use client";

import { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { FiTrash2 } from "react-icons/fi";
import "./imageGallery.css";

const Gallery = () => {
  const [images, setImages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchImages = async () => {
    try {
      const res = await fetch("/api/images");
      const data = await res.json();
      setImages(data.images || []);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  const deleteImage = async (publicId: string, id: string) => {
    try {
      const response = await fetch(`/api/images/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) throw new Error("Delete failed");

      setImages(images.filter((img) => img._id !== id));
    } catch (error) {
      console.error("Delete error:", error);
      alert("Failed to delete image");
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  if (loading) return <div className="loading-spinner">Loading...</div>;

  const galleryItems = images.map((img) => ({
    original: img.url,
    thumbnail: img.url,
    originalAlt: "Family Image",
    thumbnailAlt: "Thumbnail",
    renderItem: (item: any) => (
      <div className="gallery-item-container">
        <img
          src={item.original}
          alt={item.originalAlt}
          className="gallery-original-image"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            deleteImage(img.public_id, img._id);
          }}
          className="delete-btn"
        >
          <FiTrash2 className="trash-icon" />
        </button>
      </div>
    ),
  }));

  return (
    <div className="gallery-container">
      <ImageGallery
        items={galleryItems}
        showPlayButton={true}
        showFullscreenButton={true}
        showThumbnails={true}
        autoPlay={false}
        slideInterval={5000}
        additionalClass="custom-gallery"
      />
    </div>
  );
};

export default Gallery;
