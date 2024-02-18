import "./index.scss";
const WineTaste = () => {
  return (
    <section className="wineTaste">
      <div className="container">
        <div className="row">
          <div className="col-xl-9 wineTaste-head">
            <h1>What does this wine taste like?</h1>
            <div className="wineTaste-degree">
              <span>Light</span>
              <div className="wineTste-degree-div">
                <div className="wineTste-degree-div-degree"></div>
              </div>
              <span>Bold</span>
            </div>
            <div className="wineTaste-degree soft">
              <span>Soft</span>
              <div className="wineTste-degree-div">
                <div className="wineTste-degree-div-degree soft"></div>
              </div>
              <span>Acidic</span>
            </div>
            <div className="wineTaste-degree gentle">
              <span>Gentle</span>
              <div className="wineTste-degree-div">
                <div className="wineTste-degree-div-degree gentle"></div>
              </div>
              <span>Fizzy</span>
            </div>
          </div>
          <div className="col-xl-3 wineTaste-season">
            <h6>WINE LOVERS TASTE SUMMARY</h6>
            <p>
              The taste profile of Echeverría Romi Orange is based on 89 user
              reviews
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WineTaste;
