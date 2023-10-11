### This is a method from [Stackoverflow](https://stackoverflow.com/questions/3430939/node-js-readsync-from-stdin)
It does work. It invokes a callback when the `process.stdin.ondata` event is trigerred, which happens after each new line.
