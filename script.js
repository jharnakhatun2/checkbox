const checkboxAll = document.querySelectorAll('input[name="color"]');
const btn = document.getElementById('btn');

function check(checked = true){
  checkboxAll.forEach((checkbox) =>{
    checkbox.checked = checked;
  })
}

function checkAll(){
  check();
  btn.onclick = uncheckAll;
}

function uncheckAll(){
  check(false);
  btn.onclick = checkAll;
}

btn.onclick = checkAll;