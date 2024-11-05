export default function generatePass(){
    let password:string= ''
    let characters: string = 'Clara'
    let passwordLength = 5

for(let i=0; i<passwordLength; i++){
password += characters.charAt(

    Math.floor(Math.random() * characters.length)

)

}






    return password
}