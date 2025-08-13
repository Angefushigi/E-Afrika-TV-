document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("searchInput");
    input.addEventListener("keyup", function (e) {
        const value = e.target.value;
        const rows = document.querySelectorAll("#table tbody tr");

        rows.forEach (row => {
            const text = row.textContent.toLowerCase();
            row.style.display = text.includes(value)? "": "none"; 
        });
    } );
});