// v-for sirve para poder recorrer listas u objetos, para poder mostrar cada uno de los items que tienen adentro de forma dinamica

let DirectiveFor = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
                    <h3></h3>
                    <ul>
                        <li v-for="(color, index) in list" :key="index" v-text="color"></li>
                    </ul>
                    <h3></h3>
                    <ul>
                        <li v-for="(item, key, index) in object_list" :key="index">
                            {{key}}: {{item}}
                        </li>
                    </ul>
                </div>`,
    data () {
        return {
            title: 'Directiva v-For',
            message: '<b>Hola desde directive for</b>',
            list: ['Rojo', 'Amarillo', 'Azul', 'Purpura'],
            object_list: {
                name: 'Jesus',
                last_name: 'Lopez',
                nick: 'Lopvi'
            }
        }
    }
}