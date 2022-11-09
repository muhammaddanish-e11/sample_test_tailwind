import { Controller } from "@hotwired/stimulus"


// Connects to data-controller="employment"
export default class extends Controller {
  static targets = ["dateStarted", "dateEnded"]

  connect() {
    $("#dateStarted").datepicker()
    $("#dateEnded").datepicker()
  }

  validateDate(e) {
    debugger
  }
}
