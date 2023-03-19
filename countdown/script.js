const endDate = "31 july 2023 05:00 pm" ;
const inputs = document.querySelectorAll("input");
document.querySelector(".end-date").innerText = endDate;

function clock() {
    const end = new Date(endDate);
    const present = new Date();
    const diff = (end - present)/1000;
    if(diff < 0) return;

    inputs[0].value = (Math.floor(diff/3600/24));
    inputs[1].value = (Math.floor(diff/3600)%24);
    inputs[2].value = (Math.floor(diff/60)%60);
    inputs[3].value = (Math.floor(diff)%60);
}
clock();

setInterval(() => {
    clock()
}
);
/*
 * 1day = 24 hour;
 * 1hour = 60min(3600sec);
 * 1min = 60se;
 */