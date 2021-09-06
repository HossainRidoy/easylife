export function goToSection(e) {
    e.preventDefault();
    let el = document.getElementById("who_we_are");
    el && window.scrollTo({
        top: el.offsetTop - 150,
        left: 0,
        behavior: "smooth",
    });
}

export function goToSection2(e) {
    e.preventDefault();
    let el = document.getElementById("our_mission");
    el && window.scrollTo({
        top: el.offsetTop - 150,
        left: 0,
        behavior: "smooth",
    });
}
export function goToSection3(e) {
    e.preventDefault();
    let el = document.getElementById("awards");
    el && window.scrollTo({
        top: el.offsetTop - 150,
        left: 0,
        behavior: "smooth",
    });
}
export function goToSection4(e) {
    e.preventDefault();
    let el = document.getElementById("career");
    el && window.scrollTo({
        top: el.offsetTop - 150,
        left: 0,
        behavior: "smooth",
    });
}
export function goToSection5(e) {
    e.preventDefault();
    let el = document.getElementById("media");
    el && window.scrollTo({
        top: el.offsetTop - 150,
        left: 0,
        behavior: "smooth",
    });
}