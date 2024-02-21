import './Loader.css';

const Loader = () => {
  return (
    <div className="loader">
      {[...Array(7)].map((_, index) => (
        <div key={index} className={`loader-square square-${index}`}></div>
      ))}
    </div>
  );
};

export default Loader;
