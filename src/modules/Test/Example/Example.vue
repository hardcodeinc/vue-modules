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
        hide-actions
        noDataText="Nenhum resultado disponível",
        noResultsText="Nenhum resultado disponível",
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
      return this.pagination.rowsPerPage ? Math.ceil(this.items.length / this.pagination.rowsPerPage) : 0
    }
  },
  methods: {
    deleteRow (row) {
      console.log(row)
    },
    editRow (row) {
      console.log(row)
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
