// import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

// const ImageLoader = (props) => {
//   return (
//     <TransformWrapper
//       initialScale={1}
//     >
//       {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
//         <>
//           <div className="mb-2 tools">
//             <button className="btn btn-secondary" onClick={() => zoomIn()}>zoom in</button>
//             <button className="ml-3 btn btn-secondary" onClick={() => zoomOut()}>zoom out</button>
//             <button className="ml-3 btn btn-secondary" onClick={() => resetTransform()}>reset</button>
//           </div>
//           <TransformComponent>
//             <img src={props.link} alt="test" className="img-fluid"/>
//           </TransformComponent>
//         </>
//       )}
//     </TransformWrapper>
//   );
// };

// export default ImageLoader;



import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
// import DataVisualisation from "./DataVisualisation";
// import "~react-image-gallery/styles/css/image-gallery.css";

// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import ImageGallery from 'react-image-gallery';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

 const link = "http://localhost:3001/images";

const Slide = (props) => {
  console.log(props.link);
  return (
    <>
      <div>
        {/* {img.imagePath} */}
        {/* <DataVisualisation /> */}

        <Carousel
          showArrows={true}
          onChange={""}
          onClickItem={""}
          onClickThumb={""}
        >
          {props.dirArr.map(img=>{
            console.log(img)
            return    <div>
            <img src={"http://localhost:3001" +img.imagePath  }/>
          </div>
          })}
          

        </Carousel>
      </div>
    </>
  );
};

export default Slide;

