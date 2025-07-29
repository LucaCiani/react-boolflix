import { Outlet } from "react-router-dom";
import HeaderComponent from "../components/HeaderComponent";

export default function DefaultLayout() {
    return (
        <>
            <HeaderComponent />
            <main>
                <div className="container">
                    <Outlet />
                </div>
            </main>
        </>
    );
}
