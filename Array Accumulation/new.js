let strhold = [];


function validate() {
    let store = document.getElementById("one");
    let mine = store.value.split(',');

    let all = mine.join(' ');
    console.log(all);

    strhold.push(all);

    store.value = ' ';

    console.log(strhold);
}