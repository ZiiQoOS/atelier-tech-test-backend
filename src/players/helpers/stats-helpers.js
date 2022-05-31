calculateWinRatioByCountry = (country) => {
  return !country.ratio["0"] ? country.ratio["1"] : country.ratio["1"] / country.ratio["0"];
};

calculateBMIByPlayer = (height, weight) => {
  if (!height || !weight) throw new Error('please provide all required values.');

  const heightByM = height / 100; // convert cm to m
  const bmi = weight / Math.pow(heightByM, 2);
  return parseFloat(bmi.toFixed(1));
};

calculateHeightMedian = (heights) => {
  // manage some edge cases
  if(!heights) throw new Error('please provide all required values.') 
  if (!Array.isArray(heights)) return heights;
  if (heights.length === 0) return null;

  // sort the heights
  heights.sort((a, b) => a - b);

  // calculate median
  const middle = Math.floor(heights.length / 2); // get the the middle value's index
  return heights.length % 2 ? heights[middle] : (heights[middle - 1] + heights[middle]) / 2;
}


module.exports = {
  calculateWinRatioByCountry,
  calculateBMIByPlayer,
  calculateHeightMedian
};
