import { defineStore } from 'pinia'

export const useButtonState = defineStore({
    id: 'buttonState',
    state: () => ({
        buttonState: true,
        color: 'is-success',
        size: 'is-medium',
    }),
    actions: {
        changeColor(color) {
            this.color = color
        },
        changeSize(size) {
            this.size = size
        }
    },
    getters: {
        getColor() {
            return this.color
        },
        getSize() {
            return this.size
        }
    }
})
