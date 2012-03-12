KISSY.add("editor/core/meta", function () {

    KISSY.add({
        "editor/plugin/button/index":{
            requires:['uibase']
        },
        "editor/plugin/sourcearea/index":{
            requires:['../button/']
        },
        "editor/plugin/font/index":{
            requires:['../button/', '../select/']
        },
        "editor/plugin/checkbox-sourcearea/index":{
            requires:['../sourcearea/']
        }
    });

});