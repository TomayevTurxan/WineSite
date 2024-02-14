import "./index.scss";
import image1 from "../../imgs/abc.webp";
const Ratings = () => {
  return (
    <section className="ratings">
      <div className="container">
        <div className="row">
          <h1>Dive into millions of ratings</h1>
          <div className="col-xl-6 ">
            <div className="ratings-box">
              <img src={image1} />
              <h3>Great offers right now!</h3>
            </div>
          </div>
          <div className="col-xl-6 ">
            <div className="ratings-box">
              <img src={image1} />
              <h3>Explore the most popular wines</h3>
            </div>
          </div>
        </div>
   
      </div>
    </section>
  );
};

export default Ratings;
