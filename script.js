function calculate() {
    let total = parseInt(document.getElementById("total").value);
    let attended = parseInt(document.getElementById("attended").value);

    if (!total || !attended || attended > total) {
        alert("Enter valid values!");
        return;
    }

    // Calculate percentage
    let percentage = (attended / total) * 100;
    document.getElementById("percentage").innerText = percentage.toFixed(2) + "%";

    // Calculate classes needed to reach 75%
    let need = 0;
    let t = total;
    let a = attended;

    while ((a / t) * 100 < 75) {
        t++;
        a++;
        need++;
    }

    document.getElementById("message").innerText =
        need === 0
        ? "You already have 75% or more 🎉"
        : `You need to attend ${need} more classes to reach 75% 📚`;
}
