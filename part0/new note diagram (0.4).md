sequenceDiagram
    participant browser
    participant server

    Note right of browser: The user writes into the input field.
    Note right of browser: The user clicks the save button.

    browser->>server: POST to /exampleapp/new_note
    activate server
    Note right of server: A new entry to the notes is created.
    server-->>browser: HTML document with the new entry
    deactivate server
