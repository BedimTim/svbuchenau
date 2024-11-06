import Link from 'next/link';

export default function Aktuelles() {
    return (
        <main className="">
            <h1 className="pt-32">Aktuelles</h1>
            <Link href="/aktuelles/1">
                <a className="underline hover:text-lime-600 duration-200">Artikel 1</a>
            </Link>
        </main>
        
        
    );
}