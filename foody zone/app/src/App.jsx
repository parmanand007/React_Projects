
import { useEffect, useState } from "react";
import styled from "styled-components"
import SearchResult from "./components/SearchResult";


export const BASE_URL="http://localhost:9000";

const App = () => {
 const [data,setData]=useState(null);
const [loading,setLoading] = useState(false)
const [error,setError] = useState(null)
const [filterData,setFilterData]= useState(null)

const [selectedBtn,setSelectedBtn]=useState("all")
const fetchFoodData = async ()=>{
  setLoading(true)
  try{
    const response = await fetch(BASE_URL);

  const json = await response.json()
  setData(json)
setFilterData(json)
  setLoading(false);
  }
  catch (error){
    console.log("unable to fetch order")
  }
 }
 
 
 useEffect(()=>
 {
   
    
   fetchFoodData()
  
 },[])
const searchFood = (e)=>{
  const searchValue =e.target.value
  if (searchValue === ""){
    setFilterData(null);
  }

  const filter = data?.filter((food)=>food.name.toLowerCase().includes(searchValue.toLowerCase()))

  setFilterData(filter)
}

const filterFood = (type)=>{
  if (type === "all"){
     setFilterData(data)
    setSelectedBtn("all")
    return;
  }
  const filter = data?.filter((food)=>food.type.toLowerCase().includes(type.toLowerCase()))
    setFilterData(filter);
    setSelectedBtn(type)
}


 if (error) return <div>{error}</div>
 if (loading) return <div>Loading ....  </div>

  return( <>
  <Container>
<TopContainer>
  <div className= "logo">
    <img src="/images/Foody Zone.svg" alt="logo" />
  </div>

  <div className="search">
    <input onChange={searchFood} placeholder="Search food...">
    </input>
  </div>
</TopContainer>
<FilterContainer>
 <Button onClick={()=>filterFood("all")}>
   All
 </Button>
 <Button onClick={()=>filterFood("breakfast")} >
   Breakfast
 </Button>
 <Button onClick={()=>filterFood("lunch")}>
  Lunch
 </Button>
 <Button onClick={()=>filterFood("dinner")}>
  Dinner
 </Button>
</FilterContainer>

  </Container>

<SearchResult data = {filterData} />
  
  </>
  );
}

export default App;


export const Container = styled.div`
 max-width: 1200px;
 margin: 0 auto;

`

const TopContainer =styled.section`
 display : flex;
 min-height: 140px;
 padding: 16px;
 justify-content: space-between;
 align-items: center;

 .search {
  input {
   color:white;
   border:1px solid red;
   height : 40px;
   font: 16px;
   background-color: transparent;
   padding:0 4px;
  }
 }

 @media (0<width <600px){
  flex-direction: column;
  height: 120px;
 }
`

const FilterContainer =styled.section`
  display:flex;
  justify-content: center;
  gap: 12px;
  padding-bottom:40px;
`
export const Button = styled.button`
  background-color: #ff4343;
  border-radius:5px;
  border: none;
  color:white;
  padding: 6px 12px;
  cursor:pointer;
  &:hover{
    background-color: #f22f2f;
  }
`
