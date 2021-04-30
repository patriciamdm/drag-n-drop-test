const hand = document.getElementById('hand')
const arrow = document.getElementById('arrow')
const drag = document.getElementById('drag')
const ingrLemon = document.getElementById('ingr-lemon')
const ingrMint = document.getElementById('ingr-mint')
const ingrDrink = document.getElementById('ingr-drink')
const ingrIce = document.getElementById('ingr-ice')
const ingrSoda = document.getElementById('ingr-soda')


let dragStart = false
let initX, initY, newX, newY

let targeted = false


document.onmousedown = function (e) {
    switch (e.target) {
        case ingrLemon:
            targeted = ingrLemon
            break;
        case ingrMint:
            targeted = ingrMint
            break;
        case ingrDrink:
            targeted = ingrDrink
            break;
        case ingrIce:
            targeted = ingrIce
            break;
        case ingrSoda:
            targeted = ingrSoda
            break;
    }

    if (targeted) {
        dragStart = true
        hand.style.visibility = 'hidden'
        arrow.style.visibility = 'hidden'
        drag.style.visibility = 'hidden'
        initX = e.pageX
        initY = e.pageY
        offsetLeft = targeted.offsetLeft;
        offsetTop = targeted.offsetTop;
        document.addEventListener('mousemove', move);
        document.addEventListener('mouseup', stop);
    }
}

const move = e => {
    if (!dragStart) return;
    e.preventDefault();
    newX = offsetLeft + (e.pageX - initX);
    newY = offsetTop + (e.pageY - initY);
    targeted.style.left = `${newX}px`
    targeted.style.top = `${newY}px`
}

const stop = e => {
    dragStart = false

    switch (targeted) {
        case ingrLemon:
            hide('lemon')
            show('glass2')
            show('mint')
            show('drag')
            show('arrow')
            show('hand')
            break;
        case ingrMint:
            hide('mint')
            show('glass3')
            hide('glass2')
            show('drink')
            show('drag')
            show('arrow')
            break;
        case ingrDrink:
            hide('drink')
            show('glass4')
            hide('glass3')
            show('ice')
            show('drag')
            show('arrow')
            show('hand')
            break;
        case ingrIce:
            hide('ice')
            show('glass5')
            hide('glass4')
            show('soda')
            show('drag')
            show('arrow')
            break;
        case ingrSoda:
            hide('soda')
            show('glass6')
            hide('glass5')
            endAnimation()
            break;
    }
}

const show = id => {
    document.getElementById(id).style.visibility = 'visible'
    document.getElementById(id).style.opacity = '1'
}

const hide = id => {
    document.getElementById(id).style.opacity = '0'
    setTimeout(document.getElementById(id).style.visibility = 'hidden', 1000)
}

const endAnimation = () => {
    show('glass7')
    show('light')
    hide('glass1')
    hide('glass6')
    hide('introduction')
    setTimeout(() => {
        show('congratulations')
        show('button')
    }, 500)
}