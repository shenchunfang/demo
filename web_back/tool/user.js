var user = {
    login: function (options) {
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data:options.data,
            success:options.callback

        })
    },

    logout:function(options){
        $.ajax({
            type:'post',
            url:USER_LOGOUT,
            success:options.callback
        })
    },

    getuser:function(options){
        $.ajax({
            url:USER_GETUSER,
            success:options.callback
        })
    },

    getUser_Info:function(options){
        $.ajax({
            url: USERINFO_GET,
            success:options.callback
        })
    },

    UserInfo_edit:function(options){
        $.ajax({
            type: 'post',
            url: USERINFO_EDIT,
            data:options.data,
            contentType: false,
            processData: false,
            success:options.success
        })
    },

}
