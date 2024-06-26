export async function getLimitSensor(access_token)
{
    const url = "http://localhost:3000/api/device/get-limit-sensor";
    // const url = "/backend/api/device/get-limit-sensor";

    const response = await fetch(url, {
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });

    const { message , statusCode , payload} = await response.json();
    
    if(statusCode != 200)
        return new Error(message);

    return payload;
}