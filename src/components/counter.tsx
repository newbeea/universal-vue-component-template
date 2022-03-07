import { Transition, defineComponent, isVue2, ref } from 'vue-demi'
import './index.scss'

const components: any = {}
if (!isVue2)
  components.Transition = Transition

export default defineComponent({
  name: 'Counter',
  components,
  setup(props, context) {
    const count = ref(0)
    const a = ref('jjjjj')
    return {
      a,
      count,
    }
  },
  render() {
    const add = () => this.count += 1
    return (
      <div>
        <button type="button" onClick={add}>
        count is: { this.count }

        </button>
        {isVue2
          ? this.$slots.default
          : this.$slots.default?.()}

        {isVue2
          ? this.$scopedSlots.scopedTest({
            data: 'Scoped data',
          })
          : this.$slots.scopedTest?.({
            data: 'Scoped data',
          })}
        <transition name="fade">
          {this.count > 0 ? <div>Transition</div> : null}
        </transition>
      </div>

    )
  },
})
