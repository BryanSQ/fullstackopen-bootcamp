sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user writes into the input field.
    Note right of browser: The user clicks the save button.

    Note right of browser: adds a new entry to the HTML without reloading the page.
    browser->>server: POST to /exampleapp/new_note_spa
    activate server
    Note right of server: A new entry to the notes is created.
    deactivate server

