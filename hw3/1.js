function forEach(arr, callback) {
     if (typeof Array.isArray(arr) && typeof callback === 'function') { //проверка
          for (var i = 0; i < arr.length; i++){
               callback (arr[i], i, arr);
          }
     } else {
          throw new Error ('parameters are not correct');
     }
}

const arr = [1,2,3];

forEach(arr, function (item, i, arr) {
     console.log('значение:', item, 'индекс:', i, 'массив:', arr);
});