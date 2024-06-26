import {isPasswordSame} from './../utils/index'

export async function updatePassword(data) {

    const url = "http://localhost:3000/api/user/update-password-user";
    //const url = "/backend/api/user/update-password-user";

    const {password , confirmPassword , currentPassword , access_token} = data;

    if(!isPasswordSame(password,confirmPassword))
        throw new Error('Passwords are not the same');

    const response = await fetch(url, {
      method: "PATCH",
      headers : {
          'Authorization' : `Bearer ${access_token}`,
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({password,confirmPassword,currentPassword}),
    });

    const { message , statusCode } = await response.json();

    if(statusCode == 400)
        throw new Error(message[0]);

    if(statusCode != 200)
        throw new Error(message);
    
    return message;
}