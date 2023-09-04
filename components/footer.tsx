export const Footer = () => {
    return (
        <footer className="brand name font-thin w-screen overflow-hidden absolute bottom-0 flex justify-center bg-darkText h-10 items-center">
            Designed and Developed by &nbsp;
            <a className="text-yellow-400" href="https://bhandarkar.me">
                <img
                    src="https://bhandarkar.me/images/logo.png"
                    alt="Pawan Bhandarkar"
                    className="h-6 w-6 inline"
                />
                &nbsp;Pawan Bhandarkar
            </a>
        </footer>
    );
};
