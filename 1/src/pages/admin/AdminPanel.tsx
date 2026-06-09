import { useEffect } from 'react';

const AdminPanel = () => {
    useEffect(() => {
        fetch('/admin.html')
            .then(res => res.text())
            .then(html => {
                const container = document.getElementById('admin-container');
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
            .catch(err => console.error('Failed to load admin panel:', err));
    }, []);

    return <div id="admin-container" />;
};

export default AdminPanel;
