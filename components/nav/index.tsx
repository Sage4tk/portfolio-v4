interface NavProps {
    current: string
}

const Nav:React.FC<NavProps> = ({
    current
}) => {
    return (
        <nav className="">
            <h1>{current}</h1>
        </nav>
    )
}

export default Nav;