# Einleitung

Mit wachsendem Umfang einer Webanwendung ist die Datenverwaltung, auch genannt State Management, unabdingbar. 
Es gibt heutzutage allerdings zahlreiche Frameworks mit noch mehr Bibliotheken mit unterschiedlichen Ansätzen. 
Für meine Thesis habe ich mir drei beliebte Bibliotheken für einen Vergleich herausgesucht. Diese sind React[^1], React-Redux[^2] und React-Recoil[^3].
Für einen aussagekräftigen Vergleich dieser Bibliotheken wird eine To-do App programmiert, in denen die Vor- und Nachteile verglichen werden sollen.

## State Management

State Management [@react-js] steht für eine nicht veränderbare Einheit an Daten. Soll etwas verändert werden, muss eine Kopie des alten States erstellt und erweitert werden.
Will man einen Array mit .push() erweitern, wird das alte Array überschrieben. Das ist nicht erlaubt. 


[^1]: https://reactjs.org/ 
[^2]: https://react-redux.js.org/
[^3]: https://recoiljs.org/


