import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from './../Card/Card';
import './Categories.css';

const Categories=()=>{
    const [catgList, setCatgList]=useState([]);
    const [loading, setLoading]=useState(true);
    const getData=async()=>{
        const res=await axios.get(
            'https://www.themealdb.com/api/json/v1/1/list.php?c=list'
        );
        console.log(res.data.meals);
        setCatgList(res.data.meals);
        
    };
    useEffect(()=>{
        getData();
    },[]);
    
    return(
        <>
            <div className="categories">
                <h1 className="cat_head">Categories</h1>
                <div className='cat_list'>
                   { catgList.map((cat,index)=>{
                        return(
                            <Card name={cat.strCategory} query='c' />
                        );
                    })
                   }
                </div>
            </div>
        </>
    );
}

export default Categories;
