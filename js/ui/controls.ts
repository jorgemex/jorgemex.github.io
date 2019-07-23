namespace ui {
    export namespace controls {

        export interface iButton {
            texto: string,
            color: string,
            eventClick: Function,
            eventOver?: Function,
            eventOut?: Function,
        }
    }

}