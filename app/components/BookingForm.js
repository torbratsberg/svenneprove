import { useState, useEffect } from 'react';
import { createRef } from 'react';

import InputField from './InputField';

function SumTable({ times }) {

    return (
        <div className="sum-table">
            {!!times && <div className="top left" dangerouslySetInnerHTML={{__html: '<p>Booking 3t</p>'.repeat(times)}}></div>}
            {!!times && <div className="top right" dangerouslySetInnerHTML={{__html: '<p>200</p>'.repeat(times)}}></div>}
            <div className="bottom left">
                <p>Sum</p>
            </div>
            <div className="bottom right">
                <p>{200 * times} NOK</p>
            </div>
        </div>
    );
}

function BookingForm(props) {
    const [styles, setStyles] = useState({});
    const [times, setTimes] = useState(0);
    const [submitted, setSubmitted] = useState(0);
    const [rando, setRando] = useState(Math.random());
    const form = createRef();

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
            if (e.target.checked) {
                setTimes(++times);
            } else {
                setTimes(--times);
            }
        } else if (e.target.type == 'date') {
            setRando(Math.random());
            setTimes(0);
            form.current.querySelectorAll('input[type="checkbox"]').forEach(item => {
                item.checked = false;
            });
        }
    }

    const validators = {
        text: (input) => {
            if (input.value == '') return 'Tomt felt';
        },
        tel: (input) => {
            if (input.value == '') return 'Tomt felt';
            if ((/[a-zA-Z]/g).test(input.value)) return 'Ikke ett gyldig nummer';
            if (!(/([0-9]([ ])?){8}/g).test(input.value)) return 'Ikke ett gyldig nummer';
        },
        email: (input) => {
            if (input.value == '') return 'Tomt felt';
            if (!(/.+@.+[.].+/g).test(input.value)) return 'Ikke en email adresse';
        },
        number: (input) => {
            if (!input.value) return 'Ikke ett tall';
        },
        date: (input) => {
            if (input.value == '') return 'Tomt felt';
            if (new Date(input.value) < new Date()) return 'Dato har allerede vært'
        }
    }

    const blurHandler = (e) => {
        const errMsg = (msg) => '<p class="field-error-message">' + msg + '...</p>';

        if (validators[e.target.type]) {
            e.target.parentElement.querySelectorAll('.field-error-message')
                .forEach(item => item.remove());

            const err = validators[e.target.type](e.target);
            if (err) {
                e.target.insertAdjacentHTML('afterEnd', errMsg(err))
            }
        }
    }

    const submit = (e) => {
        e.preventDefault();

        if (!form.current) return;

        const formData = new FormData(form.current);

        for (let [_name, value] of formData.entries()) {
            if (value == '') return;
        }

        setSubmitted(true);
    }

    return (
        <div className="BookingForm" style={styles}>
            <div className="inner-wrapper">
                {submitted == false ?
                    <>
                        <h2>Book tid på en arbeidsstasjon</h2>
                        <p className="required-explainer">* = Obligatorisk</p>

                        <form ref={form} onBlur={blurHandler} onChange={changeHandler} method="GET" onSubmit={(e) => e.preventDefault()}>
                            <InputField required={true} id="navn" label="Navn" />
                            <InputField required={true} id="telefon" label="Telefon" type="tel" />
                            <InputField required={true} id="email" label="Email" type="email" />
                            <InputField required={true} id="alder" label="Alder" type="number"/>
                            <InputField required={true} id="adresse" label="Adresse" />
                            <InputField required={true} id="zip" label="Post nr." />
                            <InputField required={true} id="dato" label="Dato" type="date" />

                            <fieldset>
                                <label><legend>Tidspunkt *</legend></label>
                                <InputField disabled={rando > 0.4} id="time-a" label="09:00 - 12:00" type="checkbox" />
                                <InputField disabled={rando > 0.6} id="time-b" label="12:00 - 15:00" type="checkbox" />
                                <InputField disabled={rando > 0.8} id="time-c" label="18:00 - 21:00" type="checkbox" />
                            </fieldset>
                        </form>

                        {times > 0 &&
                            <div className="info-wrapper">
                                <h3>Bærekraftsfaktaer</h3>
                                <p>{times * 3} timer hos oss kan spøre miljøet for ca. {Math.floor(Math.random() * 2 + 10) * times} kg CO<sup>2</sup></p>
                            </div>
                        }

                        <div className="sum-wrapper">
                            <h3>Oppsummering</h3>
                            <SumTable times={times} />
                        </div>


                        <button type="submit" onClick={submit} className={`btn large ${times > 0 ? '' : 'disabled'}`}>Betal</button>
                    </>
                :
                    <>
                        <h2>Takk for din booking.</h2>
                        <p>Du vil motta en bekreftelse e-mail straks.</p>
                        <SumTable times={times} />
                    </>
                }
            </div>
        </div>
    );
}

export default BookingForm;
