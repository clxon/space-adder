var addTheSpace = function () {
    var input = $('#before').val()
    var num = window.parseInt($('#num').val()) || 1
    var map = Array.prototype.map
    var arr = map.call(input, function (n) {
        return n
    })
    console.log(arr)
    input = ''
    map.call(arr, function (n) {
        var middle = ''
        for (var i = 0; i < num; i++) {
            middle += ' '
        }
        input += n + middle
    })
    $('#result').text(input)
    console.log(input)
    console.log(num)
}