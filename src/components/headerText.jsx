import AnimatedTextWord from "./AnimatedTitle"
function HeaderText()
{
    return (
        <div className="header-text">
            <AnimatedTextWord text="Engae Your" />
            <AnimatedTextWord text=" Audience In" />
            <AnimatedTextWord text="Minute"/>
            <p>
                Powerful digital marketing tool for companies of all categories
            </p>
            <div className="button-area">
                <button className="get-started-btn" type="button">
                    Get Started
                </button>
                <a className="try-btn">Try Our Demo</a>
            </div>
            <div className="scroll-div">
                <p>Scroll Down Below</p>
                <img src="../down-arrow.svg"/>
            </div>
        </div>
    )
}
export default HeaderText