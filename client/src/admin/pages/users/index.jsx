import Dashboard from "../dashboard";
import { Button, Popconfirm, Table } from "antd";
import { useEffect, useState } from "react";
import { DeleteOutlined } from "@ant-design/icons";
import axios from "axios";
import "../home/index.scss";

const Users = () => {
  const columns = [
    {
      title: "First Name",
      dataIndex: "firstName",
      width: "15%",
    },
    {
      title: "Last Name",
      dataIndex: "lastName",
      width: "15%",
    },
    {
      title: "Email",
      dataIndex: "email",
      width: "20%",
    },
    {
      title: "Gender",
      dataIndex: "gender",
      width: "10%",
    },
    {
      title: "Country",
      dataIndex: "country",
      width: "15%",
    },
    {
      title: "Admin",
      dataIndex: "isAdmin",
      render: (isAdmin) => (isAdmin ? "Yes" : "No"),
      width: "10%",
    },
    {
      title: "isVerify",
      dataIndex: "isVerify",
      render: (isVerify) => (isVerify ? "Yes" : "No"),
      width: "10%",
    },
    {
      title: "Action",
      dataIndex: "",
      render: (_, record) => (
        <Popconfirm
          title="Are you sure to delete this user?"
          onConfirm={() => handleDelete(record._id)}
          okText="Yes"
          cancelText="No"
        >
          <Button icon={<DeleteOutlined />} type="link" danger>
            Delete
          </Button>
        </Popconfirm>
      ),
      width: "10%",
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
      const response = await axios.get("http://localhost:3000/users");
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  const handleTableChange = (pagination, filters, sorter) => {
    setPagination(pagination);
  };

  const handleDelete = async (userId) => {
    try {
      await axios.delete(`http://localhost:3000/users/${userId}`);
      fetchData();
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  return (
    <section className="adminMain">
      <div className="admin-head">
        <Dashboard />
        <div className="users">
          <Table
            columns={columns}
            dataSource={data}
            pagination={pagination}
            loading={loading}
            onChange={handleTableChange}
            rowKey="_id"
          />
        </div>
      </div>
    </section>
  );
};

export default Users;
