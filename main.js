const allTheFaqBoxes = document.querySelectorAll(".faqWrapper");

allTheFaqBoxes.forEach( (allTheFaqBoxe) => {
  allTheFaqBoxe.addEventListener("click", ()=>{
    allTheFaqBoxe.classList.toggle('show');
  });
});

/*

for(let i = 0; i < allTheFaqBoxes.length; i++){
  allTheFaqBoxes[i].addEventListener('click', function() {
    this.classList.toggle("show");
  });
} */

const allFaqBoxes = document.querySelectorAll('.faqWrapper');

allFaqBoxes.forEach((faqWrapper) => {
  faqWrapper.addEventListener('click', () => {
    alert("Hey!");
  });
});

allFaqBoxes = document.getElementsByClassName('faqWrapper');

for(i = 0; i<allFaqBoxes.length; i++){
  allFaqBoxes[i].addEventListener('click', function() {

    this.classList.toggle('show');

  });
}
