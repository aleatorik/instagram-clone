'use strict';

const commentInputBox = document.querySelector('.comment-box');
const newCommentBox = document.querySelector('.content__text');
const commentContent = document.createTextNode(commentInputBox.value);
const commentUsername = document.querySelector('.content__id');
const commentFirstClass = document.querySelector('.info__comment');

// const userId = document.getElementById('userId');
// const accountName = document.querySelector('account__name');

commentInputBox.addEventListener('keyup', (e) => {
  const postBtn = document.querySelector('.postBtn');
  if (commentInputBox.value !== '') {
    postBtn.style.color = '#2980b9';
  } else {
    postBtn.style.color = '#bbdefb';
  }
});

commentInputBox.addEventListener('keypress', (e) => {
  if (e.keyCode == 13) {
    e.preventDefault();
    commentInputBox.value = '';
    commentUsername.innerHTML = 'daseulsong';

    // code below means pushing content user types to InputBox
    // 1. create ul tag with class name inside div tag(info__comment)
    const ul = document.createElement('ul');
    const div = document.createElement('div');
    const li = document.createElement('li');
    const span = document.createElement('span');
    const p = document.createElement('p');

    ul.classList.add('comment__content');
    commentFirstClass.appendChild(ul);
    div.classList.add('content__left');
    ul.appendChild(div);
    //li.classList.add();
    div.appendChild(li);
    span.classList.add('content__id');
    li.appendChild(span);
    p.classList.add('content__text');
    div.appendChild(p);

    div.className = 'content__left';
    newCommentBox.appendChild(commentContent);
  }
});

//  id(.content__id) 값에는 고정으로 user 식으로 넣고(innerHtml = "something")
// 오른쪽(.content__text)에만 입력한 content가 받아올 수 있도록 하기
