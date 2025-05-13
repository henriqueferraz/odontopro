export function Footer() {
    return (
        <footer className="py-6 text-center text-gray-500 text-sm md:text-base ">
            <p>
                Todos os direitos reservados &copy; {new Date().getFullYear()} -
                <span className="hover:text-blue-700 hover:font-bold duration-300"> @HFerraz</span>
            </p>
        </footer>
    )
}