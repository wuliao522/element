
function getLocalObj(name) {
    return JSON.parse(localStorage.getItem(name))
}

function setLocalObj(name, obj) {
    localStorage.setItem(name,JSON.stringify(obj))
}

function logout() {
    localStorage.clear()
    location.reload()
}

var mixin = {
    data: {
        user: {}
    },
    methods: {
        loadPage: function (url) {
            $("#tempPage").load(url)
        }
    }
}

var tableData = [{
    date: '2016-05-03',
    name: '王小虎',
    address: '上海市'
}, {
    date: '2016-05-02',
    name: '李小龍',
    address: '美國'
}, {
    date: '2016-05-04',
    name: '趙小剛',
    address: '北京市'
}, {
    date: '2016-05-01',
    name: '老王',
    address: '上海'
}, {
    date: '2016-05-08',
    name: '小羅',
    address: '荊州'
}, {
    date: '2016-05-06',
    name: '朱迪',
    address: '江蘇'
}, {
    date: '2018-05-07',
    name: '小明',
    address: '浙江'
}, {
    date: '2017-05-07',
    name: '小明',
    address: '浙江'
}]