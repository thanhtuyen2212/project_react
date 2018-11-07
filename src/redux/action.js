export const SAVEUSER = 'SAVEUSER'

export const saveuser = (user) =>{
    return{
        type:SAVEUSER,
        data:user
    };
}