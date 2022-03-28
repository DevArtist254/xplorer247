const Spinner = (WrappedComp) => ({ isloading, ...otherProps }) => {
  return isloading ? (
    <div className="anime">
      <div className="loader">
        <div className="circle"></div>
        <div className="circle"></div>
      </div>
    </div>
  ) : (
    <WrappedComp {...otherProps} />
  );
};

export default Spinner;
