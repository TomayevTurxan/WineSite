import "./index.scss";
const Pairings = () => {
  return (
    <section className="pairings">
      <div className="container">
        <div className="row">
          <div className="col-xl-4">
            <h1>Food that goes well with this wine</h1>
            <p>
              Our wine experts think this Chilean Sparkling wine would be a
              match made in heaven with these dishes. Bon appétit!
            </p>
            <p>
              Are you cooking something else? Search for wines by food pairings
            </p>
          </div>
          <div className="col-xl-8 pairings-head">
            <img
              className="pairings-head-img"
              src="https://images.vivino.com/thumbs/VkI303byQ12cjSgmxtv0Lw_pb_x300.png"
            />
            <div className="pairings-blog">
              <div className="col-xl-3 pairings-blog-type">
                <img src="https://images.vivino.com/backgrounds/foods/thumbs/13_shellfish_932x810.png" />
                <span>Selfish</span>
              </div>
              <div className="col-xl-3 pairings-blog-type">
                <img src="	https://images.vivino.com/backgrounds/foods/thumbs/27_appetizers-snacks_932x810.png" />
                <span>Appetizers and snacks</span>
              </div>
              <div className="col-xl-3 pairings-blog-type">
                <img src="	https://images.vivino.com/backgrounds/foods/thumbs/28_leanfish_932x810.png" />
                <span>Lean fish</span>
              </div>
              <div className="col-xl-3 pairings-blog-type">
                <img src="https://images.vivino.com/backgrounds/foods/thumbs/40_aperitif_932x810.png" />
                <span>Aperitif</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pairings;
