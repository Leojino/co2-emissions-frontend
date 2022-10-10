export default function FilterButton({current, children, onClick, type}) {
    
    const handleButtonClick = e => {
        if(onClick) {
            onClick(e, type)
        }
    }

    let classNames = "rounded-md p-2 cursor-pointer mx-1 shadow-md"

    if(current === type){
        classNames+=" bg-blue-600 text-slate-100"
    }else{
        classNames+=" bg-slate-100 text-slate-800 "
    }
    return (
        <div className={classNames}
            onClick={handleButtonClick}
        >
            {children}
        </div>
    )
}