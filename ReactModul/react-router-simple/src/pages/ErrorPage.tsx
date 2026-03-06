import BackButton from "../components/globals/BackButton"

const ErrorPage = () => {

    return <div>
        <h2>Error 404</h2>
        <p>diese Seite ist leider nicht verfügbar</p>

        <BackButton
            type="custom"
            link="/"
            label="Zurück zur Hauptseite"
        />
    </div>
}

export default ErrorPage