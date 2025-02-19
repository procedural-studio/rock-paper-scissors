export const Footer = () => {
    return (
        <footer className="brand name font-thin w-screen overflow-hidden absolute bottom-0 flex justify-center bg-black h-10 items-center">
            Developed by &nbsp;
            <a className="text-yellow-400" href="javascript:void(0)" onClick={()=> {return false}}>
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/6/69/Fractal_dragon_curve.jpg"
                    alt="Procedural Games"
                    className="h-6 w-6 inline"
                />
                &nbsp;Procedural Games
            </a>
        </footer>
    );
};
