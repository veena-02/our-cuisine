import React, {useState, useEffect} from "react";
import axios from "axios";
import RecipeCard from './../RecipeCard/RecipeCard';
import "./Recipes.css";


const Recipes=()=>{
    const [recipeList, setList] = useState([]);
    
    const getData=async()=>{
        const res=await axios.get(
            'https://www.themealdb.com/api/json/v1/1/filter.php?a=American'
            );
        setList(res.data.meals);
        console.log(res.data.meals);
    }
    useEffect(()=>{
        getData();
    },[])

    return(
    <>
    <h1 
        style={{backgroundColor: 'rgb(32,37,76)',color: 'white',margin:'0px',padding:'0px',textAlign:"center",fontSize:"40px"}}>
        Recipes
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
export default Recipes;