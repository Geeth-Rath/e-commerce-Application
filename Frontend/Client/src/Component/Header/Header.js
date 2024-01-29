import React from "react";
import {
  DownOutlined,
  SearchOutlined,
  RightOutlined,
  UserOutlined,
  BellOutlined,
  AppstoreOutlined,
} from "@ant-design/icons";
import { Input, Menu } from "antd";
import "../../Styles/Header.css";

const items = new Array(3).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const items2 = [
  { key: "1", label: "Flash Deals" },
  { key: "2", label: "Special Offers" },
  { key: "3", label: "Merchants" },
  { key: "4", label: "Brands" },
  { key: "5", label: "Sell On Orel Buy" },
];

const Header = () => {
  return (
    <div className="header-main">
      <div className="header-section-row-1">
        {" "}
        <div className="welcome-text">
          <p>Welcome to OrelBuy</p>
        </div>
        <div className="header-link-section">
          <div className="header-link">
            <p className="header-link-section-p">Track My Order </p>
            <DownOutlined />
          </div>
          <div className="header-link header-link-section-p">Log In</div>
          <div className="header-link header-link-section-p">Sign Up</div>
        </div>
      </div>

      <div className="header-section-row-2">
        <div className="header-logo">
          <img src="Frontend/Client/public/orelBuy.jpeg" alt="OrelBuy Logo" />
        </div>
        <div className="header-search">
          <Input
            style={{ borderRadius: "20px" }}
            prefix={<SearchOutlined />}
            placeholder="Type and hit enter or select..."
          />
        </div>
        <div className="header-icons">
          <div className=" header-icon-Outlined">
            <UserOutlined />
          </div>
          <div className=" header-icon-Outlined">
            <BellOutlined />
          </div>
        </div>
      </div>

      <div className="header-section-row-3">
        <div className="header-categories-menu">
          <div className="header-red-menu">
            <div className="menu-label">
              <span className="menu-icon-left">
                <AppstoreOutlined />
              </span>
              <span>All Categories</span>
              <span className="menu-icon-right">
                <RightOutlined />
              </span>
            </div>
          </div>

          <div>
            <Menu
              className="horizontal-menu-iteams"
              theme="none"
              mode="horizontal"
              items={items2}
            />
          </div>
        </div>

        <div className="header-image">
          <img src="Frontend/Client/public/orenge.jpeg" alt="Orange" />
        </div>
      </div>
    </div>
  );
};

export default Header;
