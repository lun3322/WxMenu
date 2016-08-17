var app = new Vue({
    el: '#app',
    data: {
        title: "测试公众号",
        curMenu: {
            mainIndex: -1,
            subIndex: -1
        },
        menus: [
            {
                title: "菜单名称",
                select: true,
                action: "",
                actionParam: "",
                subMenus: []
            }
        ]
    },
    computed: {
        currentMenu: {
            get:function() {
                if (this.curMenu.subIndex > -1) {
                    return this.menus[this.curMenu.mainIndex].subMenus[this.curMenu.subIndex];
                }
                return this.menus[this.curMenu.mainIndex];
            },
            set: function (newValue) {
                if (this.curMenu.subIndex > -1) {
                    this.menus[this.curMenu.mainIndex].subMenus[this.curMenu.subIndex] = newValue;
                } else {
                    this.menus[this.curMenu.mainIndex] = newValue;
                }
            }
        }
    },
    methods: {
        addMainMenu: function () {
            this.clearSelect();
            this.menus.push(this.getDefaultMenu(true));
        },
        addSubMenu: function (index) {
            this.clearSelect();
            this.menus[index].subMenus.push(this.getDefaultMenu());
            if (this.menus[index].action.length > 0) this.menus[index].action = "";
            if (this.menus[index].actionParam.length > 0) this.menus[index].actionParam = "";
        },
        deleteMenu: function (index, subIndex) {
            this.clearSelect();
            if (subIndex > -1) {
                this.menus[index].subMenus.$remove(this.menus[index].subMenus[subIndex]);
            } else {
                this.menus.$remove(this.menus[index]);
            }
            this.chooseMenu(index);
        },
        chooseMenu: function (index, subIndex) {
            this.clearSelect();
            if (subIndex != undefined) {
                this.menus[index].subMenus[subIndex].select = true;
                this.curMenu.title = this.menus[index].subMenus[subIndex].title;
                this.curMenu.mainIndex = index;
                this.curMenu.subIndex = subIndex;
            } else {
                this.menus[index].select = true;
                this.curMenu.title = this.menus[index].title;
                this.curMenu.mainIndex = index;
                this.curMenu.subIndex = -1;
            }
        },
        clearSelect: function () {
            this.menus.forEach(function (value) {
                value.select = false;
                value.subMenus.forEach(function (subValue) {
                    subValue.select = false;
                });
            });
        },
        getDefaultMenu: function (isMainMenu) {
            var menu = {
                title: "子菜单名称",
                select: true,
                action: "",
                actionParam: ""
            };
            if (isMainMenu) {
                menu.subMenus = [];
                menu.title = "菜单名称";
            }
            return menu;
        },
        showAction: function(menu) {
            if (menu.hasOwnProperty('subMenus')) {
                if (menu.subMenus.length > 0) {
                    return false;
                }
            }
            return true;
        }
    }
});
