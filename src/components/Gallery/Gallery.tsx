import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import Modal from "../modal/Modal";
import fetchFromReddit from "../../api/fetchFromReddit";
import classes from "./Gallery.module.css";

interface ImageSource {
  url: string;
  height: number;
  width: number;
}

interface ImageData {
  thumbnail: string;
  url: string;
  id: string;
  preview: ImageSource;
  source: ImageSource;
}

type Props = {
  subreddit: string;
};

const Gallery: React.FC<Props> = ({ subreddit }) => {
  const [images, setImages] = useState<ImageData[]>([]);
  // const [subreddit, setSubreddit] = useState('nocontextpics');
  const [loading, setLoading] = useState(true);
  const [nextPage, setNextPage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [modalImageUrl, setModalImageUrl] = useState("");

  // useEffect(() => console.log(images));

  const observer = useRef<IntersectionObserver>();

  const fetchMorePictures = useCallback(async () => {
    setLoading(true);
    const resData = await fetchFromReddit(subreddit, nextPage);
    // console.log(resData);
    setNextPage(resData.after);
    const fetchedImages = configureImageObject(resData.children);
    const updatedImages = [...images, ...fetchedImages];
    setImages(updatedImages);
    setLoading(false);
  }, [images, nextPage, subreddit]);

  const lastPictureElementRef = useCallback(
    (node) => {
      // console.log(node);
      // if(loading) return;

      if (observer.current) {
        // console.log(observer.current);
        observer.current.disconnect();
      }
      // console.log("last Picture ref preis new intersection");
      observer.current = new IntersectionObserver((entries) => {
        // console.log(entries);
        if (entries[0].isIntersecting && images.length <= 100) {
          console.log("visible");
          fetchMorePictures();
        }
      });
      // console.log("last Picture ref po new intersection");

      if (node) observer.current.observe(node);
    },
    [fetchMorePictures, images.length]
  );

  const configureImageObject = (data: any) => {
    const filteredData = data.filter(
      (content: any) => !(content.data.preview === undefined)
    );
    // const fitleredData = data;
    // console.log(fitleredData);
    // console.log(data[0].data);
    return filteredData.map((imgData: any) => {
      // console.log(imgData.data.images[0].source.url);
      let previewImage = imgData.data.preview.images[0].resolutions[2];
      if (previewImage === undefined) {
        previewImage = imgData.data.preview.images[0].resolutions[1];
      }
      return {
        thumbnail: imgData.data.thumbnail,
        url: imgData.data.url,
        id: imgData.data.id,
        source: {
          url: imgData.data.preview.images[0].source.url,
          height: imgData.data.preview.images[0].source.height,
          width: imgData.data.preview.images[0].source.width,
        },
        preview: previewImage,
      };
    });
  };

  useEffect(() => {
    const fetchImages = async () => {
      try {
        setLoading(true);
        const resData = await fetchFromReddit(subreddit);
        console.log(resData);
        setNextPage(resData.after);
        const imageData = configureImageObject(resData.children);
        // console.log(imageData);
        setImages(imageData);
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };
    fetchImages();
  }, [subreddit]);

  const imageClickedHandler = (url: string) => {
    setModalImageUrl(url);
    setShowModal(true);
  };

  return (
    <>
      {showModal && (
        <Modal
          show={showModal}
          closeModal={() => setShowModal(false)}
          imgUrl={modalImageUrl}
        />
      )}
      {images.length > 0 && (
        <div className={classes.Gallery}>
          {images.map((img: ImageData, index: number) => (
            <motion.div
              ref={images.length === index + 1 ? lastPictureElementRef : null}
              layout
              whileHover={{ opacity: 1 }}
              key={img.id}
              className={classes.ImageContainer}
              onClick={() => imageClickedHandler(img.source.url)}
            >
              <motion.img
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index / 100 }}
                className={classes.Image}
                src={img.preview.url}
                alt={img.id}
              />
            </motion.div>
          ))}
        </div>
      )}
      {loading && <div>Loading...</div>}
      {/* <button onClick={fetchMorePictures}>More</button> */}
    </>
  );
};

export default Gallery;
