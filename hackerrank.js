simple sum array

function simpleArraySum(ar) {
    
    var total = ar.reduce(function (total, num) {
        return total + num;
    }, 0);
        }
