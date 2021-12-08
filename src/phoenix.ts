/*

- what i want now:
    - move single windows on a screen
    - apply layouts to a screen

- at a later stage:
    - apply layouts to multiple screens

    */

const CTRL: Phoenix.ModifierKey = 'control';
const OPT: Phoenix.ModifierKey = 'option';

const CTRL_OPT = [CTRL, OPT];

const moveWindow = (window: Window, size: Size, position: Point) => {
    window.setSize(size);
    window.setTopLeft(position);
    window.setSize(size);
};

const moveWindowLeft = (window: Window) => {
    const screen = window.screen().flippedVisibleFrame();

    moveWindow(window, {
        width: screen.width / 2,
        height: screen.height,
    }, {
        x: screen.x,
        y: screen.y,
    });
};

const moveWindowRight = (window: Window) => {
    const screen = window.screen().flippedVisibleFrame();

    window.setSize({
        width: screen.width / 2,
        height: screen.height,
    });

    window.setTopLeft({
        x: screen.x + screen.width / 2,
        y: screen.y,
    });

    window.setSize({
        width: screen.width / 2,
        height: screen.height,
    });
}

const moveWindowCenter = (window: Window) => {
    const screen = window.screen().flippedVisibleFrame();

    window.setSize({
        width: screen.width / 2,
        height: screen.height / 2,
    });

    window.setTopLeft({
        x: screen.x + screen.width / 3,
        y: screen.y + screen.height / 3,
    });
};

// Key.on('left', CTRL_OPT, () => moveWindowLeft(Window.focused()));
// Key.on('right', CTRL_OPT, () => moveWindowRight(Window.focused()));
Key.on('c', CTRL_OPT, () => {
    const window = Window.focused();

    if (window) {
        moveWindowCenter(window);
    }
});
