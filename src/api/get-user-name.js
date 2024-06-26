export async function getUserName(access_token)
{
    const url = `http://localhost:3000/api/user/get-user-name`;
    //const url = `/backend/api/user/get-user-name`;
    //const url = `/backend/api/device/get-sensor-data/${controlPanelId}?key=hum`;

    const response = await fetch(url, {
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });

    const {payload} = await response.json();
    const {name} = payload
    return name;
}