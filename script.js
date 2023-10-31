const addButton = document.querySelector('input[type="submit"]');

addButton.addEventListener("click", function(event) {
  const input = document.querySelector('input[type="text"]').value;
  const table = document.querySelector("table");
   event.preventDefault();

  const ul = document.createElement("ul");

  const li = document.createElement("li");


  li.textContent = input;
  if(li.textContent.trim() === ""){
    alert("Incorrect item!")
  }else{
  const button = document.createElement("button");
  const edit = document.createElement("button");
  button.addEventListener("click", function(event) {
    if(confirm("Are you sure you want to delete this item?")){
      button.parentNode.remove();
    }
  });

  edit.addEventListener("click", function(){
    let text =  button.previousSibling.nodeValue
    button.previousSibling.nodeValue = "";
    const changeItem = document.createElement("input");
    changeItem.value = button.previousSibling.nodeValue;
    const saveButton = document.createElement("button");
    const cancelButton = document.createElement("button");
    cancelButton.addEventListener("click",function (){
      saveButton.remove();
      cancelButton.remove();
      changeItem.remove()
      button.classList.toggle('hide');
      edit.classList.toggle('hide');
      button.previousSibling.nodeValue = text;
    });
    saveButton.addEventListener("click", function (){
      if(changeItem.value.trim() === ''){
        alert('Incorrect item!')
      }else {
        button.previousSibling.nodeValue = changeItem.value;
        saveButton.remove();
        cancelButton.remove();
        changeItem.remove()
        button.classList.toggle('hide');
        edit.classList.toggle('hide');
      }
    });

    saveButton.textContent = "Save"
    cancelButton.textContent = "Cancel"
    li.appendChild(changeItem);
    li.appendChild(saveButton);
    li.appendChild(cancelButton);
    button.classList.toggle('hide');
    edit.classList.toggle('hide');
   });
  edit.textContent = "Edit";
  button.textContent = "Delete";
  li.appendChild(button);
  li.appendChild(edit);
  ul.appendChild(li);
  table.appendChild(ul);

  document.querySelector("input[name='item']").value = "";
  document.querySelector('input[type="text"]').focus();
  }
});