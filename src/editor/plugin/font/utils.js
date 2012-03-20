KISSY.add("editor/plugin/font/utils", function () {
    return {
        getQueryCmd:function (cmd) {
            return "query" + ("-" + cmd).replace(/-(\w)/g, function (m, m1) {
                return m1.toUpperCase()
            }) + "Active";
        }
    };
});