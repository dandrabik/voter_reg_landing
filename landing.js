const labels = ["Voted", "Did Not Vote"];
const colors = ['rgba(255, 65, 70, 1)', 'rgba(151, 151, 151, 1)'];
const chartType = 'pie';
const data2012 = [49, 51];
const data2014 = [24, 76];
const chart2012ID = document.getElementById("harvardRegistration2012");
const chart2014ID = document.getElementById("harvardRegistration2014");
const options = {
  legend: {
    labels: {
      fontColor: 'white'
    }
  }
}

var chart2012 = new Chart(chart2012ID, {
  type: chartType,
  data: {
      labels: labels,
      datasets: [{
          data: data2012,
          backgroundColor: colors
      }]
  },
  options: options
});

var chart2014 = new Chart(chart2014ID, {
  type: chartType,
  data: {
      labels: labels,
      datasets: [{
          data: data2014,
          backgroundColor: colors
      }]
  },
  options: options
});



