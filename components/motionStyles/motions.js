
export const itemFromLeft = {
    hidden: { x: -200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } }
}

export const itemFromRight = {
    hidden: { x: 200, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 1 } }
}

export const itemFromBottom = {
    hidden: { y: 200, opacity: 0 },
    visible: (custom) => ({ y: 0, opacity: 1, transition: { delay: custom * 0.55, duration: 1 } }),


}
