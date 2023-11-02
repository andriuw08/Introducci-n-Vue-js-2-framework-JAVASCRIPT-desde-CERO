Vue.component('computed-properties-get-set', {
    template: ` <div>
                    <h1 v-text="title"></h1>
                    <p> {{fullName}}</p>
                </div>`,
    data () {
        return {
            title: 'Computed Properties con Getter y Setter',
            user: {
                name: 'Andriuw',
                lastName: 'Yepez',
                year: '2003'
            }
        }
    },
    computed: {
        fullName: {
            get () {
                return `${this.user.name} ${this.user.lastName}`
            },
            set (newValue) {
                let name = newValue.split(' ')

                this.user.name = name[0]
                this.user.lastName = name[1]
            }
        }
    }
})