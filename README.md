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
        // true : browser is compatible
        // false : browser is not compatible

2. `getFile` : returns selected file asynchronously

        let file = await getFile()
        // or
        getFile().then((f)=>{
            console.log(f, "file")
        })


<!-- 
// just pass in the data (no options)
write(data);

// writes the data to the stream from the determined position
write({ type: "write", position, data });

// updates the current file cursor offset to the position specified
write({ type: "seek", position });

// resizes the file to be size bytes long
write({ type: "truncate", size }); -->

<!-- arraybuffer().then((e) => console.log(e)); -->