
import React from 'react'
import Banner from "../../../src/assets/elevated-view-laptop-stationeries-blue-backdrop.jpg"
import AnnouncementsContainer from '../Announcements/AnnouncementContainer';

import QuizList from '../Quizes/QuizesContainer'
import Card from '../Card';
function Main() {
    const announcements = [
        { avatar: 'user.jpeg', name: 'User1', group:'Physics', text: 'Announcement 1 text' },
        { avatar: 'user.jpeg', name: 'User2', group:'Math', text: 'Announcement 2 text' },
        
      ];

      const quizzes = [
        {
          id: 1,
          title: 'Quiz 1',
          course: 'Course A',
          topic: 'Topic 1',
          dueto: 'Due to 1',
          
        },
        {
          id: 2,
          title: 'Quiz 2',
          course: 'Course B',
          topic: 'Topic 2',
          dueto: 'Due to 2',
         
        },
        {
          id: 3,
          title: 'Quiz 3',
          course: 'Course C',
          topic: 'Topic 3',
          dueto: 'Due to 3',
        }
        
      ];
    return (
        <>
        <Card>
          <div className='primary-card'>
          <div>

          <h1 className='primary-header'>Exams Time</h1>
          <p className='primary-text'>Here we are ,Are you ready for fight?Don't worry,we prepared some examp tips to be ready for the exams</p>
          <qoute className='primary-qoute'>"Study hard and be smart"- Abdallah Askar</qoute>
          </div>
          <button >View exams tips</button>
          </div>
        </Card>
      <main className='main-aq'>
        <AnnouncementsContainer announcements={announcements}/>    
        <QuizList quizzes={quizzes} />
    </main>
        </>
    )
}
export default Main;