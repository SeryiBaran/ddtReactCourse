import { FC, useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

interface IUser {
  uuid: string;
  avatar: string;
  firstname: string;
  lastname: string;
  about: string;
  mail: string;
}

const fetchUrl = process.env.MOCKAPI_URL;

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
  border: solid 1px #000;
`;

const Name = styled.span`
  font-size: 130%;
`;

export const UserCards: FC = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    axios
      .get(fetchUrl || '')
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };

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
        users.map((user: IUser) => (
          <Card key={user.uuid}>
            <Img src={user.avatar} alt="Аватарка" />
            <Name>
              {user.firstname} {user.lastname}
            </Name>
            <span>{user.about}</span>
            <a href={`mailto:${user.mail}`}>
              <i className="fa-solid fa-envelope"></i>{' '}
              {user.mail.length > 25
                ? `...${user.mail.substr(user.mail.length - 25)}`
                : user.mail}
            </a>
          </Card>
        ))}
    </Cards>
  );
};
