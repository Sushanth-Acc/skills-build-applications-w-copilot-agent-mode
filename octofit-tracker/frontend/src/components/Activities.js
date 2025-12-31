import React, { useEffect, useState } from 'react';

const API_URL = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    console.log('Fetching from:', API_URL);
    fetch(API_URL)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        console.log('Fetched activities:', results);
        setActivities(results);
      });
  }, []);

  return (
    <div>
      <h1 className="mb-4">Activities</h1>
      <div className="card shadow-sm">
        <div className="card-body">
          <table className="table table-striped table-hover">
            <thead className="table-primary">
              <tr>
                <th>Type</th>
                <th>Duration (min)</th>
                <th>Date</th>
                <th>User</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((a) => (
                <tr key={a._id}>
                  <td>{a.type}</td>
                  <td>{a.duration}</td>
                  <td>{a.date}</td>
                  <td>{a.user?.name || a.user}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Activities;
