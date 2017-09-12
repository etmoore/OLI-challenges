interface FileType {
  getName(): string
}

interface Directory extends FileType {
  getChildren(): FileType[]
}


// Test if file is a Directory with typeguard: 
// https://www.typescriptlang.org/docs/handbook/advanced-types.html
function isDirectory(file: FileType | Directory) : file is Directory {
  return (<Directory>file).getChildren !== undefined;
}


// TODO: Given a root file, return all filenames in the tree in a flat array.
function getAllFileNamesHelper(files: FileType[] , namesArray: string[]) : string[] {
  files.forEach((file) => {
    namesArray.push(file.getName());
    if (isDirectory(file))
      getAllFileNamesHelper(file.getChildren(), namesArray);
  });
  return namesArray;
}

function getAllFileNames(file: FileType | Directory) : string[] {
  let namesArray = [file.getName()];
  if (isDirectory(file))
    return getAllFileNamesHelper(file.getChildren(), namesArray);
  return namesArray;
}