import { Navbar, Link, Text, Avatar, Dropdown } from "@nextui-org/react";
import { Layout } from "./Layout.js";
// import { AcmeLogo } from "./AcmeLogo.js";
import { Badge, createMuiTheme, styled } from "@material-ui/core";
import { Person, Search, ShoppingCartOutlined } from "@material-ui/icons";
import { NavLink as LinkX } from 'react-router-dom'
export default function MyNav(props) {
  const collapseItems = [
    "Home",
    "Shop",
    "Login",
    "Register",
    "Cart",
  ];


  return (
    <Layout>
      <Navbar isBordered variant="sticky" style={{ boxShadow: "none" }}>
        <Navbar.Toggle showIn="xs" />
        <Navbar.Brand
          css={{
            "@xs": {
              w: "12%",
            },
          }}
        >
          <img style={{ width: "30px", height: "30px", borderRadius: "50%", marginRight: "5px", overflow: "hidden" }} src="http://malek0x1.com/favicon.png" alt="" srcset="" />
          <Text b color="inherit" hideIn="xs">
            Malek0x1
          </Text>
        </Navbar.Brand>
        <Navbar.Content
          enableCursorHighlight
          activeColor="secondary"
          hideIn="xs"
          variant="underline"
          css={{ position: "relative" }}

        >
          {/* <Navbar.Link href="/">Home</Navbar.Link> */}

          {/* <LinkX to="/Shop" style={{color:"black",textDecoration:"none"}}> */}

          {/* <Navbar.Link  href="/Shop" >Shop</Navbar.Link> */}


          {/* </LinkX> */}




          {/* <Navbar.Link href="/Cart">Cart</Navbar.Link>
          <Navbar.Link href="/Login">Login</Navbar.Link>

          <Navbar.Link href="/Register">Register</Navbar.Link> */}






          {/*  */}

          <div className="linkX"><LinkX to="/" style={{ color: "black", textDecoration: "none" }}>Home</LinkX></div>
          <div className="linkX"><LinkX to="/Shop" style={{ color: "black", textDecoration: "none" }}>Shop</LinkX></div>
          <div className="linkX"><LinkX to="/Cart" style={{ color: "black", textDecoration: "none" }}>Cart</LinkX></div>
          <div className="linkX"><LinkX to="/Login" style={{ color: "black", textDecoration: "none" }}>Login</LinkX></div>
          <div className="linkX"><LinkX to="/Register" style={{ color: "black", textDecoration: "none" }}>Register</LinkX></div>




          {/*  */}

        </Navbar.Content>
        <Navbar.Content
          css={{
            "@xs": {
              w: "12%",
              jc: "flex-end",
            },
          }}
        >





          <div style={{ position: "relative" }}>
            <LinkX to="/Cart" style={{ color: "black" }}>
              <ShoppingCartOutlined sx={{ zIndex: "-99999", cursor: "pointer", color: "black" }} />
            </LinkX>
            <div className=""
              style={{
                backgroundColor: "#000", borderRadius: "50%", width: "20px", color: "#FFF",
                height: "20px", position: "absolute", top: "-10px", right: "-9px", display: "flex", alignItems: "center", justifyContent: "center", zIndex: "9999999"
              }}>1</div>

          </div>
        </Navbar.Content>
        <Navbar.Collapse>
          {collapseItems.map((item, index) => (
            <Navbar.CollapseItem
              key={item}
              activeColor="primary"
              isActive={item === window.location.pathname.split("/")[1]}
            >
              <LinkX
                
                style={{
                  minWidth: "100%",
                  color:"#000",
                  textDecoration: "none"
                }}
                to={`/${item}`}
              >
                {item}
              </LinkX>
            </Navbar.CollapseItem>
          ))}
        </Navbar.Collapse>
      </Navbar>
    </Layout>
  );
}