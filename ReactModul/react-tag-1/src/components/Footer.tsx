export default function Footer({testdata}:{testdata: string}){
    console.log("footer renders", testdata)
    return <footer>
        <h5>impressum</h5>
        <h5>datenschutz</h5>
    </footer>
}