export async function getDeviceID(access_token)
{
    const url = "http://localhost:3000/api/device/get-device-id";
    //const url = "/backend/api/device/get-device-id";
    const response = await fetch(url, {
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });
    const { message , statusCode , ...rest } = await response.json();
    if(statusCode != 200)
      throw new Error(message);

    const { payload } = rest;

    return payload;
}