const screens = document.querySelectorAll(".screen")

let index = 1

function cycleScreen() {
    const isLastScreen = () => index === screens.length - 1

    screens.forEach(screen => screen.classList.add("hidden"))
    screens[index].classList.remove("hidden")

    index = isLastScreen() ? 0 : ++index
}

setInterval(cycleScreen, 3000)