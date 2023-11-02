// Esla manera mas resumida de cambiar la data de un input, es la manera resumida y buena de hacerlo como lo hicismos en el v-on

let DirectiveModel = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
                    <input type="text" v-model="inputText">
                </div>`,
    data () {
        return {
            title: 'Directiva v-model',
            message: '<b>Hola desde directive model</b>',
            input_text: 'Data desde el input'
        }
    }
}