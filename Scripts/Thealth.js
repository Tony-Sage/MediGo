     document.querySelectorAll(".each-question").forEach(
      question =>{
        let toggleAnswer = question.querySelector(".questions");

        toggleAnswer.addEventListener("click", ()=>{
          question.classList.toggle("active");
        })
      }
    )