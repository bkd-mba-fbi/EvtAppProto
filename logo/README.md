In diesem Verzeichnis können die Logos der Mandanten abgelegt werden. Die Grösse sielt keine Rolle mehr sie werden durch das CSS auf die entsprechende ausparung angepasst.

Die Logo urls wird nach folgender Prio erstellt. Ist ein File vorhanden wird es benutzt.

Url ist https://evento.ch/fbi > fbi = {logoName}

Prüfe op logo vorhanden ist.
1. logo/{logoName}.png 
2. logo/{logoName}.jpg 
3. default logo.jpg aus dem theme

`backgroud-image: -> url({logoPrio});`
