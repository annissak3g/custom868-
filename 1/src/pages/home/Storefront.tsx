import { useEffect } from 'react';

const Storefront = () => {
    useEffect(() => {
        fetch('/storefront.html')
            .then(res => res.text())
            .then(html => {
                const container = document.getElementById('storefront-container');
                if (container) {
                    container.innerHTML = html;
                    // Execute any scripts that might be in the HTML
                    const scripts = container.querySelectorAll('script');
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        newScript.textContent = script.textContent;
                        container.appendChild(newScript);
                    });
                }
            })
            .catch(err => console.error('Failed to load storefront:', err));
    }, []);

    return <div id="storefront-container" />;
};

export default Storefront;
