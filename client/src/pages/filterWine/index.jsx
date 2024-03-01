import Select from "@mui/material/Select";
import { useContext, useEffect, useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import "./index.scss";
import { Link, useNavigate } from "react-router-dom";
import { Slider } from "antd";
import { Input } from "antd";
import { Rating } from "@mui/material";
import { TypeContextItem } from "../../context/TypeContext";
import { WineContextItem } from "../../context/WineContext";
import { UserContext } from "../../context/UserContext";
import { getCookie } from "../../helpers";
import { jwtDecode } from "jwt-decode";
// import { jwtDecode } from "jwt-decode";
// import { getCookie } from "../../helpers";
const { Search } = Input;
const FilterWine = () => {
  const {
    selectedType,
    setSelectedType,
    selectedCountry,
    setSelectedCountry,
    selectedPairings,
    selectedGrapes,
    selectedRegions,
    setSelectedGrapes,
    setSelectedRegions,
    price,
    setPrice,
    setSelectedPrice,
    selectedPrice,
  } = useContext(TypeContextItem);
  // const { handleBasket} = useContext(UserContext);
  const { wines } = useContext(WineContextItem);
  const { handleBasket } = useContext(UserContext);
  const [bestPicks, setBestPicks] = useState("");
  const [value] = useState([]);
  // const [price, setPrice] = useState();
  const [filteredWines, setFilteredWines] = useState([]);
  const navigate = useNavigate();

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
    if (selectedPairings.length > 0) {
      updatedWines = updatedWines.filter((wine) =>
        selectedPairings.includes(wine.pairings)
      );
    }
    if (selectedGrapes.length > 0) {
      updatedWines = updatedWines.filter((wine) =>
        selectedGrapes.includes(wine.grapes)
      );
    }
    if (selectedRegions.length > 0) {
      updatedWines = updatedWines.filter((wine) =>
        selectedRegions.includes(wine.region)
      );
    }


    // updatedWines = updatedWines.filter(
    //   (wine) => wine.price >= selectedPrice.min && wine.price <= selectedPrice.max
    // );
    updatedWines = updatedWines.filter(
      (wine) => wine.price >= price.min && wine.price <= price.max
    );
    setFilteredWines(updatedWines);
  }, [
    wines,
    selectedType,
    selectedCountry,
    price,
    selectedPairings,
    selectedGrapes,
    selectedRegions,
    selectedPrice,
  ]);

  useEffect(() => {
    localStorage.setItem("selectedCountry", JSON.stringify(selectedCountry));
    localStorage.setItem("selectedType", JSON.stringify(selectedType));
    localStorage.setItem("selectedPairings", JSON.stringify(selectedPairings));
    localStorage.setItem("selectedGrapes", JSON.stringify(selectedGrapes));
    localStorage.setItem("selectedPrice", JSON.stringify(selectedPrice));
    localStorage.setItem("price", JSON.stringify(price));
  }, [
    selectedCountry,
    selectedType,
    selectedGrapes,
    selectedPairings,
    selectedPrice,
    price,
  ]);
  //Token
  const token = getCookie("token");
  let decode;
  if (token) {
    decode = jwtDecode(token);
    console.log("decode", decode.id);
  }

  //\Search
  const handleCountrySearch = (value) => {
    const filteredWinesByCountry = wines.filter((wine) =>
      wine.country.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredWines(filteredWinesByCountry);
  };
  const handleGrapesSearch = (value) => {
    const filteredWinesByGrapes = wines.filter((wine) =>
      wine.grapes.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredWines(filteredWinesByGrapes);
  };
  const handleRegionSearch = (value) => {
    const filteredWinesByRegion = wines.filter((wine) =>
      wine.region.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredWines(filteredWinesByRegion);
  };

  return (
    <section className="filterWine">
      <div className="container">
        <div className="row mt-5">
          <h2>
            Showing {filteredWines.length} wines between $10 - $50 rated above
            3.8 stars
          </h2>
        </div>
        <div className="row mt-5 pt-5">
          <div className="col-xl-12 d-flex filterRes">
            <div className="col-xl-4 col-lg-4 col-md-4 col-sm-12 col-12">
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
                  max={500}
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
                  onSearch={handleGrapesSearch}
                />
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedGrapes === "Chardonnay" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "Chardonnay" ? "" : "Chardonnay"
                        )
                      }
                    >
                      Chardonnay
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedGrapes === "De Bortoli" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "De Bortoli" ? "" : "De Bortoli"
                        )
                      }
                    >
                      De Bortoli
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedGrapes === "Grenache" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "Grenache" ? "" : "Grenache"
                        )
                      }
                    >
                      Grenache
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={selectedGrapes === "Malbec" ? "selected" : ""}
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "Malbec" ? "" : "Malbec"
                        )
                      }
                    >
                      Malbec
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={selectedGrapes === "Merlot" ? "selected" : ""}
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "Merlot" ? "" : "Merlot"
                        )
                      }
                    >
                      Merlot
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedGrapes === "Pinot Noir" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "Pinot Noir" ? "" : "Pinot Noir"
                        )
                      }
                    >
                      Pinor Noir
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedGrapes === "Riesling" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "Riesling" ? "" : "Riesling"
                        )
                      }
                    >
                      Riesling
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedGrapes === "Savuignon Blanc" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "Savuignon Blanc"
                            ? ""
                            : "Savuignon Blanc"
                        )
                      }
                    >
                      Savuignon Blanc
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedGrapes === "Shiraz/Syrah" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedGrapes(
                          selectedGrapes === "Shiraz/Syrah"
                            ? ""
                            : "Shiraz/Syrah"
                        )
                      }
                    >
                      Shiraz/Syrah
                    </button>
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
                  onSearch={handleRegionSearch}
                />
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedRegions === "Bordeaux" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedRegions(
                          selectedRegions === "Bordeaux" ? "" : "Bordeaux"
                        )
                      }
                    >
                      Bordeaux
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedRegions === "Bourgogne" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedRegions(
                          selectedRegions === "Bourgogne" ? "" : "Bourgogne"
                        )
                      }
                    >
                      Bourgogne
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedRegions === "Napa Valley" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedRegions(
                          selectedRegions === "Napa Valley" ? "" : "Napa Valley"
                        )
                      }
                    >
                      Napa Valley
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedRegions === "Piemonte" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedRegions(
                          selectedRegions === "Piemonte" ? "" : "Piemonte"
                        )
                      }
                    >
                      Piemonte
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedRegions === "Rhone Valley" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedRegions(
                          selectedRegions === "Rhone Valley"
                            ? ""
                            : "Rhone Valley"
                        )
                      }
                    >
                      Rhone Valley
                    </button>
                  </Link>
                </div>
                <div className="filterWine-wineTypes-choice">
                  <Link>
                    <button
                      className={
                        selectedRegions === "Toscana" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedRegions(
                          selectedRegions === "Toscana" ? "" : "Toscana"
                        )
                      }
                    >
                      Toscana
                    </button>
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
                  onChange={handleCountrySearch}
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
                      className={
                        selectedCountry === "United States" ? "selected" : ""
                      }
                      onClick={() =>
                        setSelectedCountry(
                          selectedCountry === "United States"
                            ? ""
                            : "United States"
                        )
                      }
                    >
                      <img
                        src="https://web-common.vivino.com/assets/countryFlags/US-48.png"
                        alt=""
                      />
                      United States
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
            <div className="col-xl-8 col-lg-8 col-md-8 col-sm-12 col-12  pl-3">
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
                          <img src={wine.countryImg} />
                          <span>{wine.country}</span>
                        </div>
                      </div>
                      <div className="filterWine-card-price">
                        <div className="filterWine-card-rating">
                          <h1>{wine.rating} </h1>
                          <span>rating</span>
                          <Rating
                            name="read-only"
                            value={wine.rating}
                            readOnly
                            style={{
                              color: "#891826",
                            }}
                          />
                          {/* <span>56 ratings</span> */}
                          <Link
                            onClick={() => handleBasket(decode.id, wine._id)}
                            to="/basket"
                          >
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
