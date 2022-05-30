import { createI18n } from "vue-i18n"

import zhCn from "./languages/zhCn.json"
import en from "./languages/en.json"

const i18n = createI18n({
    silentFallbackWarn: true,
    locale: 'zhCn',
    messages: {
        'zhCn': zhCn,
        'en': en
    }
})

export default i18n