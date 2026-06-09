import { useEffect } from 'react';

const Inventory = () => {
    useEffect(() => {
        fetch('/inventory.html')
            .then(res => res.text())
            .then(html => {
                const container = document.getElementById('inventory-container');
                if (container) {
                    container.innerHTML = html;
                    const scripts = container.querySelectorAll('script');
                    scripts.forEach(script => {
                        const newScript = document.createElement('script');
                        newScript.textContent = script.textContent;
                        container.appendChild(newScript);
                    });
                }
            })
            .catch(err => console.error('Failed to load inventory:', err));
    }, []);

    return <div id="inventory-container" />;
};

export default Inventory;
