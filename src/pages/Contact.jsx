import React, { useState, useEffect } from 'react';
import { Grid, Input } from '@material-ui/core';
import resumeData from '../utils/resumeData';

const Contact = () => {
  const [user, setUser] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formSubmissions, setFormSubmissions] = useState([]);

  useEffect(() => {
    const savedData = localStorage.getItem('contactFormSubmissions');
    if (savedData) {
      setFormSubmissions(JSON.parse(savedData));
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const newSubmission = { ...user, timestamp: new Date().toLocaleString() };
    setFormSubmissions((prevSubmissions) => [...prevSubmissions, newSubmission]);
    setUser({
      name: '',
      email: '',
      message: '',
    });
  };

  useEffect(() => {
    localStorage.setItem('contactFormSubmissions', JSON.stringify(formSubmissions));
  }, [formSubmissions]);

  return (
    <Grid container>
      <Grid item xs={12} lg={7}>
        <Grid container className="mt-7 pb-7">
          <Grid
            item
            className="text-yellow-300 cursor-auto animate-bounce inline-block relative "
          >
            <h3 className="relative border-b-8 border-yellow-200 mb-7 mt-7 whitespace-pre-line">
              Contact Form
            </h3>
          </Grid>

          <Grid item xs={12}>
            <Grid container className="w-full">
              <Grid item xs={12} sm={9} className="">
                <div className="text-yellow-100 font-bold m-2 ">
                  Name:
                  <Input
                    fullWidth
                    placeholder="Enter your Name"
                    className="bg-yellow-50 rounded-md p-1 bg-opacity-50 text-white"
                    value={user.name}
                    onChange={handleInputChange}
                    name='name'
                    id='name'
                  />
                </div>

                <Grid item className="">
                  <div className="text-yellow-100 font-bold m-2 ">
                    Email:
                    <Input
                      fullWidth
                      placeholder="Enter your Email"
                      className="bg-yellow-50 rounded-md bg-opacity-50 text-white p-1"
                      value={user.email}
                      onChange={handleInputChange}
                      name='email'
                      id='email'
                    />
                  </div>
                </Grid>

                <Grid item xs={12} className="">
                  <div className="text-yellow-100 font-bold m-2">
                    Message:
                    <Input
                      fullWidth
                      placeholder="Enter your Message"
                      multiline
                      rows={4}
                      className="bg-yellow-50 rounded-md bg-opacity-50 text-white p-1 font-bold"
                      value={user.message}
                      onChange={handleInputChange}
                      name='message'
                      id='message'
                    />
                  </div>
                </Grid>

                <Grid item xs={12}>
                  <div
                    className="bg-yellow-300 shadow-2xl m-3 p-1 rounded-full cursor-pointer hover:bg-yellow-200"
                    onClick={handleSubmit}
                  >
                    <p className="font-Poppins text-xl text-black m-1 text-center font-semibold">
                      Submit
                    </p>
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12} lg={5}>
        <Grid container className="mt-7 pb-7">
          <Grid
            item
            className="text-yellow-300 cursor-auto animate-bounce inline-block relative "
          >
            <h3 className="relative border-b-8 border-yellow-200 mb-7 mt-7 whitespace-pre-line">
              Contact Information
            </h3>
          </Grid>

          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <span className="text-yellow-100 text-lg font-semibold">Address: </span> {resumeData.address}
              </Grid>

              <Grid item xs={12}>
                <span className="text-yellow-100 text-lg font-semibold">Email: </span> {resumeData.email} 
              </Grid>

              <Grid item xs={12}>
                <span className="text-yellow-100 text-lg font-semibold">LinkedIn: </span> {resumeData.social.Linkedin.link}
              </Grid>

              <Grid item xs={12}>
                <Grid container>
                  {Object.keys(resumeData.social).map(socials =>(
                    <Grid item className="pt-2 pr-2 mr-2">
                      <a href={resumeData.social[socials].link}>{resumeData.social[socials].icon}</a>
                    </Grid>
                  ))}
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Contact;
