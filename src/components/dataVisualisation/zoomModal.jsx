import ImageLoader from "./imageLoader";
import PureModal from "react-pure-modal";
import "react-pure-modal/dist/react-pure-modal.min.css";

const ZoomModal = (props) => {
  return (
    <PureModal
      width="900px"
      header={props.imageHeader}
      footer={
        <div>
          <button
            className="btn btn-dark"
            onClick={() => props.setZoomModal(false)}
          >
            Cancel
          </button>
         
        </div>
      }
      isOpen={props.zoomModal}
      onClose={() => {
        props.setZoomModal(false);
        return true;
      }}
    >
   
      <ImageLoader dirArr={props.dirArr} link={props.imgSelected} />
    </PureModal>
  );
};

export default ZoomModal;
