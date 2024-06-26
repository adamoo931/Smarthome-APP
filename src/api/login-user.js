export async function loginUser(data) {
    const url = "http://localhost:3000/api/user/login";
    //const url = "/backend/api/user/login";
  
    const { email , password } = data;
  
    const response = await fetch(url, {
      method: "POST",
      headers : {
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({ email , password }),
    });
    const { message , statusCode , ...rest } = await response.json();
    if(statusCode != 200)
      throw new Error(message);
    const { payload } = rest;
    return {message , payload}
  }