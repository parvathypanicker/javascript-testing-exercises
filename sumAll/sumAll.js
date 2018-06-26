var sumAll = function(min,max) {
  if (min < 0 || max < 0 || typeof min !== "number" || typeof max !== "number") {
                return "ERROR";
            }
            else
                var sum = 0;
            if (min > max) {
                var temp = 0;
                temp = min;
                min = max;
                max = temp;
            }
            for (i = min; i <= max; i++) {
                sum += i;
            }
            return sum;
}

module.exports = sumAll