import { TextField } from "@mui/material";




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

export const switchDashboard = (): void => {
    const toggleBtn = document.querySelector(".switch-icon")!;
    toggleBtn.classList.toggle("active");
}


export const setTextField = (): React.JSX.Element => {
    return (
        <>
            <TextField>

            </TextField>
        </>
    );
}

