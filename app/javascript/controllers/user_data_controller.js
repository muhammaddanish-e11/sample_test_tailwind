import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="user-data"
export default class extends Controller {
  static targets = ["phoneNumber", "emailAddress", "emailError", "phoneError", "firstName", "firstNameError", "lastName", "lastNameError"]

  connect() {

  }

  formatPhoneNumber() {

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
