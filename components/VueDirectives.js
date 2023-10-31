// Utilizar directivas
// V-text sirve para renderizar sin necesidad de interpolar con dobles llaves
// v-bind permite hacer reactivos los valores o atributos normales de los elementos js, tambien se puede solo escribir :
Vue.component('vue-directives', {
    template: ` <div>
                    <p v-text="text"></p>
                    <a v-bind:href="link.href" v-text="link.text"></a>
                </div>`,
    data () {
        return {
            text: 'Texto de prueba v-text',
            link: {
                text: 'VueJS Home',
                href: 'https://vuejs.org/',
                title: 'Documentacion Vue JS'
            }
        }
    }
})