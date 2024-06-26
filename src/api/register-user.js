import {isPasswordSame} from './../utils/index'

export async function registerUser(data) {
    const url = "http://localhost:3000/api/user/register";
   
    //const url = "/backend/api/user/register";
  
    const { email , name , password , confirmPassword } = data;

    if(!isPasswordSame(password,confirmPassword))
        throw new Error('passwords are not the same');

    const response = await fetch(url, {
      method: "POST",
      headers : {
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({email , name , password , confirmPassword}),
    });

    const {message , statusCode } = await response.json();
    
    if (statusCode == 400) 
      throw new Error(message[0]);
    if (statusCode == 409) 
      throw new Error(message);

    return { message }
  }