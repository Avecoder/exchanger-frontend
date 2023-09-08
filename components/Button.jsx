

const Button = ({children, active, black, border, onClick}) => {

    


    return (
        <button 
        onClick={onClick}
            className={`
                px-3 py-1 w-fit font-medium 
                ${border && 'border'} 
                ${(!black && border) && 'border-black'} 
                ${black ? 'bg-black text-white hover:bg-[#ecebea] hover:text-black' : 'bg-[#ecebea] text-black hover:bg-black hover:text-white hover:border hover:border-white'} 
                leading-3 border-1.5 rounded-3xl uppercase`}
        >{children}</button>
    )
}

export default Button