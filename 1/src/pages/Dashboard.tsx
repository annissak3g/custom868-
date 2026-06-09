import { useEffect } from 'react';

const Dashboard = () => {
    useEffect(() => {
        fetch('/backend.html')
            .then(res => res.text())
            .then(html => {
                const container = document.getElementById('dashboard-container');
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
            .catch(err => console.error('Failed to load dashboard:', err));
    }, []);

    return <div id="dashboard-container" />;
};

export default Dashboard;
