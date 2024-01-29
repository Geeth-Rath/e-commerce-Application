import React, { useState } from "react";
import "../../Styles/Product.css";
import {
  DownOutlined
} from "@ant-design/icons";
import { Checkbox, Input, Dropdown, Layout, Menu, theme } from "antd";

const { Header, Content, Sider } = Layout;

function getItem(label, key, icon, children) {
  return {
    label,
    key,
    icon,
    children,
  };
}

const items = [
  getItem("Categories", "1", null),

  getItem("Orange Electric (224)", "sub1", null, [getItem("Cable (123)", "3")]),
  getItem("Price Range", "2", null),
  getItem(
    <Input className="get-item-input-holder" placeholder="Min - Max" />,
    "2",
    null
  ),
  getItem("Brand", "2", null),
  getItem(<Checkbox>Orange Electrics</Checkbox>, "3"),
  getItem("Classification", "4", null),
  getItem("Warranty", "4", null),
  getItem("Not Applicable", "sub2", null, [getItem("Details", "6")]),
  getItem("Agent Warranty", "sub2", null, [getItem("Details", "6")]),
];

const Product = () => {
  const [setCollapsed] = useState(false);
  const {
    token: { },
  } = theme.useToken();

  return (
    <div className="product-main-div">
      <div className="product-header-div" >
        <Header >
          <div className="product-header header-list" >
            <div>Product List</div>

            <div className="product-dropdown">
              <div className="product-dropdown-text"> Sort By</div>
              <div >
                {" "}
                <Dropdown.Button
                  icon={<DownOutlined />}

                  menu={{
                    items,
                  }}

                >-select sort

                </Dropdown.Button>
              </div>
            </div>
          </div>
        </Header>
      </div>

      <div className="product-sidebar-main-div">
        <div>
          <Sider className="product-sidebarr">
            <Menu defaultSelectedKeys={["1"]} mode="inline" items={items} />
          </Sider>

        </div>

        <div className="product-content-div">
          This is content
          <Content className="product-content-div"></Content>

        </div>

      </div>
    </div>
  );
};

export default Product;
