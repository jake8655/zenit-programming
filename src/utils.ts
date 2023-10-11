// This function reads only one line on console synchronously. After pressing `enter` key the console will stop listening for data.
export const readlineSync = (): Promise<string> => {
  return new Promise((resolve, _) => {
    process.stdin.resume();
    process.stdin.on('data', data => {
      process.stdin.pause(); // stops after one line reads
      resolve(data as unknown as string);
    });
  });
};
