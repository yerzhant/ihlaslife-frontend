import Vue from 'vue'

Vue.filter('formatNumber', function (v) {
    if (!v) return ''
    return (v + 'T').replace(/\d(?=(\d{3})+T)/g, '$& ').replace('T', '')
})