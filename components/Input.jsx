


const Input = ({value, setValue, placeholder, onKeyDown}) => {


    return (
        <input 
            className="bg-black border border-white px-3 rounded-2xl outline-none"
            type="text" 
            placeholder={placeholder}
            value={value}
            onKeyDown={onKeyDown}
            onChange={e => setValue(e.target.value)}
        />
    )
}

export default Input