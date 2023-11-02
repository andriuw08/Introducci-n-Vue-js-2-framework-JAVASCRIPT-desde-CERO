// v-on sirve para agregar eventos -> sirve tambien el solo @
// en los methods van las funciones
// v-model sirve para poder almacenar la informacion que se le envia a un input 

let DirectiveOn = {
    template: ` <header>
                    <h1 v-text="title"></h1>
                    <p v-text="message"></p>
                    <p v-text="pelicula"></p>
                    <button @click.stop.prevent="comprarEntrada"> Comprar entrada </button>
                    <input type="text" @keydown="decirHola" /> 
                    disponibles <span v-text="entradas"></span>
                    <div>
                    <h1>Modificando Vista y Modelo</h1>
                        <input type="text" :value="textInput" @keyup="updateDataTextInput">
                    </div>
                </header>`,
    data () {
        return {
            title: 'Directiva v-On',
            message: 'Hola desde directive On',
            welcome: 'Bienvenido desde la data',
            pelicula: 'Dora la exploradora',
            entradas: 5,
            textInput: 'Valor por degecto del input text'
        }
    },

    methods: {
        updateDataTextInput (event) {
            this.textInput = event.target.value
        },
        decirHola: function () {
            alert(this.welcome)
        },
        comprarEntrada () {
            if(this.entradas > 0) {
                this.entradas--
                return alert(`Entrada para ${this.pelicula} comprada`)
            } else {
                return alert('Ya  no hay entradas')
            }
        }
    }
}