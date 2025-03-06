/**
 * Problem 1: Analyzing Sales Data
 * Problem Statement: You are given an array of sales data for a company over a period of months.
 *   Each entry in the array contains the month and the corresponding sales amount. Your task is to:
 *
 * 1. Find the month with the highest sales.
 * 2. Calculate the total sales for the year.
 * 3. Identify the months where sales were below the average monthly sales.
 */

function analyzeSalesData(salesData: { month: string; sales: number }[]) {
  // Find the month with the highest sales
  const maxSalesMonth = salesData.reduce((max, current) => {
    return current.sales > max.sales ? current : max;
  });

  // Calculate the total sales for the year
  const totalSales = salesData.reduce((sum, current) => sum + current.sales, 0);

  // Identify the months where sales were below the average monthly sales
  const averageSales = totalSales / salesData.length;
  const monthsBelowAverage = salesData.filter(
    (month) => month.sales < averageSales
  );

  return {
    totalSales,
    maxSalesMonth,
    monthsBelowAverage,
  };
}

// Example usage
analyzeSalesData([
  { month: "January", sales: 5000 },
  { month: "February", sales: 6000 },
  { month: "March", sales: 4500 },
  { month: "April", sales: 7000 },
  { month: "May", sales: 8000 },
  { month: "June", sales: 5500 },
]);
