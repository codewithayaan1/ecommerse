import React, { useEffect, useState } from 'react';
import imageCompression from 'browser-image-compression';
import { Card } from 'react-bootstrap';


const getImageAsBlob = async (imageUrl) => {
  const response = await fetch(imageUrl);
  const blob = await response.blob();
  return blob;
};

const compressBlobImage = async (blob) => {
  const options = {
    maxSizeMB: 1,
    maxWidthOrHeight: 1920,
    useWebWorker: true
  };

  const compressedFile = await imageCompression(blob, options);
  return compressedFile;
};

export const CompressedImg = ({ imageUrl }) => {
  const [compressedImage, setCompressedImage] = useState(null);

  useEffect(() => {
    let blobUrl = null;

    const processImage = async () => {
      try {
        const blob = await getImageAsBlob(imageUrl);
        const compressedFile = await compressBlobImage(blob);
        blobUrl = URL.createObjectURL(compressedFile);
        setCompressedImage(blobUrl);
      } catch (error) {
        console.log('Image processing failed:', error);
      }
    };

    processImage();
    return () => {
      if (blobUrl) {
        URL.revokeObjectURL(blobUrl);
      }
    };
  }, []);

  return (
    <div>
      {compressedImage ? (
        <Card.Img height={'500px'} style={{ objectFit: 'cover', padding: '10px', marginTop: '5px', aspectRatio: 1 }} variant="top" src={compressedImage} alt={'compressed'} />
      ) : (
        <div style={{ height: '500px' }}>
          Loading...
        </div>

      )}
    </div>
  );
};

export default CompressedImg;