<template lang="pug">
  v-card
      v-card-title
          div
            h1 Usuários Cadastrados
            h2 Gerencie os usuários do sistema
          v-spacer
          v-text-field(append-icon="search" label="Buscar" single-line placeholder="" v-model="search")
      v-data-table(
        :headers="headers",
        :items="items",
        :loading="loading"
        :pagination.sync="pagination"
        :rowsPerPageItems="rowsPerPageItems"
        :search="search",
        :total-items="totalItems"
        noDataText="Nenhum resultado disponível",
        noResultsText="Nenhum resultado disponível",
        hideActions
        rowsPerPageText="Mostrar:",
      )
        template(slot="items", slot-scope="props")
          td {{ props.item.name }}
          td.text-xs-right {{ props.item.calories }}
          td.text-xs-right {{ props.item.fat }}
          td.text-xs-right {{ props.item.carbs }}
          td.text-xs-right {{ props.item.protein }}
          td.text-xs-right {{ props.item.sodium }}
          td.text-xs-right {{ props.item.calcium }}
          td.text-xs-right
            v-btn(
              icon
              flat
              dark
              small
              @click="editRow(props.item)"
            )
              v-icon.grey--text.text--darken-2 edit
            v-btn(
              icon
              flat
              dark
              small
              @click="deleteRow(props.item)"
            )
              v-icon.grey--text.text--darken-2 delete
        template(slot="pageText", slot-scope="{ pageStart, pageStop }")
          | Mostrando de {{ pageStart }} Até {{ pageStop }}
      .text-xs-center.py-4
        v-pagination(v-model="pagination.page" :length="pages" total-visible="7")
</template>

<script>
export default {
  data () {
    return {
      rowsPerPageItems: [5, 10, 25, { text: 'Todos', value: -1 }],
      search: '',
      totalItems: 0,
      items: [],
      loading: true,
      pagination: {},
      headers: [
        {
          text: 'Dessert (100g serving)',
          align: 'left',
          sortable: false,
          value: 'name'
        },
        { text: 'Calories', value: 'calories' },
        { text: 'Fat (g)', value: 'fat' },
        { text: 'Carbs (g)', value: 'carbs' },
        { text: 'Protein (g)', value: 'protein' },
        { text: 'Sodium (mg)', value: 'sodium' },
        { text: 'Calcium (%)', value: 'calcium' },
        { text: 'Iron (%)', value: 'iron' }
      ]
    }
  },
  computed: {
    pages () {
      return this.pagination.rowsPerPage ? Math.ceil(this.totalItems / this.pagination.rowsPerPage) : 0
    }
  },
  methods: {
    deleteRow (row) {
      console.log(row)
    },
    editRow (row) {
      console.log(row)
    },
    getDataFromApi () {
      this.loading = true
      return new Promise((resolve, reject) => {
        const { sortBy, descending, page, rowsPerPage } = this.pagination

        let items = this.getDesserts()
        const total = items.length

        if (this.pagination.sortBy) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy]
            const sortB = b[sortBy]

            if (descending) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        }

        if (rowsPerPage > 0) {
          items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }

        setTimeout(() => {
          this.loading = false
          resolve({
            items,
            total
          })
        }, 1000)
      })
    },
    getDesserts () {
      return [
        {
          value: false,
          name: 'Frozen Yogurt',
          calories: 159,
          fat: 6.0,
          carbs: 24,
          protein: 4.0,
          sodium: 87,
          calcium: '14%',
          iron: '1%'
        },
        {
          value: false,
          name: 'Ice cream sandwich',
          calories: 237,
          fat: 9.0,
          carbs: 37,
          protein: 4.3,
          sodium: 129,
          calcium: '8%',
          iron: '1%'
        },
        {
          value: false,
          name: 'Eclair',
          calories: 262,
          fat: 16.0,
          carbs: 23,
          protein: 6.0,
          sodium: 337,
          calcium: '6%',
          iron: '7%'
        },
        {
          value: false,
          name: 'Cupcake',
          calories: 305,
          fat: 3.7,
          carbs: 67,
          protein: 4.3,
          sodium: 413,
          calcium: '3%',
          iron: '8%'
        },
        {
          value: false,
          name: 'Gingerbread',
          calories: 356,
          fat: 16.0,
          carbs: 49,
          protein: 3.9,
          sodium: 327,
          calcium: '7%',
          iron: '16%'
        },
        {
          value: false,
          name: 'Jelly bean',
          calories: 375,
          fat: 0.0,
          carbs: 94,
          protein: 0.0,
          sodium: 50,
          calcium: '0%',
          iron: '0%'
        },
        {
          value: false,
          name: 'Lollipop',
          calories: 392,
          fat: 0.2,
          carbs: 98,
          protein: 0,
          sodium: 38,
          calcium: '0%',
          iron: '2%'
        },
        {
          value: false,
          name: 'Honeycomb',
          calories: 408,
          fat: 3.2,
          carbs: 87,
          protein: 6.5,
          sodium: 562,
          calcium: '0%',
          iron: '45%'
        },
        {
          value: false,
          name: 'Donut',
          calories: 452,
          fat: 25.0,
          carbs: 51,
          protein: 4.9,
          sodium: 326,
          calcium: '2%',
          iron: '22%'
        },
        {
          value: false,
          name: 'KitKat',
          calories: 518,
          fat: 26.0,
          carbs: 65,
          protein: 7,
          sodium: 54,
          calcium: '12%',
          iron: '6%'
        }
      ]
    }
  },
  mounted () {
    this.getDataFromApi()
    .then(data => {
      this.items = data.items
      this.totalItems = data.total
    })
  },
  watch: {
    pagination: {
      handler () {
        this.getDataFromApi()
          .then(data => {
            this.items = data.items
            this.totalItems = data.total
          })
      },
      deep: true
    }
  }
}
</script>

<style lang="stylus">
h1
  font-size 20px
  font-weight bold
  margin-bottom 0

h2
  font-size 16px

</style>
