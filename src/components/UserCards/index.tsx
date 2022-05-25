import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const Card = styled.div`
  max-width: 20rem;
  width: 100%;
  background-color: #91a7ff;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

const Img = styled.img`
  height: 6rem;
  width: 6rem;
  object-fit: cover;
  border-radius: 100%;
`;

const Name = styled.span`
  font-size: 130%;
`;

interface UserTypes {
  uuid: string;
  avatar: string;
  firstname: string;
  lastname: string;
  about: string;
}

export const UserCards: React.FC = () => {
  const fetchUrl = process.env.MOCKAPI_URL;

  const [users, setUsers] = useState([]);

  async function fetchData() {
    axios
      .get(fetchUrl || '')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }

  useEffect(() => {
    let isMounted = true;
    if (isMounted) fetchData();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <Cards>
      {users &&
        users.map((user: UserTypes) => (
          <Card key={user?.uuid}>
            <Img src={user?.avatar} alt="Аватарка" />
            <Name>
              {user?.firstname} {user?.lastname}
            </Name>
            <span>{user?.about}</span>
          </Card>
        ))}
    </Cards>
  );
};
