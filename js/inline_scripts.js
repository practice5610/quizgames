document.querySelectorAll('.qustion-click .answer-button').forEach(button => {
    button.addEventListener('click', () => {
        document.querySelector('.qustion-click').style.display = 'none';
        document.querySelector('.qustion-click-show').style.display = 'block';
    });
});

document.getElementById("close_sticky_ad_beta").onclick = function(){
         document.getElementById("sticky_ad_beta").style.display="none";
         document.getElementById("sticky_ad_beta").innerHTML="";
       }
    