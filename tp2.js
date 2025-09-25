
// ========================================
// TP2 - APPLICATION TO-DO LIST
// Développement progressif étape par étape
// ========================================

// ========================================
// ÉTAPE 2 : PREMIERS SCRIPTS JAVASCRIPT
// ========================================


// Déclaration des premières variables
let taches = []; // Étape 7 : Tableau pour stocker les tâches
console.log("Bienvenue dans votre gestionnaire de tâches !");
// ========================================
// ÉTAPE 3 : MANIPULATION DU DOM
// ========================================
// Récupération des éléments HTML
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

console.log("TP2 - Étape 3 : Éléments DOM récupérés");
function ajouterTacheSimple() {
    const texte = taskInput.value.trim();
    
    if (texte === '') {
        alert('Veuillez entrer une tâche !');
        return;
    }

    // Création d'un élément de liste simple
    const li = document.createElement('li');
    li.textContent = texte;
    li.className = 'task-item';
    
    taskList.appendChild(li);
    taskInput.value = ''; // Vider le champ
    
    console.log("TP2 - Étape 3-4 : Tâche ajoutée simplement dans le DOM");
}
// Variables pour les étapes avancées (Étape 10)
const searchInput = document.getElementById('searchInput');
const clearAllButton = document.getElementById('clearAllButton');
const totalTasks = document.getElementById('totalTasks');
const completedTasks = document.getElementById('completedTasks');
const pendingTasks = document.getElementById('pendingTasks');
let filteredTaches = [];

// ========================================
// ÉTAPE 4 : GESTION DES ÉVÉNEMENTS
// ========================================

// Fonction simple pour ajouter une tâche (version de base - Étape 3)


// Écouteur pour le bouton Ajouter (Étape 4)
addButton.addEventListener('click', ajouterTacheSimple);

// Écouteur pour la touche Entrée (Étape 4)
taskInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        ajouterTacheSimple();
    }
});

console.log("TP2 - Étape 4 : Événements ajoutés au bouton et à la touche Entrée");

// ========================================
// ÉTAPE 5 : AMÉLIORATION DE L'AFFICHAGE
// ========================================

// Fonction améliorée pour créer l'élément HTML d'une tâche avec boutons
function creerElementTacheAvecBoutons(tache, index) {
    const li = document.createElement('li');
    li.className = `task-item ${tache.terminee ? 'completed' : ''}`;
    
    li.innerHTML = `
        <span class="task-text ${tache.terminee ? 'completed' : ''}">${tache.texte}</span>
        <div class="task-buttons">
            <button class="btn ${tache.terminee ? 'btn-undo' : 'btn-complete'}" 
                    onclick="terminerTache(${index})">
                ${tache.terminee ? 'Annuler' : 'Terminer'}
            </button>
            <button class="btn btn-delete" onclick="supprimerTache(${index})">
                Supprimer
            </button>
        </div>
    `;
    
    taskList.appendChild(li);
}

console.log("TP2 - Étape 5 : Boutons Supprimer et Terminer ajoutés");

// ========================================
// ÉTAPE 6 : UTILISATION DES FONCTIONS
// ========================================

// Fonction dédiée : ajouterTache()
function ajouterTache() {
    const texte = taskInput.value.trim();
    
    if (texte === '') {
        alert('Veuillez entrer une tâche !');
        return;
    }

    // Étape 8 : Création d'un objet tâche
    const nouvelleTache = {
        id: Date.now(), // ID unique basé sur le timestamp
        texte: texte,
        terminee: false,
        dateCreation: new Date().toLocaleString()
    };

    // Étape 7 : Ajout au tableau
    taches.push(nouvelleTache);
    
    // Vider le champ de saisie
    taskInput.value = '';
    
    // Étape 7 : Mettre à jour l'affichage avec boucle
    afficherTaches();
    mettreAJourCompteurs();
    sauvegarderTaches(); // Étape 9
    
    console.log('TP2 - Étape 6-8 : Tâche ajoutée via fonction dédiée:', nouvelleTache);
}

// Fonction dédiée : supprimerTache()
function supprimerTache(index) {
    if (confirm('Êtes-vous sûr de vouloir supprimer cette tâche ?')) {
        const tacheSupprimee = taches.splice(index, 1)[0];
        afficherTaches(); // Réafficher avec boucle
        mettreAJourCompteurs();
        sauvegarderTaches(); // Étape 9
        console.log('TP2 - Étape 6 : Tâche supprimée:', tacheSupprimee);
    }
}

// Fonction dédiée : terminerTache()
function terminerTache(index) {
    if (taches[index]) {
        taches[index].terminee = !taches[index].terminee;
        afficherTaches(); // Réafficher avec boucle
        mettreAJourCompteurs();
        sauvegarderTaches(); // Étape 9
        console.log('TP2 - Étape 6 : Statut de la tâche modifié:', taches[index]);
    }
}

console.log("TP2 - Étape 6 : Fonctions dédiées créées (ajouterTache, supprimerTache, terminerTache)");

// ========================================
// ÉTAPE 7 : TABLEAUX ET BOUCLES
// ========================================

// ========================================
// ÉTAPE 7 : AFFICHAGE AVEC BOUCLES
// ========================================

// Fonction pour afficher toutes les tâches en utilisant une boucle
function afficherTaches() {
    // Vider la liste actuelle
    taskList.innerHTML = '';
    
    console.log("TP2 - Étape 7 : Affichage des tâches avec boucle forEach");
    
    // Utiliser filteredTaches si une recherche est active, sinon taches
    const tachesAAfficher = filteredTaches.length > 0 || searchInput.value.trim() !== '' ? filteredTaches : taches;
    
    // BOUCLE pour créer et afficher chaque tâche
    tachesAAfficher.forEach((tache, index) => {
        creerElementTache(tache, index);
    });
    
    // Afficher un message si aucune tâche
    if (tachesAAfficher.length === 0 && searchInput.value.trim() !== '') {
        taskList.innerHTML = '<li style="text-align: center; padding: 20px; color: #666;">Aucune tâche trouvée</li>';
    } else if (taches.length === 0) {
        taskList.innerHTML = '<li style="text-align: center; padding: 20px; color: #666;">Aucune tâche ajoutée</li>';
    }
}

// ========================================
// ÉTAPE 8 : INTRODUCTION AUX OBJETS
// ========================================

// Fonction pour créer l'élément HTML d'une tâche (Étape 8 : utilise les propriétés d'objet)
function creerElementTache(tache, index) {
    const li = document.createElement('li');
    li.className = `task-item ${tache.terminee ? 'completed' : ''}`;
    
    // Utilisation des propriétés de l'objet tâche
    li.innerHTML = `
        <span class="task-text ${tache.terminee ? 'completed' : ''}">${tache.texte}</span>
        <div class="task-buttons">
            <button class="btn ${tache.terminee ? 'btn-undo' : 'btn-complete'}" 
                    onclick="terminerTache(${index})">
                ${tache.terminee ? 'Annuler' : 'Terminer'}
            </button>
            <button class="btn btn-delete" onclick="supprimerTache(${index})">
                Supprimer
            </button>
        </div>
    `;
    
    taskList.appendChild(li);
}

console.log("TP2 - Étape 8 : Objets utilisés pour représenter les tâches avec propriétés (texte, terminee, etc.)");

// ========================================
// ÉTAPE 9 : PERSISTANCE DES DONNÉES AVEC LOCALSTORAGE
// ========================================

// AMÉLIORATION 1 : Compteur de tâches terminées et en cours
function mettreAJourCompteurs() {
    const total = taches.length;
    const terminees = taches.filter(t => t.terminee).length;
    const enCours = total - terminees;
    
    totalTasks.textContent = `Total: ${total}`;
    completedTasks.textContent = `Terminées: ${terminees}`;
    pendingTasks.textContent = `En cours: ${enCours}`;
    
    console.log(`TP2 - Étape 10 : Compteurs mis à jour - Total: ${total}, Terminées: ${terminees}, En cours: ${enCours}`);
}

// AMÉLIORATION 2 : Bouton 'Tout supprimer'
function toutSupprimer() {
    if (taches.length === 0) {
        alert('Aucune tâche à supprimer !');
        return;
    }
    
    if (confirm(`Êtes-vous sûr de vouloir supprimer toutes les ${taches.length} tâches ?`)) {
        taches = [];
        filteredTaches = [];
        afficherTaches();
        mettreAJourCompteurs();
        sauvegarderTaches();
        console.log('TP2 - Étape 10 : Toutes les tâches ont été supprimées');
    }
}

// AMÉLIORATION 3 : Champ de recherche pour filtrer les tâches
function filtrerTaches() {
    const recherche = searchInput.value.toLowerCase().trim();
    
    if (recherche === '') {
        filteredTaches = [];
    } else {
        filteredTaches = taches.filter(tache => 
            tache.texte.toLowerCase().includes(recherche)
        );
    }
    
    afficherTaches();
    console.log(`TP2 - Étape 10 : Recherche effectuée pour "${recherche}", ${filteredTaches.length} résultats`);
}

console.log("TP2 - Étape 10 : Améliorations ajoutées (compteurs, tout supprimer, recherche)");

// ========================================
// MISE À JOUR DES ÉVÉNEMENTS POUR UTILISER LES NOUVELLES FONCTIONS
// ========================================

// Remplacer les anciens événements par les nouveaux (Étape 6)
addButton.removeEventListener('click', ajouterTacheSimple);
addButton.addEventListener('click', ajouterTache);

// Événements pour les améliorations
searchInput.addEventListener('input', filtrerTaches);
clearAllButton.addEventListener('click', toutSupprimer);

console.log("TP2 - Événements mis à jour pour utiliser les fonctions dédiées");

// Fonction pour sauvegarder les tâches dans localStorage
function sauvegarderTaches() {
    try {
        localStorage.setItem('todoList', JSON.stringify(taches));
        console.log('TP2 - Étape 9 : Tâches sauvegardées dans localStorage');
    } catch (error) {
        console.error('Erreur lors de la sauvegarde:', error);
    }
}

// Fonction pour charger les tâches depuis localStorage
function chargerTaches() {
    try {
        const tachesSauvegardees = localStorage.getItem('todoList');
        if (tachesSauvegardees) {
            taches = JSON.parse(tachesSauvegardees);
            afficherTaches();
            mettreAJourCompteurs();
            console.log('TP2 - Étape 9 : Tâches récupérées depuis localStorage:', taches);
        }
    } catch (error) {
        console.error('Erreur lors du chargement:', error);
        taches = []; // Réinitialiser en cas d'erreur
    }
}

console.log("TP2 - Étape 9 : Persistance avec localStorage implémentée");

// ========================================
// ÉTAPE 10 : AMÉLIORATIONS LIBRES
// ========================================

// ========================================
// INITIALISATION AU CHARGEMENT DE LA PAGE
// ========================================

// Événement de chargement de la page
document.addEventListener('DOMContentLoaded', function() {
    console.log('TP2 - Application To-Do List initialisée');
    console.log('TP2 - Étape 9 : Chargement des tâches sauvegardées...');
    
    chargerTaches(); // Charger les tâches sauvegardées
    
    // Focus automatique sur le champ de saisie
    taskInput.focus();
    
    console.log("=".repeat(50));
    console.log("TP2 TERMINÉ - RÉCAPITULATIF DES ÉTAPES :");
    console.log("✓ Étape 1-2 : Structure HTML/CSS et premiers scripts");
    console.log("✓ Étape 3 : Manipulation du DOM");
    console.log("✓ Étape 4 : Gestion des événements");
    console.log("✓ Étape 5 : Boutons Supprimer et Terminer");
    console.log("✓ Étape 6 : Fonctions dédiées");
    console.log("✓ Étape 7 : Tableaux et boucles");
    console.log("✓ Étape 8 : Objets pour les tâches");
    console.log("✓ Étape 9 : Persistance avec localStorage");
    console.log("✓ Étape 10 : Améliorations (compteurs, recherche, tout supprimer)");
    console.log("=".repeat(50));
});

// ========================================
// FONCTIONS UTILITAIRES BONUS
// ========================================

// Fonction pour exporter les tâches en JSON
function exporterTaches() {
    if (taches.length === 0) {
        alert('Aucune tâche à exporter !');
        return;
    }
    
    const dataStr = JSON.stringify(taches, null, 2);
    const dataUri = 'data:application/json;charset=utf-8,'+ encodeURIComponent(dataStr);
    
    const exportFileDefaultName = 'mes-taches.json';
    
    const linkElement = document.createElement('a');
    linkElement.setAttribute('href', dataUri);
    linkElement.setAttribute('download', exportFileDefaultName);
    linkElement.click();
    
    console.log('TP2 - BONUS : Tâches exportées en JSON');
}

// Fonction pour obtenir des statistiques détaillées
function obtenirStatistiques() {
    const stats = {
        total: taches.length,
        terminees: taches.filter(t => t.terminee).length,
        enCours: taches.filter(t => !t.terminee).length,
        plusAncienne: taches.length > 0 ? taches.reduce((a, b) => a.id < b.id ? a : b) : null,
        plusRecente: taches.length > 0 ? taches.reduce((a, b) => a.id > b.id ? a : b) : null
    };
    
    console.log('TP2 - BONUS : Statistiques détaillées:', stats);
    return stats;
}

// Message final
console.log('TP2 - Fonctions bonus disponibles dans la console :');
console.log('- exporterTaches() : Exporter en JSON');
console.log('- obtenirStatistiques() : Afficher les statistiques détaillées');
