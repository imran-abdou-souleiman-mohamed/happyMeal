// Fonction pour ajouter un élément au panier
function ajouterAuPanier(item) {
    // Code pour ajouter l'article au panier ici
    alert('Ajouté au panier: ' + item);
}

// Fonction pour ajouter un élément aux favoris
function ajouterAuxFavoris(item) {
    // Code pour ajouter l'article aux favoris ici
    alert('Ajouté aux favoris: ' + item);
}

// Événement de clic sur un bouton pour ajouter un élément au panier
document.getElementById('boutonAjouterAuPanier').addEventListener('click', function() {
    // Élément à ajouter au panier (vous pouvez récupérer cela dynamiquement)
    let item = 'Nom de l\'élément';
    ajouterAuPanier(item);
    alert('Ajouté au panier!');
});

// Événement de clic sur un bouton pour ajouter un élément aux favoris
document.getElementById('boutonAjouterAuxFavoris').addEventListener('click', function() {
    // Élément à ajouter aux favoris (vous pouvez récupérer cela dynamiquement)
    let item = 'Nom de l\'élément';
    ajouterAuxFavoris(item);
    alert('Ajouté aux favoris!');
});



