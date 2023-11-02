// La diferencia con hacer un metodo es qu eel metodo consume mas recursos, en lugar de eso una propiedad computada lo guarda en cache y actualiza inmediato

Vue.component('computed-properties', {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p> {{fullName}}</p>
                </div>`,
    data () {
        return {
            title: 'Propiedades Computadas de Vue.js',
            user: {
                name: 'Andriuw',
                lastName: 'Yepez',
                year: '2003'
            }
        }
    },
    computed: {
        fullName () {
            return `${this.user.name} ${this.user.lastName}`
        }
    }
})