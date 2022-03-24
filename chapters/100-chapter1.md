# Einleitung

Mit wachsendem Umfang einer Webanwendung ist die Datenverwaltung, auch genannt State Management, unabdingbar. 
Es gibt heutzutage allerdings zahlreiche Frameworks mit noch mehr Bibliotheken mit unterschiedlichen Ansätzen. 
Für meine Thesis habe ich mir drei beliebte Bibliotheken für einen Vergleich herausgesucht. Diese sind React[^1], React-Redux[^2] und React-Recoil[^3].
Für einen aussagekräftigen Vergleich dieser Bibliotheken wird eine To-do App programmiert, in denen die Vor- und Nachteile verglichen werden sollen.

## State Management

State Management [@react-js] steht für eine nicht veränderbare Einheit an Daten. Soll etwas verändert werden, muss eine Kopie des alten States erstellt und erweitert werden.
Will man einen Array mit .push() erweitern, wird das alte Array überschrieben. Das ist nicht erlaubt. 
Es gibt folgende Regeln für das State Management:
- der alte State darf nicht verändert werden (immutable)

## TypeScript

TypeScript[^4] ist eine Erweiterung der Programmiersprach JavaScript. Es benötigt Node.js als Entwicklungsumgebung. Es bietet zu JavaScript eine zusätzliche Syntax, um eine engere Integration des verwendeten Editors zu bilden. Damit kann es schnell Fehler abfangen und hilfreiche Vorschläge machen, zum Beispiel welche Methoden eines Objekts angeboten werden können. Der Vorteil basiert auf der Typsicherheit dieser Sprache.

TypeScript ist eine tolle Sprache blabla und hier eine Statistik /ref{favProgLanguage}:

![Beliebteste Programmiersprachen 2021[@stackoverflow]\label{favProgLanguage}](images/SO_fav_prog_lang.PNG)


## Problemstellung

Als Neueinsteiger der Webprogrammierung wird man heute mit verschiedensten Ansätzen und Libraries überschüttet. Innerhalb der letzten Jahre kamen immer mehr neue Frameworks und Libraries in die Webprogrammierung hinzu. Da man ständig auf dem neuesten Stand bleiben muss und immer wieder alte Dogmen verwerfen muss, kann das Arbeiten dann sehr schwerfallen. Um den Einstieg aber für Interessierte zu erleichtern, soll hier ein Vergleich gemacht werden.

## Anforderungen der App
Diese Thesis fokussiert sich auf den Vergleich der Bibliotheken. Da es sich auschließlich mit dem Frontend-Teil handelt, werden die Beispiele vereinfacht dargestellt. Das heißt, dass Systeme aus dem Backend, wie das Routing und eine Passwortabfrage, entfallen.
Das Programm 

### CRUD (Create-Read-Update-Delete)
Die Applikation soll in der Lage sein neue Einträge anzulegen, sie anzuzeigen, sie zu löschen und verändern zu können.

### Authentifizierung (ist User eingeloggt oder nicht)
Da nur im Frontendbereich gearbeitet wird, wird alles was zum Backend gehört einfach simuliert. Es wird kein Routing geben.

### Filterfunktion
Es soll gefiltert werden können, welche Aufgaben schon erledigt wurden.

### Sortierfunktionen
Es soll alphabetisch und nach Erstellungsdatum sortiert werden können.

### Libraries: React, React + Redux, Recoil
Die App wird einmal in reinem React geschrieben, dann einmal in Redux und einmal mit Recoil.


[^1]: https://reactjs.org/ 
[^2]: https://react-redux.js.org/
[^3]: https://recoiljs.org/
[^4]: https://www.typescriptlang.org/


