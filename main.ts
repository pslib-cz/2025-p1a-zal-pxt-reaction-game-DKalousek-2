 // ReactionGame – instrukce v README.md
basic.showIcon(IconNames.Happy)

enum GameState {
    Passive,
    Started,
    Running
}

let state = GameState.Passive
let pressedA: boolean = false
let pressedB: boolean = false



function drawHourglass(): void {
    basic.clearScreen()
    led.plot(0, 0); led.plot(1, 0); led.plot(2, 0); led.plot(3, 0); led.plot(4, 0)
    led.plot(1, 1); led.plot(3, 1)
    led.plot(2, 2)
    led.plot(1, 3); led.plot(3, 3)
    led.plot(0, 4); led.plot(1, 4); led.plot(2, 4); led.plot(3, 4); led.plot(4, 4)
}


input.onButtonPressed(Button.AB, function () {
    drawHourglass()
    state = GameState.Started
    control.runInBackground(() => music.playTone(340,300))
    basic.pause(randint(3000,6000))
const pressedA = input.buttonIsPressed(Button.A)
 const pressedB = input.buttonIsPressed(Button.B)
 const pressedAB = input.buttonIsPressed(Button.AB)
  
    if (pressedAB) {
        basic.showIcon(IconNames.Sad)
        control.runInBackground(() => music.playTone(150, 500))
        basic.pause(1000)
        state = GameState.Passive
    } else if (pressedA) {
        basic.showString("B")
        control.runInBackground(() => music.playTone(200, 400))
        basic.pause(1000)
        state = GameState.Passive
    } else if (pressedB) {
        basic.showString("A")
        control.runInBackground(() => music.playTone(200,400))
        basic.pause(1000)
        state = GameState.Passive
    } else { 
        state = GameState.Running
        control.runInBackground(() => music.playTone(600, 400))
        basic.showIcon(IconNames.Pitchfork)
    
    let winner: boolean = false

    while (!winner) {
        const pressedA = input.buttonIsPressed(Button.A)
        const pressedB = input.buttonIsPressed(Button.B)
        const pressedAB = input.buttonIsPressed(Button.AB)

        if (pressedAB) {
            basic.showIcon(IconNames.Square)
            control.runInBackground(() => music.playTone(250, 700))
            state = GameState.Passive
            winner = true
            basic.pause(1000)
        } else if (pressedA) {
            basic.showString("A")
            control.runInBackground(() => music.playTone(450, 400))
            state = GameState.Passive
            winner = true
            basic.pause(1000)
        } else if (pressedB) {
            basic.showString("B")
            control.runInBackground(() => music.playTone(450, 400))
            state = GameState.Passive
            winner = true
            basic.pause(1000)
        } else {

        }
    }
    }
})




