var circle = document.querySelector('.circle');
let i;
let j;
let k;
let l;
let moveX = 0;
let moveY = 0;
let moveStep = 10;
window.addEventListener('keydown',(e)=>{
    if(e.key == 'w'){
        if(moveY == 0){
            return;
        }
        circle.style.top = (moveY - moveStep) + 'px';
        moveY -= moveStep;
    }else if(e.key == 'a'){
        if(moveX == 0){
            return;
        }
        circle.style.left = (moveX - moveStep) + 'px';
        moveX -= moveStep;
    }else if(e.key == 's'){
        if(moveY == 200){
            return;
        }
        circle.style.top = (moveY + moveStep) + 'px';
        moveY += moveStep;
    }else if(e.key == 'd'){
        if(moveX == 400){
            return;
        }
        circle.style.left = (moveX + moveStep) + 'px';
        moveX += moveStep;
    }
})