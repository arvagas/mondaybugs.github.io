import filenamesToJSON from "filenames-to-json";
filenamesToJSON({
    path: "./assets",
    output: "out.json",
    filesKey: "files",
    indentlevel: 4
});
