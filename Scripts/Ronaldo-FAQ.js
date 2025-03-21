document.addEventListener("DOMContentLoaded", function () {
  fetch("faq.xml")
    .then(response => response.text())
    .then(data => {
      let parser = new DOMParser();
      let xmlDoc = parser.parseFromString(data, "text/xml");
      let faqs = xmlDoc.getElementsByTagName("faq");
      let faqContainer = document.getElementById("faq-container");

      for (let i = 0; i < faqs.length; i++) {
        let question = faqs[i].getElementsByTagName("question")[0].textContent;
        let answer = faqs[i].getElementsByTagName("answer")[0].textContent;

        let faqDiv = document.createElement("div");
        faqDiv.classList.add("faq");

        let questionDiv = document.createElement("div");
        questionDiv.classList.add("question");
        questionDiv.textContent = question;

        let answerDiv = document.createElement("div");
        answerDiv.classList.add("answer");
        answerDiv.textContent = answer;

        faqDiv.appendChild(questionDiv);
        faqDiv.appendChild(answerDiv);
        faqContainer.appendChild(faqDiv);

        questionDiv.addEventListener("click", function () {
          answerDiv.style.display = answerDiv.style.display === "block" ? "none" : "block";
        });
      }
    });
});