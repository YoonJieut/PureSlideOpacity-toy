console.log('hi');

let leftMove= (width) => {
  let temp = 0;
  let leftMoving = setInterval(()=>{
    if(temp > -width) {
      temp = temp -7;
      slideUl.style.left = temp+"px";
    } else {
      clearInterval(leftMoving)
    }
  }, 0.5)
}

// ! 첫 요소 삭제 및 뒤로 이동
let appnedSomething = ()=>{
  let remove1st = slideUl.removeChild(slideUl.children[0]);
  slideUl.appendChild(remove1st);
  slideUl.style.left = 0;
}

// 최종 조립
// setTimeout(()=>{
//   // 시작 전 타임아웃
//     setInterval(()=>{
//       leftMove(700);
//       setTimeout(()=>{
//         appnedSomething();
//       },1000);
//     }, 5000)
//   },5000)