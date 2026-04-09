'use client';
import { useState, useEffect } from 'react';

const SiteMetrics = () => {
  const [metrics, setMetrics] = useState({
    activeUsers: 1,
    pageViews: 2565,
    avgLoadTime: 1.60,
    uptime: 99.99,
  });

  useEffect(() => {
    // Function to fetch metrics
    const fetchMetrics = async () => {
      try {
        // Replace this with your actual API endpoint
        const response = await fetch('/api/metrics');
        const data = await response.json();
        setMetrics(data);
      } catch (error) {
        console.error('Error fetching metrics:', error);
      }
    };

    // Initial fetch
    fetchMetrics();

    // Set up real-time updates every 30 seconds
    const interval = setInterval(fetchMetrics, 30000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-12 bg-deep/80">
      <div className="container mx-auto">
        <h2 className="text-3xl text-center mb-8 text-accent">Site Metrics</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          <MetricCard
            title="Active Users"
            value={metrics.activeUsers}
            unit="users"
          />
          <MetricCard
            title="Page Views"
            value={metrics.pageViews}
            unit="views"
          />
          <MetricCard
            title="Load Time"
            value={metrics.avgLoadTime.toFixed(2)}
            unit="seconds"
          />
          <MetricCard
            title="Uptime"
            value={metrics.uptime}
            unit="%"
          />
        </div>
      </div>
    </section>
  );
};

const MetricCard = ({ title, value, unit }) => {
  return (
    <div className="bg-secondary p-6 rounded-lg text-center">
      <h3 className="text-lg text-foreground/60 mb-2">{title}</h3>
      <div className="text-3xl font-bold text-accent">
        {value} <span className="text-sm text-foreground/60">{unit}</span>
      </div>
    </div>
  );
};

export default SiteMetrics;
