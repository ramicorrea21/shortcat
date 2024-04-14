import { useState } from "react"
export function Form(){
    const [url, setUrl] = useState({
        url : ""
    })
    const [shortUrl, setShortUrl] = useState('');

    const handleChange = (e) =>{
        setUrl({
            ...url,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        const response = await fetch('https://shortcat-url-3d20c6535e83.herokuapp.com/api/shorten',{
            method: 'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(url)
        })
        if (response.ok) {
            const data = await response.json();
            setShortUrl(data.shortUrl);
        } else {
            console.error('Failed to shorten URL');
        }
    }


    return(
<section className="flex-1 container mx-auto px-6 py-20">
<div className="bg-gray-50 rounded-xl shadow-lg p-8 md:p-12 lg:p-16">
    <h2 className="text-2xl font-semibold mb-6 text-center">Shorten Your URL here</h2>
    <form onSubmit={handleSubmit}>
        <div>
            <input type="url" name="url" onChange={handleChange} id="url" placeholder="Paste your URL" className="w-full p-3 border-gray-300 rounded-lg mb-6" required/>
        </div>
        <div className="text-center">
            <button type="submit" className="bg-black hover:bg-gray-800 text-white font-bold py-3 px-6 rounded-lg">
                Shorten URL
            </button>
        </div>
        {shortUrl && <p>🚀Short URL: <a className="cursor-pointer text-blue-500" href={shortUrl} target="_blank" rel="noopener noreferrer">{shortUrl} </a></p>}
    </form>
</div>
</section>
    )
}
