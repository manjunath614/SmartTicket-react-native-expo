import axios from "axios";

// export const fetchApi = async ()=>{
//   const response = await fetch('https://jsonplaceholder.typicode.com/posts');
//   resJson=response.json();
//   return resJson;
// };

// export const fetchPostApi = async (data)=>{
//     const response = await fetch('https://amsweets.in/user/register', {
//         method: 'POST',
//         body: JSON.stringify(data),
//         headers: {
//           'Content-type': 'application/json; charset=UTF-8',
//         },
//       })
//     resJson=response.json();
//     return resJson;
//   };
  

export const getAxiosApi = async()=>{
    const res = await axios({
        method:'get',
        url:'https://amsweets.in/user/otp'
    });
    return res;
} 



export const postAxiosApi = async(data)=>{
  const res = await axios({
      method:'post',
      url:'https://amsweets.in/user/register',
      data:data
  });
  return res;
} 

export const postAxiosApiOtp = async(data)=>{
    const res = await axios({
        method:'post',
        url:'https://amsweets.in/user/otp',
        data:data
    });
    return res;
  }

  export const createOrder = async(data)=>{
    const res = await axios({
      method: 'POST',
      url: 'https://sandbox.cashfree.com/pg/orders',
      headers: {
        accept: 'application/json',
        'x-client-id': 'TEST3424583d7ba158e15a473de5b9854243',
        'x-client-secret': 'TEST26e7dc42aeab21458e6bc86a3ab27c1f258634d2',
        'x-api-version': '2022-09-01',
        'content-type': 'application/json'
      },
      data: data
    });
    return res;
  } 


 export const orderPay = async(data)=>{
    const res = await axios({
        method: 'POST',
        url: 'https://sandbox.cashfree.com/pg/orders/sessions',
        headers: {accept: 'application/json', 'content-type': 'application/json'},
        data: data
    })
    return res;
 } 

 export const checkOrder = async(data)=>{
  const res = await axios({
    method: 'GET',
    url:'https://sandbox.cashfree.com/pg/orders/'+data,
    headers: {
      accept: 'application/json',
      'x-client-id': 'TEST3424583d7ba158e15a473de5b9854243',
      'x-client-secret': 'TEST26e7dc42aeab21458e6bc86a3ab27c1f258634d2',
      'x-api-version': '2022-09-01'
    },
    
  });
  return res;
 }

 export const searchAxiosApi = async (data) =>{
  const res = await axios({
    method:'post',
    url:'https://amsweets.in/find/employee',
    data:data
  });
  console.log('emp',res.data.message);
  if(res.data.message === "Employee Not Found"){
    let response = searchUserAPi(data);
    return response;
   }else {return res;}
      
            
 

}
export const searchUserAPi =async (data) =>{
  console.log('comes to searchUserApi');
  const res = await axios({
    method:'post',
    url:'https://amsweets.in/find/user',
    data:data
  });
  console.log('user',res.data);                

  if(res.data.message == 'User Not Found'){
    let response = createUserApi(data);
    return response;
  }else {return res;}
 
}

export const createUserApi = async(data) =>{
  console.log('startig to create user');
  const res = await axios({
    method:'post',
    url:'https://amsweets.in/user/register',
    data:data
  });
  console.log('user created data',res.data.message);
  return res;
  
}

export const sendOtp = async (data) =>{
  const res = await axios({
    method :'post',
    url:'https://amsweets.in/otp/',
    data:data
  });
  return res;
}

export const setPasswordApi = async (data) =>{
  const res = await axios({
    method :'patch',
    url:'https://amsweets.in/set/Password',
    data:data
  });
  return res;
}





export const LoginApi = async (data) =>{
  const res = await axios({
    method :'post',
    url:'https://amsweets.in/login/',
    data:data
  });
  return res;
}

export const Faq = async()=>{
  const res = await axios({
      method:'get',
      url:'https://amsweets.in/faqs/'
  });
  return res;
} 

export const ChangePasswordApi = async (data) => {
  const res = await axios({
    method:'patch',
    url:'https://amsweets.in/chng/Password',
    data:data
  });
  return res;
} 

export const ProfileApi = async (data) => {
  const res = await axios({
    method:'post',
    url:'https://amsweets.in/profile/',
    data:data
  });
  return res;
}

export const EditprofileApi = async (data) =>{
  const res = await axios({
    method:'Post',
    url:'https://amsweets.in/profile/edit',
    data:data
  });
  return res;
}
