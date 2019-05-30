import React, { Component } from "react";
import Item from "../models/item";
import Button from "antd/lib/button";
import Card from "antd/lib/card";
import Layout from "antd/lib/layout";
import Avatar from "antd/lib/avatar";
import Dropdown from "antd/lib/dropdown";
import Icon from "antd/lib/icon";
import Menu from "antd/lib/menu";
import "./style.scss";

interface ItemListState {
  items: Item[];
}

interface ItemListProps {
  items: Item[];
  fetchItems: any;
  updateItem: any;
  removeItem: any;
  options: string[];
}

class ItemListComponent extends Component<ItemListProps, ItemListState> {
  constructor(props: ItemListProps) {
    super(props);

    this.state = {
      items: props.items
    };
  }

  componentDidMount() {
    const { fetchItems } = this.props;
    fetchItems();
  }

  render() {
    const { updateItem, removeItem } = this.props;
    const { Header, Content, Footer } = Layout;
    const { Meta } = Card;

    return (
      <Layout>
        <Header>
          <div className="logo-container">
            <h5>React, Redux, TypeScript, Saga code</h5>
          </div>
        </Header>
        <Content>
          <div className="list-container">
            <div className="content-wrapper">
              {this.props.items.map((item, index) => {
                const menu = (
                  <Menu>
                    <Menu.Item onClick={() => updateItem(item.id, "read-only")}>
                      Read Only
                    </Menu.Item>
                    <Menu.Item
                      onClick={() => updateItem(item.id, "read-write")}
                    >
                      Read Write
                    </Menu.Item>
                  </Menu>
                );
                return (
                  <Card className="card-item" key={"card-item-" + index}>
                    <div className="card-container">
                      <Meta
                        avatar={
                          <Avatar
                            style={{ backgroundColor: "#87d068" }}
                            icon="user"
                          />
                        }
                        title={item.display}
                        description={item.role}
                      />
                      <div className="option-container">
                        <Dropdown overlay={menu}>
                          <a className="ant-dropdown-link" href="#">
                            <Icon type="menu" />
                          </a>
                        </Dropdown>
                        <Button
                          type="primary"
                          shape="circle"
                          icon="delete"
                          size="small"
                          onClick={() => removeItem(item.id)}
                        />
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>
            <div className="footer-container" />
          </div>
        </Content>
        <Footer />
      </Layout>
    );
  }
}

export default ItemListComponent;
