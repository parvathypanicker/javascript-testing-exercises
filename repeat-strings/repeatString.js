var repeatString = function(str,num) {
 var i = 1;
            var output = "";
            if (num < 0) {
                return "ERROR";
            }
            else {
                while (i <= num) {
                    output += str;
                    i++;
                }
                return output;
            }

}

module.exports = repeatString