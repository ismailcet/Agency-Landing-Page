import { useEffect, useState } from "react";
import axios from "axios";
import TeamCard from "./TeamCard";

const url = "https://randomuser.me/api/?results=6";

const Team = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState(null);

  const getUsers = () => {
    axios.get(url).then((res) => {
      setUsers(res.data.results);
      setIsLoading(false);
    });
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <section className="Team mt-40 flex flex-col items-center gap-14">
      <div className="team-up text-center w-[33.75rem] flex flex-col mx-auto">
        <p className="team-info uppercase font-semibold text-[14px] text-mainColor mb-2">
          our team
        </p>
        <h3 className="team-title text-[2rem] font-bold mb-[2.25rem]">
          The most qualified and talented individuals
        </h3>
      </div>
      <div className="team-down grid grid-cols-3 gap-x-[42px] gap-y-[30px]">
        {isLoading ? (
          <h1>Loading...</h1>
        ) : (
          users.map((user, i) => <TeamCard key={i} user={user} />)
        )}
      </div>
    </section>
  );
};

export default Team;
