import Footer from "../components/Footer";
import Header from "../components/Header";
import Search from "../components/Search";

export default function MainLayout({children}:{children: React.ReactElement | React.ReactElement[]}){

    return <>
        <Header/>
        <Search/>
            <main>
                {children}
            </main>
        <Footer/>
    </>
}