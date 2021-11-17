import error404 from "../assets/images/error-404.png"

export const NoMatch = () => {
    return (
        <div>
            <img
                style={
                    {
                        "width": "20%",
                        "margin": "25px auto",
                        "opacity": "0.5",
                    }
                }
                src={error404}
                alt=""
            />
        </div>
    )
}