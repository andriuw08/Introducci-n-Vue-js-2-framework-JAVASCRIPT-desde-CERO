// Utilizar directivas
// V-text sirve para renderizar sin necesidad de interpolar con dobles llaves
// v-bind permite hacer reactivos los valores o atributos normales de los elementos js, tambien se puede solo escribir :
Vue.component('vue-directives', {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-text="text"></p>
                    <a v-bind:href="link.href" v-text="link.text"></a>
                    <DirectiveHtml></DirectiveHtml>
                    <DirectiveShow></DirectiveShow>
                    <DirectiveIf></DirectiveIf>
                </div>`,
    data () {
        return {
            title: 'Directivas de Vue.js',
            text: 'Texto de prueba v-text',
            link: {
                text: 'VueJS Home',
                href: 'https://vuejs.org/',
                title: 'Documentacion Vue JS'
            }
        }
    },
    components: {
        'DirectiveHtml': DirectiveHtml,
        'DirectiveShow': DirectiveShow,
        'DirectiveIf': DirectiveIf
    }
})