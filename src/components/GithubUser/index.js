import React, { useState } from 'react';
import { Image, Wrapper, UserTitle } from "./styles"

export const GithubUser = () => {
  const [userLogin] = useState("Katarzyna-Maryanska");
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");

  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  function getUser() {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${userLogin}?client_id=${clientId}&client_secret=${clientSecret}`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(err => reject(err));
    });
  }

  getUser()
    .then(profile => {
            setUserAvatar(profile.avatar_url);
            setUserName(profile.name);
          })
    .catch(error => console.log(error));

  return (
        <Wrapper>
          <UserTitle>{userName}</UserTitle>
          <Image src={userAvatar} alt="avatar"/>
        </Wrapper>
    )
};
