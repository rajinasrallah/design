function Addupdate() {
    // Create and append the modal
    let modal = document.createElement('div');
    modal.id = 'myModal';
    modal.className = 'modal';
    document.getElementsByClassName('add')[0].onclick = openModal;
    let modalContent = `
        <div class="modal-content">
            <p>Please enter a number from 1 to 3:</p>
            <div class="inputContainer">
                <input type="number" id="numberInput" min="1" max="3">
                <button id="popupAdd" >Submit</button>
            </div>
        </div>
    `;
    var data = {
        "text": todoText,
        "timeStamp": new Date().getTime(),
        "checked": isChecked,
        "color": color
    };
    var request = store.put(data);
    modal.innerHTML = modalContent;
    document.body.appendChild(modal);
    // Add styles for the modal
    let styles = `
        .modal {
            display: none; /* Hidden by default */
            position: fixed; /* Stay in place */
            z-index: 1; /* Sit on top */
            left: 0;
            top: 0;
            width: 100%;
            height: 100%;
            overflow: auto; /* Enable scrolling if needed */
            background-color: rgba(0,0,0,0.4); /* Black with opacity */
        }

        .modal-content {
            background-color: #ffa8cb; /* Light pink background */
            margin: 10% auto; /* 10% from the top and centered */
            padding: 20px;
            width: 30%; /* Could be more or less, depending on screen size */
            border-radius: 10px; /* Rounded corners */
            color: #fff;
        }

        .inputContainer {
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-radius: 30px;
            background-color: rgb(248, 150, 167);
            width: 93%; /* Ensure the input container spans full width */
            padding: 10px;
            margin-bottom: 20px; /* Space between input and list */
        }

        #numberInput {
            flex: 1;
            border: none;
            border-radius: 30px;
            outline: none;
            padding: 12px;
            background-color: transparent;
            color: #fff;
            font-size: 16px;
        }

        #popupAdd {
            padding: 12px 20px;
            background-color: #ffb3b3;
            color: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: background-color 0.3s ease; /* Smooth hover effect */
        }
    `;

    // Create a style element and append the styles
    let styleSheet = document.createElement("style");
    styleSheet.type = "text/css";
    styleSheet.innerText = styles;
    document.head.appendChild(styleSheet);

    // Function to open the modal
    function openModal() {
        modal.style.display = "block";
    }

    // Function to handle number submission and add task
    function submitNumber() {
        let numberInput = document.getElementById("numberInput").value;
        addTask(numberInput); // Call addTask with the number input
        modal.style.display = "none"; // Hide modal after submission
    }

    // Attach submitNumber function to the submit button

    // Render a todo item in the DOM
    function renderTodo(row) {
        let li = document.createElement('li');
        li.innerText = row.text;
        switch (row.color) {
            case '1':
                li.style.color = 'green';
                break;
            case '2':
                li.style.color = 'yellow';
                break;
            default:
                li.style.color ='red';
                break;
        }
        if (row.checked) {
            li.classList.add('checked');
        }
        listContainer.prepend(li);

        let span = document.createElement('span');
        span.innerHTML = "\u00D7"; // Use innerHTML to set HTML content correctly
        li.appendChild(span);

        span.addEventListener('click', function() {
            html5rocks.indexedDB.deleteTodo(row.timeStamp); // Delete from IndexedDB
            li.remove(); // Remove the parent li when span (delete button) is clicked
        });

        li.addEventListener('click', function() {
            li.classList.toggle('checked');
            html5rocks.indexedDB.updateTodo(row.timeStamp, li.classList.contains('checked')); // Update checked state in IndexedDB
        });
    }
    html5rocks.indexedDB.updateTodo = function(id, isChecked) {
        var db = html5rocks.indexedDB.db;
        var trans = db.transaction(["todo"], "readwrite");
        var store = trans.objectStore("todo");
    
        var request = store.get(id);
        request.onsuccess = function(e) {
            var data = e.target.result;
            data.checked = isChecked;
    
            var updateRequest = store.put(data);
    
            updateRequest.onsuccess = function() {
                html5rocks.indexedDB.getAllTodoItems();
            };
    
            updateRequest.onerror = function(e) {
                console.log("Error Updating: ", e);
            };
        };
    
        request.onerror = function(e) {
            console.log("Error Getting: ", e);
        };
    };
    // Add a new task to the list and IndexedDB
    function addTask(numberInput) {
        let noSpaceInput = input.value.trim();
        if (input.value === '' || noSpaceInput.length === 0) {
            alert("Please add a task.");
        } else {
            html5rocks.indexedDB.addTodo(input.value, numberInput); // Add to IndexedDB
        }
        input.value = ''; // Clear input after adding task
    }

    // Add task on Enter key press
    document.getElementsByClassName('input')[0].addEventListener('keydown', function(event) {
        if (event.keyCode === 13) {
            openModal();
        }
    });
    function init() {
        html5rocks.indexedDB.open();
    }
    
    // Add an event listener to initialize the application when the DOM is loaded
    window.addEventListener("DOMContentLoaded", init, false);}