let add = () => {
    
    let inputName = document.getElementById('input-name');
    let inputTextArea = document.getElementById('input-textarea');

    if (inputName.value !== "" && comment.value != "") {
       
        let comment = document.querySelector('#comment');

        let  comment_item = document.createElement('l1');

        comment_item.innerHTML = `
            <span>
            <p>${ inputName.value}</p>
            </span>
            <p>${inputTextArea.value}</p> `;
        comment.append(comment_item);
    }


    if (inputName.value == "" || inputTextArea.value == "") {
        let list = document.querySelector('.list'); 
        let list_item = document.createElement ("l2"); 
     
        list.append(list_item); 
         }
         inputName.value = inputTextArea.value= "";
       
}

 













