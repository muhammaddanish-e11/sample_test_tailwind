import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="employer"
export default class extends Controller {
  static targets = ["employerError", "employer"]

  connect() {
  }

  validateEmployer() {
    if (!this.employerTarget.value) {
      this.employerErrorTarget.classList.remove("hidden")
    } else {
      this.employerErrorTarget.classList.add("hidden")
    }
  }
}
