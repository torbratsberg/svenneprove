import { useState, useEffect } from 'react';

function getDate() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

function Field({id, label, type = 'text', required = false}) {
    return (
        <div>
            <label htmlFor={id}>{label} {required ? '*' : ''}</label>
            <input
                id={id}
                type={type}
                name={id}
                placeholder={label}
                required={required}
                min={type == 'date' ? getDate() : null}
            />
        </div>
    );
}

function BookingForm(props) {
    const [styles, setStyles] = useState({});
    const [times, setTimes] = useState(0);
    const [submitted, setSubmitted] = useState(0);

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        document.addEventListener('keyup', e => {
            if (e.key === 'Escape') {
                props.setShowForm(false);
            }
        });

        setStyles({
            opacity: 1,
            transform: 'scale(1)',
        });

        return () => {
            document.body.style.overflow = 'auto';
        }
    }, []);

    const changeHandler = (e) => {
        if (e.target.type == 'checkbox') {
            console.log(e.target.checked);
            if (e.target.checked) {
                setTimes(++times);
            } else {
                setTimes(--times);
            }
        }
    }

    const submit = (e) => {
        e.preventDefault();

        setSubmitted(true);
    }

    return (
        <div className="BookingForm" style={styles}>
            <div className="inner-wrapper">
                {submitted == false ?
                    <>
                        <h2>Book tid</h2>
                        <p className="required-explainer">* = Obligatorisk</p>

                        <form onChange={changeHandler} method="GET" onSubmit={(e) => e.preventDefault()}>
                            <Field required={true} id="navn" label="Navn" />
                            <Field required={true} id="telefon" label="Telefon" />
                            <Field required={true} id="email" label="Email" type="email" />
                            <Field required={true} id="alder" label="Alder" type="number"/>
                            <Field required={true} id="adresse" label="Adresse" />
                            <Field required={true} id="zip" label="Post nr." />
                            <Field required={true} id="dato" label="Dato" type="date" />

                            <fieldset>
                                <legend>Tidspunkt</legend>
                                <Field id="time-a" label="09:00 - 12:00" type="checkbox" />
                                <Field id="time-b" label="12:00 - 15:00" type="checkbox" />
                                <Field id="time-c" label="18:00 - 21:00" type="checkbox" />
                            </fieldset>
                        </form>

                        {times > 0 &&
                            <div className="info-wrapper">
                                <h3>Bærekraftsfaktaer</h3>
                                <p>{times * 3} timer hos oss kan spøre miljøet for ca. {Math.floor(Math.random() * 2 + 10) * times}kvm<sup>2</sup> CO<sup>2</sup></p>
                            </div>
                        }

                        <div className="sum-wrapper">
                            <h3>Oppsummering</h3>

                            <div className="sum-table">
                                <div className="top left" dangerouslySetInnerHTML={{__html: '<p>Booking 3t</p>'.repeat(times)}}></div>
                                <div className="top right" dangerouslySetInnerHTML={{__html: '<p>200</p>'.repeat(times)}}></div>
                                <div className="bottom left">
                                    <h4>Sum</h4>
                                </div>
                                <div className="bottom right">
                                    <p>{200 * times} NOK</p>
                                </div>
                            </div>
                        </div>


                        <button type="submit" onClick={submit} className={`btn large ${times > 0 ? '' : 'disabled'}`}>Betal</button>
                    </>
                :
                    <>
                        <h2>Takk for din booking.</h2>
                        <p>Du vil motta en bekreftelse e-mail straks.</p>
                    </>
                }
            </div>
        </div>
    );
}

export default BookingForm;
