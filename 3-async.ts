
type Callback = (error: string, path: string) => void;

function makeTempFile(path: string, callback: Callback) {
  // assume an implementation that calls 'callback' function
  // with a full temporary filename

};

function makeTempFilePromise(path: string) : Promise<string> {
  // TODO
} 








