sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 response
    deactivate server

      Note right of browser: The browser adds note to the list, re-renders list on the page and sends new note to server