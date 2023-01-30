export function formatSearch(se: string) {
  se = decodeURIComponent(se);
  se = se.substr(1); // Extracts the specified number of characters in a string from the starting index number
  const arr = se.split('&'); // Split a string into an array of strings
  const obj: Record<string, string> = {};
  let newArr = [];

  arr.forEach((v, i) => {
    // Iterator
    console.log(v);
    console.log(i);
    newArr = v.split('=');
    if (typeof obj[newArr[0]] === 'undefined') {
      obj[newArr[0]] = newArr[1];
    }
  });

  return obj;
}
