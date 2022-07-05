import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";

const ImageLoader = (props) => {
  return (
    <TransformWrapper
      initialScale={1}
    >
      {({ zoomIn, zoomOut, resetTransform, ...rest }) => (
        <>
          <div className="mb-2 tools">
            <button className="btn btn-secondary" onClick={() => zoomIn()}>zoom in</button>
            <button className="ml-3 btn btn-secondary" onClick={() => zoomOut()}>zoom out</button>
            <button className="ml-3 btn btn-secondary" onClick={() => resetTransform()}>reset</button>
          </div>
          <TransformComponent>
            <img src={props.link} alt="test" className="img-fluid"/>
          </TransformComponent>
        </>
      )}
    </TransformWrapper>
  );
};

export default ImageLoader;
