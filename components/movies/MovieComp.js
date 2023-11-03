//Los props son como una data, solo que la obtenemos desde nuestro componente padre
// Se pueden crear desde valores normales a objetos
// Modificar la casa no es reconmedable desde el componente hijo, por lo que lo mejor es haccer un emit para emitir un evento al padre
// El data es para poder enviar la data a nuestro componente padre, la data que falte

let MovieComp = {
    template: `
        <div>
            <img :src="cover">
            <h2 v-text="title"></h2>
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
        }
    },
    methods: {
        toggleLike () {
            // this.like = !this.like
            let data = {
                id: this.id,
                like: !this.like
            }
            this.$emit('toggleLike', data)
        }
    }
}