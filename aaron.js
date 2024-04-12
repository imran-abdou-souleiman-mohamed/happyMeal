// Fonction pour ajouter un élément à la liste de favoris
function ajouterAuxFavoris(element) {
    // Récupérer les éléments de la liste de favoris existante depuis localStorage
    let favoris = JSON.parse(localStorage.getItem('favoris')) || [];
    
    // Ajouter l'élément à la liste de favoris s'il n'est pas déjà présent
    if (!favoris.includes(element)) {
        favoris.push(element);
        
        // Mettre à jour les données dans localStorage
        localStorage.setItem('favoris', JSON.stringify(favoris));
    }
}

// Événement de clic sur un élément à ajouter aux favoris (par exemple, un bouton)
document.getElementById('boutonAjouterAuxFavoris').addEventListener('click', function() {
    // Élément à ajouter aux favoris (vous pouvez récupérer cela dynamiquement)
    let element = 'Nom de l\'élément';
    
    // Appeler la fonction pour ajouter l'élément aux favoris
    ajouterAuxFavoris(element);
    alert('Ajouté aux favoris!');
});



id="boutonAjouterAuxFavoris"