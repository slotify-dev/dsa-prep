/**
 * Problem 4: Detecting Trends in Data
 * Problem Statement: You are given a dataset of monthly website traffic (in thousands of visits).
 *
 * Your task is to:
 * 1. Identify if the traffic is increasing, decreasing, or stable over time.
 * 2. Calculate the percentage change in traffic from the first month to the last month.
 */
function analyzeTraffic(data: number[]) {
  let trend = "stable";
  let increasingCount = 0;
  let decreasingCount = 0;

  for (let i = 1; i < data.length; i++) {
    if (data[i] > data[i - 1]) {
      increasingCount++;
    } else if (data[i] < data[i - 1]) {
      decreasingCount++;
    }
  }

  if (increasingCount > decreasingCount) {
    trend = "increasing";
  } else if (decreasingCount > increasingCount) {
    trend = "decreasing";
  }

  // formula = ((new - old) / old) * 100
  const percentageChange = ((data[data.length - 1] - data[0]) / data[0]) * 100;

  return {
    trend,
    percentageChange,
  };
}

console.log(analyzeTraffic([1000, 1200, 1100, 1300, 1400]));
