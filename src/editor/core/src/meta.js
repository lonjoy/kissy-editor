KISSY.add("editor/core/meta", function () {

    KISSY.add({
        "editor/plugin/button":{
            requires:['uibase']
        },
        "editor/plugin/sourcearea":{
            requires:['./button']
        }
    });

});