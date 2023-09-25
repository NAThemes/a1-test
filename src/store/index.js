import { createStore } from 'vuex';

export default createStore({
    state:{
        items : [
            {
                img: require(`../assets/images/time.svg`),
                desc: "Игровое время",
                freeServ: "",
                subServ: "30 дней",
            },
            {
                img: require(`../assets/images/tullBox.svg`),
                desc: "Запечатанный набор инструментов",
                freeServ: "1",
                subServ: "1",
            },
            {
                img: require(`../assets/images/run.svg`),
                desc: "Хрупкая чистая руна \n 10-й ступени",
                freeServ: "1",
                subServ: "",
            },
            {
                img: require(`../assets/images/symbol.svg`),
                desc: "Большой символ \n изобилия творца",
                freeServ: "10",
                subServ: "",
            },
            {
                img: require(`../assets/images/mana.svg`),
                desc: "Мана-батарея",
                freeServ: "",
                subServ: "20",
            },
            {
                img: require(`../assets/images/module.svg`),
                desc: "Модуль памяти",
                freeServ: "",
                subServ: "10",
            },
            {
                img: require(`../assets/images/vitoTable.svg`),
                desc: "Помошник Вито",
                freeServ: "1",
                subServ: "1",
            },
        ]
    },
});
