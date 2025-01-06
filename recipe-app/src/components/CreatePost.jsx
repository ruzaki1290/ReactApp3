import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


function CreatePost() {

   const [title, setTitle] = useState('');
   const [content, setContent] = useState('');
   const [author, setAuthor] = useState('');
   const [isLoading, setIsLoading] = useState(false);
   const [error, setError] = useState(null); // State for storing the error message

   const navigate = useNavigate();

   // Validation function
   const validateForm = () => {
      if (!title.trim() || !content.trim() || !author.trim()) {
         setError('Please fill in all fields.');
         return false;
      }
      return true;

   }

      const handleSubmit = async (e) => {
         e.preventDefault();
         setError(''); // reset error message on a new submission

         if (!validateForm()) {
            return;
         }


      }

}