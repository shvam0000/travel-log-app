import axios from 'axios';
import { useRouter } from 'next/router';
import { useState } from 'react';

const AddLogForm = () => {
  const [name, setName] = useState<string>('');
  const [title, setTitle] = useState<string>('');
  const [experience, setExperience] = useState<string>('');
  const router = useRouter();

  const submitHandler = (e: any) => {
    e.preventDefault();
    axios
      .post('http://localhost:5000/posts/', {
        username: name,
        title: title,
        desc: experience,
      })
      .then((res) => {
        console.log(res);
        alert('Entry added');
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form
      onSubmit={submitHandler}
      className="bg-blue-400 shadow-lg shadow-blue-400/50 w-1/4 px-10 py-10 pb-14 rounded-md mx-auto text-center flex flex-col items-center">
      <h1 className="font-bold text-2xl mt-4 text-white">Add a Travel Log</h1>
      <input
        className="block my-5 bg-blue-200 focus:bg-blue-300 focus: outline-none rounded-md p-3 text-blue-800 placeholder-slate-800"
        type="text"
        placeholder="Name of Traveller"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <input
        className="block my-5 bg-blue-200 focus:bg-blue-300 focus: outline-none rounded-md p-3 text-blue-800 placeholder-slate-800"
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        className="block my-5 bg-blue-200 focus:bg-blue-300 focus: outline-none rounded-md p-3 text-blue-800 placeholder-slate-800"
        cols={24}
        placeholder="Your Experience"
        value={experience}
        onChange={(e) => setExperience(e.target.value)}
      />
      <button className="bg-gradient-to-br from-blue-400 to-purple-400 via-blue-500 shadow-2xl text-white font-medium text-xl px-6 py-2 rounded-3xl hover:bg-blue-400">
        Add Log
      </button>
    </form>
  );
};

export default AddLogForm;
