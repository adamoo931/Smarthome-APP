export async function getDeviceState(access_token,device)
{
    const url = `http://localhost:3000/api/device/get-device-data/${device}`;

    //const url = `/backend/api/device/get-device-data/${device}`;

    const response = await fetch(url, {
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });
    const {message , statusCode , payload} = await response.json();
    if(statusCode != 200)
    {
        console.error(message);
        throw new Error(message);
    }

    return payload;
}