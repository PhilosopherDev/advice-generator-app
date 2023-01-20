import controller from './controller.js';

document.querySelector('button').addEventListener('click', () => {
    main();
})

function main() {
    const a = controller.test();

    console.log('index.js', { a });
}

export default {
    main
}