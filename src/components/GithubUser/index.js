import React, { useState } from 'react';
import { Image, Wrapper, UserTitle } from "./styles"
import { Loader } from "../Loader";
import { Description } from "./../PageSection";

export const GithubUser = () => {
  const [userLogin] = useState("Katarzyna-Maryanska");
  const [userName, setUserName] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [profile, setProfile] = useState(false);

  const clientId = process.env.REACT_APP_GITHUB_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_GITHUB_CLIENT_SECRET;

  function getUser() {
    return new Promise((resolve, reject) => {
      fetch(`https://api.github.com/users/${userLogin}?client_id=${clientId}&client_secret=${clientSecret}`)
        .then(response => response.json())
        .then(data => resolve(data))
        .catch(error => reject(error));
    });
  }

  getUser()
    .then(profile => {
      setUserAvatar(profile.avatar_url);
      setUserName(profile.name);
      setLoading(false);
      setProfile(true)
    })
    .catch(error => {
      setError(true);
      setLoading(false)
    });

  // Display content according to API response
  let content;

  if (error) {
    content =
      <Description>Something went wrong. User can't be loaded</Description>;
  }

  if (loading) {
    content =
      <Loader/>;
  }

  if (profile) {
    content = (
      <div>
        <UserTitle>{userName}</UserTitle>
        <Image src={userAvatar} alt="avatar"/>
      </div>
    )
  }

  return (
    <Wrapper>{content}</Wrapper>
    )
};
