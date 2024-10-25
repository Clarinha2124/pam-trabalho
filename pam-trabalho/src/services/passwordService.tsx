export default function generatePass(){
    let password:string= ''
    let characters: string = '!@#$%&*()ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz123456789'
    let passwordLength = 16

for(let i=0; i<passwordLength; i++){
password += characters.charAt(

    Math.floor(Math.random() * characters.length)

)

}






    return password
}