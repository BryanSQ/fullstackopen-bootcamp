sequenceDiagram
    participant browser
    participant server

    browser->>server: GET https://studies.cs.helsinki.fi/exampleapp/spa
    activate server
    server-->>browser: HTML document bundled with all the content necessary
    deactivate server


    Note right of browser: The browser executes the callback function that renders the notes