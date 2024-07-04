const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

// Configurer le moteur de template EJS
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Configurer le middleware pour les fichiers statiques
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.get('/', (req, res) => {
  res.render('accueil');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

app.get('/projets', (req, res) => {
  res.render('projets');
});

// Démarrer le serveur
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
