import { useDropzone } from "react-dropzone";
import "./CreateWinery.css";

const DropZone = ({onDrop, image}) => {
  const {getRootProps, getInputProps } = useDropzone({
    onDrop,
    accepts: "image/*",
    multiple: false,
  });

  return (
    <>
      <div {...getRootProps()} className={`dropzone`}>
        <input {...getInputProps()} />
        <label>{image? image.split("/")[image.split("/").length-1] : "Drag and drop or click to upload an image"}
        </label>
      </div>
    </>
  );
};

export default DropZone;
