import { useState } from "react";

export function Form() {
    const [url, setUrl] = useState({ url: "" });
    const [shortUrl, setShortUrl] = useState('');
    const [copied, setCopied] = useState(false); 

    const handleChange = (e) => {
        setUrl({
            ...url,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('https://shortcat-url-3d20c6535e83.herokuapp.com/api/shorten', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(url)
        });
        if (response.ok) {
            const data = await response.json();
            setShortUrl(data.shortUrl);
            setCopied(false); 
        } else {
            console.error('Failed to shorten URL');
        }
    };

    const handleCopy = () => {
        if (shortUrl) {
            navigator.clipboard.writeText(`https://${shortUrl}`).then(() => {
                setCopied(true);  // Actualiza el estado a true cuando la URL se copia exitosamente
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });
        }
    };

    return (
        <section className="flex-1 container mx-auto px-4 sm:px-6 py-12">
            <div className="bg-gray-50 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 lg:p-16">
                <h2 className="text-xl sm:text-2xl font-semibold mb-6 text-center">Shorten Your URL here</h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <input type="url" name="url" onChange={handleChange} id="url" placeholder="Paste your URL" className="w-full p-3 border-gray-300 rounded-lg mb-4 sm:mb-6" required />
                    </div>
                    <div className="text-center">
                        <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg">
                            Shorten URL
                        </button>
                    </div>
                    {shortUrl && (
                        <div className="mt-4 text-center flex justify-center items-center">
                            🚀 Short URL: 
                            <a className="cursor-pointer text-blue-500 mx-2" href={`https://${shortUrl}`} target="_blank" rel="noopener noreferrer">
                                {shortUrl}
                            </a>
                            {copied ? (
                                <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-check">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                                    <path d="M5 12l5 5l10 -10" />
                                </svg>
                            ) : (
                                <svg onClick={handleCopy} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="icon icon-tabler icons-tabler-outline icon-tabler-copy cursor-pointer hover:text-blue-500">
                                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                    <path d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z" />
                                    <path d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1" />
                                </svg>
                            )}
                        </div>
                    )}
                </form>
            </div>
        </section>
    );
}
