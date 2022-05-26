import React from 'react';
import SingleBlog from './SingleBlog';

const Blogs = () => {

    return (
        <div className='mx-5 lg:mx-10 xl:mx-20'>

            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-1' >



                <SingleBlog
                    blogQuestion={'Difference between javascript and nodejs'}
                    blogText={
                        "Javascript is an execution of ECMAScript, a standard characterizing the programming language.Programs have an build-in interpreter for Javascript, alongside a lot of libraries and a run-time climate for working with website pages.Nodejs is a interpreter and environment for javascript which incorporates a lot of libraries for utilizing javascript as a universally useful programming language, with an accentuation on asynchronicity and non-impeding tasks. Hub really runs a similar mediator as Google Chrome (V8), yet gives an alternate arrangement of libraries and an alternate run-time climate. It likewise incorporates a bundle the executives framework (NPM) and a couple of language augmentations you won't track down norm in programs (for instance modules).So tl; dr - the JS mediator in Google Chrome and the JS translator in Nodejs are basically something similar.The thing that matters is, in a program your ultimate objective is to change stuff in a website page (text, designs, templates, and so forth), in Nodejs it's to run broadly useful code that could do anything from running a web server to controlling documents."
                    }
                ></SingleBlog>

                <SingleBlog

                    blogQuestion={'Differences between sql and nosql databases'}
                    blogText={
                        `SQL databases are a type of system software that supports management, analysis, capturing and querying the structured data in a relational format . A language used to communicate with databases for storage, deletion, updation, insertion and retrieval of data.	SQL databases support Structured Query Languages. NoSQL databases are a type of software that allows to maintain and retrieve structured, unstructured, polymorphic data for different purposes A software to retrieve, store and manage scalability of databasesNonSQL does not have any declarative query language.`
                    }
                ></SingleBlog>


                <SingleBlog

                    blogQuestion={'When should you use nodejs and when should you use mongodb'}
                    blogText={
                        `Node js is basically utilized for non-blocking, event-driven servers, because of its single-threaded nature. It's utilized for conventional sites and back-end API administrations, yet was planned with continuous, push-based models at the top of the priority list.SQL. NoSQL data sets like MongoDB are a decent decision when your information is archive driven and doesn't squeeze into the diagram of a social data set, when you want to oblige huge scope, when you are quickly prototyping, and a couple of other use cases.Jun`
                    }
                ></SingleBlog>


                <SingleBlog

                    blogQuestion={'What is the purpose of jwt and how does it work?'}
                    blogText={
                        `JWT means json web token. it's use for secure APT/Server.JWTs are a decent approach to safely transmitting data between parties since they can be marked, and that implies you should rest assured that the shippers are who they say they are. Also, the design of a JWT permits you to check that the substance hasn't been altered. `
                    }
                ></SingleBlog>
            </div >
        </div >
    );
};

export default Blogs;