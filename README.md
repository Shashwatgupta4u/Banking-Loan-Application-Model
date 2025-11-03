# Banking-Loan-Application-And-Model
 - Designed a risk assessment model (99% accuracy, 98% precision) to forecast loan default probabilities for 3,000+ customers, enabling strategic portfolio management and loss mitigation planning. 
 - • Skills: scikit-learn, matplotlib, seaborn, pandas, NumPy, Flask, REST API

***

## 🚀 Features

- **Train and serve credit risk models (Random Forest, XGBoost) on structured loan data**
- **Modern HTML/CSS/JavaScript frontend for user-friendly predictions**
- **Flask web backend for serving ML inference**
- **Interactive result display: default prediction, expected loss, and probability**
- **Automatic preprocessing: scaling, quantile transform, input validation**

***

## 📂 Project Structure

| File                        | Description                                      |
|-----------------------------|--------------------------------------------------|
| `Loan_Data.csv`             | Sample dataset for training and demo             |
| `train_model.py`            | Script to train and save the ML model            |
| `app.py`                    | Flask backend application, routes, and hosting   |
| `index.html`                | Main frontend UI for model input/output          |
| `./static/styles.css`       | Frontend stylesheet for modern look/feel         |
| `./static/script.js`        | Frontend script for async prediction UI          |

***

## 🔨 Quick Start

1. **Clone this repository**
2. **Train the model**
   ```bash
   python train_model.py
   ```
   This will generate `randomforestmodel.pkl` and associated scaler files.
3. **Launch the web app**
   ```bash
   python app.py
   ```
   The app will be available at [http://localhost:5000](http://localhost:5000).
4. **Open your browser:** Enter applicant details to get real-time loan risk predictions.

***

## 🧩 Component Descriptions

- **Backend (Flask):**
  - `app.py`: Loads the trained model and scalers, exposes `/calculate` endpoint for predictions, and serves HTML frontend.
  - `inference.py`: Modularizes the inference logic for scalable deployment or API use.

- **Model Training:**
  - `train_model.py`: Preprocesses `Loan_Data.csv`, performs scaling and quantile transformation, trains a Random Forest classifier, and saves all models/scalers for later use.

- **Frontend:**
  - `index.html`, `styles.css`, `script.js`: Collect loan applicant data, make async calls for risk scoring, and display results using a modern, responsive UI.

***

## 📈 Example Inputs (Features)

- Credit lines outstanding
- Loan amount outstanding
- Total debt outstanding
- Income
- Years employed
- FICO score

***

## ⚙️ Requirements

- Python 3.8+
- Flask
- pandas, scikit-learn, joblib
- (Optional) XGBoost for advanced models

