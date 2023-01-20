import http from './http.js';

function test() {
    http.test();
    window.console.log('controller test');
    return 'b';
}

export default {
    test
}