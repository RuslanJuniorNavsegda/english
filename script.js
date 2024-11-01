document.getElementById("addWordButton").addEventListener("click", function () {
    const russianWord = document.getElementById("russianWord").value;
    const englishWord = document.getElementById("englishWord").value;
    const dateAdded = document.getElementById("dateAdded").value;

    if (russianWord === "" || englishWord === "" || dateAdded === "") {
        alert("Заполните все поля.");
        return;
    }

    // Добавление элемента в список
    const wordItem = document.createElement("li");
    
    const ruWordElement = document.createElement("span");
    ruWordElement.className = "word-ru";
    ruWordElement.textContent = `Слово на русском: ${russianWord}`;
    
    const enWordElement = document.createElement("span");
    enWordElement.className = "word-en";
    enWordElement.textContent = `Перевод: ${englishWord}`;
    
    const dateElement = document.createElement("span");
    dateElement.className = "date";
    dateElement.textContent = `Дата добавления: ${dateAdded}`;

    wordItem.appendChild(ruWordElement);
    wordItem.appendChild(enWordElement);
    wordItem.appendChild(dateElement);
    
    document.getElementById("wordsOutput").appendChild(wordItem);

    // Очистка полей ввода
    document.getElementById("russianWord").value = "";
    document.getElementById("englishWord").value = "";
    document.getElementById("dateAdded").value = "";
});
