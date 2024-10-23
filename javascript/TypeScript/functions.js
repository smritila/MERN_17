// declare a function with a return type
/*
  syntax : function func_name(parameter_list): return_type{
  function body

}
  */
function add(a, b) {
  var r = a + b;
  return r;
}
var result = add(15, 13);
console.log(result);
// arrow function with return type
/* syntax:
  let var_name = (parameter_list): return_type =>{
    function body
  }

  */
var sum = function (a, b) {
  return a + b;
};
var result2 = sum(12, 14);
console.log(result2);
//anonymous function with return type
/*
  syntax : function(parameter_list): return_type{
   function body
  }
   */
var anonymous = function (a, b) {
  return a + b;
};
var ann = anonymous(12, 12);
console.log(ann);
