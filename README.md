# browser-file-system-access-helper
This is a package with basic functions to help uning the new [file system access api](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)

Prerequisites

- node & npm
- Frontend Code ( 😊since this works with the browser api )

***!! currently tested on only pure vanilla and svelte !!***

To install run

    npm install browser-file-system-access-helper


## Functions

1. `hasFileSystemAccess` : returns the boolean value if the browser is compatible with the api
    
        if (hasFileSystemAccess()) {
                
        }

