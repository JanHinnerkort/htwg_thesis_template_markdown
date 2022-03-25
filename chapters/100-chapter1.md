# Einleitung

Mit wachsendem Umfang einer Webanwendung ist die Datenverwaltung, auch genannt State Management, unabdingbar. 
Es gibt heutzutage allerdings zahlreiche Frameworks mit noch mehr Bibliotheken mit unterschiedlichen Ansätzen. 
Für meine Thesis habe ich mir drei beliebte Bibliotheken für einen Vergleich herausgesucht. Diese sind React[^1], React-Redux[^2] und React-Recoil[^3].
Für einen aussagekräftigen Vergleich dieser Bibliotheken wird eine To-do App programmiert, in denen die Vor- und Nachteile verglichen werden sollen.

## State Management

„In the simplest definition, State is a JavaScript object that represents the part of a component that can change based on a resultant action of a user. You could also say states are simply the memory of a component.
When a user performs an action in a typical React app, changes occur in the component's state. While this isn't bad, it quickly becomes a problem if the app begins to scale; hence, such an app's complexity makes it extremely difficult to keep track of all dependencies.“[^4]

State Management [@react-js] dient der Datenhaltung und -übertragung in verschiedenen Komponenten. Damit können zum Beispiel in Onlineshops Einkaufskörbe oder Threadsysteme in Foren verwaltet werden.
Soll etwas verändert werden, muss eine Kopie des alten States erstellt und erweitert werden. 
Es gibt folgende Regeln für das State Management:
- der alte State darf nicht verändert werden (immutable)
- der State ist Persistent

## TypeScript

TypeScript[^5] ist eine Erweiterung der Programmiersprach JavaScript. Es benötigt Node.js als Entwicklungsumgebung. Es bietet zu JavaScript eine zusätzliche Syntax, um eine engere Integration des verwendeten Editors zu bilden. Damit kann es schnell Fehler abfangen und hilfreiche Vorschläge machen, zum Beispiel welche Methoden eines Objekts angeboten werden können. Der Vorteil basiert auf der Typsicherheit dieser Sprache.

TypeScript ist eine tolle Sprache blabla und hier eine Statistik /ref{favProgLanguage}:

![Beliebteste Programmiersprachen 2021[@stackoverflow]\label{favProgLanguage}](images/SO_fav_prog_lang.PNG)


## Problemstellung

Als Neueinsteiger der Webprogrammierung wird man heute mit verschiedensten Ansätzen und Libraries überschüttet. Innerhalb der letzten Jahre kamen immer mehr neue Frameworks und Libraries in die Webprogrammierung hinzu. Da man ständig auf dem neuesten Stand bleiben muss und immer wieder alte Dogmen verwerfen muss, kann das Arbeiten dann sehr schwerfallen. Um den Einstieg aber für Interessierte zu erleichtern, soll hier ein Vergleich gemacht werden.

## Anforderungen der App

Diese Thesis fokussiert sich auf den Vergleich der Bibliotheken. Da es sich auschließlich mit dem Frontend-Teil handelt, werden die Beispiele vereinfacht dargestellt. Das heißt, dass Systeme aus dem Backend, wie das Routing und eine Passwortabfrage, entfallen.
Das Programm soll eine To-do Liste anzeigen, die folgende Funktionen hat:

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

## Kritikpunkte
Folgende Punkte sollen dabei untersucht werden:

### Die Lernkurve
Dabei wird auf die Zeit, die es zum Umsetzen des Erlernten braucht, eingegangen, sowie die Komplexizität.

### Die Performance
Für die Messung werden hier das 'React Developer Tool', Version 4.24.0 und für Redux das 'Redux DevTool' Version 3.0.9 aus den Chromeerweiterungen verwendet

### Wiederverwertbarkeit

### Boiler Plate Code

### Community

### Verbreitung

[^1]: https://reactjs.org/ 
[^2]: https://react-redux.js.org/
[^3]: https://recoiljs.org/
[^4]: https://dev.to/workshub/state-management-battle-in-react-2021-hooks-redux-and-recoil-2am0
[^5]: https://www.typescriptlang.org/


