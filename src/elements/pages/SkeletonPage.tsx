import React, { useState, useEffect } from "react";

interface IUser {
  id: number;
  username: string;
  email: string;
  website: string;
}

interface IProps {
  type: string;
}

const SkeletonElement = (props: IProps) => {
  const classes = `skeleton ${props.type}`;
  console.log("classes", classes);
  return <div className={classes}></div>;
};

const SkeletonProfile = () => {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton-profile">
        <div>
          <SkeletonElement type="avatar" />
        </div>
        <div>
          <SkeletonElement type="title" />
          <SkeletonElement type="text" />
          <SkeletonElement type="text" />
        </div>
      </div>
    </div>
  );
};

const Shimmer = () => {
  return (
    <div className="shimmer-wrapper">
      <div className="shimmer"></div>
    </div>
  );
};

const SkeletonPage = () => {
  const [loading, setLoading] = useState(true);
  const [profile, setProfile] = useState<Array<IUser>>([]);

  useEffect(() => {
    setTimeout(async () => {
      console.log("load");
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      console.log(data);
      setProfile(data);
      // setLoading(false);
    }, 5000);
  }, []);

  return (
    <div className="user">
      <h2>User</h2>
      <ul>
        <li> {loading && <SkeletonProfile />}</li>
      </ul>
      {/* {profile &&
        profile.map((userInfo) => (
          <div className="profile" key={userInfo.id}>
            <h3>{userInfo.username}</h3>
            <p>{userInfo.email}</p>
            <a href={userInfo.website}>{userInfo.website}</a>
          </div>
        ))} */}

      {/* {loading && <SkeletonProfile />} */}
    </div>
  );
};

export default SkeletonPage;
