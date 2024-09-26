let num1 = document.getElementById("num1");
let num2 = document.getElementById("num2");
let choice = document.getElementById("choice");
let ans = document.getElementById("ans");

function handleSubmit() {
  let val1 = parseInt(num1.value);
  let val2 = parseInt(num2.value);
  let ch = parseInt(choice.value);
  switch (ch) {
    case 1:
      {
        add(val1, val2);
      }
      break;
    case 2:
      {
        sub(val1, val2);
      }
      break;
    case 3:
      {
        multiply(val1, val2);
      }
      case4: {
        Division(val1, val2);
      }
      break;
    default: {
      alert("invalid choce");
    }
  }
  event.preventDefault();
}

function add(a, b) {
  let r = a + b;
  ans.innerHTML = r;
}
function sub(a, b) {
  let r = a - b;
  ans.innerHTML = r;
}
