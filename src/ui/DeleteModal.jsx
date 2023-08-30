/* eslint-disable react/prop-types */

const DeleteModal = (props) => {
  const { onCancel, onDelete } = props;

  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center  bg-black/20 backdrop-blur-sm">
      <div className=" flex h-40 w-64  flex-col justify-between rounded-lg bg-light p-4 lg:h-40 lg:w-80">
        <h1 className="text-center">
          Are you sure you want to delete this post?
        </h1>
        <div className="flex justify-between ">
          <button
            onClick={onCancel}
            className="transition-all duration-200 hover:drop-shadow-md"
          >
            Cancel
          </button>
          <button
            onClick={onDelete}
            className="transition-all duration-200 hover:drop-shadow-md"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteModal;
