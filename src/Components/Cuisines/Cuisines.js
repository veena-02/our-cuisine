import React,{useState,useEffect} from 'react';
import axios from 'axios';
import Card from './../Card/Card';
import './Cuisines.css';

const Cuisines=()=>{
    const [cuisineList, setList]=useState([]);
    const [loading, setLoading]=useState(true);
    const getData=async()=>{
        const res=await axios.get(
            'https://www.themealdb.com/api/json/v1/1/list.php?a=list'
        );
        console.log(res.data.meals);
        setList(res.data.meals);
    };
    useEffect(()=>{
        getData();
    },[]);
    return(
        <>
            <div className="cuisines">
                <h1 className="cus_head">Cuisines</h1>
                <div className='cus_list'>
                   { cuisineList.map((cuisine,index)=>{
                        return(
                            <Card name={cuisine.strArea} query='a' />
                        );
                    })
                   }
                </div>
            </div>
        </>
    );
}

export default Cuisines;
