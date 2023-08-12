import styled from "styled-components"
import { BASE_URL, Container } from "../App";
import { Button } from "../App";
const SearchResult = ({data})=>{
    return (
        <FoodCardContainer>
            <Container>
  <FoodCards>
      {
    data?.map(({name,image,text,price})=> (<FoodCard key={name}>
        <div className="food_image">
            <img src={BASE_URL+image} alt="" />

            </div>

            <div className="food_info">
                <div className="info">
                    <h3>{name}</h3>
                    <p>{text}</p>
                </div>
                <Button>{price.toFixed(2)}</Button>
            </div>
    </FoodCard>)
      )}
  </FoodCards>
  </Container>
</FoodCardContainer>
    )
}

export default SearchResult;



const FoodCardContainer=styled.section`
  background-image: url("/images/bg.png");
  background-size:cover;
  height: 80vh;
  /* opacity: 0.25; */
  
`


const FoodCards= styled.div`
 display :flex ;
 flex-wrap: wrap;
 row-gap:32px;
 column-gap:20px;
 justify-content: center;
align-items : center;
padding: 8px;
`

const FoodCard = styled.div`
border: 0.66px solid;

border-image-source: radial-gradient(80.69% 208.78% at 108.28% 112.58%, #EABFFF 0%, rgba(135, 38, 183, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */,
radial-gradient(80.38% 222.5% at -13.75% -12.36%, #98F9FF 0%, rgba(255, 255, 255, 0) 100%) /* warning: gradient uses a rotation that is not supported by CSS and may not behave as expected */;

background: url(.png);
width:340px;
height: 167px;
 display: flex;
 border-radius: 20px;

padding:8px;
.food_info{
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end ;
}
h3{
    margin-top:8px;
    font-size: 16px;
    font-weight: 500;

}
p {
    margin-top:4px;
    font-size:12px;
}

button{
    font-size: 12px;
}
`