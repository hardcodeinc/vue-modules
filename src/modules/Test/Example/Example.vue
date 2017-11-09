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
        :rowsPerPageItems="rowsPerPageItems"
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
      rowsPerPageItems: [5, 10, 25, { text: 'Todos', value: -1 }],
      search: '',
      totalItems: 0,
      items: [],
      loading: true,
      pagination: {},
      headers: [
        {
          text: 'Id',
          align: 'left',
          sortable: false,
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
          id: '1',
          name: 'name 1',
          email: 'email 1',
          group: 'group 1',
          createdAt: 1510253928
        },
        {
          id: '2',
          name: 'name 2',
          email: 'email 2',
          group: 'group 2',
          createdAt: 1510253868
        },
        {
          id: '3',
          name: 'name 3',
          email: 'email 3',
          group: 'group 3',
          createdAt: 1510253808
        },
        {
          id: '4',
          name: 'name 4',
          email: 'email 4',
          group: 'group 4',
          createdAt: 1510253748
        },
        {
          id: '5',
          name: 'name 5',
          email: 'email 5',
          group: 'group 5',
          createdAt: 1510253688
        },
        {
          id: '6',
          name: 'name 6',
          email: 'email 6',
          group: 'group 6',
          createdAt: 1510253628
        },
        {
          id: '7',
          name: 'name 7',
          email: 'email 7',
          group: 'group 7',
          createdAt: 1510253568
        },
        {
          id: '8',
          name: 'name 8',
          email: 'email 8',
          group: 'group 8',
          createdAt: 1510253508
        },
        {
          id: '9',
          name: 'name 9',
          email: 'email 9',
          group: 'group 9',
          createdAt: 1510256297
        },
        {
          id: '10',
          name: 'name 10',
          email: 'email 10',
          group: 'group 10',
          createdAt: 1510256237
        },
        {
          id: '11',
          name: 'name 11',
          email: 'email 11',
          group: 'group 11',
          createdAt: 1510256177
        },
        {
          id: '12',
          name: 'name 12',
          email: 'email 12',
          group: 'group 12',
          createdAt: 1510256117
        },
        {
          id: '13',
          name: 'name 13',
          email: 'email 13',
          group: 'group 13',
          createdAt: 1510256057
        },
        {
          id: '14',
          name: 'name 14',
          email: 'email 14',
          group: 'group 14',
          createdAt: 1510255997
        },
        {
          id: '15',
          name: 'name 15',
          email: 'email 15',
          group: 'group 15',
          createdAt: 1510255937
        },
        {
          id: '16',
          name: 'name 16',
          email: 'email 16',
          group: 'group 16',
          createdAt: 1510255877
        },
        {
          id: '17',
          name: 'name 17',
          email: 'email 17',
          group: 'group 17',
          createdAt: 1510255817
        },
        {
          id: '18',
          name: 'name 18',
          email: 'email 18',
          group: 'group 18',
          createdAt: 1510255757
        },
        {
          id: '19',
          name: 'name 19',
          email: 'email 19',
          group: 'group 19',
          createdAt: 1510255697
        },
        {
          id: '20',
          name: 'name 20',
          email: 'email 20',
          group: 'group 20',
          createdAt: 1510255637
        },
        {
          id: '21',
          name: 'name 21',
          email: 'email 21',
          group: 'group 21',
          createdAt: 1510255577
        },
        {
          id: '22',
          name: 'name 22',
          email: 'email 22',
          group: 'group 22',
          createdAt: 1510255517
        },
        {
          id: '23',
          name: 'name 23',
          email: 'email 23',
          group: 'group 23',
          createdAt: 1510255457
        },
        {
          id: '24',
          name: 'name 24',
          email: 'email 24',
          group: 'group 24',
          createdAt: 1510255397
        },
        {
          id: '25',
          name: 'name 25',
          email: 'email 25',
          group: 'group 25',
          createdAt: 1510255337
        },
        {
          id: '26',
          name: 'name 26',
          email: 'email 26',
          group: 'group 26',
          createdAt: 1510255277
        },
        {
          id: '27',
          name: 'name 27',
          email: 'email 27',
          group: 'group 27',
          createdAt: 1510255217
        },
        {
          id: '28',
          name: 'name 28',
          email: 'email 28',
          group: 'group 28',
          createdAt: 1510255157
        },
        {
          id: '29',
          name: 'name 29',
          email: 'email 29',
          group: 'group 29',
          createdAt: 1510255097
        },
        {
          id: '30',
          name: 'name 30',
          email: 'email 30',
          group: 'group 30',
          createdAt: 1510255037
        },
        {
          id: '31',
          name: 'name 31',
          email: 'email 31',
          group: 'group 31',
          createdAt: 1510254977
        },
        {
          id: '32',
          name: 'name 32',
          email: 'email 32',
          group: 'group 32',
          createdAt: 1510254917
        },
        {
          id: '33',
          name: 'name 33',
          email: 'email 33',
          group: 'group 33',
          createdAt: 1510254857
        },
        {
          id: '34',
          name: 'name 34',
          email: 'email 34',
          group: 'group 34',
          createdAt: 1510254797
        },
        {
          id: '35',
          name: 'name 35',
          email: 'email 35',
          group: 'group 35',
          createdAt: 1510254737
        },
        {
          id: '36',
          name: 'name 36',
          email: 'email 36',
          group: 'group 36',
          createdAt: 1510254677
        },
        {
          id: '37',
          name: 'name 37',
          email: 'email 37',
          group: 'group 37',
          createdAt: 1510254617
        },
        {
          id: '38',
          name: 'name 38',
          email: 'email 38',
          group: 'group 38',
          createdAt: 1510254557
        },
        {
          id: '39',
          name: 'name 39',
          email: 'email 39',
          group: 'group 39',
          createdAt: 1510254497
        },
        {
          id: '40',
          name: 'name 40',
          email: 'email 40',
          group: 'group 40',
          createdAt: 1510254437
        },
        {
          id: '41',
          name: 'name 41',
          email: 'email 41',
          group: 'group 41',
          createdAt: 1510254377
        },
        {
          id: '42',
          name: 'name 42',
          email: 'email 42',
          group: 'group 42',
          createdAt: 1510254317
        },
        {
          id: '43',
          name: 'name 43',
          email: 'email 43',
          group: 'group 43',
          createdAt: 1510254257
        },
        {
          id: '44',
          name: 'name 44',
          email: 'email 44',
          group: 'group 44',
          createdAt: 1510254197
        },
        {
          id: '45',
          name: 'name 45',
          email: 'email 45',
          group: 'group 45',
          createdAt: 1510254137
        },
        {
          id: '46',
          name: 'name 46',
          email: 'email 46',
          group: 'group 46',
          createdAt: 1510254077
        },
        {
          id: '47',
          name: 'name 47',
          email: 'email 47',
          group: 'group 47',
          createdAt: 1510254017
        },
        {
          id: '48',
          name: 'name 48',
          email: 'email 48',
          group: 'group 48',
          createdAt: 1510253957
        },
        {
          id: '49',
          name: 'name 49',
          email: 'email 49',
          group: 'group 49',
          createdAt: 1510253897
        },
        {
          id: '50',
          name: 'name 50',
          email: 'email 50',
          group: 'group 50',
          createdAt: 1510253837
        },
        {
          id: '51',
          name: 'name 51',
          email: 'email 51',
          group: 'group 51',
          createdAt: 1510253777
        },
        {
          id: '52',
          name: 'name 52',
          email: 'email 52',
          group: 'group 52',
          createdAt: 1510253717
        },
        {
          id: '53',
          name: 'name 53',
          email: 'email 53',
          group: 'group 53',
          createdAt: 1510253657
        },
        {
          id: '54',
          name: 'name 54',
          email: 'email 54',
          group: 'group 54',
          createdAt: 1510253597
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
