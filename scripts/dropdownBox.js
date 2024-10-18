
document.getElementById("dropdownButton").addEventListener("click", function () {
    const dropdownContent = document.getElementById("dropdownContent");
    dropdownContent.classList.toggle("hiddenDrop"); // Toggle the hidden class
});

// document.addEventListener("DOMContentLoaded", function () {

//     document.getElementById('todoTask').addEventListener("click", function () {
//         try {

//             console.log("Todo task button clicked");
//             var xhr = new XMLHttpRequest();
//             xhr.onreadystatechange = function () {
//                 if (xhr.readyState == 4 && xhr.status == 200) {
//                     document.getElementById("main").innerHTML = xhr.responseText;
//                 }
//             }
//             xhr.open("GET", "./html/todoList.html", true);
//             xhr.send();
//         } catch (err) {
//             console.error(err)
//         }
//     })

// })

