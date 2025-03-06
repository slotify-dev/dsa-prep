/**
 * Problem 3: Analyzing Customer Feedback
 * Problem Statement:
 * You are given an array of customer feedback scores (on a scale of 1 to 5).
 *
 * Your task is to:
 * 1. Calculate the average feedback score.
 * 2. Count the number of customers who gave a score of 4 or 5 (positive feedback).
 * 3. Count the number of customers who gave a score of 1 or 2 (negative feedback).
 * 4. Identify the percentage of customers who gave a score of 1 or 2 (negative feedback).
 */

function analyzeFeedback(scores: number[]) {
  const totalScore = scores.reduce((acc, score) => acc + score, 0);
  const averageScore = totalScore / scores.length;

  const positiveFeedback = scores.filter((score) => score >= 4).length;
  const negativeFeedback = scores.filter((score) => score <= 2).length;

  return {
    averageScore,
    positiveFeedbackPercentage: (positiveFeedback / scores.length) * 100,
    negativeFeedbackPercentage: (negativeFeedback / scores.length) * 100,
  };
}

console.log(analyzeFeedback([1, 2, 3, 4, 5, 1, 2, 3, 4, 5]));
