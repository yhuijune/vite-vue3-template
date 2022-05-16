import type { DirectiveBinding, ObjectDirective } from "vue";

const nodeList = new Map()


const createDocumentHandler = (el: HTMLElement, binding: DirectiveBinding) => { }

const ClickOutside: ObjectDirective = {
    beforeMount(el, binding) {
        if (!nodeList.has(el)) {
            nodeList.set(el, [])
        }
        nodeList.get(el).push({
            documentHandler: createDocumentHandler(el, binding),
            bindingFn: binding.value
        })
    },
    updated() {

    },
    unmounted() {

    }
}

export default ClickOutside;