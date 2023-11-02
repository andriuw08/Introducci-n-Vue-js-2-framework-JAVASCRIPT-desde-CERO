// v-show sirve para mostrar un algo en base al valor de una variable
// Sirve para evaluar objetos de usuarios, para saber si tiene permisos o no de ver algo, es un buen ejemplo de uso practico 
// Pero esto sirve mas solo para mostrar u ocultar cosas, yha que solo agrega un display none, si son cosas de seguridad y demas es mejor v-if


let DirectiveShow = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-show="show" v-html="message"></p>
                </div>`,
    data () {
        return {
            title: 'Directiva v-show',
            message: '<b>Hola desde directive show</b>',
            show: true
        }
    }
}