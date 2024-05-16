import {useEffect, useState} from "react";
import {NavLink, useLoaderData} from "react-router-dom";

export async function loader(): Promise<[string, number][]> {
    const response = await fetch("/api/status-codes");
    const codes = await response.json();
    return Object.entries(codes) as [string, number][];
}
export function StatusCodes() {
    const codes = useLoaderData() as [string, number][];
    const [codesListItems, setCodesListItems] = useState<React.JSX.Element[]>([]);
    useEffect(() => {
        codes.sort((a, b) => a[1] - b[1]);
        setCodesListItems(codes.map(([name, code]) => {
            return <div>{code}: {name.replaceAll("_", " ")}</div>
        }))
    }, [codes])

    return (
        <>
            <h1>HTTP Status Codes</h1>
            <NavLink to={"/"}>Home</NavLink>
            <div className="card">
                {codesListItems}
            </div>
        </>
    )
}