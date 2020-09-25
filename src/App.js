import React from "react";
import "./App.css";
import { Layout } from "antd";
import AppHeader from "./Components/Common/AppHeader";
import Home from "./Components/Home/Home";
import AppFooter from "./Components/Footer/AppFooter";

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <div className="App">
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Home />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          <AppFooter />
        </Footer>
      </Layout>
    </div>
  );
}

export default App;
