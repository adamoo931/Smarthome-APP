export async function verifyUser(data)
{
    const url = "http://localhost:3000/api/user/verify-user";
    //const url = "/backend/api/user/verify-user";

    const response = await fetch(url, {
        method: "POST",
        headers : {
            'Content-Type' : 'application/json',
        },
        body: JSON.stringify(data),
    });

    const { message , statusCode } = await response.json();

    if(statusCode != 200)
        throw new Error(message);

    return true;
}