import React, {useState, useEffect} from 'react';
import Modal from '../modal/Modal';
import classes from "./Gallery.module.css";

interface ImageSource {
  url: string,
  height: number,
  width: number,
}

interface ImageData {
  thumbnail: string,
  url: string,
  id: string,
  preview: ImageSource,
  source: ImageSource
}

const Gallery= () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState('');
  
  useEffect(() => {
    try{
     const fetchImages = async () => {
      const res = await fetch('https://www.reddit.com/r/nocontextpics.json?raw_json=1');
      const resData = await res.json();
      const imageData = resData.data.children.map((imgData:any )=> {
        return {
          thumbnail: imgData.data.thumbnail,
          url: imgData.data.url,
          id: imgData.data.id,
          source: {
            url: imgData.data.preview.images[0].source.url,
            height: imgData.data.preview.images[0].source.height,
            width: imgData.data.preview.images[0].source.width,
          },
          preview: imgData.data.preview.images[0].resolutions[2]
        }
      })
      setImages(imageData);
    }
    fetchImages();
  }
  catch(err) {
    console.error(err);
  }
  }, []);

  const imageClickedHandler = (url:string) => {
    setModalImageUrl(url);
    setShowModal(true);
  }

  if (!images) return <div>Loading...</div>

  return (
    <>
    {showModal && <Modal show={showModal} closeModal={() => setShowModal(false)} imgUrl={modalImageUrl}/>}
    <div className={classes.Gallery}>
      {images.map((img:ImageData) => (
        <div key={img.id} className={classes.ImageContainer} onClick={() => imageClickedHandler(img.source.url)}>
          <img  className={classes.Image} src={img.preview.url} alt={img.id} />
        </div>
      ))}
    </div>
    
    </>
  )
}

export default Gallery;