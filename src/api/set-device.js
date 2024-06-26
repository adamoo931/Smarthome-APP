export async function setDevice(data)
{
    const {access_token , device , value} = data;
    const url = "http://localhost:3000/api/device/set-device";
    //const url = "/backend/api/device/set-device";
    console.log(value);
    const response = await fetch(url, {
      method: "POST",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({ device , value : value }),
    });
    const { message , statusCode  } = await response.json();
    if(statusCode != 200)
      throw new Error(message);
    return null;
}