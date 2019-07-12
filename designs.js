const mainHeading = document.querySelector('h1');
//This will change the color of Mainheading after cklicking on the Heading.
mainHeading.addEventListener('click',function(){
  mainHeading.style.backgroundColor='aqua';
});

const table = document.querySelector("table");
/*The  function makeGrid accepts the input values of height and width from user
for making grid */
function makeGrid(height,width){
  table.innerHTML='';
  for(let i=0;i<height;i++){
    const tr=document.createElement('tr');
    table.appendChild(tr);
    for(let j=0;j<width;j++){
      const td=document.createElement('td');
      tr.appendChild(td);
    }
  }
}

const sizePicker = document.querySelector('#sizePicker');
const inputHeight=document.querySelector('#inputHeight');
const inputWidth=document.querySelector('#inputWidth');
/* After clicking on the submit button the sizePicker addEventListener will
create the grid of given inputs.*/
sizePicker.addEventListener("submit",function(event){
  event.preventDefault();
  let height=inputHeight.value;
  let width=inputWidth.value;
  makeGrid(height,width);
});
/* After clicking on the table grid the selected value from the colorpicker will
be selected on the table in the table addEventListener. */

table.addEventListener("click",function(event){
  const colorPicker=document.querySelector("#colorPicker");
  if(event.target.nodeName==='TD'){
    event.target.style.backgroundColor=colorPicker.value;
  }
});
