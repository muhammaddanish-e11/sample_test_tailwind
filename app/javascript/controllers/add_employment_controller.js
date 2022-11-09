import { Controller } from "@hotwired/stimulus"

const idPrefix = "user_employments_attributes_"
const namePrefix = "user[employments_attributes]"
// Connects to data-controller="add-employment"
export default class extends Controller {
  static targets = ["employmentBlock", "parentBlock", "sbmtBtn", "form"]

  connect() {
  }

  addNewEmployment() {
    let newEmploymentBlock = this.employmentBlockTarget.cloneNode(true)
    let formFields  = newEmploymentBlock.getElementsByTagName("input")

    let i = 0;
    let randomId = Date.now()

    while (i < formFields.length) {
      let idPostFix    = formFields[i].id.split(idPrefix)[1].split("0")[1]
      formFields[i].id = idPrefix + randomId + idPostFix

      let namePostFix  = formFields[i].name.split(namePrefix)[1].split("[0]")[1]
      formFields[i].name = namePrefix + "[" + randomId + "]" + namePostFix

      formFields[i].value = ""
      i++;
    }
    this.parentBlockTarget.appendChild(newEmploymentBlock)
    this.checkSubmitAvailability()
  }

  checkSubmitAvailability() {
    let inputs = document.getElementsByClassName("js-input")
    let i = 0;

    while (i < inputs.length) {
      if (!inputs[i].value) {
        this.sbmtBtnTarget.disabled = true
        this.sbmtBtnTarget.classList.add("opacity-25")
        break;
      }
      i++;
    }

    if (i == inputs.length) {
      this.sbmtBtnTarget.disabled = false
      this.sbmtBtnTarget.classList.remove("opacity-25")
    }
  }

  validateForm() {
    this.formTarget.requestSubmit()
  }
}
