// V-slot sirve para poder renderizar cosas en el espacio que nos deja nuestro componente hijo 

let DirectiveSlot = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
                    <button-comp>
                        <template #action>
                            Cerrar
                        </template>
                        <template #element>
                            Modal
                        </template>
                    </button-comp>
                </div>`,
    data () {
        return {
            title: 'Directiva v-slot',
            message: '<b>Hola desde directive slot</b>',
        }
    },
    components: {
        buttonComp,
    }
}