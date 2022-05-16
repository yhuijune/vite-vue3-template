import { ObjectDirective } from "vue"

const focus: ObjectDirective<HTMLInputElement> = {
    mounted: el => el.focus()
}

export default focus;