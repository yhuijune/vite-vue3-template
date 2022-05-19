import type { Ref } from 'vue';

export const useFocus = (el: Ref<{ focus: () => void } | null>) => {
    const focus = () => el.value?.focus?.();
    return { focus };
};
