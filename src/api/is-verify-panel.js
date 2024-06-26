export async function isVerifyPanel(access_token)
{
    const url = "http://localhost:3000/api/user/is-verify-panel";
    
    //const url = "/backend/api/user/is-verify-panel";
    const response = await fetch(url, {
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });
    const { message , statusCode } = await response.json();
    if(statusCode != 200)
      return {status : false , message}
    return {status : true , message}
}