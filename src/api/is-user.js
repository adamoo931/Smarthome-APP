export async function isUser(access_token)
{
    const url = "http://localhost:3000/api/user/is-user";
    //const url = "/backend/api/user/is-user";
    const response = await fetch(url, {
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });
    const { message , statusCode } = await response.json();
    if(statusCode != 200)
      throw new Error(message);
    return true;
}