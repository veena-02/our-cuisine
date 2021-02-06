import React,{useState, useEffect} from 'react';
import './RecipeCard.css';
import axios from 'axios';

const RecipeCard=(props)=>{
    const [recipe,setRecipe]=useState([]);
    const [loading, setLoading]=useState(true);

    const getRecipeData=async()=>{
        try{
            const res=await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.cusName}`
            );
            console.log(res.data.meals[0].strMeal);
            setRecipe(res.data.meals);
        } catch(error){
            console.log(error);
        } finally{
            setLoading(false);
        }
    };

    useEffect(()=>{
        getRecipeData();
    },[]);
    
    if(loading){
        return <p>Fetching the data .... </p>;
    }

    return(
        <div className="recipe_card">
            <img height="55%" width="100%" src={recipe[0].strMealThumb} className="recipe_img" />
            <h1 className='recipe_name'>{recipe[0].strMeal}</h1>
            <p className="tags">
                <span className="tag">{recipe[0].strTags}</span>
            </p>
            <a href={recipe[0].strYoutube} className="video_url">YouTube</a>
        </div>
    );
    
}
export default RecipeCard;