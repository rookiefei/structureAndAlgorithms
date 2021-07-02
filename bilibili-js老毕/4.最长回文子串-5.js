/**
 * @param {string} s
 * @return {string}
 * 题解：
 * 1. 如果字符串长度小于2，直接返回；
 * 2. 定义两个变量，一个start存储当前找到的最大回文字符串的起始位置，
 *    另一个maxLength 记录字符串的长度（终止位置就是 start + maxLength）；
 * 3. 创建一个helper function，判断左边和右边是否越界，同时最左边的字符是否等于最右边的字符。
 *    如果以上3个条件都满足，则判断是否需要更新回文字符串的最大长度以及最大字符串的起始位置。
 *    然后将left--，right++，继续判断，直到不满足三个条件之一。
 * 4. 遍历字符串，每个位置调用helper function两遍，第一遍检查 i-1，i + 1, 第二遍检查 i, i + 1
 */
var longestPalindrome = function (s) {
  if (s.length < 2) {
    return s;
  }
  let start = 0;
  let maxLength = 1; // 比如 ab
  function expandAroundCenter(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      if (right - left + 1 > maxLength) {
        maxLength = right - left + 1;
        start = left;
      }
      left--;
      right++;
    }
  }
  for (let i = 0; i < s.length; i++) {
    expandAroundCenter(i, i + 1);
    expandAroundCenter(i - 1, i + 1);
  }
  return s.substr(start, maxLength);  //s.substring(), s.slice()
};
