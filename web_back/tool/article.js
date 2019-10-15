var article = {
    getCateGory: function (options) {
        $.ajax({
            url: CATEGORY_SEARCH,
            success: options.success
        })
    },

    addCateGory: function (options) {
        $.ajax({
            type: 'post',
            url: CATEGORY_ADD,
            data: options.data,
            success: options.success
        })
    },

    editCateGory: function (options) {
        $.ajax({
            type: 'post',
            url: CATEGORY_EDIT,
            data: options.data,
            success: options.success
        })

    },

    delCateGory: function (options) {
        $.ajax({
            type: 'post',
            url: CATEGORY_DELETE,
            data: options.data,
            success: options.success
        })
    }

}