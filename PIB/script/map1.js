/* Style général pour le corps de la page */
body {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  margin-top: 20px;
  margin-bottom: 20px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: darkgrey; 
  font-family: 'Garamond', sans-serif;
}

.container {
  display: flex;
  width: 100%;
  height: 100vh; /* Ajusté pour prendre toute la hauteur disponible */
  margin: 0 20px; 
}

.left-container, .graph-container {
  display: flex;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.left-container {
  width: 250px; /* Largeur fixe pour le conteneur gauche */
  margin-right: 20px;
}

.sidebar, .info-box {
  background-color: #e0e0e0;
  padding: 20px;
  margin-bottom: 10px;
}



#map {
  flex-grow: 1; /* La carte prend le reste de l'espace disponible */
  background-color: #fff;
  border: 1px solid #ccc;
  padding-top: 5%;
}

.map-title {
  position: absolute;
  top: 20px;
  left: 35%; 
  transform: translateX(-50%);
  color: #fff; 
  background-color: rgba(0, 0, 0, 0.5);
  padding: 5px 10px;
  border-radius: 5px;
}

.graph-container {
  width: 30%; /* Largeur fixe pour les "conteneur" de graphes */
  height: 100%; /* Hauteur fixe pour les "conteneur" de graphes */
  display: flex;
  flex-direction: column;
  gap: 5px;
  margin-left: 10px;
  margin-right: 20px; 
}
.info-box {
  flex: 2;
  background-color: #f0f0f0;
  text-align: justify;
}
.graph {
  flex-grow: 1;
  background-color: #e0e0e0;
  padding: 20px;
  margin: 15px;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  transform: scale(0.9); /* Réduit la taille du graphique de 10% */
  transform-origin: center; 
}

#graph1 {
  height: 30%; 
  background-color: #fff; /
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
  margin-top: 5px; 
  padding: 10px; 
}
/* Aide de chatGPT pour l'alignement SVG */
#graph1 svg {
  width: 100%;
  height: 100%;
}

#graph2 {
  height: 20%; /* Réduit la hauteur pour le conteneur des stickmen */
  padding: 15px;
  background-color: #f4f4f4;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

#graph2 div { 
  flex-grow: 1;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin: 5px 0;
}

#graph2 div div {
  flex-basis: 8%; /* Limite les stickmen par ligne */
  display: flex;
  justify-content: center;
  align-items: center;
}

#graph2 svg {
  margin: 0;
  padding: 0;
  vertical-align: middle; /* Alignement vertical */
}

#graph2 span {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 24px;
}
/* Style pour la popup */
.popup {
  position: absolute;
  background-color: lightgrey;
  border: 1px solid black;
  padding: 10px;
  border-radius: 5px;
  pointer-events: none;
  display: none;
  z-index: 10;
}
.small-text {
  color: #333; 
  font-size: 14px;
  line-height: 1.6;
}

.data-source {
  font-size: 10px; 
  color: black; 
  text-align: left; 
  padding-top: 10px; 
}

