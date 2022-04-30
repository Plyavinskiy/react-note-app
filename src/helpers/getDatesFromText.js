export function getDatesFromText(str) {
  let results = str.match(/[0-9]{1,2}([\-\/ \.])[0-9]{1,2}([\-\/ \.])((19)|(20))[0-9]{2}/g);

  if (results && results.length) {
    return results;
  }

  return [];
}
