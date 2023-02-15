function validate() {
    //available inpute data
    const checkbox = document.getElementById("company");
    const companyInfo = document.getElementById("companyInfo");
    const form = document.getElementById("registerForm");
  
    //company info checkbox
    checkbox.addEventListener("change", () => {
      if (checkbox.checked) {
        companyInfo.style.display = "block";
      } else {
        companyInfo.style.display = "none";
      }
    });
  
    //submit form valdation
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const name = document.getElementById("username");
      const email = document.getElementById("email");
      const pswd = document.getElementById("password");
      const confirm = document.getElementById("confirm-password");
      const companyNum = document.getElementById("companyNumber");
      //const submit = document.getElementById('submit');
  
      const valid = document.getElementById("valid");
  
      //validation of the data
      const namePattern = /^[a-zA-Z0-9]+$/;
      const emailPattern = /.*@.*\..*/;
      const pswdPattern = /^[\w]+$/;
  
      let nameValid = false;
      let passwordValid = false;
      let rePassValid = false;
      let emailValid = false;
      let companyNumValid = false;
  
      if (
        namePattern.test(name.value) &&
        name.value.length >= 3 &&
        name.value.length <= 20
      ) {
        nameValid = true;
      }
  
      if (emailPattern.test(email.value)) {
        emailValid = true;
      }
  
      if (
        pswdPattern.test(pswd.value) &&
        pswd.value.length >= 5 &&
        pswd.value.length <= 15 &&
        pswd.value === confirm.value
      ) {
        passwordValid = true;
        rePassValid = true;
      }
  
      if (checkbox.checked) {
        if (companyNum.value >= 1000 && companyNum.value <= 9999) {
          companyNumValid = true;
        }
      } else {
        companyNumValid = true;
      }
  
      if (
        nameValid &&
        emailValid &&
        passwordValid &&
        rePassValid &&
        companyNumValid
      ) {
        valid.style.display = "block";
      } else {
        valid.style.display = "none";
      }
  
      if (!nameValid) {
        name.style.borderColor = "red";
      } else {
        name.style.border = "none";
      }
  
      if (!emailValid) {
        email.style.borderColor = "red";
      } else {
        email.style.border = "none";
      }
  
      if (!passwordValid) {
        pswd.style.borderColor = "red";
      } else {
        pswd.style.border = "none";
      }
  
      if (!rePassValid) {
        confirm.style.borderColor = "red";
      } else {
        confirm.style.border = "none";
      }
  
      if (!companyNumValid) {
        companyNum.style.borderColor = "red";
      } else {
        companyNum.style.border = "none";
      }
    });
  }  