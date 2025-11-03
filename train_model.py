import pandas as pd
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import StandardScaler, QuantileTransformer
import joblib

# Load the dataset
df = pd.read_csv('./data/Loan_Data.csv')

# Feature selection and target variable
features = ['credit_lines_outstanding', 'loan_amt_outstanding', 'total_debt_outstanding', 'income', 'years_employed', 'fico_score']
X = df[features]
y = df["default"]

# Scaling Data
standard = StandardScaler()
X_scaled = standard.fit_transform(X)

# Correcting Skewness
q_transformer = QuantileTransformer()
X_transformed = q_transformer.fit_transform(X_scaled)

# Model Training
rfc = RandomForestClassifier(n_estimators=1000)
rfc.fit(X_transformed, y)

# Save the trained model and scalers using joblib
joblib.dump(rfc, 'random_forest_model.pkl')
joblib.dump(standard, 'standard_scaler.pkl')
joblib.dump(q_transformer, 'quantile_transformer.pkl')

print("Model and scalers saved successfully!")