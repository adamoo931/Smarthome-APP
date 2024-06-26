export async function getAlertInfo(access_token)
{
    const url = `http://localhost:3000/api/device/get-info-alert`;
    // const url = `/backend/api/device/get-info-alert`;

    const response = await fetch(url, {
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });
    const { statusCode , ...rest } = await response.json();

    if(statusCode == 404)
        return false;

    if(statusCode != 200)
        return new Error("Unauthorized , please log in again.")

    const {payload} = rest;
    const {isAlert} = payload;
    return isAlert;
}