import logo from "../assets/investment-calculator-logo.png";


export default function Header() {
    return <header id="header">
        <img src={logo} alt="Logo Showing a money bag" />
        <h2>Investment Calculator</h2>
    </header>
}