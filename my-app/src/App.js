import React from "react";
import Header from "./components/Header";
import MovieList from "./components/MovieList";
import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Card from "./components/Card";
import ProfileCard from "./components/ProfileCard";
import './App.css';

const members = [
  { id: 1, name: 'สมหญิง ใจดี', nickname: 'ฝน',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาเขียว', 'แมว'] },
 { id: 2, name: 'วริศราภรณ์ กันชัยต๊ะ', nickname: 'ต้นน้ำ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['กาแฟ', 'แมว'] },
    { id: 3, name: 'โอปอ โอปอ', nickname: 'โอปอ',
    major: 'เทคโนโลยีสารสนเทศ', favorites: ['ชาไทย', 'หมา'] },
];


function App() {
  return (
    <div className="container">
      <h1>สมาชิกกลุ่มของเรา</h1>
      <div className="card-row">
        {members.map((m) => (
          <ProfileCard
            key={m.id}
            name={m.name}
            nickname={m.nickname}
            major={m.major}
            favorites={m.favorites}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
