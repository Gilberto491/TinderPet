import { Header, Footer, ListPets } from "../../components";

export default function notFound() {
    return (
        <aside>
            <Header
                search={true}
                page={false}
            />
            <ListPets/>
            <Footer/>
        </aside>
    );
}