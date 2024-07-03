import {Bars3Icon} from '@heroicons/react/20/solid'

export function GhostHeader() {
    return (
        <header
            className={`navbar bg-base-300 absolute top-0 bg-opacity-0 text-white z-10`}
        >
            <div className="navbar-start">
                <a className="btn btn-ghost text-xl">LOGO</a>
            </div>
            <div className="navbar-center">
                <ul
                    className="menu menu-horizontal px-1 text-3xl gap-10 animate-fade-up opacity-0"
                    style={{animationFillMode: "forwards"}}
                >
                    <li><a>Forside</a></li>
                    <li><a>Priser</a></li>
                    <li><a>Om os</a></li>
                    <li><a>Kontakt</a></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className={"relative flex mr-6"}>
                    <div className={"absolute z-0 h-10 w-10"}>
                        <Bars3Icon/>
                    </div>
                    <label htmlFor="my-drawer"
                           className="btn btn-ghost drawer-button z-20 w-10 hover:opacity-0 opacity-0"></label>
                </div>
            </div>
        </header>
    )
}