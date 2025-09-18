//EX1
function testEx1() {
  var x = 1;   // portée fonctionnelle
  let y = 2;   // portée bloc
  const z = 3; // portée bloc et valeur non réaffectable
  {
    var x = 10;   // écrase le x global
    let y = 20;   // existe seulement dans ce bloc
    const z = 30; // existe seulement dans ce bloc
    console.log("Bloc :", x, y, z);
  }
  console.log("Hors bloc :", x, y, z);
  // z = 50; // ❌ Erreur : Assignment to constant variable
}

//EX2
function testEx2() {
  // Fonction classique
  function somme(a, b) {
    return a + b;
  }
  // Version fléchée
  const sommeArrow = (a, b) => {
    return a + b;
  };
  // Return implicite (sans accolade)
  const sommeArrowShort = (a, b) => a + b;
  console.log(sommeArrowShort(3, 4)); // 7
}

//EX3
function testEx3() {
  const user = { name: "Noor", age: 10, city: "Tunis" };
  const { name, age } = user;
  console.log(name); // Noor
  console.log(age);  // 10
  //EX4
  // Fusion de tableaux
  const arr1 = [1, 2, 3];
  const arr2 = [4, 5, 6];
  const fusion = [...arr1, ...arr2];
  console.log(fusion); // [1,2,3,4,5,6]
}

// Copie d’objet
function testEx4() {
  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1 }; // copie
  obj2.a = 99;
  console.log(obj1, obj2); // obj1 pas modifié
}
//EX5
function testEx5() {
  const livre = {
    titre: "mohsen",
    auteur: "hsan",
    annee: 1949,
    getInfo() {
      return `${this.titre} de ${this.auteur} (${this.annee})`;
    }
  };
  console.log(livre.getInfo());
}
//EX6
function testEx6() {
  class Etudiant {
    constructor(nom, note) {
      this.nom = nom;
      this.note = note;
    }
    getMention() {
      if (this.note >= 16) return "Très bien";
      if (this.note >= 14) return "Bien";
      if (this.note >= 10) return "Passable";
      return "Échec";
    }
  }
  const e1 = new Etudiant("Ali", 17);
  const e2 = new Etudiant("Noor", 13);
  const e3 = new Etudiant("Sara", 8);
  console.log(e1.nom, ":", e1.getMention());
  console.log(e2.nom, ":", e2.getMention());
  console.log(e3.nom, ":", e3.getMention());
}
//EX7
function testEx7() {
  const notes = [12, 5, 17, 9, 20];
  // 1. Moyenne
  const moyenne = notes.reduce((acc, n) => acc + n, 0) / notes.length;
  console.log("Moyenne :", moyenne);
  // 2. Tri décroissant
  const sorted = [...notes].sort((a, b) => b - a);
  console.log("Tri décroissant :", sorted);
  // 3. Filtrer >= 10
  const valid = notes.filter(n => n >= 10);
  console.log("Notes >= 10 :", valid);
}

//EX8
function testEx8() {
  const wait = ms => new Promise(res => setTimeout(res, ms));
  console.log("Début");
  wait(2000).then(() => console.log("Fin"));
}

//EX9
async function testEx9() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  data.slice(0, 5).forEach(post => {
    console.log(post.title);
  });
}

// Appels de test individuels
console.log("--- Test EX1 ---");
testEx1();
console.log("--- Test EX2 ---");
testEx2();
console.log("--- Test EX3 ---");
testEx3();
console.log("--- Test EX4 ---");
testEx4();
console.log("--- Test EX5 ---");
testEx5();
console.log("--- Test EX6 ---");
testEx6();
console.log("--- Test EX7 ---");
testEx7();
console.log("--- Test EX8 ---");
testEx8();
console.log("--- Test EX9 ---");
testEx9();
