export const getTodoList = async () => {
    try {
        const BASE_URL = "https://assets.breatheco.de/apis/fake/todos/user/"
        const myUserName = "pejavier"
        const response = await fetch(`${BASE_URL}${myUserName}`); 
        const responseJSON = await response.json();
        return responseJSON;
    } catch (error) {
        console.error("GET error: ", error);
    }
    
}