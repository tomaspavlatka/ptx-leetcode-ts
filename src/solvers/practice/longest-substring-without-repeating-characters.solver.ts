// @see https://leetcode.com/problems/longest-substring-without-repeating-characters/submissions/1841097811/
// Time: O(n)
// Space: O(n)
export const lengthOfLongestSubstring = (s: string): number => {
  if (s.length === 0) {
    return 0;
  }

  if (s.length === 1) {
    return 1;
  }

  const map: Map<string, number> = new Map();

  let max = 0;
  let left = 0;
  const chars = s.split("");
  for (let i = 0; i < chars.length; i++) { // O(n)
    const char = chars[i];
    const val = map.get(char);
    if (val !== undefined && val >= left) {
      max = Math.max(max, i - left);
      left = val + 1;
    }

    map.set(char, i);
  }

  return Math.max(max, chars.length - left);
};
