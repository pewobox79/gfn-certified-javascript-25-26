import Button from "../components/globals/Button/Button";
import UserOverview from "../components/UserOverview/UserOverview";

export default function Homepage(){
    return <><h1>Homepage</h1>
    <UserOverview/>
    <Button variant="alert" action={{type: "alarm"}}/>
    <Button variant="info" action={{type: "addUser", data: "Heinz"}}/>
    <Button variant="success" action={{type: "addUser", data: "Sabine"}}/>
    </>
}