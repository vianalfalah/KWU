const Preview = ({ file, remove = null, canRemove = true }) => {
  return (
    <>
      {file ? (
        <div className="">
          {canRemove && (
            <button style={{ color: "red" }} onClick={remove}>
              <h6>x</h6>
            </button>
          )}
          <img
            src={file.preview}
            alt={file.name}
            key={new Date() + file.size}
            style={{ width: 145, height: 110 }}
          />
        </div>
      ) : (
        <div className="icon-plus">test</div>
      )}
    </>
  );
};
export default Preview;
