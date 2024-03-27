 
   let ul = document.getElementById('myul');
   let input = document.getElementById('input');
   let add = document.getElementById('add');
   let deleteAll = document.getElementById('delete');
   
 
   add.addEventListener('click', function () {
       if (input.value === "") {
           alert("Empty input");
       } else {
         
           let li = document.createElement('li');
           let inputvalue = input.value;
           inputvalue = inputvalue.charAt(0).toUpperCase() + inputvalue.slice(1).toLowerCase();
           let userText = document.createTextNode(inputvalue);
           li.appendChild(userText);
           ul.appendChild(li);
           li.style.listStyleType = "lower-roman";
   
         
           let editBtn = document.createElement('button');
           editBtn.textContent = "Edit";
           li.appendChild(editBtn);
           editBtn.disabled = false;
   
          
           editBtn.addEventListener('click', function () {
               editBtn.disabled = true;
               let editInput = document.createElement("input");
               editInput.value = userText.textContent;
               li.appendChild(editInput);
   
               let saveBtn = document.createElement('button');
               saveBtn.textContent = 'Save';
               li.appendChild(saveBtn);
   
              
               saveBtn.addEventListener('click', function () {
                   let editedValue = editInput.value;
                   userText.textContent = editedValue;
                   editInput.remove();
                   saveBtn.remove();
                   editBtn.disabled = false;
               });
           });
   
        
           let deleteBtn = document.createElement('button');
           deleteBtn.textContent = "Delete";
           li.appendChild(deleteBtn);
   
         
           deleteBtn.addEventListener('click', function () {
               li.remove();
           });
   
          
           input.value = "";
       }
   });
   
 
   deleteAll.addEventListener('click', function () {
       ul.innerHTML = "";
   });