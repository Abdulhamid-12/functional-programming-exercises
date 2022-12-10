// Directions: Rewrite the imperative code below as Object-Oriented

let status = "active";
let warp = 2;
let type = "Dilithium Crystal";
let status_report = "Captain, ";

if (status === "active" && warp <= 4) {
  status_report += "the engines are active and we could be going faster.";
} else if (status === "active" && warp > 4) {
  status_report += "the engines are active and we are going " + warp + ".";
} else if (status === "down") {
  status_report += "the engines are down.";
} else {
  status_report += "the comms are down and we can`t reach engineering.";
}

console.log(status_report);

class Report {
  constructor(status, warp, type) {
    this.status = status;
    this.warp = warp;
    this.type = type;
  }

  getStatusReport() {
    let status_report = "Captain, ";

    if (this.status === "active" && this.warp <= 4) {
      return status_report += "the engines are active and we could be going faster.";
    } else if (this.status === "active" && this.warp > 4) {
      return status_report += "the engines are active and we are going " + this.warp + ".";
    } else if (this.status === "down") {
      return status_report += "the engines are down.";
    } 
    
    return status_report += "the comms are down and we can`t reach engineering.";
  }
}
// let status = "active";
// let warp = 2;
// let type = "Dilithium Crystal";
// let status_report = "Captain, ";

const report = new Report('active', 6, 'Dilithium Crystal');

console.log(report.getStatusReport());