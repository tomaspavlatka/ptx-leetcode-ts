import { lengthOfLongestSubstring } from "@src/practice/longest-substring-without-repeating-characters.solver";

describe('longest-substring-without-repeating-character', () => {
  it('test1', () => {
    const result = lengthOfLongestSubstring("");

    expect(result).toBe(0);
  });

  it('test2', () => {
    const result = lengthOfLongestSubstring("abcabcbb");

    expect(result).toBe(3);
  });

  it('test3', () => {
    const result = lengthOfLongestSubstring("bbbbb");

    expect(result).toBe(1);
  });

  it('test4', () => {
    const result = lengthOfLongestSubstring("pwwkew");

    expect(result).toBe(3);
  });

  it('test5', () => {
    const result = lengthOfLongestSubstring("dvdf");

    expect(result).toBe(3);
  });
});
