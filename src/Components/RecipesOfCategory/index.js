import React, {useState, useEffect} from "react";
import axios from "axios";
import RecipeCard from '../RecipeCard/RecipeCard';
import "./styles.css";
import { useParams } from "react-router-dom";
  
const RecipesCategory=(props)=>{
    const [recipeList, setList] = useState([]);
    let {cuisine}=useParams();
    const [loading,setLoading] = useState(true);
    console.log("Hello I should be rendered");

    const getData=async()=>{
        try{
        const res=await axios.get(
            `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cuisine}`
            );
        setList(res.data.meals);
        }catch(error){
            console.log(error);
        }
        finally{
            setLoading(false);
        }
    }
    useEffect(()=>{
        getData();
    },[])

    return(
    <>
    <h1 
        style={{backgroundColor: 'black',color: 'white',textAlign:"center",fontSize:"40px",height:"63px",margin:'0px',height:"100px"}}>
        <span style={{padding:'2px' ,border: '3px solid white',outlineColor:'rgb(255,104,1)',outlineStyle:'double'}}>{cuisine}</span>
    </h1>
    <div className="recipes">
        {
            recipeList.map((recipe,index)=>{
                return (<RecipeCard
                            cusName={recipe.strMeal}
                        />); 
            })
        }
    </div>
    </>
    );
}
export default RecipesCategory;


