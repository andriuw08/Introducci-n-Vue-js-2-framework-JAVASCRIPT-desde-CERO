// v-once hace que cierta data que no queramos que se este actualizando no lo haga
// No import que se haga algun cambio desde vue depeloment tools porque e h1 no va a renderizarse de nuevo

let DirectiveOnce = {
    template: ` <div>
                    <h1 v-text="title" v-once></h1>
                    <p v-html="message"></p>
                </div>`,
    data () {
        return {
            title: 'Directiva v-once',
            message: '<b>Hola desde directive once</b>',
        }
    }
}