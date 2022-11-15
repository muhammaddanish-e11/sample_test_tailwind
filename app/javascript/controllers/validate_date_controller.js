import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="validate-date"
export default class extends Controller {
  static targets = ["dateField", "dateError"]

  connect() {
  }

  validateDate(e) {
    let date = this.dateFieldTarget.value

    if (date && ( date.length != 10 )) {
      this.dateFieldTarget.value = ""
      this.dateErrorTarget.classList.remove("hidden")

    } else if (date && (!this.isValidDate(date))) {
      this.dateFieldTarget.value = ""
      this.dateErrorTarget.classList.remove("hidden")

    } else {
      this.dateErrorTarget.classList.add("hidden")
    }
  }

  isValidDate(date) {
    return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
  }

}
