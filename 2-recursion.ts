interface Fyle {
  getName(): string
}

interface Directory extends Fyle {
  getChildren(): Fyle[]
}

// Test if file is a Directory with typeguard: 
// https://www.typescriptlang.org/docs/handbook/advanced-types.html
function isDirectory(file: Fyle | Directory) : file is Directory {
  return (<Directory>file).getChildren !== undefined;
}


// TODO: Given a root file, return all filenames in the tree in a flat array.
function getAllFileNamesHelper(files: Fyle[] , namesArray: string[]) : string[] {
  files.forEach((file) => {
    namesArray.push(file.getName());
    if (isDirectory(file))
      getAllFileNamesHelper(file.getChildren(), namesArray);
  });
  return namesArray;
}

function getAllFileNames(file: Fyle | Directory) : string[] {
  let namesArray = [file.getName()];
  if (isDirectory(file))
    return getAllFileNamesHelper(file.getChildren(), namesArray);
  return namesArray;
}