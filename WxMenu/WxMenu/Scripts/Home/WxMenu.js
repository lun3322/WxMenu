var app = new Vue({
    el: '#app',
    data: {
        title: "测试公众号",
        menus: [
            {
                title: "菜单名称",
                select: true,
                subMenus: []
            }
        ]
    },
    methods: {
        addMainMenu: function () {
            this.clearSelect();
            this.menus.push({ title: "菜单名称", select: true, subMenus: [] });
        },
        addSubMenu: function (index) {
            this.clearSelect();
            this.menus[index].subMenus.push({ title: "子菜单名称", select: true });
        },
        chooseMenu: function (index, subIndex) {
            this.clearSelect();
            if (subIndex != undefined) {
                this.menus[index].subMenus[subIndex].select = true;
            } else {
                this.menus[index].select = true;
            }
        },
        clearSelect: function () {
            this.menus.forEach(function (value) {
                value.select = false;
                value.subMenus.forEach(function (subValue) {
                    subValue.select = false;
                });
            });
        }
    }
});
