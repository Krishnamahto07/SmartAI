import React, { useEffect, useState } from 'react'
// const axios = require('axios');
import axios from 'axios';
import { setResponse } from '../redux/slices/chatGptSlice';
import { useDispatch, useSelector } from 'react-redux';
const ChatBestPrice = () => {
        const dispatch = useDispatch();
        // const res = useSelector((state))
        const options = {
        method: 'POST',
        url: 'https://chatgpt-best-price.p.rapidapi.com/v1/chat/completions',
        headers: {
            'content-type': 'application/json',
            'X-RapidAPI-Key': '81fc2d2e38msh8f6142b2c0c1e31p16cbc8jsn53b526c9c5c2',
            'X-RapidAPI-Host': 'chatgpt-best-price.p.rapidapi.com'
        },
        data: {
            model: 'gpt-3.5-turbo',
            messages: [
            {
                role: 'user',
                content: 'What is computer ?'
            }
            ]
        }
        };
    // const [result , setResult] = useState([]);
    // const [ans , setAns] = useState([]);
    const fetchData = async() =>{
        try {
            const response = await axios.request(options);
            console.log(response.data);
            const finaldata = response.data.choices[0].message.content;
            dispatch(setResponse(response.data))
            // console.log("final data = ",finaldata)
            // setAns(response.data.choices[0].message.content);
            // console.log("data = ",response.data.choices[0].message.content)
            // setResult(response.data)
            // setResult(response?.data?.choices[0].message.content);
            // console.log("Result1 = ",result)
        } catch (error) {
            console.error(error);
        }
        // console.log()
    }
    useEffect(()=>{
        fetchData()
    },[])
    const ans = useSelector((state) => state.chatGpt.response)
    console.log("ans = ",ans);
    // console.log(useSelector((state) => state.chatGptresponse))
  return (
    <div>
        fetch Data
        {/* <p>{result}</p> */}
    </div>
  )
}

export default ChatBestPrice
