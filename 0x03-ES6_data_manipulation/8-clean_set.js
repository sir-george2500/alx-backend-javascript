export default function cleanSet(set, startString) {
  // Initialize an empty array to store cleaned parts
  const parts = [];

  // Check for invalid inputs and return an empty string if any condition is met
  if (!set || !startString || !(set instanceof Set) || typeof startString !== 'string') {
    return '';
  }

  // Iterate through each value in the set
  for (const value of set.values()) {
    // Check if the value is a string and starts with the specified startString
    if (typeof value === 'string' && value.startsWith(startString)) {
      // Remove the startString from the value and add the cleaned part to the parts array
      const valueSubStr = value.substring(startString.length);

      // Add the cleaned part to the parts array if it is not empty and different from the original value
      if (valueSubStr && valueSubStr !== value) {
        parts.push(valueSubStr);
      }
    }
  }

  // Join the cleaned parts with '-' delimiter and return the result
  return parts.join('-');
}

