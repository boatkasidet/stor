export const state = () => ({
  data: [],
  headers: [
    {
      text: 'Name',
      align: 'start',
      value: 'name',
    },
    { text: 'Phone', value: 'Phone' },
    { text: 'Product', value: 'Product' },
    { text: 'Category', value: 'Category' },
    { text: 'Size', value: 'Size' },
    { text: 'Sweet', value: 'Sweet' },
    { text: 'Chewy', value: 'Chewy' },
    { text: 'Whipped', value: 'Whipped' },
  ],
})
export const mutations = {
  input(
    state,
    { name, Phone, Product, Category, Size, Sweet, Chewy, Whipped }
  ) {
    state.data.push({
      name,
      Phone,
      Product,
      Category,
      Size,
      Sweet,
      Chewy,
      Whipped,
    })
  },
}
export const getters = {
  data(state) {
    return state.data
  },
}
