// Real-time Clock
function updateClock() {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-GB', { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit' 
    });
    document.getElementById('clock').innerText = timeString;
}

setInterval(updateClock, 1000);
updateClock(); // Initial call

const menuItems = document.querySelectorAll(".menu-item");

menuItems.forEach(item => {
    const header = item.querySelector(".menu-header");

    header.addEventListener("click", () => {

        if (item.classList.contains("expanded")) {
            item.classList.remove("expanded");
            item.classList.add("collapsed");
        } else {

            // Tutup semua
            menuItems.forEach(i => {
                i.classList.remove("expanded");
                i.classList.add("collapsed");
            });

            // Buka yang diklik
            item.classList.remove("collapsed");
            item.classList.add("expanded");
        }
    });
});
