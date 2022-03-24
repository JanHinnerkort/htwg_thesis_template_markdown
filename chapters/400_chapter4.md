# Recoil
Recoil kann man in der Theorie wahrscheinlich in einer Stunde lernen, da es eigentlich nur Atoms und Selektoren gibt. Da die Library aber noch sehr jung ist, findet man selten Einträge in Stack Overflow beim Debuggen.

## Lernkurve

Für das State Management in Recoil braucht es Atome und Selektoren. In dem Codebeispiel \ref{lst:recoil_state} sieht man das Atom 'filterState', dass einen initial state überreicht bekommt und einen Selektor 'transformedTodos', der eine Kopie der Todoliste, in Abhängigkeit des Filterstates, ausgibt. So kann der Filter nach noch nicht erledigten Aufgaben eingestellt oder nach Datum oder Alphabet sortiert werden.
Mit Hilfe der Bibliothek 'Lodash'[^1] wird dabei eine Kopie und keine Referenz erstellt, über die der alte State verändert werden könnte. Das widerspräche dem Gesetzt der Unveränderlichkeit.

\lstinputlisting[language=ts, label={lst:recoil_state},caption=Recoil State]{code/recoil/state.ts}



## Performance

## Wiederverwertbarkeit

## Boiler Plate Code

## Community

## Verbreitung

[^1]: https://lodash.com/