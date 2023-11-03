// Cpon los dos puntos es para bindear informacion y poderla pasar como props a otro componente
// Si queremos enviar valores directos lo podemos bhacer sin bindear con los : 
// Con el @ escuchamos el metodo que nos esta emitienod nuestro componente hijo
// Con el data que le estamos mandando al onToggleLike le recibioms la data a nuestro componente hijo

Vue.component('props-comp', {
    template: `
        <div>
            <h1 v-html="title"></h1>
            <MovieComp v-for="(movie, key) in movies" 
                :id="movie.id" 
                :title="movie.title" 
                :synopsis="movie.synopsis" 
                :cover="movie.cover" 
                :key="key"
                :like="movie.like"
                @toggleLike="onToggleLike"
            />
        </div>`,
    data () {
        return {
            title: '<b> Peliculas Props </b>',
            movies: [
                {
                    id: 1,
                    title: 'Titanic',
                    synopsis: 'Durante las labores de recuperación de los restos del famoso trasatlántico Titanic, una anciana norteamericana se pone en contacto con la expedición para acudir…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/zraTDtulFw2wrpyuYf646k95MNq.jpg',
                    like: false
                },
                {
                    id: 2,
                    title: 'El Rey León',
                    synopsis: 'Un remake del clásico animado de Disney de 1994 El rey león que estará dirigido por Jon Favreu. Simba (Donald Glover) es el hijo del rey de los leones, Mufasa…',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/3A8ca8WOBacCRujSKJ2tCVKsieQ.jpg',
                    like: false
                },
                {
                    id: 3,
                    title: 'Toy Story',
                    cover: 'https://image.tmdb.org/t/p/w185_and_h278_bestv2/uMZqKhT4YA6mqo2yczoznv7IDmv.jpg',
                    like: false
                }
            ]
        }
    },
    components: {
        'MovieComp': MovieComp,
    },
    methods: {
        onToggleLike(data) {
            let movieLike = this.movies.find(movie => movie.id == data.id)
            movieLike.like = data.like
        }
    }
})