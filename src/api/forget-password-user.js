export async function forgetPassword(data) {

    const url = "http://localhost:3000/api/user/forget-password";
    //const url = "/backend/api/user/forget-password";

    const {email} = data

    const response = await fetch(url, {
      method: "POST",
      headers : {
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({email}),
    });
    const {message , statusCode , ...rest} = await response.json();
    if(statusCode != 200)
        throw new Error(message);

    const { payload } = rest;
    return {payload};
}