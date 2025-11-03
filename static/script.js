var getResults = (result) => {
    console.log(result);
    console.log(result.prediction);
    console.log(result.loss);
    const res = result;
    // Set results in modal
    document.getElementById('resultText').innerText = `
        Predicted to Default Loan?: ${res.prediction}
        Probability of Default: ${(res.probability).toFixed(2)} ${res.probability < 0.5 ? "✅" : "❌"}
        Estimated Loss: Rs. ${(res.loss).toFixed(2)}`;

    // Show modal
    document.getElementById("resultModal").style.display = "block";
}

var callAPI = (clo, lao, tdo, income, ye, fs, rr) => {
    const data = {
        credit_lines_outstanding: parseFloat(clo),
        loan_amt_outstanding: parseFloat(lao),
        total_debt_outstanding: parseFloat(tdo),
        income: parseFloat(income),
        years_employed: parseFloat(ye),
        fico_score: parseFloat(fs),
        recovery_rate: parseFloat(rr) / 100
    };
    
    var raw = JSON.stringify(data);
    
    var requestOptions = {
        mode: 'cors',
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: raw,
        redirect: 'follow'
    };

    console.log("Fetching API...");
    
    fetch("https://gaafw01ag4.execute-api.eu-west-2.amazonaws.com/dev/predict", requestOptions)
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(result => getResults(result))
    .catch(error => console.log('error', error));
}

function closeModal() {
    document.getElementById("resultModal").style.display = "none";
}

// Prevent form submission and call API
document.getElementById("predictionForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents the default form submission behavior
    callAPI(
        document.getElementById('clo').value,
        document.getElementById('lao').value,
        document.getElementById('tdo').value,
        document.getElementById('income').value,
        document.getElementById('ye').value,
        document.getElementById('fs').value,
        document.getElementById('rr').value
    );
});