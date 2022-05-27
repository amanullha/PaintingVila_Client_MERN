import React from 'react';
import SingleBlog from '../SingleBlog/SingleBlog'
const Blogs = () => {

    return (
        <div className='mx-5 lg:mx-10 xl:mx-20'>

            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1' >



                <SingleBlog
                    blogQuestion={'How will you improve the performance of a React Application?'}
                    blogText={
                        "To improve React delivering, you really want to ensure that parts get just vital props. It will allow you to control the CPU utilization and try not to over-deliver superfluous elements. The arrangement is to make a utilitarian part that will gather all props and reallocate them to different parts."
                    }
                ></SingleBlog>

                <SingleBlog

                    blogQuestion={'What are the different ways to manage a state in a React application?'}
                    blogText={
                        `Local state.
Global state.
Server state.
URL state.`
                    }
                ></SingleBlog>


                <SingleBlog

                    blogQuestion={'When should you use nodejs and when should you use mongodb'}
                    blogText={
                        `The Prototypal Inheritance is an element in javascript used to add strategies and properties in objects. It is a strategy by which an article can acquire the properties and techniques for another item. Generally, to get and set the [[Prototype]] of an item, we use Object. getPrototypeOf and Object.`
                    }
                ></SingleBlog>


                <SingleBlog

                    blogQuestion={'What is a unit test? Why should write unit tests?'}
                    blogText={
                        `Unit testing guarantees that all code fulfills quality guidelines before it's sent. This guarantees a solid designing climate where quality is central. Throughout the span of the item improvement life cycle, unit testing sets aside time and cash, and assists designers with composing better code, all the more productively. `
                    }
                ></SingleBlog>
            </div >
        </div >
    );
};

export default Blogs;