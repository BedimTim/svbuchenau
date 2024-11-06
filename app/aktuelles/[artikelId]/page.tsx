export default async function Artikel( { params, }: { params: { artikelId: string, description: string } } ) {
    const data = params;
    return (
        <main className="">
            <h1 className="pt-32">Dies ist Artikel {data.artikelId}</h1>
        </main>
        
        
    );
}