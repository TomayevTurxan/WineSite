import Dashboard from "../dashboard";
import { Button, Modal, Popconfirm, Table } from "antd";
import { DeleteOutlined } from "@ant-design/icons";
import { useContext, useEffect  , useState } from "react";
import { FaEdit } from "react-icons/fa";
import axios from "axios";
import "../home/index.scss";
import "./index.scss";
import toast from "react-hot-toast";
import { UserContext } from "../../../context/UserContext";

const Wines = () => {
  const [open, setOpen] = useState(false);
  const [currentWine, setCurrentWine] = useState(null);
  const [setInitialValues] = useState(null);
  const [previousValues, setPreviousValues] = useState(null);
  const { token, user } = useContext(UserContext);
  const [values, setValues] = useState({
    winery: "",
    grapes: "",
    type: "",
    country: "",
    price: 1,
    alchocolDegree: 1,
    rating: 1,
    discount: 1,
  });

  const columns = [
    {
      title: "Winery",
      dataIndex: "winery",
      width: "10%",
    },
    {
      title: "Grapes",
      dataIndex: "grapes",
      width: "10%",
    },
    {
      title: "Type",
      dataIndex: "type",
      width: "10%",
    },
    {
      title: "Image",
      dataIndex: "img",
      render: (img) => <img src={img} alt="Wine" style={{ width: "20px" }} />,
      width: "5%",
    },
    {
      title: "Country",
      dataIndex: "country",
      width: "10%",
    },
    {
      title: "Price",
      dataIndex: `price`,
      width: "5%",
    },
    {
      title: "Alcohol Degree",
      dataIndex: "alchocolDegree",
      width: "5%",
    },
    {
      title: "Rating",
      dataIndex: "rating",
      width: "5%",
    },
    {
      title: "Discount",
      dataIndex: "discount",
      width: "5%",
    },
    {
      title: "Delete",
      dataIndex: "",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this wine?"
          onConfirm={() => handleDelete(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button icon={<DeleteOutlined />} type="link" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
      width: "5%",
    },
    {
      title: "Edit",
      dataIndex: "",
      render: (_, record) => (
        <Button icon={<FaEdit />} type="link" onClick={() => showModal(record)}>
          Edit
        </Button>
      ),
      width: "5%",
    },
  ];

  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [pagination, setPagination] = useState({
    current: 1,
    pageSize: 10,
  });

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await axios.get("http://localhost:3000/wines");
      setData(response.data.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching wine data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleTableChange = (pagination) => {
    setPagination(pagination);
  };

  const handleDelete = async (wineId) => {
    console.log("wineId", wineId);
    console.log("user._id", user._id);
    const res = await axios.delete(`http://localhost:3000/wines/${wineId}`, {
      data: { userId: user._id },
      headers: {
        Authorization: token,
      },
    });
    if (res.status === 200) {
      toast.success("Product has been deleted");
    } else {
      toast.error("Error Occured");
    }
    await fetchData();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("name",name)
    console.log("value",value)
    setValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const showModal = (wine) => {
    console.log("wine", wine._id);
    setOpen(true);
    setCurrentWine(wine);
    setInitialValues({ ...wine });
  };

  const handleOk = async (e) => {
    setOpen(false);
    e.preventDefault();
    try {
      const updateFormData = new FormData();
      console.log("updateDormDaata",updateFormData)
      Object.entries(values).forEach(([key, value]) => {
        if (key !== "img") {
          updateFormData.append(key, value);
        }
      });

      if (e.target[0].files.length > 0) {
        const newFile = e.target[0].files[0];
        updateFormData.append("img", newFile);
      }

      const res = await axios.put(
        `http://localhost:3000/wines/${currentWine._id}`,
        updateFormData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log("res",res)

      if (res.status === 200) {
        toast.success("Product Updated");
        setPreviousValues({ ...values });
        setValues({
          winery: res.data.updatedData.winery,
          grapes: res.data.updatedData.grapes,
          type: res.data.updatedData.type,
          country: res.data.updatedData.country,
          price: res.data.updatedData.price,
          alchocolDegree: res.data.updatedData.alchocolDegree,
          rating: res.data.updatedData.rating,
          discount: res.data.updatedData.discount,
        });
        await fetchData();
      } else {
        toast.error("Error Occurred");
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleCancel = () => {
    setOpen(false);
    setValues(previousValues);
  };

  return (
    <section className="adminMain">
      <div className="admin-head">
        <Dashboard />
        <div className="wines ">
          <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
            rowKey="_id"
          />
          <Modal
            title="Update product"
            visible={open}
            footer={null}
            onCancel={handleCancel}
            style={{ maxWidth: "400px" }}
          >
            {currentWine && (
              <form onSubmit={(e) => handleOk(e)}>
                <div className="label">
                  <label htmlFor="img">Upload img:</label>
                  <input name="img" id="img" className="file" type="file" />
                </div>
                <div className="label">
                  <label htmlFor="winery">Winery:</label>
                  <input
                    type="text"
                    id="winery"
                    name="winery"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    defaultValue={currentWine.winery}
                  />
                </div>
                <div className="label">
                  <label htmlFor="grapes">Grapes:</label>
                  <input
                    name="grapes"
                    type="text"
                    id="grapes"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    defaultValue={currentWine.grapes}
                  />
                </div>
                <div className="label">
                  <label htmlFor="type">Type:</label>
                  <input
                    name="type"
                    type="text"
                    id="type"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    defaultValue={currentWine.type}
                  />
                </div>
                <div className="label">
                  <label htmlFor="country">Country:</label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    defaultValue={currentWine.country}
                  />
                </div>
                <div className="label">
                  <label htmlFor="alchocolDegree">Alcohol Degree:</label>
                  <input
                    type="number"
                    id="alchocolDegree"
                    name="alchocolDegree"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    defaultValue={currentWine.alchocolDegree}
                  />
                </div>
                <div className="label">
                  <label htmlFor="price">Price:</label>
                  <input
                    type="number"
                    id="price"
                    name="price"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    defaultValue={currentWine.price}
                  />
                </div>
                <div className="label">
                  <label htmlFor="rating">Rating:</label>
                  <input
                    type="number"
                    id="rating"
                    name="rating"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    defaultValue={currentWine.rating}
                  />
                </div>
                <div className="label">
                  <label htmlFor="discount">Discount:</label>
                  <input
                    type="number"
                    id="discount"
                    name="discount"
                    onChange={(e) => {
                      handleInputChange(e);
                    }}
                    defaultValue={currentWine.discount}
                  />
                </div>
                <button type="submit">save</button>
              </form>
            )}
          </Modal>
        </div>
      </div>
    </section>
  );
};

export default Wines;
