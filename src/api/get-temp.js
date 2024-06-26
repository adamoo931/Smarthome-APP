export async function getTemp(deviceID,access_token)
{
    const {controlPanelId} = deviceID;

    const url = `http://localhost:3000/api/device/get-sensor-data/${controlPanelId}?key=temp`;
    //const url = `/backend/api/device/get-sensor-data/${controlPanelId}?key=temp`;

    const response = await fetch(url, {
      method: "GET",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
      },
    });
    const {payload} = await response.json();
    return payload.toFixed(1);
}