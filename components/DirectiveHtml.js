// Crear componentes locales para utilizar adentro de los componentes, es decir, componentes hijos
// v-html sirve para que podamos renderizar etiquetas html de correcta manera, sino, las etiquetas aparecen como parte del texto 
let DirectiveHtml = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
                </div>`,
    data () {
        return {
            title: 'Directiva v-html',
            message: '<b>Hola desde directive html</b>',
        }
    }
}