/**
 * Problem: Tweet Counts Per Frequency
 * Data Structures Used:
 * - Hash Map (Store tweets by name)
 * - Sorted Arrays (For binary search)
 * Input:
 *   recordTweet(name, time)
 *   getTweetCountsPerFrequency(freq, name, start, end)
 * Output:
 *   Array of counts per time chunk
 *
 * Time Complexity:
 * - recordTweet: O(n) per insertion (maintaining sorted order)
 * - getTweetCounts: O(log n) per chunk (binary search)
 * Space Complexity: O(total tweets) (stored in map)
 */

class TweetCounts {
  private tweets: Map<string, number[]>;

  constructor() {
    this.tweets = new Map();
  }

  recordTweet(tweetName: string, time: number): void {
    if (!this.tweets.has(tweetName)) {
      this.tweets.set(tweetName, []);
    }
    const times = this.tweets.get(tweetName)!;
    // Insert in sorted order (O(n) insertion)
    let i = times.length;
    while (i > 0 && times[i - 1] > time) i--;
    times.splice(i, 0, time);
  }

  getTweetCountsPerFrequency(
    freq: string,
    tweetName: string,
    startTime: number,
    endTime: number
  ): number[] {
    if (!this.tweets.has(tweetName)) return [];

    const delta = this.getDelta(freq);
    const times = this.tweets.get(tweetName)!;
    const result: number[] = [];

    for (
      let chunkStart = startTime;
      chunkStart <= endTime;
      chunkStart += delta
    ) {
      const chunkEnd = Math.min(chunkStart + delta - 1, endTime);
      // Binary search for bounds
      const left = this.lowerBound(times, chunkStart);
      const right = this.upperBound(times, chunkEnd);
      result.push(right - left);
    }

    return result;
  }

  private getDelta(freq: string): number {
    switch (freq) {
      case "minute":
        return 60;
      case "hour":
        return 3600;
      case "day":
        return 86400;
      default:
        return 0;
    }
  }

  private lowerBound(arr: number[], target: number): number {
    let left = 0,
      right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] < target) left = mid + 1;
      else right = mid;
    }
    return left;
  }

  private upperBound(arr: number[], target: number): number {
    let left = 0,
      right = arr.length;
    while (left < right) {
      const mid = Math.floor((left + right) / 2);
      if (arr[mid] <= target) left = mid + 1;
      else right = mid;
    }
    return left;
  }
}
