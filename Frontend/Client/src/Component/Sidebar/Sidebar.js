import React, { Fragment } from "react";
import { useState, useEffect } from "react";
import {
  PoweroffOutlined,
  PullRequestOutlined,
  MobileOutlined,
  BoxPlotOutlined,
  SkinOutlined,
  HomeOutlined,
  CarOutlined,
  RocketOutlined,
  HourglassOutlined,
  HddOutlined,

} from "@ant-design/icons";
import { Spin, Menu, theme, Layout } from "antd";
import "../../Styles/Sidebar.css";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Card, Row, Col } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { fetchProductsStart, selectProducts, selectLoading, selectError } from '../../Redux/Store/Slices/productSlice';
import { getAccessToken, refreshAccessToken } from '../Auth/token'

const { Content, Sider } = Layout;

const items2 = [
  PoweroffOutlined,
  PullRequestOutlined,
  MobileOutlined,
  BoxPlotOutlined,
  SkinOutlined,
  HomeOutlined,
  CarOutlined,
  RocketOutlined,
  HourglassOutlined,
  HddOutlined,
].map((icon, index) => {
  const key = `sub${index + 1}`;

  const submenuNames = [
    "Orange Electric",
    "Electronics",
    "Mobiles & Tablets",
    "Sport Fitness & Outdoor",
    "Fashion",
    "Home & Living",
    "Automotive",
    "Beauty & Personal Care",
    "Toys Kids & Babies",
    "Stationary",
  ];

  const childLabels = [
    ["Bulbs", "Switches"],
    ["TV", "Radio"],
    ["Samsung", "Apple"],
    ["Ball", "Bat"],
    ["Spoons", "Chairs"],
    ["Skirt", "Trousers"],
    ["Cart", "Wheels"],
    ["Makeup", "Rings"],
    ["Dolls", "Teddy Bears"],
    ["Books", "Pens"],
  ];


  return {
    key,
    icon: React.createElement(icon),
    label: ` ${submenuNames[index]}`,
    children: new Array(2).fill(null).map((_, j) => {
      const subKey = index * 4 + j + 1;
      return {
        key: subKey,
        label: childLabels[index][j],
      };
    }),
  };
});


const Sidebar = () => {

  useEffect(() => {
    const checkTokenExpiration = async () => {
      const accessTokenData = getAccessToken();

      if (accessTokenData) {
        const isTokenExpired = () => {
          if (!accessTokenData || !accessTokenData.expiresIn) {

            return true;
          }

          const currentTime = Math.floor(Date.now() / 1000);
          const expirationTime = accessTokenData.expiresIn;

          return currentTime > expirationTime;
        };

        if (isTokenExpired()) {
          try {

            await refreshAccessToken();
          } catch (error) {

            console.error('Error refreshing access token:', error);
          }
        }
      }
    };
  }
  );


  const { token: { colorBgContainer, borderRadiusLG } } = theme.useToken();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const products = useSelector(selectProducts);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchProductsStart());
  }, [dispatch]);

  const handleChildLabelClick = (childLabel) => {
    navigate(`/product/${childLabel}`);
  };

  return (
    <Fragment>
      <div className="sidebar-main-layout">
        <div className="sidebar-main-layout-div-sider">
          <Sider className="sidebar-main-layout-sider">
            <Menu mode="inline" items={items2} onClick={({ key }) => handleChildLabelClick(key)} />
          </Sider>
        </div>
        <div className="sidebar-main-layout-content">
          {loading ? (
            <Spin size="large" />
          ) : (
            <Row gutter={[16, 16]}>
              {products.map(product => (
                <Col key={product.id} span={6}>
                  <Link to={`/item/${product.id}`}>
                    {console.log("itesmId", product.id)}
                    <Card
                      title={<div className="card-title">{product.name}</div>}
                      style={{ width: "100%", height: "500px" }}
                      cover={<img alt={product.name} src={product.image} />}
                    >
                      <div className="card-details">
                        <p className="card-paragraph">Features: {product.Features}</p>
                        <p className="card-paragraph">Quantity: {product.stock}</p>
                        <p className="card-paragraph">Price: {product.price}</p>
                      </div>
                    </Card>
                  </Link>
                </Col>
              ))}
            </Row>
          )}
        </div>
      </div>
    </Fragment>
  );
};

export default Sidebar;