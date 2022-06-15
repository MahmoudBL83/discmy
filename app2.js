document.querySelectorAll('input')[0].setAttribute('value',localStorage.getItem('email'))
        document.querySelectorAll('input')[1].setAttribute('value',localStorage.getItem('name'))
        ///////////////////////////////////////////////////////////////////////////////////////////

        //sending the form to google//
        $('#bootstrapForm').submit(function (event) {
            event.preventDefault()
            var extraData = {}
            $('#bootstrapForm').ajaxSubmit({
                header:{
                    'X-Content-Type-Options': 'nosniff'
                },
                data: extraData,
                dataType: 'jsonp',  // This won't really work. It's just to use a GET instead of a POST to allow cookies from different domain.
                error: function () {
                    console.log('j')
                }
            })
        })