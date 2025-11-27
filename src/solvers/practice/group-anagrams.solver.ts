// Time: O(n k long k)
// Space: O(n * k)
export const groupAnagrams = (strs: string[]): string[][] => {
  const map: Map<string, string[]> = new Map();

  for (const str of strs) { // O(n)
    const key = str.split("").sort().join(""); // O (k long k)
    if (!map.has(key)) map.set(key, []); // O(1)
    map.get(key)!.push(str); // O(1)
  }

  return [...map.values()];
};
