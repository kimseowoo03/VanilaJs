let ul = document.getElementById('ul');
let enter = document.getElementById('enter');
enter.addEventListener('click', newli);

function newli() {
    const textBox = document.getElementById('textBox');

    //li 생성
    const li = document.createElement('li');
    
    //글자 넣을 곳 생성
    const textSpan = document.createElement('span');
    textSpan.innerText = textBox.value ;

    //삭제 버튼 생성
    const deletBtn = document.createElement('button');
    deletBtn.innerText = '삭제';
    deletBtn.addEventListener('click', deletFuntion)

    //수정 버튼 생성
    const fixBtn = document.createElement('button');
    fixBtn.innerText = '수정';
    fixBtn.addEventListener('click', fixFunction);

    //연결
    li.appendChild(textSpan);
    li.appendChild(deletBtn);
    li.appendChild(fixBtn);
    ul.prepend(li);
    textBox.value = '';
}
function deletFuntion(e) {
    e.target.parentNode.remove();
}
function fixFunction(e) {
    //span -> input 값 가져오기 및 대체
    const input = document.createElement('input');
    input.type = 'text';
    input.value = e.target.parentNode.childNodes[0].innerText;
    e.target.parentNode.childNodes[0].replaceWith(input);

    //확인 버튼 생성
    const confirmBtn = document.createElement('button');
    confirmBtn.innerText = '확인';
    confirmBtn.addEventListener('click', confirmFunction);

    //수정버튼 -> 확인버튼 대체
    e.target.replaceWith(confirmBtn);
}
function confirmFunction(e) {
    //input -> span 값 가져오기 및 대체
    const span = document.createElement('span');
    span.innerText = e.target.parentNode.childNodes[0].value;
    e.target.parentNode.childNodes[0].replaceWith(span);

    //확인버튼 -> 수정버튼 대체
    const secondFixBtn = document.createElement('button');
    secondFixBtn.innerText = '수정';
    secondFixBtn.addEventListener('click', fixFunction);
    e.target.replaceWith(secondFixBtn);
}