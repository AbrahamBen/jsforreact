/*let x = 5;//Variable globale

function portee1(){
    let y = 10; //Variable locale
    console.log(x + y); // = x + 10
}

function portee2(){
    let x = 100;
    console.log(x); // = 100
}

//Décommentez le code pour l'exécuter
portee1(); // 5 + 10 = 15
x = 20; //On modifie la valeur dans x global
portee1(); // La dernière valeur connue de x (20) est utilisée
portee2(); // 100



let prenom = 'Pierre';

//bio() a accès à let prenom (et à let age) mais pas à let hobbie
function bio(){
    let age = 29;
    //hobbies() a accès à let prenom et à let age (et à let hobbie)
    function hobbies(){
        let hobbie =  'Trail';
        return prenom + ', ' + age + ' ans. Je fais du ' + hobbie;
    }
    return hobbies();
}


//Décommentez le code pour l'exécuter
console.log(bio());

*/



//Exemple d'un compteur
function compteur() {
    let count = 0;
  
    return function() {
          return count++;
    };
}

let plusUn = compteur();

console.log(plusUn());