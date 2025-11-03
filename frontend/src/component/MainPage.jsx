import InputBox from "./InputBox";
import Navbar from "./Navbar";

function MainPage() {
    return (
        <div className="container-fluid  main" style={{ width: "100dvw", backgroundColor: "#353535", height: "100vh"}}>
            <Navbar/>
            <div className="shadow-snippets shadow17 fill-space" style={{
                width: "1100px",
                maxWidth: "100%",
                margin: "0 auto"

            }}>
                <div className="row pt-0 p-5">
                    <h3 className="text-center">Fuel me with a topic—I’ll launch your notes mission!</h3>
                </div>
                <div className="row fill-space d-flex"></div>
                <div className="row justify-content-center">
                   <InputBox/>
                </div>
            </div>
        </div>
    );
}

export default MainPage;
