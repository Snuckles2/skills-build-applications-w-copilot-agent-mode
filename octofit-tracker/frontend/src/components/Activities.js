import React, { useEffect, useState } from 'react';

function Activities() {
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    fetch('https://silver-lamp-69vvvq9r4grpfr66q-8000.app.github.dev/api/activities/')
      .then(response => response.json())
      .then(data => {
        console.log('Activities data:', data);
        setActivities(data);
      })
      .catch(error => console.error('Error fetching activities:', error));
  }, []);

  return (
    <div className="container mt-4">
      <h1 className="text-center text-primary">Activities</h1>
      <table className="table table-striped">
        <thead>
          <tr>
            <th>Activity Type</th>
            <th>Duration</th>
          </tr>
        </thead>
        <tbody>
          {activities.map(activity => (
            <tr key={activity._id}>
              <td>{activity.activity_type}</td>
              <td>{activity.duration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Activities;
