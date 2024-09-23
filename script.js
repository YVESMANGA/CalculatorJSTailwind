let ecran = document.getElementById('ecran');
let expression = '';

function ajouterValeur(valeur) {
    if (expression === '0' && valeur !== '.') {
        expression = valeur;
    } else {
        expression += valeur;
    }
    ecran.innerText = expression;
}

function calculer() {
    try {
        expression = eval(expression).toString();
        ecran.innerText = expression;
    } catch (error) {
        ecran.innerText = 'Erreur';
        expression = '';
    }
}

function effacer() {
    expression = '';
    ecran.innerText = '0';
}
