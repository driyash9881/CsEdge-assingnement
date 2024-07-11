import React from 'react';

const UserDisplay = ({ user }) => {
  return (
    <div className="w-full max-w-lg bg-white shadow-lg rounded-lg p-8 mt-4">
      <h2 className="text-2xl font-bold text-center mb-4">User Information</h2>
      <div className="flex flex-col gap-2">
        <div>
          <strong>Name:</strong> {user.name}
        </div>
        <div>
          <strong>Number:</strong> {user.number}
        </div>
        <div>
          <strong>Email:</strong> {user.email}
        </div>
        <div>
          <strong>Address:</strong> {user.address}
        </div>
        <div>
          <strong>LinkedIn:</strong> {user.linkedIn}
        </div>
        <div>
          <strong>Github:</strong> {user.github}
        </div>
      </div>
    </div>
  );
};

export default UserDisplay;
