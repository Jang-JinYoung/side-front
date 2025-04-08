const Input = ({ type, className, name, value, onChange }: any) => {
    return (
        <input type={type} className={className} name={name} value={value} onChange={onChange} />
    )
};

const Date = ({ value, onChange }: any) => {
    return (
        <Input
            type="date"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            name="date"
            value={value}
            onChange={onChange}
        />
    );
}

Input.Date = Date;

export default Input;