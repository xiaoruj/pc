import { v4 as uuidv4 } from 'uuid'
export function getUserTempId(){
    let userTempId = localStorage.getItem('USER_TEMP_ID_KEY')
    if(!userTempId){
        userTempId = uuidv4()
        localStorage.setItem('USER_TEMP_ID_KEY', userTempId)
    }
    return userTempId
}
export function saveUserInfo (userInfo){
    localStorage.setItem('USER_INFO_KEY', JSON.stringify(userInfo))   
}
export function getUserInfo (){
    return JSON.parse(localStorage.getItem('USER_INFO_KEY')) || {}
}

