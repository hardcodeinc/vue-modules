<template lang="pug">
  v-card
      v-card-title
          div
            h1 Usuários Cadastrados
            h2 Gerencie os usuários do sistema
          v-spacer
          v-text-field(append-icon="search" label="Buscar" single-line placeholder="" v-model="search")
      v-data-table(
        :headers="headers"
        :items="items"
        :loading="loading"
        :pagination.sync="pagination"
        :search="search"
        :total-items="totalItems"
        noDataText="Nenhum resultado disponível"
        noResultsText="Nenhum resultado disponível"
        :hideActions="true"
        rowsPerPageText="Mostrar:"
      )
        template(slot="items", slot-scope="props")
          td {{ props.item.id }}
          td {{ props.item.name }}
          td {{ props.item.email }}
          td {{ props.item.group }}
          td {{ props.item.createdAt }}
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
      search: '',
      totalItems: 0,
      items: [],
      loading: true,
      pagination: {rowsPerPage: 10},
      headers: [
        {
          text: 'Id',
          align: 'left',
          value: 'id'
        },
        { text: 'Name', align: 'left', value: 'name' },
        { text: 'E-mail', align: 'left', value: 'email' },
        { text: 'Group', align: 'left', value: 'group' },
        { text: 'Created At', align: 'left', value: 'createdAt' }
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
      const { sortBy, descending, page, rowsPerPage } = this.pagination
      let query = '?'

      if (this.pagination.sortBy) {
        let order = descending ? 'desc' : 'asc'
        query += '&sortBy=' + sortBy + '&order=' + order
      }

      if (rowsPerPage > 0) {
        query += '&page=' + page + '&limit=' + rowsPerPage
      }

      return this.$http.get('users' + query).then(response => {
        const total = 50
        let items = response.data

        this.loading = false
        return {
          items,
          total
        }
      })
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

<style lang="stylus" scoped>
h1
  font-size 20px
  font-weight bold
  margin-bottom 0

h2
  font-size 16px

</style>
