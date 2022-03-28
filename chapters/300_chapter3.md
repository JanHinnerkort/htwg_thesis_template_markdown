# React-Redux
Redux ist eines der ersten reactbasierten Bibliotheken.  Es bietet die Möglichkeit mit einem Store alle States an einer Stelle zu halten. Dadurch wird es überschaubar und leichter zu bedienen. Das Einrichten dauert etwas. Wenn Redux in ein bereits bestehendes Projekt implementiert werden soll, muss das ganze Projekt dafür umgestellt werden, da die ganze Funktionalität in die Reducer gehört.
Die Anwendung ist danach aber einfach und verständlich.

## Bestandteile
Redux wird mit einem Store, Actions und Reducern aufgebaut. Der Store hält dabei den State. Die Actions werden durch die Komponeneten verwendet und von den Reducern ausgewertet. 

## Lernkurve
Redux braucht etwa einen Monat, da die Projektarchitektur deutlich anspruchsvoller ist. Außerdem kommt es zu viel Boiler Plate Code, da man für die Reducer Actions braucht, für die in Typescript vorweg noch Typen und Interfaces angelegt werden müssen. Steht das Gerüst aber erst einmal ist es sehr übersichtlich, da man alle Funktionen im Reducer an einer Stelle hortet und nur noch abrufen muss. Da man Actions und Reducer per Logausgabe direkt ausgeben kann, vereinfacht es das Debuggen.

## App-Aufbau
Angenommen man möchte die Athentifikation des Benutzers auf true setzen. Dafür muss man zuerst ein Interface für die Login-Action schreiben: \ref{lst:interface}

\lstinputlisting[language=ts, label={lst:interface},caption=Redux Interface]{code/redux/interface.ts}

Dann werden die Typen \ref{lst:action_types} für Login bzw. Logout definiert und mit den anderen Actions im Typ Action gehalten.

\lstinputlisting[language=ts, label={lst:action_types},caption=Redux Action Types]{code/redux/action_types.ts}

Der Typ 'Action' wird verwendet, um eine Konstante 'login' anzulegen \ref={lst:action}.

\lstinputlisting[language=ts, label={lst:action},caption=Redux Action]{code/redux/action.ts}

Jetzt lässt sich die angelegte Action in einem Reducer \ref={reducer} verwenden, der den Zustand der Authentifizierung auf 'true' setzt.

\lstinputlisting[language=ts, label={lst:reducer},caption=Redux Reducer]{code/redux/reducer.ts}

Alle Reducer werden vom Store verwaltet \ref={store}

\lstinputlisting[language=ts, label={lst:store},caption=Redux Store]{code/redux/store.ts}

Nach dieser Vorbereitung kann in der DOM dann ein Button mit einer Dispatch-Funktion angelegt werden und der User kann sich einloggen.

## Performance
Redux hat eigene Performance Optimierungen, die dafür sorgen, dass ausschließlich Komponenten neu gerendert werden, die sich aktuell verändert haben. Damit ist es auch als globaler State sehr gut geeignet.

## Wiederverwertbarkeit
Nur Dispatcher müssen in den Komponenten aufgerufen werden. 
Erleichtert Arbeit im Team, wegen besserer Aufgabentrennung.

## Boiler Plate Code
Wie in dem Login-Beispiel gezeigt, braucht es für eine Funktion: 
- einen Type der in einem State gehalten wird
- ein Interface 
- eine Action mit anderen Actions zusammengefasst werden muss
- einen Reducer
- einen Store der im RootFile an die App weitergegeben wird
- einen Dispatch in der jeweiligen Komponente

Allerdings muss der ganze Ablauf nur einmal geschrieben werden. Sobald das System einmal steht, ist die Anwendung in den Komponenten allerdings sehr einfach. 
Nur das Erstellen neuer Funktionen fordert, dass man sich wieder mit der komplexen Architektur auseinander setzt. Es empfiehlt sich ein gut strukturiertes, nach Themen differenziertes,  Verzeichnis aufzubauen, damit man in seinem Projekt den Überblick nicht verliert. 


## Community
Die Community von Redux ist riesig. Auf Stackoverflow finden sich nach dem heutigen Stand über 33.660 Fragen, von denen 21.643 beantwortet wurden.

## Verbreitung

## Vorteile
-	Einfacher Überblick
-	vereinfachtes Debuggen, da für alle Actions und dem State eine Logausgabe gemacht werden kann
-	Nachvollziehbar
-	hat eine riesige Community
-	dadurch findet man leicht Hilfe
-	man kann das Wissen für verschiedenste Apps verwenden
-	State ist nicht veränderbar
-	ermöglicht Einsatz von Undo/Redo-Funktionen
-	Persistenz
-	ermöglicht Server-side Rendering
-	durch strikte Vorgaben des Programmierdesigns ist es auch für Programmierer möglich Fremdcode zu warten

## Nachteile
-	Viel Boiler Plate Code
-	bestehende Projekte müssen komplett umstrukturiert werden
-	Neue Funktionen einzufügen ist aufwendig
