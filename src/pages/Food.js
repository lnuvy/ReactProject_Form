import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Button from './../front/Button'

export default function Food(){

    const [data, setData] = useState([]);
    const [numOfRows, setNumOfRows] = useState(5);
    const [pageNo, setPageNo] = useState(1);

    const getFoodInfo = () => {
        const API_KEY = process.env.REACT_APP_API_KEY
        const BASE_URL = `http://data.ex.co.kr/openapi/restinfo/restBestfoodList?key=${API_KEY}&type=json&numOfRows=${numOfRows}&pageNo=${pageNo}`
        axios(BASE_URL)
            .then( (res) => {
                const data = res.data.list
                // console.log(data)
                setData(data)
            })
    }

    const setChangeList = () => {
        numOfRows === 5 ? setNumOfRows(10) : setNumOfRows(5)
        getFoodInfo()
    }

    const prevPage = () => {
        const page = pageNo - 1
        if(page > 0) {
            setPageNo(page)
            console.log(page)
        } else {
            console.log(page)
            return;
        }
        getFoodInfo()
    }

    const nextPage = () => {
        console.log(pageNo)
        const page = pageNo + 1
        if(page >= pageNo) {
            setPageNo(page)
            console.log(page)
        } else {
            console.log(page)
            return;
        }
        getFoodInfo()
    }

    useEffect( () => {
        getFoodInfo()
    }, [])

    return (
        <>
            <h2>휴게소 메뉴~</h2>
            <br/>
            <Button handleClick={prevPage}>이전</Button>
            <Button handleClick={nextPage}>다음</Button>

            <Button handleClick={setChangeList}>변경</Button>
            {data.map((d) => {
                console.log(d)
                return (
                    <div key={d.seq}>
                        <FoodList
                        routeNm={d.routeNm}
                        stdRestNm={d.stdRestNm}
                        foodNm={d.foodNm}
                        foodCost={d.foodCost}
                        etc={d.etc}
                        foodMaterial={d.foodMaterial}
                        ></FoodList>
                    </div>
                )
            })}
        </>
    )
}


function FoodList({...rest}) {
    const {routeNm, stdRestNm, foodNm, foodCost, etc, foodMaterial} = rest

    return (
        <div>
            <h3>{routeNm} - {stdRestNm}</h3>
            <h5>{foodNm} &nbsp;&nbsp;({foodCost}원)</h5>
            <p>{etc}</p>
            <p>원재료명: {foodMaterial}</p>
        </div>
    )
}