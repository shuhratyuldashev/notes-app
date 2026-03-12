import { logOut } from "../(auth)/actions";


export function LogOutButton() {
    return (
        <form>
            <button className="border rounded-xl text-red-200 border-red-500/30 hover:bg-red-500/20 bg-red-500/10 px-2 py-1.5 text-sm" formAction={logOut}>Log Out</button>
        </form>
    );
}