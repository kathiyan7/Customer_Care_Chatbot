import React from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import './App.css'

function App() {
  const steps = [
    {
      id:'intial',
      message:'Hi, Welcome to our chatbot',
      trigger:'promt_1'
    },
    {
      id:'promt_1',
      message:'Please the your query',
      trigger:'options_1'
    },
    {
      id:'options_1',
      options:[
        {value:"Complaints",label:"Complaints",trigger:"complaints"},
        {value:"Feedback",label:"Feedback",trigger:"Feedback"},
        {value:"Poll",label:"Poll",trigger:"Poll"},
        {value:"idea submission",label:"Idea Submission",trigger:"idea submission"},
      ]
    },
    {
      id:'complaints',
      message:'Please enter your complaint.',
      trigger:'msg_1'
    },
    {
      id:'msg_1',
      user:true,
      trigger:'end'
    },
    {
      id:'Feedback',
      message:'Please enter your feedback regarding this G.O',
      trigger:'msg_2'
    },
    {
      id:'msg_2',
      user:true,
      trigger:'end'
    },
    {
      id:'Poll',
      message:'Are you okay with this G.O',
      trigger:'options_2'
    },
    {
      id:'options_2',
      options:[
        {value:"Okay", label:"Okay",trigger:"end"},
        {value:"Not_Okay", label:"Not Okay",trigger:"end"},
      ]
    },
    {
      id:'idea submission',
      message:'Here you can give any suggestions or new ideas for the problem,If you have please enter below.',
      trigger:'msg_3'
    },
    {
      id:'msg_3',
      user:true,
      trigger:'end'
    },
    {
      id:'end',
      message:'Thank You',
      end:true
    },
  ]

  return (
    <>
    <div className="gg">
      <ChatBot steps={steps} style={{height:'100%', width:'1280px'}}/>
    </div>
    </>
  );
}

export default App