document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("searcher").addEventListener("change", async function (e) {
        console.log(await searchPages(e.target.value))
    })

    document.querySelectorAll(".date").forEach(e => {
        const date = new Date(parseInt(e.getAttribute('time'))*1000);
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();
        const hour = date.getHours().toString().padStart(2, '0');
        const minute = date.getMinutes().toString().padStart(2, '0');
        e.innerHTML = `${day}/${month}/${year} ${hour}:${minute}`;
        console.log(date)
    })
})