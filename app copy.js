console.log('helo');

const slideUl = document.getElementById('slideUl');
const itemList = document.getElementsByTagName('li');
console.dir(slideUl);

// ! opacity가 0~1로 증가하는 로직
const On_2nd = ()=>{
  let temp = 0;
  let incre = setInterval(()=>{
    temp++
    itemList[1].style.opacity = temp/100;
    if(temp === 100){
      clearInterval(incre);
      console.log('incre 종료')
    };
  },0.5);
  
};

// ! opacity가 0으로 감소하는 로직
const Off_1st = ()=>{
  let temp1 = 100;
  let decre = setInterval(()=>{
    temp1--
    itemList[0].style.opacity = temp1/100;
    if(temp1 === 0){
      clearInterval(decre);
      console.log('decre 종료')
    };
  },0.5);

};

// ! 자식을 옮겨 줍니다.
const moveChild =()=>{
  let removeC = slideUl.removeChild(itemList[0]);
  slideUl.appendChild(removeC);
};

// 함수 조립
setInterval(()=>{
  console.log('main 실행')
  Off_1st();
  On_2nd();
  setTimeout(()=>{
    console.log('move child 실행')
    moveChild();
  },2000);
}, 7000)

