import {isPasswordSame} from './../utils/index'
export async function resetPassword(data) {

    const url = "http://localhost:3000/api/user/reset-password";
    //const url = "/backend/api/user/reset-password";

    const {password , confirmPassword , tokenLink} = data;

    if(!isPasswordSame(password,confirmPassword))
        throw new Error('passwords are not the same');

    const response = await fetch(url, {
      method: "POST",
      headers : {
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({password,confirmPassword,tokenLink}),
    });

    const { message , statusCode } = await response.json();

    if(statusCode == 403)
        throw new Error("token");
    if(statusCode == 400)
        throw new Error(message[0]);
    return {message}
}