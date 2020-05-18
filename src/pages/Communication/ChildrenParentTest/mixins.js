export const cpMixin = {
    methods:{
        pullMoney(count){
            this.money -= count
        },
        gaveMoney(count){
            this.money -= count
            this.$parent.money += count
        }
    }
}