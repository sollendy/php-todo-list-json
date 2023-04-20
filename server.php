<?php
// adesso vedo se è giusto il modo di verificare la chiamata tramite post e se va fatta al v-model spero di sì altrimenti non so cosa pensare
if(isset($_POST['nuovoPunto'])) {
    //speriamo che così vada bene adesso dobbiamo lavorare sul json prendendolo innanzitutto
    $listaJSON = file_get_contents('agenda.json');
    $puntiLista = json_decode($listaJSON);
    $puntilista[] = $_POST['nuovoPunto'];
    $nuovoPuntoJSON = json_encode($puntiLista);
    file_put_contents('agenda.json', $nuovoPuntoJSON);
    var_dump($puntiLista);
} else {
    $nomeFile = file_get_contents('agenda.json');
    $puntiLista = json_decode($nomeFile);
    header('Content-type: application/json');
    echo json_encode($puntiLista);
}
