// Esla manera mas resumida de cambiar la data de un input, es la manera resumida y buena de hacerlo como lo hicismos en el v-on
// Con el v-model podemos ir guardando valores en donde queramos, en este caso a un arreglos de favoritos

let DirectiveModel = {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p v-html="message"></p>
                    <input type="text" v-model="inputText">
                    <h2>Peliculas</h2>
                    <label v-for="(movie, key) in movies" :key="key">
                        <input :value="movie" type="checkbox" v-model="favoritesMovies">
                        {{ movie }}
                    </label>

                    <div  v-if="favoritesMovies.length > 0">
                        <h3> Peliculas Favoritas </h3>
                        <ul>
                            <li v-for="(movie, key) in favoritesMovies :key="key" v-text"movie"></li>
                        </ul>
                    </div>
                </div>`,
    data () {
        return {
            title: 'Directiva v-model',
            message: '<b>Hola desde directive model</b>',
            input_text: 'Data desde el input',
            favoritesMovies: [],
            movies: ['Buscando a Nemo', 'Titanic', 'Toy Story']
        }
    }
}