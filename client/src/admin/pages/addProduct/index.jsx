import "../home/index.scss";
import Dashboard from "../dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import "./index.scss"
const AddProduct = () => {
  const [formData, setFormData] = useState({
    winery: "",
    grapes: "",
    country: "",
    type: "",
    price: "",
    alcoholDegree: "",
    rating: "",
    discount: "",
    region: "",
    img: null,
    countryImg: null,
  });
  const [errors, setErrors] = useState([]);
  const [setData] = useState([]);
  const {
    winery,
    grapes,
    allergies,
    country,
    type,
    price,
    alchocolDegree,
    rating,
    discount,
    region,
    pairings,
    img,
    countryImg,
  } = formData;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({ ...formData, [name]: files[0] });
    setErrors({ ...errors, [name]: "" });
  };

  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/wines");
      setData(response.data.data);
    } catch (error) {
      console.error("Wrong details about a wine:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!winery) {
      newErrors.winery = "İnput is required";
    }
    if (!grapes) {
      newErrors.grapes = "İnput is required";
    }
    if (!country) {
      newErrors.country = "İnput is required";
    }
    if (!type) {
      newErrors.type = "İnput is required";
    }
    if (!price) {
      newErrors.price = "İnput is required";
    }
    if (!allergies) {
      newErrors.allergies = "İnput is required";
    }
    if (!alchocolDegree) {
      newErrors.alchocolDegree = "Alcohol İnput is required";
    }
    if (!rating) {
      newErrors.rating = "İnput is required";
    } else if (rating < 1 || rating > 5) {
      newErrors.rating = "Rating must be between 1 and 5";
    }
    if (!discount) {
      newErrors.discount = "İnput is required";
    }
    if (!region) {
      newErrors.region = "İnput is required";
    }
    if (!pairings) {
      newErrors.pairings = "İnput is required";
    }
    if (!img) {
      newErrors.img = "İmg is required";
    }
    if (!countryImg) {
      newErrors.countryImg = "İmg is required";
    }
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    try {
      const postFormData = new FormData();
      for (const key in formData) {
        postFormData.append(key, formData[key]);
      }

      const res = await axios.post(
        `http://localhost:3000/wines/postProduct`,
        postFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (res.status === 200) {
        toast.success("Wine are created succesfulyy");
        setFormData({
          winery: "",
          grapes: "",
          country: "",
          type: "",
          price: "",
          alchocolDegree: "",
          rating: "",
          discount: "",
          region: "",
          img: null,
          countryImg: null,
        });
  
        await fetchData();
      } else {
        toast.error("Wrong details!");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <section className="adminMain">
      <div className="admin-head">
        <Dashboard />
        <div className="addProduct">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="winery">Winery:</label>
              <input
                id="winery"
                name="winery"
                type="text"
                onChange={handleChange}
                value={winery}
              />
              {errors.winery && <p className="error">{errors.winery}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="grapes">Grapes:</label>
              <input
                id="grapes"
                name="grapes"
                type="text"
                onChange={handleChange}
                value={grapes}
              />
              {errors.grapes && <p className="error">{errors.grapes}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="img">Img upload:</label>
              <input
                id="img"
                name="img"
                type="file"
                onChange={handleFileChange}
              />
              {errors.img && <p className="error">{errors.img}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="countryImg">countryImg:</label>
              <input
                id="countryImg"
                name="countryImg"
                type="file"
                onChange={handleFileChange}
              />
              {errors.countryImg && (
                <p className="error">{errors.countryImg}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="country">country:</label>
              <input
                id="country"
                name="country"
                type="text"
                onChange={handleChange}
                value={country}
              />
              {errors.country && <p className="error">{errors.country}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="tyoe">Type:</label>
              <input
                id="type"
                name="type"
                type="text"
                onChange={handleChange}
                value={type}
              />
              {errors.type && <p className="error">{errors.type}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="pairings">Pairings:</label>
              <input
                id="pairings"
                name="pairings"
                type="text"
                onChange={handleChange}
                value={pairings}
              />
              {errors.pairings && <p className="error">{errors.pairings}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="allergies">Allergies:</label>
              <input
                id="allergies"
                name="allergies"
                type="text"
                onChange={handleChange}
                value={allergies}
              />
              {errors.allergies && <p className="error">{errors.allergies}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="alchocolDegree">alchocolDegree:</label>
              <input
                id="alchocolDegree"
                name="alchocolDegree"
                type="number"
                onChange={handleChange}
                value={alchocolDegree}
              />
              {errors.alchocolDegree && (
                <p className="error">{errors.alchocolDegree}</p>
              )}
            </div>
            <div className="form-group">
              <label htmlFor="price">Price:</label>
              <input
                id="price"
                name="price"
                type="number"
                onChange={handleChange}
                value={price}
              />
              {errors.price && <p className="error">{errors.price}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="discount">discount:</label>
              <input
                id="discount"
                name="discount"
                type="number"
                onChange={handleChange}
                value={discount}
              />
              {errors.discount && <p className="error">{errors.discount}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="rating">Rating:</label>
              <input
                id="rating"
                name="rating"
                type="number"
                onChange={handleChange}
                value={rating}
              />
              {errors.rating && <p className="error">{errors.rating}</p>}
            </div>
            <div className="form-group">
              <label htmlFor="region">Region:</label>
              <input
                id="region"
                name="region"
                type="text"
                onChange={handleChange}
                value={region}
              />
              {errors.region && <p className="error">{errors.region}</p>}
            </div>
            <button type="submit">Add Product</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default AddProduct;
