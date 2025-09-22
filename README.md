<h1 align="center">Express Blog Sql</h1>

<b>Esercizio</b><br>
Prendiamo le API precedentemente create per il vostro blog ed aggiungiamo la persistenza tramite la connessione a un DB.<br><br>

<b>Milestone 1</b><br>
- Importiamo il db in allegato su MySQL Workbench,<br>
- Installiamo il client mysql2 con npm i mysql2 nell’app Express,<br>
- Creiamo un file di configurazione per connettere il database,<br>
- Inseriamo un console.log nella logica di connessione e proviamo ad avviare l’applicazione per verificare che non ci siano errori.,<br><br>

<b>Milestone 2</b><br>
- Facciamo sì che l’API di INDEX restituisca la lista di post recuperata dal database in formato JSON,<br>
- Verifichiamo su Postman che la risposta sia corretta,<br><br>

<b>Milestone 3 </b><br>
- Facciamo sì che l’API di DESTROY permetta di eliminare un post dal database,
- Verifichiamo su Postman che la chiamata non dia errore e risponda 204,
- Verifichiamo su MySQL Workbench che il post venga effettivamente rimosso,<br><br>

<b>Milestone 4</b><br>
- Facciamo sì che l’API di SHOW restituisca il post desiderato in formato JSON,<br>
- Verifichiamo su Postman che la risposta sia corretta,<br>

<b>Bonus:</b><br>
Far sì che la SHOW restituisca il post comprensivo di tag, recuperandoli grazie alla relazione tra post e tags, esistente sul database.
