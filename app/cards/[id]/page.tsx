export default function Page({ params }) {
    return (
        <div>
            <p>Hello world!</p>
            <p>{params.id}</p>
        </div>
    )
}