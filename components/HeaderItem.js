const HeaderItem = ({Icon,title}) => {
    return (
        <div className='animate-bounce animate-bounce group hover:cursor-pointer items-center flex flex-col w-12 sm:w-20'>
            <Icon className='h-8 mb-1 group-hover:animate-bounce'/>
            <p className='tracking-widest opacity-0 group-hover:opacity-100'>{title}</p>
        </div>
    )
}

export default HeaderItem
