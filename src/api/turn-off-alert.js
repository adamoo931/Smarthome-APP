export async function turnOffAlert(access_token)
{
    const url = `http://localhost:3000/api/device/turn-off-alert`;
    // const url = `/backend/api/device/turn-off-alert`;

    const response = await fetch(url, {
      method: "PATCH",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });
    const { statusCode } = await response.json();

    if(statusCode != 200)
        return new Error("Unauthorized , please log in again.")

    return true;
}