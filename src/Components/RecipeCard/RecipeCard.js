import React,{useState, useEffect} from 'react';
import './RecipeCard.css';
import axios from 'axios';
import Loading from './../Loading/Loading'
import { NavLink } from 'react-router-dom'

const RecipeCard=(props)=>{
    const [recipe,setRecipe]=useState([]);
    const [loading, setLoading]=useState(true);
    
    const getRecipeData=async()=>{
        try{
            const res=await axios.get(
                `https://www.themealdb.com/api/json/v1/1/search.php?s=${props.cusName}`
            );
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
        return <Loading />
    }

    return(
        <div className="recipe_card" onClick={()=>{console.log("I am clicked!")}}>
            <img height="55%" width="100%" src={recipe[0].strMealThumb} className="recipe_img" />
            <NavLink to={`/Dish/${recipe[0].strMeal}`} 
                     style={{textDecoration:'none'}} >
                         <h1 className='recipe_name'>{recipe[0].strMeal}</h1>
            </NavLink>
            <p className="tags">
                {(recipe[0].strTags===null) ?
                    <div></div>:
                    recipe[0].strTags.split(",").map((tag,index)=>{
                        return(
                            <span className="tag">{tag}</span>
                        );
                    })
                }
            </p>
            <a href={recipe[0].strYoutube} target="_blank" className="video_url">YouTube</a>
        </div>
    );
    
}
export default RecipeCard;