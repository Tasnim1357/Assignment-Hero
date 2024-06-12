import React from 'react';

const Faq = () => {
    return (
        <div className='mt-12 space-y-8 px-2'>
            <h2 className='sm:text-5xl text-3xl font-poppins font-bold dark:text-white text-center'>Frequently Asked Questions</h2>
            <p  className='text-lg text-gray-500 text-center'>Our website offers seamless assignment submission, real-time status tracking, and expert technical support. Collaborative assignments may be permitted based on guidelines.</p>
            <div className="collapse collapse-plus bg-white border border-blue-800 shadow-xl">
  <input type="radio" name="my-accordion-3" defaultChecked /> 
  <div className="collapse-title text-xl font-medium bg-white ">
    How do I submit an assignment?
  </div>
  <div className="collapse-content bg-white "> 
    <p> To submit an assignment, simply log in to your account, navigate to the Assignments section, select the relevant assignment, and follow the submission instructions.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white border border-blue-800 shadow-xl">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Can I edit my submitted assignment after submission?
  </div>
  <div className="collapse-content"> 
    <p>Once an assignment is submitted, editing is typically not allowed. Please ensure you review your assignment carefully before submission.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white border border-blue-800 shadow-xl">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  How can I check my assignment's status?
  </div>
  <div className="collapse-content"> 
    <p>You can track your assignment's status in real-time by logging in to your account and accessing the "My Assignments" section, where you'll find updates on submission, grading, and feedback.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white border border-blue-800 shadow-xl">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  What should I do if I encounter technical issues during assignment submission?
  </div>
  <div className="collapse-content"> 
    <p>f you encounter any technical issues, such as difficulty uploading files or accessing the submission portal, please reach out to our technical support team for assistance.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white border border-blue-800 shadow-xl">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Are there penalties for late submissions?
  </div>
  <div className="collapse-content"> 
    <p>Penalties for late submissions may vary depending on the instructor's policies. It's advisable to review the assignment guidelines for information on late submission penalties.</p>
  </div>
</div>
<div className="collapse collapse-plus bg-white border border-blue-800 shadow-xl">
  <input type="radio" name="my-accordion-3" /> 
  <div className="collapse-title text-xl font-medium">
  Can I collaborate with classmates on assignments?
  </div>
  <div className="collapse-content"> 
    <p> Collaborative assignments may be allowed based on the instructor's guidelines. Please check the assignment details for information on collaboration policies.</p>
  </div>
</div>
            
        </div>
    );
};

export default Faq;