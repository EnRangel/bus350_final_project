import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';
import './footer.css';
import logo from "./logo.png";

function Resources() {
    const [loanAmount, setLoanAmount] = useState('');
    const [interestRate, setInterestRate] = useState('');
    const [loanTerm, setLoanTerm] = useState('');
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const [balance, setBalance] = useState('');
    const [creditRate, setCreditRate] = useState('');
    const [fixedPayment, setFixedPayment] = useState('');
    const [paymentPlan, setPaymentPlan] = useState([]);

    const calculateLoanPayment = () => {
        const principal = parseFloat(loanAmount);
        const rate = parseFloat(interestRate) / 100 / 12;
        const term = parseInt(loanTerm) * 12;

        if (principal && rate && term) {
            const payment = (principal * rate) / (1 - Math.pow(1 + rate, -term));
            setMonthlyPayment(payment.toFixed(2));
        } else {
            alert("Please enter valid values for loan calculation!");
        }
    };

    const calculateCreditPaymentPlan = () => {
        const balanceVal = parseFloat(balance);
        const rateVal = parseFloat(creditRate) / 100 / 12;
        const paymentVal = parseFloat(fixedPayment);

        if (balanceVal && rateVal && paymentVal) {
            if (paymentVal <= balanceVal * rateVal) {
                alert("The monthly payment must be greater than the monthly interest to reduce the balance.");
                return;
            }

            let remainingBalance = balanceVal;
            let month = 0;
            const plan = [];

            while (remainingBalance > 0.01) {
                const interest = remainingBalance * rateVal;
                let payment = paymentVal;

                if (remainingBalance + interest <= payment) {
                    payment = remainingBalance + interest;
                }

                const principal = payment - interest;
                remainingBalance -= principal;
                month += 1;

                plan.push({
                    month,
                    payment: payment.toFixed(2),
                    interest: interest.toFixed(2),
                    principal: principal.toFixed(2),
                    remainingBalance: remainingBalance > 0 ? remainingBalance.toFixed(2) : '0.00',
                });
            }

            setPaymentPlan(plan);
        } else {
            alert("Please enter valid values for the payment plan calculation!");
        }
    };

    return (
        <div className="d-flex flex-column min-vh-100">
            <Navbar />

            <div className="container text-center mt-5 flex-grow-1">
                <h1>Free to Use Tools</h1>
                <p className="lead">Use the calculators below to manage your loans and credit card payments effectively.</p>
                <br/>
                <div className="mt-4 mb-5">
                    <h2>Loan Calculator</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <input
                                type="number"
                                className="form-control mb-2"
                                placeholder="Loan Amount ($)"
                                value={loanAmount}
                                onChange={(e) => setLoanAmount(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-control mb-2"
                                placeholder="Annual Interest Rate (%)"
                                value={interestRate}
                                onChange={(e) => setInterestRate(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-control mb-2"
                                placeholder="Loan Term (Years)"
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(e.target.value)}
                            />
                            <button className="btn btn-primary mb-3" onClick={calculateLoanPayment}>
                                Calculate Monthly Payment
                            </button>
                            {monthlyPayment && (
                                <p className="alert alert-success">Your Monthly Payment: ${monthlyPayment}</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Credit Card Payment Plan */}
                <div className="mt-4 mb-5">
                    <h2>Credit Card Payment Plan</h2>
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <input
                                type="number"
                                className="form-control mb-2"
                                placeholder="Credit Card Balance ($)"
                                value={balance}
                                onChange={(e) => setBalance(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-control mb-2"
                                placeholder="Annual Interest Rate (%)"
                                value={creditRate}
                                onChange={(e) => setCreditRate(e.target.value)}
                            />
                            <input
                                type="number"
                                className="form-control mb-2"
                                placeholder="Monthly Payment Amount ($)"
                                value={fixedPayment}
                                onChange={(e) => setFixedPayment(e.target.value)}
                            />
                            <button className="btn btn-primary mb-3" onClick={calculateCreditPaymentPlan}>
                                Calculate Payment Plan
                            </button>
                            {paymentPlan.length > 0 && (
                                <div className="alert alert-info">
                                    <h4>Payment Plan:</h4>
                                    <ul className="list-unstyled">
                                        {paymentPlan.map((item) => (
                                            <li key={item.month}>
                                            <br/>
                                                <strong>Month {item.month}:</strong> Payment: ${item.payment}, Interest: ${item.interest},
                                                Principal: ${item.principal}, Remaining Balance: ${item.remainingBalance}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="text-center mt-auto p-4" style={{ backgroundColor: 'darkblue', color: 'white' }}>
                <img id="csumb_logo" src={logo} alt="CSUMB Logo, an otter." className="mb-3" style={{ width: '150px' }} />
                <p className="mb-1">BUS350 Financial Literacy. 2024 Ⓒ Rangel, Luciano, Calleros, Williams</p>
                <p>
                    <strong>Disclaimer:</strong> This information on this webpage is used for academic purposes only.
                </p>
            </footer>
        </div>
    );
}

export default Resources;
