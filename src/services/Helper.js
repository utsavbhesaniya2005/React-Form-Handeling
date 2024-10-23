export const getUsers = () => {
    let result = localStorage.getItem('users');

    if(!result){
        return [];
    }else{
        return JSON.parse(result);
    }
}