// utils.js
const Utils = {
  calculateNumber: (type, a, b) => {
    if (type === 'SUM') {
      return Math.round(a) + Math.round(b);
    }
    // Add more operations if needed
  }
};

module.exports = Utils;

