var user = {
    login: function (options) {
        console.log(options)
        $.ajax({
            type: 'post',
            url: USER_LOGIN,
            data:options.data,
            success:options.callback

        })
    }
}
