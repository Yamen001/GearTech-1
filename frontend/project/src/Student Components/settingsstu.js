import { useEffect } from "react"
import { useContext } from "react"
import { ThemeContext } from "../ThemeContext"
// Theme object




function SettingsStu() {
    const ThemesObj = useContext(ThemeContext)
    console.log(ThemesObj)



    useEffect(() => {
        // make buttons BackgroundColors
        let Themecolors = document.querySelectorAll(".theme-color")
        Themecolors.forEach(function (e) {
            e.style.backgroundColor = e.getAttribute('data-color')
        })

        // change the theme and add the active class to the button
        document.addEventListener("click", function (e) {
            if (e.target.classList.contains("theme-color")) {
                changeThemeColor(Themecolors, e)

            }
        })
    }, [])


    function changeThemeColor(array, target) {
        //remove all active classes
        RmoveActive(array)
        //add active class to the target
        target.target.classList.add("color-active")
        window.location.reload()
    }


    function RmoveActive(array) {
        array.forEach((element) => {
            if (element.classList.contains("color-active")) {
                element.classList.remove("color-active")
            }
        })
    }
    /// useref to get the elements from the doc/////////////////////////////
    function ThemeHandler(e) {
        //set the color of active to localstorge
        localStorage.setItem('theme-color', JSON.stringify(ThemesObj.Themes[e.target.dataset["colornumber"]]))
        //toggleTheme to the color i clicked using the numbers dataset
        ThemesObj.toggleTheme(ThemesObj.Themes[e.target.dataset["colornumber"]])
    }








    return (
        <section className="SettingsStu">
            <h2 className="mb-3">Settigns</h2>
            <div className="Settings-container d-flex flex-column gap-4">
                <div className="control">
                    <h4 className="controtl-name">Theme :</h4>
                    <div className="colors d-flex gap-3">
                        <span onClick={ThemeHandler} className="color theme-color" data-colornumber="0" data-color="purple"></span>
                        <span onClick={ThemeHandler} className="color theme-color" data-colornumber="1" data-color="blue"></span>
                        <span onClick={ThemeHandler} className="color theme-color" data-colornumber="2" data-color="green"></span>
                    </div>
                </div>
                {/* <div className="control">
                    <h4 className="controtl-name">Background :</h4>
                    <div className="colors d-flex gap-3">
                        <span className="color background-color" data-color="#FADBD8"></span>
                        <span className="color background-color" data-color="#E8DAEF"></span>
                        <span className="color background-color" data-color="#A9CCE3"></span>
                        <span className="color background-color" data-color="#A9DFBF"></span>
                        <span className="color background-color" data-color="#F9E79F"></span>
                        <span className="color background-color" data-color="#ABB2B9"></span>
                    </div>
                </div>         */}
            </div>
        </section>
    )
}
export default SettingsStu