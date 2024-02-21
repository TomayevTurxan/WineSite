    import  { useState, useEffect } from "react";
    import "./index.css"
    const PaymentForm = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [expiryMonth, setExpiryMonth] = useState("");
    const [expiryYear, setExpiryYear] = useState("");
    const [cvc, setCvc] = useState("");
    const [cardholderName, setCardholderName] = useState("");
    const [timeLeft, setTimeLeft] = useState(5 * 60 + 1);

    useEffect(() => {
        // Copy input values to card mockup
        const bounds = document.querySelectorAll('[data-bound]');
        bounds.forEach((bound) => {
        const targetId = bound.getAttribute('data-bound');
        const defValue = bound.getAttribute('data-def');
        const targetEl = document.getElementById(targetId);
        bound.addEventListener('keyup', () => targetEl.innerText = bound.value || defValue);
        });

        // Toggle CVC display mode
        const cvc_toggler = document.getElementById('cvc_toggler');
        cvc_toggler.addEventListener('click', () => {
        const target = cvc_toggler.getAttribute('data-target');
        const el = document.getElementById(target);
        el.setAttribute('type', el.type === 'text' ? 'password' : 'text');
        });

        // Timer countdown
        const interval = setInterval(() => {
        setTimeLeft((prevTimeLeft) => {
            if (prevTimeLeft > 0) {
            return prevTimeLeft - 1;
            }
            return prevTimeLeft;
        });
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    const handleInputChange = (e, setter) => {
        setter(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
    };

    const formatTime = (time) => {
        const date = new Date('2000-01-01 00:00:00');
        date.setSeconds(time);
        const str = date.toISOString();
        return [str[14], str[15], str[17], str[18]];
    };

    return (
        <div className="screen flex-center">
        <form className="popup flex p-lg" onSubmit={handleSubmit}>
            <div className="close-btn pointer flex-center p-sm">
            <i className="ai-cross"></i>
            </div>

            {/* CARD FORM */}
            <div className="flex-fill flex-vertical">
            <div className="header flex-between flex-vertical-center">
                <div className="flex-vertical-center">
                <i className="ai-bitcoin-fill size-xl pr-sm f-main-color"></i>
                <span className="title">
                    <strong>AceCoin</strong><span>Pay</span>
                </span>
                </div>
                <div className="timer" data-id="timer">
                <span>{formatTime(timeLeft)[0]}</span><span>{formatTime(timeLeft)[1]}</span>
                <em>:</em>
                <span>{formatTime(timeLeft)[2]}</span><span>{formatTime(timeLeft)[3]}</span>
                </div>
            </div>
            <div className="card-data flex-fill flex-vertical">
                <div className="flex-between flex-vertical-center">
                <div className="card-property-title">
                    <strong>Card Number</strong>
                    <span>Enter 16-digit card number on the card</span>
                </div>
                <div className="f-main-color pointer"><i className="ai-pencil"></i> Edit</div>
                </div>
                <div className="flex-between">
                <div className="card-number flex-vertical-center flex-fill">
                    <div className="card-number-field flex-vertical-center flex-fill">
                    <input
                        className="numbers"
                        type="number"
                        min="1"
                        max="9999"
                        placeholder="0000"
                        value={cardNumber}
                        onChange={(e) => handleInputChange(e, setCardNumber)}
                        data-bound="carddigits_mock"
                        data-def="0000"
                    />
                    </div>
                    <i className="ai-circle-check-fill size-lg f-main-color"></i>
                </div>
                </div>
                <div className="flex-between">
                <div className="card-property-title">
                    <strong>Expiry Date</strong>
                    <span>Enter the expiration date of the card</span>
                </div>
                <div className="card-property-value flex-vertical-center">
                    <div className="input-container half-width">
                    <input
                        className="numbers"
                        data-bound="mm_mock"
                        data-def="00"
                        type="number"
                        min="1"
                        max="12"
                        step="1"
                        placeholder="MM"
                        value={expiryMonth}
                        onChange={(e) => handleInputChange(e, setExpiryMonth)}
                    />
                    </div>
                    <span className="m-md">/</span>
                    <div className="input-container half-width">
                    <input
                        className="numbers"
                        data-bound="yy_mock"
                        data-def="01"
                        type="number"
                        min="23"
                        max="99"
                        step="1"
                        placeholder="YY"
                        value={expiryYear}
                        onChange={(e) => handleInputChange(e, setExpiryYear)}
                    />
                    </div>
                </div>
                </div>
                <div className="flex-between">
                <div className="card-property-title">
                    <strong>CVC Number</strong>
                    <span>Enter card verification code from the back of the card</span>
                </div>
                <div className="card-property-value">
                    <div className="input-container">
                    <input
                        id="cvc"
                        type="password"
                        value={cvc}
                        onChange={(e) => handleInputChange(e, setCvc)}
                    />
                    <i id="cvc_toggler" data-target="cvc" className="ai-eye-open pointer"></i>
                    </div>
                </div>
                </div>
                <div className="flex-between">
                <div className="card-property-title">
                    <strong>Cardholder Name</strong>
                    <span>Enter cardholderS name</span>
                </div>
                <div className="card-property-value">
                    <div className="input-container">
                    <input
                        id="name"
                        data-bound="name_mock"
                        data-def="Mr. Cardholder"
                        type="text"
                        className="uppercase"
                        placeholder="CARDHOLDER NAME"
                        value={cardholderName}
                        onChange={(e) => handleInputChange(e, setCardholderName)}
                    />
                    <i className="ai-person"></i>
                    </div>
                </div>
                </div>
            </div>
            <div className="action flex-center">
                <button type="submit" className="b-main-color pointer">Pay Now</button>
            </div>
            </div>

            {/* SIDEBAR */}
            <div className="sidebar flex-vertical">
            <div className="purchase-section flex-fill flex-vertical">
                <div className="card-mockup flex-vertical">
                <div className="flex-fill flex-between">
                    <i className="ai-bitcoin-fill size-xl f-secondary-color"></i>
                    <i className="ai-wifi size-lg f-secondary-color"></i>
                </div>
                <div>
                    <div id="name_mock" className="size-md pb-sm uppercase ellipsis">{cardholderName}</div>
                    <div className="size-md pb-md">
                    <strong>
                        <span className="pr-sm">&#x2022;&#x2022;&#x2022;&#x2022;</span>
                        <span id="carddigits_mock">{cardNumber}</span>
                    </strong>
                    </div>
                    <div className="flex-between flex-vertical-center">
                    <strong className="size-md">
                        <span id="mm_mock">{expiryMonth}</span>/<span id="yy_mock">{expiryYear}</span>
                    </strong>
                    {/* SVG */}
                    </div>
                </div>
                </div>
                {/* Purchase Props */}
            </div>
            {/* Separation Line */}
            <div className="separation-line"></div>
            {/* Total Section */}
            <div className="total-section flex-between flex-vertical-center">
                <div className="flex-fill flex-vertical">
                <div className="total-label f-secondary-color">You have to Pay</div>
                <div>
                    <strong>549</strong>
                    <small>.99 <span className="f-secondary-color">USD</span></small>
                </div>
                </div>
                <i className="ai-coin size-lg"></i>
            </div>
            </div>
        </form>
        </div>
    );
    };

    export default PaymentForm;
