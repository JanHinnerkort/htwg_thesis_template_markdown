# React

React ist ein JavaScript Framework, das von einem Team von Facebook entwickelt wurde. Es ist effizient für visuelle Interfaces und gut für Single-Page-Applikationen geeignet. Also eine einfache Webseite, die aus mehreren Komponenten besteht, die je einen eigenen State haben.

## Lernkurve
React braucht an sich etwa eine Woche, um es einsetzen zu können. Da es auch schon etwas älter ist, gibt es massenhaft Material im Internet. Der Nachteil ist: Anfangs wurde noch viel mit Klassen gearbeitet, was seit der Einführung der React Hooks , in React 16.8. (Februar 2019), redundant geworden ist. Zum Beispiel wird „this“ nicht mehr verwendet. Laut der Dokumentation ist das auch gut so, da es in React anders als in vielen Programmiersprachen verwendet wird. Auch das Binding entfällt. Trotzdem wird man in der Dokumentation, nach 3 Jahren, im Tutorial erst mit den Klassen vertraut gemacht. Das kann verwirrend sein und verschwendet Zeit.

Um React richtig einzusetzen, braucht man:
Den Import für React, sowie einen State in einer Parent Komponente \ref{lst:react_state}. Damit dient das Root-File auch gleichzeitig als eine Art Store.  

\lstinputlisting[language=tsx, label={lst:react_state},caption=React State]{code/react/propdrilling.tsx}

In dieser Komponente wird ein State für den User erstellt. Als initialer Wert wird ein Objekt (user) mit einem Authentifikationsstatus und einiger Randdaten angegeben. 
So kann es in dem HTML-Teil ausgegeben werden. 
Möchte man nun die Daten an ein Child weiterreichen, spricht man von ‚Propdrilling‘ \ref{lst:propdrilling}.
TypeScript bietet zwar Typsicherheit, benötigt für die Datenweitergabe aber noch einen extra Schritt:

\lstinputlisting[language=tsx, label={lst:propdrilling},caption=Propdrilling Code]{code/react/react_state.tsx}

 Das Child braucht ein Interface, in dem die Übergabeparameter aufgelistet werden. Zusätzlich muss die Funktion als eine Funktionskomponente von React deklariert werden, in der das Interface benutzt wird.
Auch Funktionen können übergeben werden \ref{lst:react_setter}. Über eine Callback-Funktion kann das Child-Element auf die Setter der Applikation zugreifen.

\lstinputlisting[language=tsx, label={lst:react_setter},caption=React Setter Code]{code/react/react_setter.tsx}

Wenn man das Propdrilling erst einmal verinnerlicht hat, ist React einfach zu lernen und anzuwenden.
Da React aber schon seit 2013 existiert, gibt es ein Problem mit veralteten Quellen, die wiederholt mit Klassen und Bindings arbeitet.

## Performance

## Wiederverwertbarkeit

## Boiler Plate Code

## Community
React hat die bisher größte Community, wenn es um State Management Libraries geht. Daher ist es einfach an Beispiele aus unterschiedlichsten Anwendungsbereichen zu kommen.

## Verbreitung

## Toolkit und useReducer
Das sind Libraries, die die Programmierung in React noch einmal erleichtern sollen. Laut .... soll React damit Redux ,dank der  verbesserten Übersichtlichkeit, ganz zu ersetzen.

## Das Propdrilling
Durch die Einführung von Context und useReducer lassen sich States , zumindest theoretisch,inzwischen wie in Redux oder Recoil auch zentral verwalten und global in der ganzen App einsetzen. Daher ist das Propdriling nicht mehr notwendig. Allerdings gibt es noch ein Problem in der Handhabung. Laut einem Artikel[@minkovski] von David Minkowski "bentigt dieses Konzept sehr spezifische und lösungsorientierte Implementierungen, die viel Zeiterfordert". Außerdem ist Context für langsam frequenzierte Updates programmramiert worden, wie zum Beispiel der Authetification State

## Vorteile

## Nachteile

