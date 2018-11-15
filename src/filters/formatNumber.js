import Vue from 'vue'

Vue.filter('formatNumber', function (v) {
    if (!v) return '0'
    return (v + 'T').replace(/\d(?=(\d{3})+T)/g, '$& ').replace('T', '')
})