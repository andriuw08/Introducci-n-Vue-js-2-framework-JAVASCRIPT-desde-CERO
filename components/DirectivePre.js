// v-pre sirve para no renderizar la interpolacion de una variable

let DirectivePre = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
                </div>`,
    data () {
        return {
            title: 'Directiva v-pre',
            message: '<b>Hola desde directive pre</b>',
        }
    }
}