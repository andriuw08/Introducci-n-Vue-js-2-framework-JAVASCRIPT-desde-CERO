// V-if es similar al show, es para mostrar o no mostrar algo en base a un valor, solo que con le v-if elimina completamente el elemento en caso de no cumplirse la condicion
//Funciona igual que una condicion, tiene su v-else 

let DirectiveIf = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-if="mostrar" v-html="message"></p>
                </div>`,
    data () {
        return {
            title: 'Directiva v-html',
            message: '<b>Hola desde directive if</b>',
            mostrar: true
        }
    }
}