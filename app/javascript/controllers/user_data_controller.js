import { Controller } from "@hotwired/stimulus"
const keys = ["0","1","2","3","4","5","6","7","8","9"]
// Connects to data-controller="user-data"
export default class extends Controller {
  static targets = ["phoneNumber", "emailAddress", "emailError", "phoneError", "firstName", "firstNameError", "lastName", "lastNameError"]

  connect() {

  }

  formatPhoneNumber(e) {

    let value = this.phoneNumberTarget.value.length > 1 ? this.phoneNumberTarget.value.slice(-1) : this.phoneNumberTarget.value
    if (!keys.includes(value)) {
      if (this.phoneNumberTarget.value.slice("-1") != "-") {
        this.phoneNumberTarget.value = this.phoneNumberTarget.value.slice(0, -1);
      }
    }

    if ([3,7].includes(this.phoneNumberTarget.value.length)) {
      this.phoneNumberTarget.value += "-"
    }
  }

  validatePhoneNumber() {
    let phoneNumber = this.phoneNumberTarget.value
    if (phoneNumber && !(phoneNumber.length <=12) ) {
      this.phoneErrorTarget.classList.remove("hidden")
    } else {
      this.phoneErrorTarget.classList.add("hidden")
    }
  }

  validateEmailAddress() {

    if(this.emailAddressTarget.value && !this.emailAddressTarget.value.includes("@") ) {
      this.emailErrorTarget.classList.remove("hidden")
    } else {
      this.emailErrorTarget.classList.add("hidden")
    }
  }

  focusEmailAddress() {

    if(this.emailAddressTarget.value) {
      this.emailErrorTarget.classList.add("hidden")
    }
  }

  focusPhoneNumber() {

    if(this.phoneNumberTarget.value) {
      this.phoneErrorTarget.classList.add("hidden")
    }
  }

  focusFirstName() {

    if(this.firstNameTarget.value) {
      this.firstNameErrorTarget.classList.add("hidden")
    }
  }

  focusLastName() {

    if(this.lastNameTarget.value) {
      this.lastNameErrorTarget.classList.add("hidden")
    }
  }

  validateForm() {

    if (!this.firstNameTarget.value) {
      this.firstNameErrorTarget.classList.remove("hidden")

    } else if (!this.lastNameTarget.value) {
      this.lastNameErrorTarget.classList.remove("hidden")

    } else if (!this.phoneNumberTarget.value) {
        this.phoneErrorTarget.classList.remove("hidden")

    } else if (!this.emailAddressTarget.value) {
      this.emailErrorTarget.classList.remove("hidden")

    } else {
      this._submitForm()
    }
  }

  _submitForm() {
    this.element.requestSubmit()
  }
}
