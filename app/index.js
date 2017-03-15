function oneToTwenty(){
   var arr = [];

   for(var i = 1; i <=20; i++){
       arr.push(i);
   }
   return arr;
}
function twoToForty(){
   var arr = [];
   for(var i = 2; i <=40; i+=2){
       arr.push(i);
   }
   return arr;
}

function tenToThousand(){
   var arr = [];
   for(var i = 10; i <=1000; i+=10){
       arr.push(i);
   }
   return arr;
}

function binSearch(data) {
    var count = 0;
     var len = this.length;
     var index = 0;
    var upperBound = this.length-1;
    var lowerBound = 0;
   if(this[upperBound] != data){
    while (lowerBound <= upperBound) {
        var mid = Math.floor((upperBound + lowerBound) / 2);
        
       if (this[mid] < data) {
          lowerBound = mid + 1;
        }
        else if (this[mid] > data) {
          upperBound = mid - 1;
       } 
      else {
             index =mid;
             break;
      }
      
      count+=1;
    }
     }else{
         index = upperBound;
         mid = upperBound;
     }

   return {count:count,index:index===mid?index:-1,length:len};
    
    
}

function findMissing(arr1,arr2){


  if(arr1.length === 0  || arr2 === 0){
        return 0;
    }else{
        //Take the intersect of the array
    var all = arr1.filter(function(element){
        return arr2.indexOf(element) >= 0;
    });
    
    //Take the Diff of the array
    var excluded = arr2.filter(function(element){
        return all.indexOf(element) < 0;
    });
    
    //Will only be undefined if the two array are the same

     return excluded[0] === undefined? 0: excluded[0];
   }
}

Array.prototype.oneToTwenty = oneToTwenty;
Array.prototype.twoToForty = twoToForty;
Array.prototype.tenToThousand = tenToThousand;
Array.prototype.search = binSearch;

module.exports = {
  oneToTwenty: oneToTwenty,
  twoToForty:twoToForty,
  tenToThousand:tenToThousand,
  findMissing:findMissing,
 
}
