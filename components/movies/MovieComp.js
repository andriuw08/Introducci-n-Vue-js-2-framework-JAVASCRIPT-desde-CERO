//Los props son como una data, solo que la obtenemos desde nuestro componente padre
// Se pueden crear desde valores normales a objetos
// Modificar la casa no es reconmedable desde el componente hijo, por lo que lo mejor es haccer un emit para emitir un evento al padre
// El data es para poder enviar la data a nuestro componente padre, la data que falte
// $parent sirve para poder acceder desde nuestro componente hijo a nuestro componente padre sin pasar props
// El | junto al filters funciona para crear filtros que formateen el texto 
// Se pueden mandar varios filtros a la vez, solo es necesario colocar otro | y se iran ejecutando en el orden en el que los vayamos colcocando
// Watch sirve para vigilar el cambio de una variable, el nombre de la funcion siempre tiene que tener el mismo nombre de la variable a revisar

let MovieComp = {
    template: `
        <div :id="id | formatId">
            <img :src="cover">
            <h2 class="card-title">{{ title | uppercase }}</h2>
            <p v-text="synopsis"></p>
            <button @click="toggleLike" v-text="like ? 'Favorita' : 'Agregar a Favoritos'"></button>
            <hr>
        </div>
    `,
    props: {
        id: {
            type: Number,
            required: true,
        },
        title: {
            type: String,
            required: true
        },
        synopsis: {
            type: String,
            default: 'No posee Sinopsis'
        },
        cover: {
            type: String,
            required: true
        },
        like: {
            type: Boolean,
            required: true,
            default () {
                return false
            }    
        },
        message: {
            type: String,
            required: true
        }
    },
    watch: {
        like (newVal, oldVal) {
            console.log(newVal, oldVal)
        }
    },
    methods: {
        toggleLike () {
            let data = {
                id: this.id,
                like: !this.like
            }
            this.$emit('toggleLike', data)
        }
    },
    filters: {
        formatId (value) {
            return `movieCard-${value}`
        },
        uppercase (value) {
            return value.toUpperCase()
        }
    }
}