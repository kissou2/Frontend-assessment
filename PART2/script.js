/*1
let nom = String(prompt("Entrez votre nom"));
let prenom = String(prompt("Entrez votre prenom"));
let anne = String(prompt("Entrez votre annee"));
let result = 2023- anne
alert("Hello " + nom + prenom + " " + "vous avez " + result + "ans ")
*/


/*2
let tab = [0,1,2,3,4,5,6,7,8,9]
let tabrevers =[]
for(let i = tab.length -1 ; i >= 0; i-- ){
    tabrevers.push(tab[i])
}
alert(tab)
alert(tabrevers)
*/

function ispalindrome(){
    let word = String(prompt(("un mot")))
    if(word === word.split('').reverse().join('')){
        alert(word + " Ce mot est un palindrome")
    }else{
        alert(word + " Ce mot n'est pas un palindrome")
    }
}
ispalindrome()