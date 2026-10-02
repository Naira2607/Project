document.addEventListener("DOMContentLoaded", function () {

  

  const questions = document.querySelectorAll(".question");

  questions.forEach(function (question) {

    const answers = question.querySelectorAll(".answer");

    answers.forEach(function (answer) {

      answer.addEventListener("click", function () {

        answers.forEach(function (item) {
          item.classList.remove("selected");
        });

        answer.classList.add("selected");

        updatePlan();

      });

    });

  });


  

  function getSelectedValue(questionId, defaultValue) {

    const selected = document.querySelector(
      `#${questionId} .answer.selected h3`
    );

    if (selected) {
      return selected.innerText;
    }

    return defaultValue;
  }


  

  function updatePlan() {

    const q1 = getSelectedValue("q1", "Filter");

    const q2 = getSelectedValue(
      "q2",
      "Single Origin"
    );

    const q3 = getSelectedValue(
      "q3",
      "250g"
    );

    const q4 = getSelectedValue(
      "q4",
      "Filter"
    );

    const q5 = getSelectedValue(
      "q5",
      "Every 2 weeks"
    );


    const summaryText =
      document.getElementById("summaryText");


    summaryText.innerHTML = `
      “I drink my coffee as
      <span>${q1}</span>, with a
      <span>${q2}</span>
      type of bean.
      <span>${q3}</span>
      ground suitable for
      <span>${q4}</span>,
      sent to me
      <span>${q5}</span>.”
    `;

  }


  

  const createPlanBtn =
    document.querySelector(".create button");

  const modalOverlay =
    document.getElementById("modalOverlay");

  const modalQuote =
    document.getElementById("modalQuote");

  const modalPrice =
    document.getElementById("modalPrice");

  const closeModalBtn =
    document.getElementById("closeModal");


  

  function updateModalContent() {

    const q1 = getSelectedValue(
      "q1",
      "Filter"
    );

    const q2 = getSelectedValue(
      "q2",
      "Single Origin"
    );

    const q3 = getSelectedValue(
      "q3",
      "250g"
    );

    const q4 = getSelectedValue(
      "q4",
      "Filter"
    );

    const q5 = getSelectedValue(
      "q5",
      "Every 2 weeks"
    );


    modalQuote.innerHTML = `
      “I drink my coffee as
      <span>${q1}</span>, with a
      <span>${q2}</span>
      type of bean.
      <span>${q3}</span>
      ground suitable for
      <span>${q4}</span>,
      sent to me
      <span>${q5}</span>.”
    `;


    
    if (q3 === "250g") {

      modalPrice.innerText =
        "$14.00 / mo";

    }

    else if (q3 === "500g") {

      modalPrice.innerText =
        "$22.00 / mo";

    }

    else if (q3 === "1000g") {

      modalPrice.innerText =
        "$35.00 / mo";

    }

  }


  

  function openModal() {

    updateModalContent();

    modalOverlay.classList.add("active");

    document.body.style.overflow = "hidden";

  }


  

  function closeModal() {

    modalOverlay.classList.remove("active");

    document.body.style.overflow = "";

  }


  

  createPlanBtn.addEventListener(
    "click",
    function () {

      const allQuestions =
        document.querySelectorAll(".question");

      let allSelected = true;


      allQuestions.forEach(function (question) {

        const selected =
          question.querySelector(
            ".answer.selected"
          );

        if (!selected) {
          allSelected = false;
        }

      });


      if (!allSelected) {

        alert(
          "Please select an option from every question."
        );

        return;

      }


      openModal();

    }
  );


  

  closeModalBtn.addEventListener(
    "click",
    closeModal
  );


  

  modalOverlay.addEventListener(
    "click",
    function (event) {

      if (event.target === modalOverlay) {

        closeModal();

      }

    }
  );


 

  document.addEventListener(
    "keydown",
    function (event) {

      if (
        event.key === "Escape" &&
        modalOverlay.classList.contains("active")
      ) {

        closeModal();

      }

    }
  );


  

  document
    .querySelectorAll(".question-title")
    .forEach(function (title) {

      title.addEventListener(
        "click",
        function () {

          const arrow =
            this.querySelector("span");

          const answers =
            this.nextElementSibling;


          arrow.classList.toggle("open");

          answers.classList.toggle("hidden");

        }
      );

    });


  

  const sideLinks =
    document.querySelectorAll(
      ".side-menu a"
    );


  sideLinks.forEach(function (link) {

    link.addEventListener(
      "click",
      function () {

        sideLinks.forEach(
          function (item) {

            item.classList.remove(
              "active"
            );

          }
        );


        this.classList.add("active");

      }
    );

  });


  

  updatePlan();

});
const checkoutBtn = document.querySelector(".checkout-btn");

if (checkoutBtn) {

  checkoutBtn.addEventListener("click", function () {

    window.location.href = "./checkout.html";

  });

}
