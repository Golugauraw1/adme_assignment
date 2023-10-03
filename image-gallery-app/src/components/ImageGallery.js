import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

const ImageGallery = () => {
  const [images, setImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const perPage = 10; // Number of images per page
  const [totalPages, setTotalPages] = useState(0);

  useEffect(() => {
    axios
      .get(`https://picsum.photos/v2/list?page=${currentPage}&limit=${perPage}`)
      .then((response) => {
        setImages(response.data);
        // Extract the total number of pages from the response headers
        const totalPagesHeader = response.headers['x-total-pages'];
        setTotalPages(Number(totalPagesHeader));
      })
      .catch((error) => {
        console.error('Error fetching images: ', error);
      });
  }, [currentPage]);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="image-gallery">
      <h2>Image Gallery</h2>
      <div className="image-list">
        {images.map((image) => (
          <div key={image.id} className="image-item">
            <img
              src={image.download_url}
              alt={`Image ${image.id}`}
              width="200"
              height="200"
            />
          </div>
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default ImageGallery;
