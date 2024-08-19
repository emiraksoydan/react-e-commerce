



export const modalAction = (element: string): void => {
    const moalMain = document.querySelector<HTMLElement>(element)!;
    if (moalMain.classList.contains("active")) {
        moalMain.classList.remove("active");
    } else {
        moalMain.classList.add("active");
    }
}


export const tooglmenu = (): void => {
    let submenu = document.getElementById("subMenu")!;
    let empt = document.querySelector(".empty")!;

    submenu.classList.toggle("open-dropdown");
    empt.classList.toggle("active");
}

