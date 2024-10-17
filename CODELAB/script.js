// Fungsi untuk melakukan penjumlahan dengan pengecekan input kosong
function jumlahkan() {
    var bil1 = document.getElementById("bil1").value;
    var bil2 = document.getElementById("bil2").value;
    
    // Cek jika input kosong
    if (bil1 === "" || bil2 === "") {
        alert("Harap masukkan kedua bilangan!");
    } else {
        var hasil = parseFloat(bil1) + parseFloat(bil2);
        document.getElementById("hasil").textContent = hasil;
    }
}

// Fungsi untuk reset input dan hasil
function reset() {
    document.getElementById("bil1").value = "";
    document.getElementById("bil2").value = "";
    document.getElementById("hasil").textContent = "0";
}
