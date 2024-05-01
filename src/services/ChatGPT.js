// import React, { useEffect, useState } from 'react'
// // const axios = require('axios');
// import axios from 'axios';


// const ChatGPT = () => {

// const options = {
//   method: 'POST',
//   url: 'https://chat-gpt26.p.rapidapi.com/',
//   headers: {
//     'content-type': 'application/json',
//     'Content-Type': 'application/json',
//     'X-RapidAPI-Key': '81fc2d2e38msh8f6142b2c0c1e31p16cbc8jsn53b526c9c5c2',
//     'X-RapidAPI-Host': 'chat-gpt26.p.rapidapi.com'
//   },
//   data: {
//     model: 'gpt-3.5-turbo',
//     messages: [
//       {
//         role: 'user',
//         content: 'What is computer'
//       }
//     ]
//   }
// };
// const [res,setRes] = useState(null);
//     const getData = async() =>{
//         try {
//             const response = await axios.request(options);
//             console.log(response.data);
//             console.log(response?.choices[0]?.message.content);
//         } catch (error) {
//             console.error(error);
//         }

//     }
//     useEffect(()=>{
//         getData();
//     },[])
//   return (
//     <div>
//       {/* {res?.data} */}
//     </div>
//   )
// }

// export default ChatGPT
