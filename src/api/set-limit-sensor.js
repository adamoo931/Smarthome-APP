export async function setLimitSensor(data)
{
    const { temp , hum , access_token } = data;

    const url = "http://localhost:3000/api/device/set-limit-sensor";

    // const url = "/backend/api/device/set-limit-sensor";

    const response = await fetch(url, {
      method: "PATCH",
      headers : {
        'Authorization' : `Bearer ${access_token}`,
        'Content-Type' : 'application/json',
      },
      body: JSON.stringify({temp ,hum}),
    });
    const { message , statusCode } = await response.json();

    if(statusCode == 404)
        throw new Error(message);

    if(statusCode == 400)
      throw new Error(`
        Temperature or Humidity must be :
            number ,   
            lower than 3 signs
        `);

    return message;
}