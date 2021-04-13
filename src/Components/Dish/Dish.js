import axios from 'axios';
import React, { useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import './Dish.css';
import Loading from './../Loading/Loading';

const Dish=(props)=>{
    const [dish,setDish] = useState([]);
    let {dish_name} = useParams();
    const [loading, setLoading] = useState(true);
    const getDishData=async()=>{
        try{
            const res=await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${dish_name}`
            );
            setDish(res.data.meals);
        }
        catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getDishData();
    },[]);

    return(
        <>{
            (loading)?
            <Loading />:
            (
            <>    
            <h1 className="dish_heading"><span className="dish_name">{dish_name}</span></h1>
            <div class="glassmorphic">
                <h1 style={{textAlign:"center",fontFamily:"'Chango', cursive"}}>Ingredients</h1>
                <div className="ing_d_flex">
                    <div style={{display: 'flex',justifyContent:"center"}}>
                            <img src={dish[0].strMealThumb} height="350" width="350"/>
                    </div>
                <p >
                        <ul style={{textAlign:"center",fontFamily:"'Varela Round', sans-serif",fontSize:'25px'}}>
                        {(dish[0].strMeasure1 && dish[0].strMeasure1!=="")?
                        `${dish[0].strMeasure1}  ${dish[0].strIngredient1}, `:null}
                        {(dish[0].strMeasure2 && dish[0].strMeasure2!=="")?
                        `${dish[0].strMeasure2}  ${dish[0].strIngredient2}, `:null}
                        {(dish[0].strMeasure3 && dish[0].strMeasure3!=="")?
                        `${dish[0].strMeasure3}  ${dish[0].strIngredient3}, `:null}
                        {(dish[0].strMeasure4 && dish[0].strMeasure4!=="")?
                        `${dish[0].strMeasure4}  ${dish[0].strIngredient4}, `:null}
                        {(dish[0].strMeasure5 && dish[0].strMeasure5!=="")?
                        `${dish[0].strMeasure5}  ${dish[0].strIngredient5}, `:null}
                        {(dish[0].strMeasure6 && dish[0].strMeasure6!=="")?
                        `${dish[0].strMeasure6}  ${dish[0].strIngredient6}, `:null}
                        {(dish[0].strMeasure7 && dish[0].strMeasure7!=="")?
                        `${dish[0].strMeasure7}  ${dish[0].strIngredient7}, `:null}
                        {(dish[0].strMeasure8 && dish[0].strMeasure8!=="")?
                        `${dish[0].strMeasure8}  ${dish[0].strIngredient8}, `:null}
                        {(dish[0].strMeasure9 && dish[0].strMeasure9!=="")?
                        `${dish[0].strMeasure9} ${dish[0].strIngredient9}, `:null}
                        {(dish[0].strMeasure10 && dish[0].strMeasure10!=="")?
                        `${dish[0].strMeasure10}  ${dish[0].strIngredient10}, `:null}
                        {(dish[0].strMeasure11 && dish[0].strMeasure11!=="")?
                        `${dish[0].strMeasure11}  ${dish[0].strIngredient11}, `:null}
                        {(dish[0].strMeasure12 && dish[0].strMeasure12!=="")?
                        `${dish[0].strMeasure12}  ${dish[0].strIngredient12}, `:null}
                        {(dish[0].strMeasure13 && dish[0].strMeasure13!=="")?
                        `${dish[0].strMeasure13}  ${dish[0].strIngredient13}, `:null}
                        {(dish[0].strMeasure14 && dish[0].strMeasure14!=="")?
                        `${dish[0].strMeasure14}  ${dish[0].strIngredient14}, `:null}
                        {(dish[0].strMeasure15 && dish[0].strMeasure15!=="")?
                        `${dish[0].strMeasure15}  ${dish[0].strIngredient15}, `:null}
                        {(dish[0].strMeasure16 && dish[0].strMeasure16!=="")?
                        `${dish[0].strMeasure16}  ${dish[0].strIngredient16}, `:null}
                        {(dish[0].strMeasure17 && dish[0].strMeasure17!=="")?
                        `${dish[0].strMeasure17}  ${dish[0].strIngredient17}, `:null}
                        {(dish[0].strMeasure18 && dish[0].strMeasure18!=="")?
                        `${dish[0].strMeasure18}  ${dish[0].strIngredient18}, `:null}
                        {(dish[0].strMeasure19 && dish[0].strMeasure19!=="")?
                        `${dish[0].strMeasure19} ${dish[0].strIngredient19}, `:null}
                        {(dish[0].strMeasure20 && dish[0].strMeasure20!=="")?
                        `${dish[0].strMeasure20}  ${dish[0].strIngredient20}, `:null}
                        </ul>
                </p>
                </div>
                <h1 style={{textAlign:"center",fontFamily:"'Chango', cursive"}}>Instructions</h1>
                <p>
                    <ol>
                    {
                        dish[0].strInstructions.split(".").map((value,idx)=>{
                            return(
                                <li style={{fontFamily:"'Varela Round', sans-serif",fontSize:'25px',listStyleType:"none"}}>
                                    {value}
                                </li>
                            )
                        })
                    }
                    </ol>
                </p>   
            </div>
            </>
            )}
        </>
    );
}
export default Dish;
