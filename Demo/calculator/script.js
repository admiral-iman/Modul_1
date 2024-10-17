// Variabel untuk menyimpan hasil operasi
let displayValue = "";

// Fungsi untuk menampilkan angka di display
function appendNumber(number) {
    displayValue += number;
    document.getElementById("display").value = displayValue;
}

// Fungsi untuk menambahkan operator ke display
function appendOperator(operator) {
    displayValue += operator;
    document.getElementById("display").value = displayValue;
}

// Fungsi untuk menambahkan titik desimal
function appendDot() {
    if (!displayValue.includes(".")) {
        displayValue += ".";
        document.getElementById("display").value = displayValue;
    }
}

// Fungsi untuk menghitung hasil operasi
function calculate() {
    try {
        // Gunakan eval untuk menghitung operasi yang ada di display
        let result = eval(displayValue);
        document.getElementById("display").value = result;
        displayValue = result;
    } catch (error) {
        document.getElementById("display").value = "Error";
        displayValue = "";
    }
}

// Fungsi untuk menghapus semua input (Clear All)
function clearDisplay() {
    displayValue = "";
    document.getElementById("display").value = "";
}
