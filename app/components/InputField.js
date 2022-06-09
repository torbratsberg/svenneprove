function getDate() {
    const d = new Date();
    return `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`;
}

export default function Field({id, label, type = 'text', required = false}) {
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
