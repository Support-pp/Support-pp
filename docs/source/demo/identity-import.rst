Identity Import
===============
TeamSpeak³ setzt auf Identitäten. Die Sicherheitsstufen geben an, wie lange jemand benötigt um eine neue Sicherheitsstufe der Identität zu erhöhen. Dahinter steckt Sicherheit stuff.

| Standartmäßig stellt der TeamSpeak³ Server mit eine Sicherheitsstufe von 8 voraus.
| Sinusbot hat generierte Identity mit dem Level 9.

| In den meisten Fällen, ist es daher möglich direkt auf den TeamSpeak³ Server zu connecten.
| Solle aber der Server eine höhere Sicherheitsstufe verlangen, müssen Sie diese manuell erhöhen.

Anleitung
---------

1. Melden Sie sich in Ihrem TeamSpeak³ Client an.
2. Unter dem Reiter :guilabel:`Extras` -> :guilabel:`Identitäten` finden Sie eine Liste aller bereits erstellen Identitäten.

   .. image:: /_static/images/demo/identity-import/identities.png

3. Wählen Sie eine aus. Oder erstellen Sie eine neue.

   .. warning::

       **Wir empfehlen, erstellen Sie auf jeden Fall eine neue Identität.**

4. Rechtsklick auf die :guilabel:`Identity` -> :guilabel:`exportieren` -> *(ja export bestätigen)*
5. Wählen Sie nun einen Speicherort Ihrer Wahl aus.
6. Öffnen Sie nun die gerade gespeicherte Datei. *(der Windows 10 Editor unterstützt Sie dabei)*
7. Die Datei sollte nun so aussehen:

   .. image:: /_static/images/demo/identity-import/identity-file.png

Kopieren Sie nun den Wert in den Anführungszeichen von :code:`identity=`.

Tada!

Support++ Demo
^^^^^^^^^^^^^^
Wir gehen nun in die Support++ Demo

.. image:: /_static/images/demo/identity-import/demo.png

Wir fügen diesen nur noch in das Feld :guilabel:`Identity` ein. Und fertig!

**Dein Sinusbot hat nun eine höhere Identity.**
