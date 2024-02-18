import Select from "@mui/material/Select";
import { useContext, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import "./index.scss";
import { Link } from "react-router-dom";
import { Slider } from "antd";
import { Input } from "antd";
import { WineContextItem } from "../../context/WineContext";
import { Rating } from "@mui/material";
// import { jwtDecode } from "jwt-decode";
// import { getCookie } from "../../helpers";

const { Search } = Input;
const FilterWine = () => {
  const { wines } = useContext(WineContextItem);
  const [bestPicks, setBestPicks] = useState("");
  const [value] = useState(4);
  const [price, setPrice] = useState({ min: 10, max: 50 });
  const [filteredWines, setFilteredWines] = useState([]);
  const [selectedType, setSelectedType] = useState(
    JSON.parse(localStorage.getItem("selectedType"))
      ? JSON.parse(localStorage.getItem("selectedType"))
      : []
  );
  const [selectedCountry, setSelectedCountry] = useState(
    JSON.parse(localStorage.getItem("selectedCountry"))
      ? JSON.parse(localStorage.getItem("selectedCountry"))
      : []
  );

  const handleChange = (event) => {
    setBestPicks(event.target.value);
  };
  // console.log("wines", win es);
  const handleSliderChange = (value) => {
    setPrice({ min: value[0], max: value[1] });
  };

  useEffect(() => {
    let updatedWines = wines;

    if (selectedType.length > 0) {
      updatedWines = updatedWines.filter((wine) =>
        selectedType.includes(wine.type)
      );
    }

    if (selectedCountry.length > 0) {
      updatedWines = updatedWines.filter((wine) =>
        selectedCountry.includes(wine.country)
      );
    }

    updatedWines = updatedWines.filter(
      (wine) => wine.price >= price.min && wine.price <= price.max
    );

    setFilteredWines(updatedWines);
  }, [wines, selectedType, selectedCountry, price]);

  useEffect(() => {
    localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry));
    localStorage.setItem("selectedType", JSON.stringify(selectedType));
  }, [selectedCountry, selectedType]);
  //Token
  // const token = getCookie("token");
  // const decode = jwtDecode(token);
  // console.log("decode", decode);

  return (
    <section className="filterWine">
      <div className="container">
        <div className="row mt-5">
          <h2>
            Showing {filteredWines.length} wines between $10 - $50 rated above
            3.8 stars
          </h2>
          <div className="filterWine-bestPicks">
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small" style={{}}>
              <InputLabel id="demo-select-small-label">BestPicks</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={bestPicks}
                label="BestPicks"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>Sorted</em>
                </MenuItem>
                <MenuItem value="bestPicks">Best picks</MenuItem>
                <MenuItem value="highestRated">Highest rated</MenuItem>
                <MenuItem value="mostDiscounted">Most discounted</MenuItem>
                <MenuItem value="lowestPrice">Price: Lowes first</MenuItem>
                <MenuItem value="highestPrice">Price: Highest first</MenuItem>
                <MenuItem value="popular">Popular</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>
        <div className="row mt-5 ">
          <div className="col-xl-12 d-flex">
            <div className="col-xl-4">
              <div className="filterWine-wineTypes-head">
                <div className="filterWine-wineTypes-title">
                  <h2>Wine Types</h2>
                  <span>Select multiple</span>
                </div>
                <div className="filterWine-wineTypes">
                  <div className="filterWine-wineTypes-choice">
                    <Link>
                      <button
                        className={selectedType === "Red" ? "selected" : ""}
                        onClick={() =>
                          setSelectedType(selectedType === "Red" ? "" : "Red")
                        }
                      >
                        Red
                      </button>
                    </Link>
                  </div>
                  <div className="filterWine-wineTypes-choice">
                    <Link>
                      <button
                        className={selectedType === "White" ? "selected" : ""}
                        onClick={() =>
                          setSelectedType(
                            selectedType === "White" ? "" : "White"
                          )
                        }
                      >
                        White
                      </button>
                    </Link>
                  </div>
                  <div className="filterWine-wineTypes-choice">
                    <Link>
                      <button
                        className={
                          selectedType === "Sparkling" ? "selected" : ""
                        }
                        onClick={() =>
                          setSelectedType(
                            selectedType === "Sparkling" ? "" : "Sparkling"
                          )
                        }
                      >
                        Sparkling
                      </button>
                    </Link>
                  </div>
                  <div className="filterWine-wineTypes-choice">
                    <Link>
                      <button
                        className={selectedType === "Rose" ? "selected" : ""}
                        onClick={() =>
                          setSelectedType(selectedType === "Rose" ? "" : "Rose")
                        }
                      >
                        Rose
                      </button>
                    </Link>
                  </div>
                  <div className="filterWine-wineTypes-choice">
                    <Link>
                      <button
                        className={selectedType === "Dessert" ? "selected" : ""}
                        onClick={() =>
                          setSelectedType(
                            selectedType === "Dessert" ? "" : "Dessert"
                          )
                        }
                      >
                        Dessert
                      </button>
                    </Link>
                  </div>
                  <div className="filterWine-wineTypes-choice">
                    <Link>
                      <button
                        className={
                          selectedType === "Fortified" ? "selected" : ""
                        }
                        onClick={() =>
                          setSelectedType(
                            selectedType === "Fortified" ? "" : "Fortified"
                          )
                        }
                      >
                        Fortified
                      </button>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="filterWine-priceRange mt-5 mb-5">
                <div className="filterWine-wineTypes-title">
                  <h2>Price</h2>
                  <span>USD</span>
                </div>
                <span>
                  ${price.min} - ${price.max}
                </span>
                <Slider
                  size="small"
                  range
                  min={10}
                  max={50}
                  defaultValue={[price.min, price.max]}
                  onChange={handleSliderChange}
                  valueLabelDisplay="auto"
                />
              </div>

              <div className="filterWine-grapes">
                <div className="filterWine-wineTypes-title">
                  <h2>Grapes</h2>
                </div>
                <Search
                  placeholder="input search text"
                  style={{
                    width: "100%",
                    marginBottom: "25px",
                  }}
                />
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Cabernet</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Cabernet Sauvignon</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Chardonnay</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Grenache</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Walbec</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Merlot</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Pinor Noir</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Riesling</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Savuignon Blanc</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Shiraz/Syraz</button>
                  </Link>
                </div>
              </div>

              <div className="filterWine-regions">
                <div className="filterWine-wineTypes-title">
                  <h2>Regions</h2>
                </div>
                <Search
                  placeholder="search regions"
                  style={{
                    width: "100%",
                    marginBottom: "25px",
                  }}
                />
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Bordeaux</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Bourgogne</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Napa Valley</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Piemonte</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Rhone Valley</button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button>Toscana</button>
                  </Link>
                </div>
              </div>

              <div className="filterWine-country">
                <div className="filterWine-wineTypes-title">
                  <h2>Countries</h2>
                </div>
                <Search
                  placeholder="Search countries"
                  style={{
                    width: "100%",
                    marginBottom: "25px",
                  }}
                />
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedCountry === "Argentina" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "Argentina" ? "" : "Argentina"
                        )
                      }
                    >
                      <img src="https://web-common.vivino.com/assets/countryFlags/AR-48.png" />
                      Argentina
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedCountry === "Australia" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "Australia" ? "" : "Australia"
                        )
                      }
                    >
                      <img src="https://web-common.vivino.com/assets/countryFlags/AU-48.png" />
                      Australia
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedCountry === "Austria" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "Austria" ? "" : "Austria"
                        )
                      }
                    >
                      <img
                        src="https://web-common.vivino.com/assets/countryFlags/AT-48.png"
                        alt=""
                      />
                      Austria
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={selectedCountry === "Chile" ? "selected" : ""}
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "Chile" ? "" : "Chile"
                        )
                      }
                    >
                      <img
                        src="https://web-common.vivino.com/assets/countryFlags/CL-48.png"
                        alt=""
                      />
                      Chile
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={selectedCountry === "France" ? "selected" : ""}
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "France" ? "" : "France"
                        )
                      }
                    >
                      <img
                        src="	https://web-common.vivino.com/assets/countryFlags/FR-48.png"
                        alt=""
                      />
                      France
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedCountry === "Germany" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "Germany" ? "" : "Germany"
                        )
                      }
                    >
                      <img
                        src="https://web-common.vivino.com/assets/countryFlags/DE-48.png"
                        alt=""
                      />
                      Germany
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={selectedCountry === "Italy" ? "selected" : ""}
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "Italy" ? "" : "Italy"
                        )
                      }
                    >
                      <img
                        src="https://web-common.vivino.com/assets/countryFlags/IT-48.png"
                        alt=""
                      />
                      Italy
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedCountry === "Portugal" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "Portugal" ? "" : "Portugal"
                        )
                      }
                    >
                      <img
                        src="	https://web-common.vivino.com/assets/countryFlags/PT-48.png"
                        alt=""
                      />
                      Portugal
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={selectedCountry === "Spain" ? "selected" : ""}
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "Spain" ? "" : "Spain"
                        )
                      }
                    >
                      <img
                        src="https://web-common.vivino.com/assets/countryFlags/ES-48.png"
                        alt=""
                      />
                      Spain
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-8 mb-5 pl-3">
              {filteredWines.map((wine, idx) => (
                <Link to={`/detail/${wine._id}`} key={idx}>
                  <div className="filterWine-card">
                    <div className="filterWine-card-contains">
                      <div className="filterWine-card-img">
                        <img src={wine.img} alt="" />
                      </div>
                      <div className="filterWine-card-info">
                        <span>{wine.winery}</span>
                        <h5>{wine.grapes} 2022</h5>
                        <div className="filterWine-card-info-country">
                          <img src="https://web-common.vivino.com/assets/countryFlags/FR-48.png" />
                          <span>{wine.country}</span>
                        </div>
                      </div>
                      <div className="filterWine-card-price">
                        <div className="filterWine-card-rating">
                          <h1>4.4</h1>
                          <Rating
                            name="read-only"
                            value={value}
                            readOnly
                            style={{
                              color: "#891826",
                            }}
                          />
                          <span>56 ratings</span>
                          <Link to="/basket">
                              <button>${wine.price}</button>
                          </Link>
                        </div>
                      </div>
                      
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FilterWine;
