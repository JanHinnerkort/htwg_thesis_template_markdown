# Recoil
Recoil wurde von den Machern von React geschrieben. Ist sehr neu (2020) und löst eigentlich nur das gleiche Problem, wie alle anderen State Management Bibliotheken, die bereits vorhanden sind.
Durch seinen Minimalismus erfreut es sich in der React-Community gerade für kleinere Programme großer Beliebtheit. In Gihub hat es bereits 16.200 Sterne erhalten. Da die Library aber noch sehr jung ist, findet man noch wenige Einträge oder Hilfe.

## Lernkurve

Recoil ist von allen State Management Systemen am einfachsten zu erlernen. Programmierer, die bereits mit React vertraut sind, werden einen sehr schnellen Einstieg haben.

Für das State Management in Recoil braucht es Atome und Selektoren. In dem Codebeispiel \ref{lst:recoil_state} sieht man das Atom 'filterState', dass einen initial state überreicht bekommt und einen Selektor 'transformedTodos', der eine Kopie der Todoliste, in Abhängigkeit des Filterstates, ausgibt. So kann der Filter nach noch nicht erledigten Aufgaben eingestellt oder nach Datum oder Alphabet sortiert werden.
Mit Hilfe der Bibliothek 'Lodash'[^1] wird dabei eine Kopie und keine Referenz erstellt, über die der alte State verändert werden könnte. Das widerspräche dem Gesetzt der Unveränderlichkeit.

\lstinputlisting[language=ts, label={lst:recoil_state},caption=Recoil State]{code/recoil/state.ts}

Um den State auszulesen benötigt man die Methode 'useRecoilState'

## Performance


## Wiederverwertbarkeit

## Boiler Plate Code
Da der State zentral in einem Javascriptobjekt gehalten und von jeder Komponenete beliebig aufgerufen werden kann, entfällt der Boiler Code in Recoil.

## Community

## Verbreitung

## Vorteile
-	ist von allen Bibliotheken am einfachsten zu bedienen
-	somit schnell zu erlernen
-	laut Community lassen sich alle Apps, die mit Redux oder MobX laufen, auch mit Recoil programmieren.
-	Ist für Reactnutzer sehr schnell zu erlernen, da es sehr ähnlich ist.
-	Kann in der ganzen App den State observieren

## Nachteile


[^1]: https://lodash.com/