export async function registerPanel(data) {
    const register_url = "http://localhost:3000/api/device/register-control-panel";
    
    //const register_url = "/backend/api/device/register-control-panel";
    
    const {panelID , access_token} = data;

    const response = await fetch(register_url, {
      method: "POST",
      headers : {
          'Authorization' : `Bearer ${access_token}`,
          'Content-Type' : 'application/json',
      },
      body: JSON.stringify({panelID}),
    });
    const { message, statusCode } = await response.json();

    if(statusCode != 200)
        throw new Error(message);

    return true;
}