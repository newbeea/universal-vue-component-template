import { defineComponent, ref } from 'vue-demi'

export default defineComponent({
  name: 'Counter',
  setup(props, context) {
    const count = ref(0)
    const add = () => count.value += 1
    return () => (
      <button type="button" onClick={add}>
        count is: { count.value }
      </button>
    )
  },
})
