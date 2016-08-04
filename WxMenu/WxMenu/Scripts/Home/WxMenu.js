var app = new Vue({
    el: '#app',
    data: {
        title: "测试公众号",
        menus: [

        ]
    },
    methods: {
        addMainMenu: function (event) {
            // event 是dom事件对象
            this.menus.push({ title: "菜单名称", subMenus: [] });
        },
        addSubMenu: function(index) {
            this.menus[index].subMenus.push({ title: "子菜单名称" });
        },
        chooseMenu: function (event) {
            event.stopPropagation();
            $(".current").removeClass("current");
            $(event.currentTarget).addClass("current");
        }
    }
});
