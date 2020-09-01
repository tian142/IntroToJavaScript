//Single thread: do one thing at a time.
//Javascript is running one thing at a time

console.log('I Hppaned First');
alert('Hi there');
console.log('I Hppaned second');

//The problem with single-threadness is that if JS is doing one thing at a time,
//Can not work around if a user is requesting a from server, it may take a long
//time waiting.
