import { defineStore } from 'pinia';

export const useUserStore = defineStore({
    id: 'USER',
    state: () => {
        return {
            name: 'admin',
        };
    },
    actions: {
        updateName(name: string) {
            this.name = name;
        },
    },
});
