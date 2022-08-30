# browser-file-system-access-helper

This is a package with basic functions to help uning the new [file system access api](https://developer.mozilla.org/en-US/docs/Web/API/File_System_Access_API)

Prerequisites

- node & npm
- Frontend Code ( 😊since this works with the browser api )

***!! caution : currently tested on only pure vanilla and svelte. In react place it in the useEffect !!***

To install run

    npm install browser-file-system-access-helper

## Functions

1. `hasFileSystemAccess` : returns the boolean value if the browser is compatible with the api

        if (hasFileSystemAccess()) {
                // put all code here
        }
        // true : browser is compatible
        // false : browser is not compatible

2. `getFile` : returns selected file asynchronously

        let file = await getFile()
        // or
        getFile().then((file)=>{
            console.log(file, "file")
        })

        /* the response for file is is an object with 
        {
            arrayBuffer(), //returns array buffer of file content asynchronously
            kind: "file" 
            lastModified: 1661213059235
            lastModifiedDate: Tue Aug 23 2022 00:04:19 GMT+0000 (Greenwich Mean Time) {}
            name: "README.md"
            seek: async (position) => {…}
            size: 2988
            stream (), //returns steam of file content asynchronously
            text (), //returns text of file content asynchronously
            truncate: async (size) => {…} // truncate content of file
            write: async (data) => {…} // write to file
        }
        */

    



3. `createFile` : create a new file into file system
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