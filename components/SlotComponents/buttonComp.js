// Slot sirve para poder dejar el espacio de que nuestro componetne padre pase algo

let buttonComp = {
    template: `<button>
                    <slot name="action">Texto por defecto</slot>
                    <slot name="element">Texto por defecto</slot>
                </button>
    `
}