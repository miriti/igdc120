Game.Input = {
    Keys: {
        BACKSPACE: 8,
        TAB: 9,
        ENTER: 13,
        SHIFT: 16,
        CTRL: 17,
        ALT: 18,
        PAUSE_BREAK: 19,
        CAPS_LOCK: 20,
        ESCAPE: 27,
        PAGE_UP: 33,
        SPACE: 32,
        PAGE_DOWN: 34,
        END: 35,
        HOME: 36,
        LEFT_ARROW: 37,
        UP_ARROW: 38,
        RIGHT_ARROW: 39,
        DOWN_ARROW: 40,
        INSERT: 45,
        DELETE: 46,
        N_0: 48,
        N_1: 49,
        N_2: 50,
        N_3: 51,
        N_4: 52,
        N_5: 53,
        N_6: 54,
        N_7: 55,
        N_8: 56,
        N_9: 57,
        A: 65,
        B: 66,
        C: 67,
        D: 68,
        E: 69,
        F: 70,
        G: 71,
        H: 72,
        I: 73,
        J: 74,
        K: 75,
        L: 76,
        M: 77,
        N: 78,
        O: 79,
        P: 80,
        Q: 81,
        R: 82,
        S: 83,
        T: 84,
        U: 85,
        V: 86,
        W: 87,
        X: 88,
        Y: 89,
        Z: 90,
        LEFT_WINDOW_KEY: 91,
        RIGHT_WINDOW_KEY: 92,
        SELECT_KEY: 93,
        NUMPAD_0: 96,
        NUMPAD_1: 97,
        NUMPAD_2: 98,
        NUMPAD_3: 99,
        NUMPAD_4: 100,
        NUMPAD_5: 101,
        NUMPAD_6: 102,
        NUMPAD_7: 103,
        NUMPAD_8: 104,
        NUMPAD_9: 105,
        MULTIPLY: 106,
        ADD: 107,
        SUBTRACT: 109,
        DECIMAL_POINT: 110,
        DIVIDE: 111,
        F1: 112,
        F2: 113,
        F3: 114,
        F4: 115,
        F5: 116,
        F6: 117,
        F7: 118,
        F8: 119,
        F9: 120,
        F10: 121,
        F11: 122,
        F12: 123,
        NUM_LOCK: 144,
        SCROLL_LOCK: 145,
        SEMICOLON: 186,
        EQUAL_SIGN: 187,
        COMMA: 188,
        DASH: 189,
        PERIOD: 190,
        FORWARD_SLASH: 191,
        GRAVE_ACCENT: 192,
        OPEN_BRACKET: 219,
        BACK_SLASH: 220,
        CLOSE_BRAKET: 221,
        SINGLE_QUOTE: 222
    },
    BUTTON_A: 90,
    BUTTON_B: 88,
    init: function () {
        window.addEventListener("keydown", this._keyDown.bind(this));
        window.addEventListener("keyup", this._keyUp.bind(this));
    },
    _callbacks: [],
    _pressed: new Array(256),
    _keyDown: function (e) {
        if ((this._pressed[e.keyCode] === null) || (typeof this._pressed[e.keyCode] === 'undefined')) {
            this._pressed[e.keyCode] = Game.timestamp;
        }

        for (var i = this._callbacks.length - 1; i >= 0; i--) {
            this._callbacks[i].call(this, e);
            this._callbacks.splice(i, 1);
        }
        // TODO Uncomment on release: e.preventDefault();
    },
    _keyUp: function (e) {
        this._pressed[e.keyCode] = null;
    },
    getKeyName: function (key) {
        for (var name in this.Keys) {
            if (this.Keys[name] == key) {
                return name.replace('_', ' ');
            }
        }

        return 'KEY ' + key;
    },
    key: function (key) {
        return this._pressed[key];
    },
    up: function () {
        return this._pressed[this.Keys.W] || this._pressed[this.Keys.UP_ARROW];
    },
    down: function () {
        return this._pressed[this.Keys.S] || this._pressed[this.Keys.DOWN_ARROW];
    },
    left: function () {
        return this._pressed[this.Keys.A] || this._pressed[this.Keys.LEFT_ARROW];
    },
    right: function () {
        return this._pressed[this.Keys.D] || this._pressed[this.Keys.RIGHT_ARROW];
    },
    addCallback: function (callback) {
        this._callbacks.push(callback);
    },
    removeCallback: function (callback) {
        var index;

        if ((index = this._callbacks.indexOf(callback)) !== -1) {
            this._callbacks.splice(index, 1);
        }
    }
};

Game.Input.init();
