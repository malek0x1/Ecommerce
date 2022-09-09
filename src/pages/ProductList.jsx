import styled from "styled-components";
import Navbar from "../components/Navbar";
import Announcement from "../components/Announcement";
import Products from "../components/Products";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";
import { mobile } from "../responsive";
import { useEffect } from "react";
import MultiSelect from '../components/Select'

const Container = styled.div``;

const Title = styled.h1`
  margin: 20px;
`;

const FilterContainer = styled.div`

  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: center;
  
  ${mobile({  flexDirection: "column" })}


`;


const Filter = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  margin: 20px;
  ${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}
`;

const FilterText = styled.span`
  font-size: 20px;
  font-weight: 600;
  margin-right: 20px;
  ${mobile({ marginRight: "0px" })}
`;

const Select = styled.select`
  padding: 10px;
  margin-right: 20px;
  ${mobile({ margin: "10px 0px" })}
`;
const Option = styled.option``;

const ProductList = () => {

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }, []);
  return (
    <Container>
      <Announcement />
      <Navbar />
      <Title>Dresses</Title>
      <FilterContainer>
        <Filter>
          <FilterText>Filter Products:</FilterText>
          <MultiSelect type="multiple" options={["Black", "Red", "Yellow", "Green", "white", "purple"]} text="Color" />
          <MultiSelect type="multiple" options={["XS", "S", "L", "XL"]} text="Size" />

        </Filter>
        <Filter>
          <FilterText>Sort Products:</FilterText>
          <MultiSelect type="single" options={["Relevant","Newest","Lowest to heighest","heighest to Lowest"]} text="Sort" />

        
        </Filter>
      </FilterContainer>
      <Products />
      <Newsletter color="#FFF" />
      <Footer color="#000" />
    </Container>
  );
};

export default ProductList;
