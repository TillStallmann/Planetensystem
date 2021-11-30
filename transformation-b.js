////////////////////////////////////////////////////////////////////////////////
// transformation-b.js
//
// Bearbeiten Sie diese Datei fuer den Praktikumsteil "Transformation B".
//
// HS Duesseldorf - Fachbereich Medien - Grundlagen d. Computergrafik
// Wintersemester 2021/22
//
// Studiengang:
// Gruppe     :
// Autor 1    :
// Autor 2    :
// Autor 3    :
// Autor 4    :
// Autor 5    :
////////////////////////////////////////////////////////////////////////////////

// globale Variablen
let sceneRoot;  // speichert den Wurzelknoten der Szene


////////////////////////////////////////////////////////////////////////////////
// renderScene(time)
// Wird aufgerufen, wenn die gesamte Szene gerendert werden muss.
// In der Variable time wird die verstrichene Zeit in Sekunden übergeben.
////////////////////////////////////////////////////////////////////////////////
function renderScene(time)
{
  // Transformationsmatrix fuer Punkte
  let pointMatrix = new Matrix4(1.0, 0.0, 0.0, 0.0,
                                0.0, 1.0, 0.0, 0.0,
                                0.0, 0.0, 1.0, 0.0,
                                0.0, 0.0, 0.0, 1.0);
  // Transformationsmatrix fuer Normalen
  let normalMatrix = new Matrix4(1.0, 0.0, 0.0, 0.0,
                                 0.0, 1.0, 0.0, 0.0,
                                 0.0, 0.0, 1.0, 0.0,
                                 0.0, 0.0, 0.0, 1.0);
  // Faktor fuer die Zeit -- fuer Zeitraffer / Zeitlupe
  let timeScale = 10.0;
  
  // Falls der Szenenknoten eine Shape enthaelt ...
  if (sceneRoot.shape != undefined)
  {
    // Tranformation des Szenenknotens bestimmen
    let nodeTransformation = sceneRoot.animator(timeScale * time);
    
    // Transformation des Szenenknotens anwenden
    pointMatrix.multiply(nodeTransformation.pointMatrix);
    normalMatrix.multiply(nodeTransformation.normalMatrix);
    
    // Szenenknoten rendern
    renderSceneNode(sceneRoot, pointMatrix, normalMatrix);
  }
}




////////////////////////////////////////////////////////////////////////////////
// initScene()
// Wird aufgerufen, wenn die Szene initialisiert werden soll.
// Erstellt den Szenengraphen.
////////////////////////////////////////////////////////////////////////////////
function initScene()
{
  // TODO: Hier werden Sie die Szenenknoten für Planeten und Monde anlegen.
  
  // -- Sonne --------------------
  let sun = {
    animator: animateSun,
    shape: CreateSun(),
    children: []
  };
  
  // Setze die Sonne als Wurzelknoten der Szene.
  sceneRoot = sun;
}




////////////////////////////////////////////////////////////////////////////////
// Animate-Funktionen
////////////////////////////////////////////////////////////////////////////////
// -- Sonne --------------------------------------------------------------------
function animateSun(time)
{
  return {
    pointMatrix:  new Matrix4(1.0, 0.0, 0.0, 0.0,
                              0.0, 1.0, 0.0, 0.0,
                              0.0, 0.0, 1.0, 0.0,
                              0.0, 0.0, 0.0, 1.0),
    normalMatrix: new Matrix4(1.0, 0.0, 0.0, 0.0,
                              0.0, 1.0, 0.0, 0.0,
                              0.0, 0.0, 1.0, 0.0,
                              0.0, 0.0, 0.0, 1.0)
  };
}

// TODO: Hier werden Sie weitere Animate-Funktionen implementieren.





////////////////////////////////////////////////////////////////////////////////
// Transformationsfunktionen
////////////////////////////////////////////////////////////////////////////////

// TODO: Hier werden Sie grundlegende Transformationsfunktionen implementieren.
